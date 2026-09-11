const records = [
  { value: "16", label: "Vehicles Sold" },
  { value: "1", label: "Exclusive Show Room" },
  { value: "100%", label: "Satisfaction" },
  { value: "10", label: "Happy Customers" },
];

export function RecordsSection() {
  return (
    <section id="records" className="bg-[#fffaf3] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">Our records</p>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Performance backed by trust and reliability.
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {records.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-orange-100 bg-white p-5 text-center shadow-[0_12px_30px_rgba(249,115,22,0.06)] sm:rounded-[2rem] sm:p-6"
            >
              <div className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">{item.value}</div>
              <div className="mt-3 text-sm font-medium text-slate-600 sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
