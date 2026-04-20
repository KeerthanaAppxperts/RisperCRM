import Image from "next/image";

const PLAY_SVG = (
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="currentColor" />
    </svg>
);

export default function Section11() {
    return (
        <div className="container-2200">
            <section className="home-2-section-11 postbox-scroll-zoom mx-lg-3 mx-2 mt-50 align-items-center justify-content-center">
                <div className="postbox-item-wrap">
                    <div className="postbox-item">
                        <div className="postbox-thumb p-relative">
                            <Image
                                className="postbox-scroll-zoom-img img-cover"
                                src="/assets/imgs/pages/bg-img-2.webp"
                                alt="orisa"
                                width={1900}
                                height={900}
                            />
                            <div className="postbox-play-btn postbox-scroll-zoom-play z-index-1 d-flex align-items-center justify-content-center gap-3">
                                <h1 className="text-white d-none d-md-flex">Play</h1>
                                <a
                                    className="popup-video"
                                    href="https://www.youtube.com/watch?v=VCPGMjCW0is"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-white">{PLAY_SVG}</span>
                                </a>
                                <h1 className="text-white d-none d-md-flex">showrell</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
