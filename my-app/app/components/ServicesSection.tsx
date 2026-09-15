const services = [
  {
    title: "Sales",
    description:
      "Explore high-performance BS-VI buses, trucks, and ambulances built for efficiency and operational reliability.",
    accent: "bg-[#fbe7ea] text-[#c91430]",
    icon: "sales",
  },
  {
    title: "Service",
    description:
      "Professional maintenance, diagnostics, and after-sales care guided by trained technicians and support teams.",
    accent: "bg-[#f5f4f2] text-[#c91430]",
    icon: "service",
  },
  {
    title: "Spares",
    description:
      "Genuine parts and accessories to maintain your fleet with quality, consistency, and long-term durability.",
    accent: "bg-[#e9e8e6] text-[#4a4a49]",
    icon: "spares",
  },
];

function ServiceIcon({ type }: { type: "sales" | "service" | "spares" }) {
  const common = "h-6 w-6 stroke-current";

  if (type === "sales") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M3 15.5h12.5l1.4-4.8h2.9a1.5 1.5 0 0 1 1.5 1.5v2.8H3v-2.5Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15.5V9.5h8.2l1.6 6M9 8.2V7.4a1.6 1.6 0 0 1 1.6-1.6h2.6a1.6 1.6 0 0 1 1.6 1.6v.8M8 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "service") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M14.5 5.5 18.5 9.5l-8 8-4 1 1-4 8-8Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 6.5l4 4M9.5 16.5l-3 3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M9 8.5h6v3.2h2.2a2.3 2.3 0 1 1 0 4.6H9v-3.3H6.8A2.3 2.3 0 1 1 6.8 8.5H9Z" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5.5v3.3M12 15.2v3.3M15.2 12h3.3M5.5 12h3.3" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#e9e8e6] py-14 text-[#242424] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c91430]">Our offerings</p>
          <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
            Sales, service, and spares under one roof.
          </h3>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#dedddb] bg-white p-5 shadow-[0_18px_48px_rgba(36,36,36,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#ed1b3b] hover:shadow-[0_22px_50px_rgba(36,36,36,0.12)] sm:rounded-[2rem] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between sm:mb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${service.accent}`}>
                  <ServiceIcon type={service.icon as "sales" | "service" | "spares"} />
                </div>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#c91430] sm:text-xs">
                  0{index + 1}
                </span>
              </div>

              <h4 className="text-xl font-black text-slate-900 sm:text-2xl">{service.title}</h4>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>

              <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#c91430] sm:mt-6">
                Learn more <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
