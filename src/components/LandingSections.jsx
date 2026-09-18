import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedServices from "./FeaturedServices";

const features = [
  {
    icon: "bi-calculator",
    title: "Tally Customization & Integration",
    text: "Custom TDL modules, Tally Prime enhancements, reporting tools, voucher controls, invoice formats, security modules, and API integrations designed for your business process.",
  },
  {
    icon: "bi-code-slash",
    title: "Custom Software Development",
    text: "Web applications, mobile apps, CRM systems, ERP modules, dashboards, support systems, and automation tools built around your workflow.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Business Process Automation",
    text: "Reduce repetitive work, manual data entry, follow-ups, reporting delays, and disconnected workflows with smart automation.",
  },
  {
    icon: "bi-phone",
    title: "Support & Implementation",
    text: "We support clients through requirement study, development, testing, deployment, training, and continuous improvement.",
  },
  {
    icon: "bi-diagram-3",
    title: "System Integration",
    text: "Practical connections between your tools, data, teams, and business processes including Tally, CRM, portals, and third-party services.",
  },
  {
    icon: "bi-headset",
    title: "Industry Solutions",
    text: "Specialized modules for education, healthcare, retail, garment, petrol pump, APMC/ADAT, jewellery, dairy, distribution, and manufacturing.",
  },
];

const workflow = [
  ["01", "Requirement Study", "We understand your business process, current software usage, pain points, reporting needs, users, controls, and expected output."],
  ["02", "Logic & Schema Planning", "We prepare the business logic, data structure, module flow, user roles, reports, and integration requirements before development starts."],
  ["03", "Development", "Our development team builds the TDL module, Tally customization, web application, mobile app, API, or integration as per the approved scope."],
  ["04", "Implementation & Support", "We deploy the solution, configure it for your workflow, train your team, and continue to support fixes, improvements, and enhancements."],
];

const useCases = [
  ["bi-building", "Education", "For schools and colleges: admissions, student records, fees, documents, certificates, transport, staff payroll, and reporting."],
  ["bi-heart-pulse", "Healthcare", "For hospitals and clinics: OPD/IPD billing, patient records, bed management, doctor management, receipts, and discharge summaries."],
  ["bi-shop", "Retail & Garment", "For retail and garment businesses: POS billing, barcode/QR code, size-colour tracking, MRP, wholesale rates, and inventory management."],
  ["bi-fuel-pump", "Petrol Pump & ADAT", "For petrol pumps and APMC/ADAT: daily rate updates, tank tracking, farmer purchase entry, commission, deductions, and settlement workflows."],
];

const integrations = [
  ["bi-calculator", "Tally"],
  ["bi-diagram-3", "CRM"],
  ["bi-whatsapp", "WhatsApp"],
  ["bi-envelope", "Email"],
  ["bi-braces", "API"],
  ["bi-cloud", "Cloud"],
];

const faqs = [
  [
    "Can FlowupS customize Tally Prime as per our business process?",
    "Yes. FlowupS Technologies develops custom TDL modules and Tally Prime customizations for billing, inventory, reports, security, approvals, industry workflows, and integrations.",
  ],
  [
    "Can you integrate Tally with our existing software?",
    "Yes. We can integrate Tally with CRM, ERP, mobile apps, web portals, e-commerce platforms, POS systems, payroll software, inventory tools, and custom applications using suitable integration methods.",
  ],
  [
    "Do you build custom software from scratch?",
    "Yes. We develop custom web applications, mobile applications, dashboards, CRM systems, ERP modules, support systems, and workflow-based business software.",
  ],
  [
    "Do you provide support after implementation?",
    "Yes. We provide support for training, bug fixing, enhancements, report changes, Tally customization changes, integration monitoring, and future improvements.",
  ],
  [
    "How do we get started?",
    "Book a discovery call. We will understand your workflow, identify priorities, and outline the right next steps.",
  ],
];

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Flowups CallDesk dashboard preview">
      <div className="preview-window-bar">
        <span />
        <span />
        <span />
        <small>Flowups CallDesk</small>
      </div>
      <div className="preview-layout">
        <aside className="preview-sidebar">
          <div className="preview-brand-mark">F</div>
          {["bi-grid", "bi-telephone", "bi-people", "bi-bar-chart"].map((icon, index) => (
            <i className={`bi ${icon} ${index === 1 ? "active" : ""}`} key={icon} />
          ))}
        </aside>
        <div className="preview-main">
          <div className="preview-heading">
            <div>
              <small>Today</small>
              <strong>Call overview</strong>
            </div>
            <span className="preview-avatar">AR</span>
          </div>
          <div className="preview-metrics">
            <div><span>New leads</span><strong>24</strong><small>+8 today</small></div>
            <div><span>Follow-ups</span><strong>18</strong><small>6 priority</small></div>
            <div><span>Connected</span><strong>72%</strong><small>Live status</small></div>
          </div>
          <div className="preview-grid">
            <div className="preview-chart-card">
              <div className="preview-card-title"><strong>Weekly activity</strong><span>7 days</span></div>
              <div className="preview-bars">
                {[38, 58, 45, 74, 64, 88, 72].map((height, index) => (
                  <i style={{ height: `${height}%` }} key={`${height}-${index}`} />
                ))}
              </div>
            </div>
            <div className="preview-list-card">
              <strong>Next follow-ups</strong>
              {["New enquiry", "Demo planned", "Proposal review"].map((item, index) => (
                <div key={item}>
                  <span className={`preview-status status-${index + 1}`} />
                  <p><b>{item}</b><small>{index + 1}:30 PM</small></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const productScreens = [
  {
    label: "Dashboard",
    title: "A clear operational overview",
    description: "See tickets, workload, users, companies, and progress from one focused dashboard.",
    image: "/images/flowups-dashboard.png",
  },
  {
    label: "Ticket Table",
    title: "Every ticket, easy to review",
    description: "Search, filter, assign, prioritize, and review customer tickets in a structured table.",
    image: "/images/flowups-ticket-table.png",
  },
  {
    label: "Kanban Board",
    title: "Work moves visibly",
    description: "Track open, in-progress, pending, and closed work through a clean Kanban workflow.",
    image: "/images/flowups-ticket-kanban.png",
  },
];

function ProductScreenshotShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = productScreens[activeScreen];

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % productScreens.length);
    }, 3800);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="product-screenshot-showcase">
      <div className="product-screen-stack" aria-label="Flowups CallDesk product screenshots">
        {productScreens.map((item, index) => (
          <div
            className={`product-screen-frame ${activeScreen === index ? "is-active" : "is-hidden"}`}
            aria-hidden={activeScreen !== index}
            key={item.label}
          >
            <img src={item.image} alt={activeScreen === index ? `Flowups CallDesk ${item.label} screen` : ""} />
          </div>
        ))}
        <div className="product-screen-progress" aria-hidden="true">
          {productScreens.map((item, index) => (
            <span className={activeScreen === index ? "active" : ""} key={item.label} />
          ))}
        </div>
      </div>

      <div className="product-screen-caption" key={screen.label}>
        <div>
          <span>Product view</span>
          <h3>{screen.title}</h3>
        </div>
        <p>{screen.description}</p>
      </div>
    </div>
  );
}

const sathiScreens = [
  {
    image: "/images/sathi-connect-dashboard.png",
    label: "Integration dashboard",
  },
  {
    image: "/images/sathi-connect-tally.png",
    label: "SATHI to Tally workspace",
  },
];

function SathiScreenshotShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % sathiScreens.length);
    }, 4200);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <div className="sathi-screen-showcase" aria-label="Sathi Connect product screenshots">
      <div className="sathi-screen-stack">
        {sathiScreens.map((screen, index) => (
          <div
            className={`sathi-screen-frame ${activeScreen === index ? "is-active" : "is-hidden"}`}
            aria-hidden={activeScreen !== index}
            key={screen.image}
          >
            <img src={screen.image} alt={activeScreen === index ? `Sathi Connect ${screen.label}` : ""} />
          </div>
        ))}
        <div className="sathi-screen-label">
          <span>Live product view</span>
          <strong>{sathiScreens[activeScreen].label}</strong>
        </div>
        <div className="product-screen-progress" aria-hidden="true">
          {sathiScreens.map((screen, index) => (
            <span className={activeScreen === index ? "active" : ""} key={screen.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingSections() {
  return (
    <>
      <section className="home-trust-strip">
        <div className="container">
          <p>Tally Customization & Software Development Solutions</p>
          <div>
            {[
              ["bi-calculator", "Tally Solutions"],
              ["bi-code-slash", "Software Development"],
              ["bi-diagram-3", "API Integration"],
              ["bi-headset", "Support & Training"],
            ].map(([icon, label]) => (
              <span key={label}><i className={`bi ${icon}`} />{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="product-about section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="home-eyebrow">FlowupS Technologies Pvt. Ltd.</span>
              <h2>Tally and Software Solutions Built Around Your Business</h2>
              <p className="product-about-lead">
                FlowupS Technologies works across Tally customization and custom software development. 
                Whether you need a TDL module, Tally integration, support ticket system, mobile app, 
                dashboard, or complete business workflow software, our team can understand your requirement 
                and build a practical solution.
              </p>
              <div className="product-checks">
                <span><i className="bi bi-check2-circle" />12+ years of Tally expertise</span>
                <span><i className="bi bi-check2-circle" />Custom software for real workflows</span>
                <span><i className="bi bi-check2-circle" />End-to-end implementation support</span>
              </div>
              <div className="company-about-meta">
                <div><strong>02</strong><span>Products<br />CallDesk & Sathi Connect</span></div>
                <div><strong>50+</strong><span>Tally Modules<br />Across Industries</span></div>
              </div>
              <Link className="home-primary-link" to="/about_us">
                Know our company <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="company-portfolio-panel">
                <div className="company-panel-head"><span>Company portfolio</span><strong>Tally + Software Solutions</strong></div>
                <span className="company-product-pill pill-calldesk"><i className="bi bi-telephone" />CallDesk</span>
                <span className="company-product-pill pill-sathi"><i className="bi bi-arrow-left-right" />Sathi Connect</span>
                <div className="company-panel-core"><span>FlowupS</span><small>Technologies Pvt. Ltd.</small></div>
                <div className="company-panel-items">
                  <div><i className="bi bi-calculator" /><span>Tally</span><strong>Customization<br />TDL Modules</strong></div>
                  <div><i className="bi bi-code-square" /><span>Software</span><strong>Web & Mobile<br />Applications</strong></div>
                  <div><i className="bi bi-intersect" /><span>Integration</span><strong>API &<br />Data Sync</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-products section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Products</h2>
          <p>Purpose-built products from FlowupS Technologies</p>
        </div>
        <div className="container">
          <article className="company-product company-product-calldesk" data-aos="fade-up">
            <div className="company-product-copy">
              <span className="home-eyebrow">Product 01</span>
              <h3>CallDesk - Support Ticket Management System</h3>
              <p>A focused workspace for customer support, service requests, complaints, and team follow-ups. Manage tickets, priorities, assignments, and performance reports from one structured platform.</p>
              <ul className="product-feature-list">
                <li><i className="bi bi-check-circle" />Ticket creation and assignment</li>
                <li><i className="bi bi-check-circle" />Priority and status tracking</li>
                <li><i className="bi bi-check-circle" />Customer communication history</li>
                <li><i className="bi bi-check-circle" />Team workload visibility</li>
              </ul>
              <Link to="/contact-us" className="home-primary-link">Explore CallDesk <i className="bi bi-arrow-right" /></Link>
            </div>
            <ProductScreenshotShowcase />
          </article>

          <article className="company-product company-product-sathi" data-aos="fade-up">
            <SathiScreenshotShowcase />
            <div className="company-product-copy">
              <span className="home-eyebrow">Product 02</span>
              <h3>Sathi Connect - Seeds Portal to Tally Prime Bridge</h3>
              <p>A connectivity bridge between the Seeds Portal and Tally Prime. Reduce manual entry by transferring relevant data between the portal and Tally in a structured and reliable way.</p>
              <ul className="product-feature-list">
                <li><i className="bi bi-check-circle" />Seeds Portal to Tally connectivity</li>
                <li><i className="bi bi-check-circle" />Order, bill, and data mapping</li>
                <li><i className="bi bi-check-circle" />Reduced manual data entry</li>
                <li><i className="bi bi-check-circle" />Improved accuracy in Tally posting</li>
              </ul>
              <Link to="/contact-us" className="home-primary-link">Discover Sathi Connect <i className="bi bi-arrow-right" /></Link>
            </div>
          </article>
        </div>
      </section>

      <section id="features" className="home-features section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Capabilities</h2>
          <p>From Tally customization to full software development, FlowupS builds what your business needs</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {features.map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={feature.title} data-aos="fade-up" data-aos-delay={index * 60}>
                <article className="home-feature-card h-100">
                  <div><i className={`bi ${feature.icon}`} /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedServices />

      <section className="home-workflow section dark-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>How We Work</h2>
          <p>Our process is designed to keep the solution practical, clear, and aligned with your business workflow</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {workflow.map(([number, title, text], index) => (
              <div className="col-lg-3 col-md-6" key={number} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="home-workflow-step h-100">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-use-cases section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Industry Solutions</h2>
          <p>Specialized Tally modules and software for different business verticals</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {useCases.map(([icon, title, text], index) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="zoom-in" data-aos-delay={index * 70}>
                <article className="home-use-card h-100">
                  <i className={`bi ${icon}`} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-integrations section light-background">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="home-eyebrow">Connected ecosystem</span>
              <h2>Tally Integration & API Connectivity</h2>
              <p>
                Connect Tally Prime with your existing software including CRM, ERP, mobile apps, 
                web portals, e-commerce platforms, POS systems, and third-party services. We build 
                practical integrations that reduce manual work and improve data accuracy.
              </p>
              <Link to="/contact-us" className="home-primary-link">
                Discuss an integration <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="integration-grid">
                {integrations.map(([icon, label]) => (
                  <div key={label}><i className={`bi ${icon}`} /><span>{label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-benefits section">
        <div className="container">
          <div className="home-benefit-band" data-aos="fade-up">
            {[
              ["bi-lightbulb", "Business-First Approach", "We begin with your operating need, not a predetermined technology. Every solution starts with understanding your workflow."],
              ["bi-lightning-charge", "Practical Delivery", "Clear priorities keep implementation efficient. We build what your business actually needs, not generic features."],
              ["bi-sliders", "Flexible Solutions", "Products and systems adapt to different workflows and business models. From Tally modules to full software."],
              ["bi-life-preserver", "Ongoing Support", "Get help through setup, training, adoption, and improvement. We stay involved after delivery."],
            ].map(([icon, title, text]) => (
              <div key={title}><i className={`bi ${icon}`} /><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-proof section dark-background">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-end gy-5">
            <div className="col-lg-7">
              <span className="home-eyebrow">Why Businesses Choose FlowupS</span>
              <h2>Practical Tally and software solutions<br />for real business workflows.</h2>
            </div>
            <div className="col-lg-5">
              <p>
                FlowupS Technologies combines Tally expertise, software development capability, 
                practical business understanding, and strong client coordination to deliver 
                solutions that are technically correct and useful in daily operations.
              </p>
            </div>
          </div>
          <div className="home-proof-grid">
            <div><span>01</span><strong>Tally & Software Under One Roof</strong><p>From TDL modules to custom web and mobile applications, we handle everything in-house.</p></div>
            <div><span>02</span><strong>Deep Business Understanding</strong><p>We study your process, pain points, and goals before writing a single line of code.</p></div>
            <div><span>03</span><strong>Long-Term Partnership</strong><p>We provide support for training, enhancements, report changes, and future improvements.</p></div>
          </div>
        </div>
      </section>

      <section className="home-faq section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="fade-right">
              <span className="home-eyebrow">Frequently asked questions</span>
              <h2>Common questions about Tally and software solutions.</h2>
              <p>Need something more specific? Our team can walk through your workflow with you.</p>
              <Link to="/contact-us" className="home-primary-link">Ask your question <i className="bi bi-arrow-right" /></Link>
            </div>
            <div className="col-lg-8" data-aos="fade-left">
              <div className="faq-list">
                {faqs.map(([question, answer], index) => (
                  <details key={question} open={index === 0}>
                    <summary>{question}<i className="bi bi-plus-lg" /></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-final-cta section dark-background">
        <div className="container text-center" data-aos="zoom-in">
          <span className="home-eyebrow">Ready to transform your business workflow?</span>
          <h2>Let&apos;s build the right technology around your goals.</h2>
          <p>From Tally customization to custom software development, FlowupS Technologies is ready to understand your requirement and deliver a practical solution.</p>
          <div>
            <Link className="home-cta-primary" to="/contact-us">Start a conversation <i className="bi bi-arrow-up-right" /></Link>
            <Link className="home-cta-secondary" to="/services">Explore services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingSections;
