import { MobileMenuCloneProvider } from "@/components/layout/MobileMenuCloneContext";
import BackToTop from "@/components/elements/BackToTopServer";
import ParallaxSceneEffect from "@/components/effects/ParallaxSceneEffect";
import Footer1 from "@/components/layout/footer/Footer1";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer3 from "@/components/layout/footer/Footer3";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer5 from "@/components/layout/footer/Footer5";
import Header1 from "@/components/layout/header/Header1";
import Header2 from "@/components/layout/header/Header2";
import Header3 from "@/components/layout/header/Header3";
import Header4 from "@/components/layout/header/Header4";
import Header5 from "@/components/layout/header/Header5";
import ServerEffects from "@/components/layout/ServerEffects";

// Header component mapping
const HEADER_COMPONENTS = {
    1: Header1,
    2: Header2,
    3: Header3,
    4: Header4,
    5: Header5,
} as const;

// Footer component mapping
const FOOTER_COMPONENTS = {
    1: Footer1,
    2: Footer2,
    3: Footer3,
    4: Footer4,
    5: Footer5,
} as const;

// Header component with proper composition
function Header({ style }: { style?: number }) {
    if (!style) {
        return <Header1 />;
    }

    const HeaderComponent = HEADER_COMPONENTS[style as keyof typeof HEADER_COMPONENTS];
    return HeaderComponent ? <HeaderComponent /> : <Header1 />;
}

// Footer component with proper composition
function Footer({ style }: { style?: number }) {
    if (!style) {
        return <Footer1 />;
    }

    const FooterComponent = FOOTER_COMPONENTS[style as keyof typeof FOOTER_COMPONENTS];
    return FooterComponent ? <FooterComponent /> : <Footer1 />;
}

// Main layout interface
interface LayoutProps {
    children?: React.ReactNode;
    headerStyle?: number;
    footerStyle?: number;
}

// Refactored Layout component using composition
export default function Layout({ children, headerStyle, footerStyle }: LayoutProps) {
    return (
        <MobileMenuCloneProvider>
            <ServerEffects />
            <div id="top" />
            <Header style={headerStyle} />
            <div id="smooth-wrapper">
                <div id="smooth-content" className="z-index-3">
                    <main className="bg-neutral-0">{children}</main>
                    {footerStyle === 2 && (
                        <div className="footer-placeholder" aria-hidden="true" />
                    )}
                    {footerStyle !== 2 && (
                        <Footer style={footerStyle} />
                    )}
                </div>
                {
                    footerStyle === 2 && (
                        <>
                            <Footer style={footerStyle} />
                        </>
                    )
                }
            </div>
            <ParallaxSceneEffect />
            <BackToTop />
        </MobileMenuCloneProvider>
    );
}
