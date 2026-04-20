"use client";

import { useState, useMemo } from "react";
import ArticleCard1 from "@/components/cards/ArticleCard1";
import Pagination from "@/components/elements/Pagination";

// archive-1 section 2 – Latest News with category filter and pagination (8 per page)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ITEMS_PER_PAGE = 8;

type CategoryFilter = "" | "design" | "photography" | "marketing" | "business" | "accounting" | "corporate" | "business setup";

const BLOG_POSTS: Array<{
  category: CategoryFilter;
  classList: string;
  linkPost: string;
  linkAuthor: string;
  img: string;
  title: string;
  author: string;
  date: string;
}> = [
  {
    category: "business",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog1.jpg",
    title: "Streamline Accounting Operations in UAE with Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog2.jpg",
    title:
      "Top 5 Benefits of Using Risper CRM for Business Setup Companies in UAE",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog3.jpg",
    title: "How Risper CRM Simplifies VAT Filing and Tax Compliance in UAE",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog4.jpg",
    title: "Payroll Management Made Easy for UAE Businesses with Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog5.jpg",
    title: "Why UAE Consultants Should Switch to Risper CRM Today",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog6.jpg",
    title: "Centralize Your Client Data: The Risper CRM Advantage",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "corporate",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog7.jpg",
    title: "Boost Productivity with Automated Workflows in Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business setup",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog8.jpg",
    title:
      "Risper CRM for Financial Reporting: Real-Time Insights for UAE Companies",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business setup",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog9.jpg",
    title:
      "Integrating Risper CRM with UAE Client Proposals, Estimates, & Invoices – All in One",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business setup",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog10.jpg",
    title: "How Business Setup Firms in UAE Can Reduce Errors Using Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog11.jpg",
    title: "CRM-Client Relationship Management for UAE Accounting Firms",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business setup",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog12.jpg",
    title: "Business Set up The Role of Risper CRM in UAE Company Formation",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog13.jpg",
    title:
      "Reduce Administrative Overload in UAE Accounting Firms with Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog14.jpg",
    title: "Compliance and Risk Management Made Easy in UAE with Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog15.jpg",
    title: "Why Accounting Firms in UAE Need a Cloud-Based CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business setup",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog16.jpg",
    title: "Automate Client Onboarding for UAE Business Setup Services",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog17.jpg",
    title: "Risper CRM vs Traditional Manual Systems for UAE Businesses",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "business",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog18.jpg",
    title: "How UAE Consultants Can Increase Revenue Using Risper CRM",
    author: "Consultant",
    date: "Sep 1, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog19.jpg",
    title: "Accounting CRM with QuickBooks Integration: Essential 2025 Guide",
    author: "Consultant",
    date: "Nov 15, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog20.jpg",
    title: "Accounting Firm Client Onboarding Software: Comparison Guide 2025",
    author: "Consultant",
    date: "Nov 15, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog21.jpg",
    title: "Accounting Firm CRM with E-Signature: Essential 2025 Buyer's Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog22.jpg",
    title: "Accounting Practice Management Software: Complete 2025 Comparison",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog23.jpg",
    title: "Best Client Portal Software for Accountants: Complete 2025 Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog24.jpg",
    title: "Best CRM for Tax Preparers: Proven Picks and Buying Tips 2025",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog25.jpg",
    title: "Best CRMs for Accounting Firms: The Ultimate 2025 Buyer's Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog26.jpg",
    title: "Best Document Management Software for Accounting Firms: 2025 Picks",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog27.jpg",
    title: "CRM for Bookkeeping Firms: Side-by-Side 2025 Comparison Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog28.jpg",
    title: "Small Accounting Firm Practice Software: Complete 2025 Pricing",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog29.jpg",
    title: "Top Tax Practice Management Software: Expert 2025 Buyer's Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "accounting",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog30.jpg",
    title: "Top Workflow Software for CPA Firms: Essential 2025 Updated Guide",
    author: "Consultant",
    date: "Nov 16, 2025",
  },
  {
    category: "marketing",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog31.png",
    title:
      "Why Dubai Accountants Are Switching to Risper CRM — The #1 CRM Built for Finance Professionals",
    author: "Consultant",
    date: "Apr 10, 2026",
  },
  {
    category: "marketing",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog32.png",
    title:
      "The Best CRM for Chartered Accountants in Abu Dhabi — Why Risper Is the Clear Choice",
    author: "Consultant",
    date: "Apr 10, 2026",
  },
  {
    category: "marketing",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog33.png",
    title:
      "Sharjah Accountants: Here's the CRM That Was Built for You — Introducing Risper",
    author: "Consultant",
    date: "Apr 10, 2026",
  },
  {
    category: "marketing",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog34.png",
    title:
      "Muscat's Accounting Professionals Now Have a CRM Built for Them — Meet Risper",
    author: "Consultant",
    date: "Apr 10, 2026",
  },
  {
    category: "marketing",
    classList: "col-lg-3 col-md-6 col-12",
    linkPost: "/blog-details",
    linkAuthor: "/team-details",
    img: "/assets/Image/Blog35.png",
    title:
      "Saudi Arabia's Accountants Are Modernising Their Practice — Risper CRM Is Leading the Way",
    author: "Consultant",
    date: "Apr 10, 2026",
  },
];

export default function Section2() {
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = useMemo(() => {
        if (!activeFilter) return BLOG_POSTS;
        return BLOG_POSTS.filter((post) => post.category === activeFilter);
    }, [activeFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / ITEMS_PER_PAGE));
    const pageToShow = Math.min(currentPage, totalPages);
    const paginatedPosts = useMemo(() => {
        const start = (pageToShow - 1) * ITEMS_PER_PAGE;
        return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredPosts, pageToShow]);

    const handleFilter = (filter: CategoryFilter) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    return (
        <section className="sec-2-archive-1 overflow-hidden pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2 mb-lg-0 mb-3 mt-3">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Blogs</span>
                                <span className="text-2">Blogs</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    {/* <div className="col-lg-8 ms-auto">
                        <div className="filter-portfolio d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "design" ? " active" : ""}`}
                                data-filter="design"
                                onClick={() => handleFilter(activeFilter === "design" ? "" : "design")}
                            >
                                UI / UX Design
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "photography" ? " active" : ""}`}
                                data-filter="photography"
                                onClick={() =>
                                    handleFilter(activeFilter === "photography" ? "" : "photography")
                                }
                            >
                                Photography
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "marketing" ? " active" : ""}`}
                                data-filter="marketing"
                                onClick={() =>
                                    handleFilter(activeFilter === "marketing" ? "" : "marketing")
                                }
                            >
                                Digital Marketing
                            </button>
                        </div>
                    </div> */}
                    <div className="col-12 pb-50" />
                </div>
                <div className="row">
                    {paginatedPosts.map((post, i) => (
                        <ArticleCard1
                            key={`${post.category}-${post.img}-${i}`}
                            classList={post.classList}
                            category={post.category}
                            linkPost={post.linkPost}
                            linkAuthor={post.linkAuthor}
                            img={post.img}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                        />
                    ))}
                    <div className="col-lg-12">
                        <Pagination
                            classList="d-flex justify-content-center"
                            currentPage={pageToShow}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
