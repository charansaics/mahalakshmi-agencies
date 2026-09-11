const stats = [
  { value: "16", label: "Vehicles Sold" },
  { value: "1", label: "Exclusive Showroom" },
  { value: "100%", label: "Satisfaction" },
  { value: "10+", label: "Happy Customers" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#fffaf3] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">About us</p>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Authorized SML ISUZU Dealer for Sales, Service, and Spares.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We serve transporters, fleet operators, and business owners across the region with a
              dependable combination of vehicle expertise, genuine support, and after-sales care.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              All products - buses, trucks, and ambulances are under the BS-VI category, delivering
              dependable performance, better efficiency, and lasting value for your fleet.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_18px_50px_rgba(249,115,22,0.08)] sm:p-6">
            <div className="space-y-5 sm:space-y-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-end justify-between gap-4 border-b border-orange-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div>
                    <div className="text-2xl font-black text-slate-900 sm:text-3xl">{item.value}</div>
                    <div className="mt-1 text-sm font-medium text-slate-600">{item.label}</div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg text-orange-700">
                    ✓
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
