"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const BRANDS = [
  { src: "/assets/imgs/template/logo/Client-logo-01.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-02.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-03.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-04.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-05.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-06.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-07.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-08.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-09.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-10.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-11.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-12.png", alt: "logo-brand" },
  { src: "/assets/imgs/template/logo/Client-logo-13.png", alt: "logo-brand" },
];

export default function Section3() {
    return (
      <section>
        <div className="carouselTicker carouselTicker-right position-relative z-1">
          <Marquee
            speed={40}
            direction="right"
            pauseOnHover={false}
            gradient={false}
            gradientWidth={0}
            className="carouselTicker__marquee"
          >
            <ul
              className="carouselTicker__list scroll-move-right"
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                overflow: "visible",
                gap: "0 2rem",
              }}
            >
              {BRANDS.map((brand, i) => (
                <li
                  key={i}
                  className="carouselTicker__item"
                  style={{ margin: "0 1.5rem", float: "none" }}
                >
                  <div className="brand-item dark-mode-invert">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={200}
                      height={65}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </section>
    );
}
