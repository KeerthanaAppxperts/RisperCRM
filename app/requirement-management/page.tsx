import Layout from "@/components/layout/Layout";
import Section1 from "@/components//sections/home-6/Section14";
import Section2 from "@/components/sections/home-2/Section15";
import ServiceImageHoverEffect from "@/components/effects/ServiceImageHoverEffect";

export default function Portfolio1Page() {
    return (
      <Layout headerStyle={2} footerStyle={2}>
        <ServiceImageHoverEffect>
          <Section1 />
        </ServiceImageHoverEffect>
        <Section2 />
      </Layout>
    );
}
