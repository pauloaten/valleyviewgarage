import React from "react";

// ─── Tailwind config note ────────────────────────────────────────────────────
// Add to tailwind.config.js:
//   theme: { extend: { fontFamily: { franklin: ['"Libre Franklin"', ...] } } }
// Add to index.html <head>:
//   <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────────────────────────────────────

const WP = "https://www.valleyviewgarage.co.uk/wp-content/uploads";

const SERVICES = [
  {
    img: `${WP}/sites/8/2017/03/valleyview708-6-300x300.jpg`,
    alt: "Valley View Garage - Fixed price servicing",
    title: "FIXED-PRICE SERVICING",
    desc: "See our fixed price servicing options below.",
  },
  {
    img: `${WP}/sites/8/2017/03/valleyview708-5-300x300.jpg`,
    alt: "Valley View Garage - MOT service bay",
    title: "MOT TEST STATION",
    desc: "Petrol and Diesel vehicles tested.",
  },
  {
    img: `${WP}/sites/8/2017/03/valleyview708-1-300x300.jpg`,
    alt: "Valley View Garage - Vehicle repairs",
    title: "VEHICLE REPAIRS",
    desc: "Modern well-equipped workshop.",
  },
  {
    img: `${WP}/sites/8/2017/03/valleyview708-4-300x300.jpg`,
    alt: "Valley View Garage - Car Sales",
    title: "CARS BOUGHT & SOLD",
    desc: "Quality cars bought & sold. See below for more details.",
  },
];

const PRICING = [
  { name: "INTERIM SERVICE", price: "£ 129.00 *", note: "Inclusive of labour, parts & VAT" },
  { name: "FULL SERVICE", price: "£ 189.00 *", note: "Inclusive of labour, parts & VAT" },
  { name: "MAJOR SERVICE", price: "£ 249.00 *", note: "Inclusive of labour, parts & VAT" },
];

function CallButton({ children = "Call Us: 01761 420212" }) {
  return (
    <a
      href="tel:01761420212"
      className="inline-block rounded-[28px] px-5 py-[10px] text-white text-xl no-underline font-[Arial,sans-serif]"
      style={{ background: "linear-gradient(to bottom, #d93434, #611313)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(to bottom, #3cb0fd, #3498db)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(to bottom, #d93434, #611313)")}
    >
      {children}
    </a>
  );
}

function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-[#132e62] font-bold mt-8 mb-2 first:mt-0 ${className}`}>
      {children}
    </h2>
  );
}

export default function ValleyViewGarage() {
  return (
    <div
      id="page"
      className="relative break-words font-franklin text-[#333]"
      style={{ fontFamily: '"Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif' }}
    >
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header id="masthead" className="relative">
        {/* Hero image */}
        <div>
          <img
            src={`${WP}/sites/8/2017/03/cropped-valleyview-hero-old.jpg`}
            width={2000}
            height={1199}
            alt=""
            srcSet={`
              ${WP}/2017/03/cropped-valleyview-hero-old-300x180.jpg 300w,
              ${WP}/2017/03/cropped-valleyview-hero-old-768x460.jpg 768w,
              ${WP}/2017/03/cropped-valleyview-hero-old-1024x614.jpg 1024w,
              ${WP}/2017/03/cropped-valleyview-hero-old.jpg 2000w
            `}
            sizes="100vw"
            className="w-full h-auto block max-h-[600px] object-cover object-center"
          />
        </div>

        {/* Site branding bar */}
        <div className="bg-white/85 py-6">
          <div className="max-w-[960px] mx-auto px-6">
            <h1
              className="font-bold text-[#132e62] leading-tight"
              style={{ fontSize: "3.25rem" }}
            >
              <a href="/" rel="home" className="text-[#132e62] no-underline">
                Valley View Garage
              </a>
            </h1>
            <p className="text-[#132e62] text-xl mt-2">
              Dunkerton Hill, Peasedown St. John, Bath BA2 8PF | Call Us: 01761 420212
            </p>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────── */}
      <div id="content">
        {/* Panel 1: Services */}
        <article>
          <div className="py-12">
            <div className="max-w-[960px] mx-auto px-6">

              <SectionHeading className="text-2xl">
                Valley View Garage MOT &amp; Test Centre
              </SectionHeading>
              <p className="mb-6">For MOT testing, fixed price servicing, repairs and sales.</p>

              {/* 4-col service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
                {SERVICES.map((s) => (
                  <div
                    key={s.title}
                    className="bg-[#f2f2f2] min-h-[401px] p-[10px]"
                  >
                    <img
                      src={s.img}
                      alt={s.alt}
                      width={300}
                      height={300}
                      className="block mx-auto mb-2 max-w-full h-auto"
                    />
                    <h3 className="text-[#132e62] font-bold pt-[0.1em] text-[1.1rem]">
                      {s.title}
                    </h3>
                    <p className="text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <p className="text-center my-6">
                <CallButton />
              </p>

              {/* Pricing table */}
              <h2 className="text-[#132e62] font-bold text-2xl mt-8 mb-2">
                Fixed Price Servicing
              </h2>
              <table
                className="w-full"
                style={{ border: "2px solid #132e62", borderCollapse: "collapse" }}
              >
                <tbody>
                  {PRICING.map((row, i) => (
                    <tr
                      key={row.name}
                      className={i % 2 === 1 ? "bg-white" : ""}
                      style={{ borderBottom: i < PRICING.length - 1 ? "1px solid #ddd" : "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                    >
                      <td className="px-4 py-2">{row.name}</td>
                      <td className="px-4 py-2">{row.price}</td>
                      <td className="px-4 py-2">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-4">
                Please call us for all combined MOT &amp; Service deals.
                <br />
                * These costs are applicable for most 4-cylinder makes and models. A supplement may
                be added for specialist oils and/or parts where appropriate.
              </p>

              <p className="text-center my-6">
                <CallButton />
              </p>

              {/* Icon grid */}
              <p>
                <img
                  src={`${WP}/sites/8/2017/03/vview-icon-grid.jpg`}
                  alt=""
                  width={1576}
                  height={614}
                  srcSet={`
                    ${WP}/2017/03/vview-icon-grid-300x117.jpg 300w,
                    ${WP}/2017/03/vview-icon-grid-768x299.jpg 768w,
                    ${WP}/2017/03/vview-icon-grid-1024x399.jpg 1024w,
                    ${WP}/2017/03/vview-icon-grid.jpg 1576w
                  `}
                  sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, 580px"
                  className="block mx-auto max-w-full h-auto"
                />
              </p>

              {/* Quality cars */}
              <h2
                className="text-[#132e62] font-bold mt-8 mb-2"
                style={{ fontSize: "3.25rem" }}
              >
                Quality Cars Bought &amp; Sold
              </h2>
              <p>
                Looking to sell your car? Call us with your registration, make and model and
                we&apos;ll provide a valuation over the phone (all final valuations subject to
                inspection at our premises).
              </p>
              <p className="text-center my-6">
                <CallButton />
              </p>

            </div>
          </div>
        </article>

        {/* Panel 2: Contact — grey background */}
        <article id="panel1" className="bg-[#f2f2f2]">
          <div className="py-12">
            <div className="max-w-[960px] mx-auto px-6">

              <h2 className="text-[#132e62] font-bold text-2xl mb-4">Contact Us</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Address */}
                <div>
                  <p>
                    <strong>Valley View Garage</strong>
                    <br />
                    Dunkerton Hill
                    <br />
                    Peasedown St. John
                    <br />
                    Bath
                    <br />
                    Somerset
                    <br />
                    BA2 8PF
                  </p>
                </div>
                {/* Contact details */}
                <div>
                  <p>
                    <strong>Telephone</strong>:{" "}
                    <a href="tel:01761420212" className="text-[#132e62]">
                      01761 420212
                    </a>
                    <br />
                    <strong>Email</strong>:{" "}
                    <a href="mailto:info@valleyviewgarage.co.uk" className="text-[#132e62]">
                      info@valleyviewgarage.co.uk
                    </a>
                  </p>
                  <p>
                    <strong>Opening Times</strong>
                    <br />
                    Mon &ndash; Fri 8:00am &ndash; 5:00pm
                    <br />
                    Saturday mornings &ndash; by appointment
                    <br />
                    Special thanks to Cleevewood Accountancy
                    <br />
                    &ndash; for all your accountancy needs.
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <iframe
                  loading="lazy"
                  width="100%"
                  height="350"
                  style={{ border: 0, display: "block" }}
                  src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=ba2+8pf(Valley+View+Garage)&ie=UTF8&z=12&t=m&iwloc=near&output=embed"
                  scrolling="no"
                  title="Valley View Garage location map"
                />
              </div>

            </div>
          </div>
        </article>

      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer id="colophon" className="border-t border-gray-200 py-6">
        <div className="max-w-[960px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          <span>&copy; Valley View Garage. All Rights Reserved.</span>
          <a
            href="http://pcaWeb.io"
            target="_blank"
            rel="noopener"
            title="website design by pcaWeb.io"
            className="text-[#132e62] no-underline hover:underline"
          >
            Website Design By <em>pca</em>
            <strong>Web</strong>
          </a>
        </div>
      </footer>

    </div>
  );
}
