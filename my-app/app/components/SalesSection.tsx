import Link from "next/link";
import { salesModels } from "../data/vehicleModels";

export function SalesSection() {
  return (
    <section id="sales" className="bg-[#fff7f0] py-14 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">
              Sales
            </p>
            <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
              All New BS-VI Buses
            </h3>
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 pb-2 md:-mx-0 md:px-0">
          <div className="flex gap-4 pb-3 md:gap-5">
            {salesModels.map((model) => (
              <Link
                key={model.id}
                href={`/vehicle/${model.id}`}
                className="group relative block h-[290px] w-[78vw] max-w-[360px] shrink-0 overflow-hidden rounded-[1.5rem] border border-orange-100 bg-slate-900 shadow-[0_22px_50px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-orange-300 sm:h-[360px] sm:w-[420px] md:h-[420px] md:w-[460px] lg:w-[540px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${model.image})` }}
                  aria-label={model.name}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-8">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-orange-300">
                    SML ISUZU
                  </p>
                  <h4 className="mt-3 text-lg font-black tracking-tight sm:text-3xl">
                    {model.name}
                  </h4>
                  <p className="mt-2 max-w-md text-xs leading-5 text-slate-200 sm:mt-3 sm:text-base sm:leading-6">
                    {model.summary}
                  </p>
                  <div className="mt-4 inline-flex items-center text-xs font-semibold text-orange-300 sm:mt-5 sm:text-sm">
                    Explore model <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
