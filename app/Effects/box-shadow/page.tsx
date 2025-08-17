export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center gap-8 py-6 sm:flex-row sm:gap-12">
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
            shadow-cyan-500/50
          </p>
          <button className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/50 focus:outline-none">
            Subscribe
          </button>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
            shadow-blue-500/50
          </p>
          <button className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/50 focus:outline-none">
            Subscribe
          </button>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
            shadow-indigo-500/50
          </p>
          <button className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/50 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>

      <br />

      <div className="flex items-center justify-around gap-4 gap-y-6 bg-white px-6 py-14 font-mono font-bold max-sm:flex-col max-sm:py-10">
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-xl
          </p>
          <div className="size-24 rounded-lg bg-white shadow-xl"></div>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-xl/20
          </p>
          <div className="size-24 rounded-lg bg-white shadow-xl/20"></div>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-xl/30
          </p>
          <div className="size-24 rounded-lg bg-white shadow-xl/30"></div>
        </div>

        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-md
          </p>
          <div className="size-24 rounded-lg bg-white shadow-md"></div>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-lg
          </p>
          <div className="size-24 rounded-lg bg-white shadow-lg"></div>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            shadow-xl
          </p>
          <div className="size-24 rounded-lg bg-white shadow-xl"></div>
        </div>
      </div>

      <br />

      <div className="flex items-center justify-around gap-4 gap-y-6 bg-white px-6 py-14 font-mono font-bold max-sm:flex-col max-sm:py-10">
        

        {/* Adding an inset shadow */}
        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            inset-shadow-2xs
          </p>
          <div className="size-24 rounded-lg bg-white inset-shadow-2xs"></div>
        </div>

        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            inset-shadow-xs
          </p>
          <div className="size-24 rounded-lg bg-white inset-shadow-xs"></div>
        </div>

        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            inset-shadow-sm
          </p>
          <div className="size-24 rounded-lg bg-white inset-shadow-sm"></div>
        </div>

        {/* Setting the inset shadow color */}

        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            inset-shadow-indigo-500
          </p>
          <div className="size-24 rounded-lg bg-indigo-200 inset-shadow-sm inset-shadow-indigo-500"></div>
        </div>

        <div className="flex shrink-0 flex-col items-center">
          <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500">
            inset-shadow-indigo-500/50
          </p>
          <div className="size-24 rounded-lg bg-indigo-200 inset-shadow-sm inset-shadow-indigo-500/50"></div>
        </div>
      </div>
    </div>
  );
}
