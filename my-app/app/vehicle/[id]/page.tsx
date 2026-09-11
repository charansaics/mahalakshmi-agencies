import Link from "next/link";
import { notFound } from "next/navigation";
import { salesModels } from "../../data/vehicleModels";

export function generateStaticParams() {
  return salesModels.map((vehicle) => ({ id: vehicle.id }));
}

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = salesModels.find((item) => item.id === id);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-slate-900"
        >
          ← Back to home
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="min-h-[360px] bg-cover bg-center"
              style={{ backgroundImage: `url(${vehicle.image})` }}
              aria-label={vehicle.name}
            />

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                Sales
              </p>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                {vehicle.name}
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-600">{vehicle.description}</p>

              <div className="mt-8 rounded-2xl bg-slate-900 p-4 text-sm text-slate-200">
                {vehicle.summary}
              </div>

              <div className="mt-8 space-y-3">
                {vehicle.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3"
                  >
                    <span className="font-semibold text-slate-700">{spec.label}</span>
                    <span className="max-w-[60%] text-right text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Enquire now
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                >
                  View all models
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
