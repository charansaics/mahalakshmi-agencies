export function Footer() {
  return (
    <footer className="border-t border-[#5c5c5b] bg-[#242424] text-[#dedddb]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            <p>
              Disclaimer: Mahalakshmi Auto Agency is the only authorized SML Mahindra dealer in
              Visakhapatnam for sales, spare, and service.
            </p>
            <p className="mt-2">SML Mahindra logo and proprietary images are used with permission.</p>
          </div>

          <div className="text-sm text-slate-300">
            <a href="#" className="text-slate-300 hover:text-white">Privacy Policy</a>
            <span className="mx-3 text-slate-500">•</span>
            <span>© {new Date().getFullYear()} Mahalakshmi Auto Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
