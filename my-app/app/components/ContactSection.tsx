export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f4f2] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c91430]">For enquiry</p>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Speak with our team today.
          </h3>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you need sales support, service assistance, or genuine spares, our team is
            ready to help with quick and practical guidance.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-[1.5rem] border border-[#dedddb] bg-white p-5 shadow-[0_12px_30px_rgba(36,36,36,0.05)]">
              <h4 className="text-xl font-bold text-slate-900">Contact Sales</h4>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>
                  <a href="mailto:sales@mahalakshmiautoagency.com" className="break-all hover:text-[#c91430]">
                    sales@mahalakshmiautoagency.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917799904569" className="hover:text-[#c91430]">
                    +917799904569
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-[#dedddb] bg-white p-5 shadow-[0_12px_30px_rgba(36,36,36,0.05)]">
              <h4 className="text-xl font-bold text-slate-900">Contact Service</h4>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li>
                  <a href="mailto:service@mahalakshmiautoagency.com" className="break-all hover:text-[#c91430]">
                    service@mahalakshmiautoagency.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917799904568" className="hover:text-[#c91430]">
                    +917799904568
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#dedddb] bg-white p-5 shadow-[0_20px_60px_rgba(36,36,36,0.08)] sm:p-8">
          <form className="grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white"
              />
            </label>

            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white"
              />
            </label>

            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Designation</span>
              <input
                type="text"
                placeholder="Your designation"
                className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white"
              />
            </label>

            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Mobile Number</span>
              <input
                type="tel"
                placeholder="Your mobile"
                className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white"
              />
            </label>

            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Enquiry Type</span>
              <select className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white">
                <option>--SELECT--</option>
                <option>BS-VI Buses</option>
                <option>BS-VI Trucks</option>
                <option>Service</option>
                <option>Spares</option>
              </select>
            </label>

            <label className="block md:col-span-1">
              <span className="mb-2 block text-sm font-medium text-slate-700">Model Name</span>
              <select className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white">
                <option>--SELECT--</option>
                <option>SML Mahindra Buses</option>
                <option>SML Mahindra Trucks</option>
                <option>Ambulance</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Enquiry Details</span>
              <textarea
                rows={5}
                placeholder="Tell us about your requirement"
                className="w-full rounded-xl border border-[#dedddb] bg-[#efeeec] px-4 py-3 outline-none transition focus:border-[#ed1b3b] focus:bg-white"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ed1b3b] px-6 py-3 font-semibold text-white shadow-[0_16px_30px_rgba(237,27,59,0.24)] transition hover:bg-[#c91430] sm:w-auto"
              >
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
