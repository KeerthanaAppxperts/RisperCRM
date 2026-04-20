"use client";
import { useDataBackground } from "@/util/data-bg";
import useCollapse from "@/util/useCollapse";
import ParallaxEffect from "@/components/effects/ParallaxEffect";
import RevealTextEffect from "@/components/effects/RevealTextEffect";
import AboutSvgEffect from "@/components/effects/AboutSvgEffect";
import PanelPinEffect from "@/components/effects/PanelPinEffect";
import SmoothScrollEffect from "@/components/effects/SmoothScrollEffect";
import ScrollMoveUpEffect from "@/components/effects/ScrollMoveUpEffect";
import ScrollSectionEffects from "@/components/effects/ScrollSectionEffects";
import ScrollRotateMoveEffect from "@/components/effects/ScrollRotateMoveEffect";
import AtBrandScrollEffect from "@/components/effects/AtBrandScrollEffect";
import CardAwardPreviewEffect from "@/components/effects/CardAwardPreviewEffect";
import AtItemAnimeEffect from "@/components/effects/AtItemAnimeEffect";
import useImageHoverEffects from "@/util/ImageHoverEffects";
import FadeAnimEffect from "@/components/effects/FadeAnimEffect";
import ScaleImageScrollEffect from "@/components/effects/ScaleImageScrollEffect";

export default function ClientEffects() {
    useDataBackground();
    useCollapse();
    useImageHoverEffects();
    return (
        <>
            <ParallaxEffect />
            <RevealTextEffect />
            <AboutSvgEffect />
            <PanelPinEffect />
            <SmoothScrollEffect />
            <ScrollMoveUpEffect />
            <ScrollSectionEffects />
            <ScrollRotateMoveEffect />
            <AtBrandScrollEffect />
            <CardAwardPreviewEffect />
            <AtItemAnimeEffect />
            <FadeAnimEffect />
            <ScaleImageScrollEffect />
        </>
    );
}
