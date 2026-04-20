import Link from "next/link";
import { MainMenuRootList } from "@/components/layout/MobileMenuCloneContext";

export default function MainMenuServer() {

    return (
      <MainMenuRootList>
        <li className="hasnot-dropdown">
          <Link href="/">Home</Link>
          {/* <ul className="at-submenu submenu"> */}
          {/* <li><Link href="/">Creative agency</Link></li> */}
          {/* <li><Link href="/index-2">Digital agency</Link></li>
                    <li><Link href="/index-3">Marketing agency</Link></li>
                    <li><Link href="/index-4">AI & Tech Agency</Link></li>
                    <li><Link href="/index-5">Personal Creative</Link></li> */}
          {/* </ul> */}
        </li>
        <li className="has-dropdown">
          <Link href="#">Features</Link>
          <div className="at-submenu submenu">
            {/* <div className="row"> */}
            {/* <div className="col-xl-4">
                            <div className="at-megamenu-box">
                                <div className="at-megamenu-title-wrap">
                                    <span className="at-megamenu-title">About Pages </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <ul>
                                    <li><Link href="/about-1">About 01</Link></li>
                                    <li><Link href="/about-2">About 02</Link></li>
                                    <li><Link href="/about-3">About 03</Link></li>
                                </ul>
                            </div>
                        </div> */}
            {/* <div className="col-xl-4"> */}
            <div className="at-megamenu-box">
              <div className="at-megamenu-title-wrap">
                <span className="at-megamenu-title">Service Pages </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <ul>
                <li>
                  <Link href="/client-portal">Client Portal</Link>
                </li>
                <li>
                  <Link href="/employee-portal">Employee Portal</Link>
                </li>
                <li>
                  <Link href="/sales-accounts">Sales and Accounts</Link>
                </li>
                <li>
                  <Link href="/leads-deals">Leads and Deals</Link>
                </li>
                <li>
                  <Link href="/projects-tasks">Projects and Tasks</Link>
                </li>
                <li>
                  <Link href="/meetings-chats">Meetings & Chats</Link>
                </li>
                <li>
                  <Link href="/customer-support">Customer Support</Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
            {/* <div className="col-xl-4">
                <div className="at-megamenu-box">
                  <div className="at-megamenu-title-wrap">
                    <span className="at-megamenu-title">Other Pages </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <ul>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/coming-soon">Coming Soon</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </li>
        <li className="has-dropdown">
          <Link href="#">ADD On</Link>
          <ul className="at-submenu submenu">
            <li>
              <Link href="/assets-management">Assets Management</Link>
            </li>
            <li>
              <Link href="/requirement-management">Recruitment Management</Link>
            </li>
            {/* <li>
              <Link href="/portfolio-3">Portfolio 03</Link>
            </li>
            <li>
              <Link href="/portfolio-4">Portfolio 04</Link>
            </li>
            <li>
              <Link href="/portfolio-5">Portfolio 05</Link>
            </li>
            <li>
              <Link href="/portfolio-6">Portfolio 06</Link>
            </li>
            <li>
              <Link href="/portfolio-details-1">Portfolio Details 01</Link>
            </li>
            <li>
              <Link href="/portfolio-details-2">Portfolio Details 02</Link>
            </li> */}
          </ul>
        </li>
        <li className="hasnot-dropdown">
          <Link href="/demo-vedio">Demo Video</Link>
          {/* <ul className="at-submenu submenu">
            <li>
              <Link href="/product-archive">Products Listing</Link>
            </li>
            <li>
              <Link href="/product-details">Product Details</Link>
            </li>
            <li>
              <Link href="/product-cart">Cart</Link>
            </li>
            <li>
              <Link href="/product-checkout">Checkout</Link>
            </li>
          </ul> */}
        </li>
        <li className="hasnot-dropdown">
          <Link href="/archive-1">Blogs</Link>
          {/* <ul className="at-submenu submenu">
            <li>
              <Link href="/archive-1">Blog 01</Link>
            </li>
            <li>
              <Link href="/archive-2">Blog 02</Link>
            </li>
            <li>
              <Link href="/archive-3">Blog 03</Link>
            </li>
            <li>
              <Link href="/archive-4">Blog 04</Link>
            </li>
            <li>
              <Link href="/blog-details">Post Details</Link>
            </li>
          </ul> */}
        </li>
        <li className="hasnot-dropdown">
          <Link href="/contact-1">Contact Us</Link>
          {/* <ul className="at-submenu submenu">
            <li>
              <Link href="/contact-1">Contact 01</Link>
            </li>
            <li>
              <Link href="/contact-2">Contact 02</Link>
            </li>
          </ul> */}
        </li>
      </MainMenuRootList>
    );
}
