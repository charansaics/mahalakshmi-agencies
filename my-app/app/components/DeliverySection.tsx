export function DeliverySection() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-14 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/delivery/all_trucks.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.76)_35%,rgba(15,23,42,0.68)_100%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
          <div className="rounded-[2rem] border border-white/20 bg-white/5 p-4 backdrop-blur-[2px] shadow-[0_18px_40px_rgba(15,23,42,0.2)] sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8c2]">Delivery</p>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">
              Fast, reliable support from enquiry to delivery.
            </h3>

            <div className="mt-8 space-y-4 sm:space-y-5">
              {[
                "Consultation on the right vehicle for your business requirements.",
                "Transparent guidance on model selection, efficiency, and cost planning.",
                "Responsive after-sales service with genuine spare support.",
              ].map((point, index) => (
                <div key={point} className="flex gap-4 rounded-2xl border border-white/10 bg-white/6 p-4 text-white shadow-sm backdrop-blur-sm">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#ed1b3b] font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-slate-100">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.2)] backdrop-blur-sm">
              <img
                src="/delivery/all_trucks.png"
                alt="Delivery distribution"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
