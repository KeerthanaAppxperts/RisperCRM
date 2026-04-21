import Image from "next/image";
import Link from "next/link";
import OdometerCounter from "@/components/elements/OdometerCounter";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const SERVICE_IMAGES = [
    "/assets/Image/Require1.jpg",
    "/assets/Image/Require2.jpg",
    "/assets/Image/Require3.avif",
    "/assets/Image/Require4.jpg",
    "/assets/Image/Require5.jpg",
    "/assets/Image/Require6.jpg",
];

// const SERVICES = [
//     { num: "01", title: "UI/UX Design", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-5-sm.webp" },
//     { num: "02", title: "Branding", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-6-sm.webp" },
//     { num: "03", title: "Development", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-7-sm.webp" },
//     { num: "04", title: "3D Animations", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-8-sm.webp" },
//     { num: "05", title: "Marketing", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-9-sm.webp" },
//     { num: "06", title: "Graphics", text: "We help you build successful products by understanding your market and users.", thumb: "/assets/imgs/pages/img-10-sm.webp" },
// ];
const SERVICES = [
  {
    num: "01",
    title: "1-Click Job Posting",
    text: "Post job openings to your website and job boards like Indeed and LinkedIn in seconds with a single click.",
    thumb: "/assets/Image/Require1.jpg",
  },
  {
    num: "02",
    title: "Central Application Hub",
    text: "Collect and manage all resumes and applications in one place so you never lose a candidate.",
    thumb: "/assets/Image/Require2.jpg",
  },
  {
    num: "03",
    title: "Smart Candidate Database",
    text: "Store, organize, and tag candidates to quickly search and filter applicants based on skills and experience.",
    thumb: "/assets/Image/Require3.avif",
  },
  {
    num: "04",
    title: "Automated Email Notifications",
    text: "Send automatic alerts for new applications, interview reminders, and offer updates to keep everyone informed.",
    thumb: "/assets/Image/Require4.jpg",
  },
  {
    num: "05",
    title: "Instant Offer Letters",
    text: "Generate and send professional offer letters instantly with built-in e-signature support.",
    thumb: "/assets/Image/Require5.jpg",
  },
  {
    num: "06",
    title: "Visual Hiring Pipeline",
    text: "Manage candidates with a drag-and-drop pipeline from applied to hired or rejected for better hiring visibility.",
    thumb: "/assets/Image/Require6.jpg",
  },
];

export default function Section4() {
    return (
      <div className="at-service-area at-panel-pin-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                  <span className="text-uppercase">
                    <span className="text-1">Requirement Management</span>
                    <span className="text-2">Requirement Management</span>
                  </span>
                  <i>
                    {ARROW_SVG}
                    {ARROW_SVG}
                  </i>
                </span>
                {/* <span className="fs-font-md fw-500 text-decoration-underline">
                  Since 2012
                </span> */}
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-xl-4 mb-40">
              <div className="at-service-content mr-60 mt-20">
                <div className="at-service-sales-wrap at-panel-pin fix p-relative">
                  <div className="at-service-img-wrapper image-container">
                    {SERVICE_IMAGES.map((src, i) => (
                      <div key={i} className="hover-image">
                        <Image
                          className="thumb"
                          src={src}
                          alt="Service Image"
                          width={800}
                          height={600}
                        />
                      </div>
                    ))}
                  </div>
                  <h5 className="fw-600 mb-0 mt-10">
                    <OdometerCounter count={201} suffix="+" />
                  </h5>
                  <span className="fz-font-lg neutral-500 fw-500">
                    Completed projects
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 ms-auto col-lg-8 col-xl-8 mb-40">
              <div className="at-service-list-wrap">
                {SERVICES.map((s) => (
                  <Link key={s.num} href="/services-details">
                    <div className="at-service-item service-item">
                      <div className="count">
                        <span className="number">[{s.num}]</span>
                      </div>
                      <div className="content">
                        <h1 className="title">{s.title}</h1>
                        <p className="text">
                          {/* We help you build successful products by <br /> understanding your market and users. */}
                          {s.text}
                        </p>
                      </div>
                      <div className="thumb anim-zoomin">
                        <Image
                          src={s.thumb}
                          alt="orisa"
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="at-service-btn pt-30">
                  <Link className="at-btn" href="/contact-1">
                    <span>
                      <span className="text-1">Book Demo</span>
                      <span className="text-2">Book Demo</span>
                    </span>
                    <i>
                      {ARROW_SVG}
                      {ARROW_SVG}
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
