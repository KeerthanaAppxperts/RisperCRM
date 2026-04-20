import Image from "next/image";
import RevealText from "@/components/effects/RevealText";
import OdometerCounter from "@/components/elements/OdometerCounter";

// About 3 Section 6 - My Skills / Tech Stack

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SKILL_CARDS = [
    {
        thumb: "/assets/imgs/pages/img-148.webp",
        title: "Languages",
        tags: [
            { icon: "/assets/imgs/icons/logo-1.svg", label: "Python" },
            { icon: "/assets/imgs/icons/logo-2.svg", label: "C++" },
            { icon: "/assets/imgs/icons/logo-3.svg", label: "JavaScript" },
        ],
        score: 98,
    },
    {
        thumb: "/assets/imgs/pages/img-149.webp",
        title: "Frameworks",
        tags: [
            { icon: "/assets/imgs/icons/logo-4.svg", label: "PyTorch" },
            { icon: "/assets/imgs/icons/logo-5.svg", label: "TensorFlow" },
            { icon: "/assets/imgs/icons/logo-6.svg", label: "Scikit-learn" },
        ],
        score: 96,
    },
    {
        thumb: "/assets/imgs/pages/img-150.webp",
        title: "Data",
        tags: [
            { icon: "/assets/imgs/icons/logo-7.svg", label: "Pandas" },
            { icon: "/assets/imgs/icons/logo-8.svg", label: "NumPy" },
            { icon: "/assets/imgs/icons/logo-9.svg", label: "Spark" },
        ],
        score: 99,
    },
    {
        thumb: "/assets/imgs/pages/img-151.webp",
        title: "MLOps",
        tags: [
            { icon: "/assets/imgs/icons/logo-10.svg", label: "Docker", iconClass: "dark-mode-invert" },
            { icon: "/assets/imgs/icons/logo-11.svg", label: "Kubernetes" },
            { icon: "/assets/imgs/icons/logo-12.svg", label: "MLflow", iconClass: "dark-mode-invert" },
        ],
        score: 82,
    },
    {
        thumb: "/assets/imgs/pages/img-152.webp",
        title: "Cloud",
        tags: [
            { icon: "/assets/imgs/icons/logo-13.svg", label: "AWS" },
            { icon: "/assets/imgs/icons/logo-14.svg", label: "GCP" },
            { icon: "/assets/imgs/icons/logo-15.svg", label: "Azure" },
        ],
        score: 86,
    },
];

export default function Section6() {
    return (
        <section className="sec-6-about pt-120 pb-80 p-relative bg-neutral-50">
            <div className="container p-relative z-1">
                <div className="row pb-100 align-items-lg-end">
                    <div className="col-lg-4">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">my skills</span>
                                <span className="text-2">my skills</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="reveal-text">
                            <RevealText>Tech Stack / Tools</RevealText>
                        </h3>
                    </div>
                    <div className="col-xxl-5 col-lg-7 text-lg-end ms-auto">
                        <h6 className="fw-600 fz-font-lg">
                            I fuse scalable AI architecture, data-driven strategy, and real-world deployment expertise to build reliable intelligent systems.
                        </h6>
                    </div>
                </div>
            </div>
            <div className="container p-relative z-1">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-cards">
                            {SKILL_CARDS.map((card, i) => (
                                <div key={i} className="skill-card scroll-move-up">
                                    <div className="skill-card__thumb">
                                        <Image
                                            className="img-cover"
                                            src={card.thumb}
                                            alt={card.title}
                                            width={400}
                                            height={300}

                                        />
                                    </div>
                                    <h6 className="skill-card__title">{card.title}</h6>
                                    <div className="skill-card__content">
                                        <div className="skill-card__tags">
                                            {card.tags.map((tag, j) => (
                                                <span key={j} className="skill-card__tag">
                                                    <Image
                                                        src={tag.icon}
                                                        alt={tag.label}
                                                        width={24}
                                                        height={24}
                                                        className={`skill-card__tag-icon ${tag.iconClass ?? ""}`.trim()}
                                                    />
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="skill-card__score">
                                        <span className="skill-card__score-value">
                                            <OdometerCounter count={card.score} />
                                        </span>
                                        /100
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
