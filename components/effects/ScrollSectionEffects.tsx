"use client";

import { useEffect, useRef } from "react";

type Killable = { kill?: () => void };
type ScrollTriggerInstance = Killable & { progress?: number; isActive?: () => boolean };

/**
 * GSAP ScrollTrigger effects:
 * 24. postbox-scroll-zoom: pin .postbox-item, thumb 20% → 100%, play btn fade in at 0.78
 * 32. section-fix: pin section, stack .item (scale + yPercent), sync .active on items + .navigation-active-item
 * 33. section-title-pin: (min-width: 1400px) pin .section-title-pin when not inside .section-fix
 * 51. scroll-section: card stacking for .scroll-section (vertical/horizontal) when not inside .section-fix
 */
export default function ScrollSectionEffects() {
    const killablesRef = useRef<Killable[]>([]);
    const scrollListenersRef = useRef<Array<() => void>>([]);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;

        let mounted = true;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!mounted) return;

            const killables: Killable[] = [];

            // —— 24. postbox-scroll-zoom (pin, thumb 20%→100%, play btn at 0.78) ——
            document.querySelectorAll<HTMLElement>(".postbox-scroll-zoom").forEach((section) => {
                const itemwrap = section.querySelector(".postbox-item");
                const thumb = section.querySelector<HTMLElement>(".postbox-thumb");
                const playBtn = section.querySelector<HTMLElement>(".postbox-scroll-zoom-play");
                if (!thumb || !playBtn || !itemwrap) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: itemwrap,
                        start: "top top",
                        end: "bottom top",
                        pin: true,
                        scrub: 1,
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                    },
                });
                tl.fromTo(
                    thumb,
                    { width: "20%", height: "20%" },
                    { width: "100%", height: "100%", duration: 1, ease: "none" },
                    "<"
                );
                tl.fromTo(
                    playBtn,
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, ease: "none" },
                    0.78
                );
                tl.call(
                    () => section.classList.add("postbox-scroll-zoom-ready"),
                    [],
                    0.78
                );
                const tlWithST = tl as { scrollTrigger?: Killable };
                if (tlWithST.scrollTrigger) killables.push(tlWithST.scrollTrigger);
                killables.push(tl);
            });

            // —— 32. section-fix (pin section-title + stacking cards + active nav) ——
            const sectionFixList = document.querySelectorAll<HTMLElement>(".section-fix");
            sectionFixList.forEach((sectionFix) => {
                const sectionTitlePin = sectionFix.querySelector(".section-title-pin");
                const scrollSectionEl = sectionFix.querySelector<HTMLElement>(
                    ".scroll-section.vertical-section"
                );
                if (!scrollSectionEl || !sectionTitlePin) return;
                const wrapper = scrollSectionEl.querySelector<HTMLElement>(".wrapper");
                if (!wrapper) return;
                const items = wrapper.querySelectorAll<HTMLElement>(".item");
                if (!items.length) return;

                items.forEach((item, index) => {
                    if (index !== 0) gsap.set(item, { yPercent: 100 });
                });

                const scrollDistance = items.length * 50;
                const navList = sectionFix.querySelector(".navigation-active-item");
                const navItems = navList ? Array.from(navList.querySelectorAll<HTMLElement>("li .item")) : [];

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionFix,
                        pin: true,
                        start: "top top",
                        end: () => `+=${scrollDistance}%`,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        onUpdate(self: { progress: number }) {
                            const progress = Math.min(Math.max(self.progress, 0), 0.9999);
                            const index = Math.min(
                                Math.floor(progress * items.length),
                                items.length - 1
                            );
                            items.forEach((el, i) => el.classList.toggle("active", i === index));
                            navItems.forEach((el, i) => el.classList.toggle("active", i === index));
                        },
                    },
                    defaults: { ease: "none", duration: 1 },
                });

                items.forEach((item, index) => {
                    tl.to(item, { scale: 0.9 });
                    if (items[index + 1]) {
                        tl.to(items[index + 1], { yPercent: 0 }, "<");
                    }
                });

                const tlWithST = tl as { scrollTrigger?: ScrollTriggerInstance };
                function updateActiveByProgress() {
                    if (tlWithST.scrollTrigger?.isActive?.()) {
                        const progress = Math.min(
                            Math.max(tlWithST.scrollTrigger.progress ?? 0, 0),
                            0.9999
                        );
                        const index = Math.min(
                            Math.floor(progress * items.length),
                            items.length - 1
                        );
                        items.forEach((el, i) => el.classList.toggle("active", i === index));
                        navItems.forEach((el, i) => el.classList.toggle("active", i === index));
                    }
                }

                (ScrollTrigger as unknown as { addEventListener: (e: string, fn: () => void) => void; removeEventListener: (e: string, fn: () => void) => void }).addEventListener("scroll", updateActiveByProgress);
                scrollListenersRef.current.push(() => {
                    (ScrollTrigger as unknown as { removeEventListener: (e: string, fn: () => void) => void }).removeEventListener("scroll", updateActiveByProgress);
                });

                if (tlWithST.scrollTrigger) killables.push(tlWithST.scrollTrigger);
                killables.push(tl);
            });

            // —— 33. section-title-pin (min-width: 1400px, skip if inside .section-fix) ——
            const mm = gsap.matchMedia();
            mm.add("(min-width: 1400px)", () => {
                const panels = document.querySelectorAll<HTMLElement>(".section-title-pin");
                const tweens: Killable[] = [];
                panels.forEach((section) => {
                    if (!section || section.closest(".section-fix")) return;
                    const tween = gsap.to(section, {
                        scrollTrigger: {
                            trigger: section,
                            pin: section,
                            scrub: 1,
                            start: "top bottom+=200",
                            endTrigger: section.closest("section") ?? document.body,
                            end: "bottom top",
                            pinSpacing: false,
                        },
                    });
                    tweens.push(tween);
                    const st = (tween as { scrollTrigger?: Killable }).scrollTrigger;
                    if (st) tweens.push(st);
                });
                return () => tweens.forEach((k) => k.kill?.());
            });
            killables.push(mm);

            // —— 51. scroll-section card stacking (skip if inside .section-fix) ——
            function initScroll(
                section: HTMLElement,
                items: NodeListOf<HTMLElement>,
                direction: "horizontal" | "vertical"
            ) {
                const itemArr = Array.from(items);
                itemArr.forEach((item, index) => {
                    gsap.set(item, { zIndex: index });
                    if (index !== 0) {
                        gsap.set(
                            item,
                            direction === "horizontal" ? { xPercent: 100 } : { yPercent: 100 }
                        );
                    }
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        start: "top top",
                        end: () => `+=${itemArr.length * 50}%`,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                    defaults: { ease: "none" },
                });

                itemArr.forEach((item, index) => {
                    timeline.to(item, { scale: 0.9 });
                    if (itemArr[index + 1]) {
                        timeline.to(
                            itemArr[index + 1],
                            direction === "horizontal" ? { xPercent: 0 } : { yPercent: 0 },
                            "<"
                        );
                    }
                });

                const timelineWithST = timeline as { scrollTrigger?: Killable };
                if (timelineWithST.scrollTrigger) killables.push(timelineWithST.scrollTrigger);
                killables.push(timeline);
            }

            const scrollSections = document.querySelectorAll<HTMLElement>(".scroll-section");
            scrollSections.forEach((section) => {
                if (section.closest(".section-fix")) return;
                const wrapper = section.querySelector<HTMLElement>(".wrapper");
                const items = wrapper?.querySelectorAll<HTMLElement>(".item");
                if (!items?.length) return;
                const direction = section.classList.contains("horizontal-section")
                    ? "horizontal"
                    : "vertical";
                initScroll(section, items, direction);
            });

            killablesRef.current = killables;
            initialized.current = true;

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", init);
        } else {
            init();
        }

        const onLoad = () => {
            import("gsap/ScrollTrigger").then((mod) => {
                const ScrollTrigger = mod.default;
                if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
            });
        };
        window.addEventListener("load", onLoad);

        return () => {
            mounted = false;
            window.removeEventListener("load", onLoad);
            scrollListenersRef.current.forEach((remove) => remove());
            scrollListenersRef.current = [];
            killablesRef.current.forEach((k) => k.kill?.());
            killablesRef.current = [];
            initialized.current = false;
        };
    }, []);

    return null;
}
