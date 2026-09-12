export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#1c1b1a] text-white">
      <div className="relative h-[360px] w-full overflow-hidden sm:h-[520px] lg:h-[640px]">
        <img
          src="/home-gallery/hero-main.png"
          alt="SML ISUZU buses"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.72)_38%,rgba(15,23,42,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.34),transparent_28%)]" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl pt-6 sm:pt-0">
              <div className="mb-4 flex flex-wrap gap-2 text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-orange-100 sm:mb-6 sm:text-[0.62rem]">
                <span className="rounded-full border border-white/20 bg-white/8 px-2.5 py-1.5 backdrop-blur-sm sm:px-3">Sales</span>
                <span className="rounded-full border border-white/20 bg-white/8 px-2.5 py-1.5 backdrop-blur-sm sm:px-3">Services</span>
                <span className="rounded-full border border-white/20 bg-white/8 px-2.5 py-1.5 backdrop-blur-sm sm:px-3">Spares</span>
              </div>

              <h2 className="text-[1.9rem] font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
                Mahalakshmi Auto Agency
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-200 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
                We are SML ISUZU authorized dealers for sales, service, and spares with exclusive
                showroom coverage for Visakhapatnam, Vizianagaram, and Srikakulam districts.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(249,115,22,0.32)] transition hover:bg-orange-600 sm:px-6"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/6 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12 sm:px-6"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
