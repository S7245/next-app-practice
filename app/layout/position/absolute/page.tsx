export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-sm font-medium text-gray-500">
          With static positioning
        </p>
        <div className="relative text-sm leading-6 font-medium">
          <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
            <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">
              Relative parent
            </p>
            <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
              <p className="text-indigo-700 dark:text-indigo-200">
                Static parent
              </p>
              <div className="flex gap-4">
                <div className="bottom-0 left-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                  <p>Static child?</p>
                </div>
                <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                  <p>Static sibling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-4 text-sm font-medium text-gray-500">
          With absolute positioning
        </p>
        <div className="relative text-sm leading-6 font-medium">
          <div className="relative rounded-lg border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0 dark:bg-indigo-900/80">
            <p className="-mt-2 mb-2 text-indigo-700 dark:text-indigo-200">
              Relative parent
            </p>
            <div className="static flex h-32 flex-col justify-between border border-indigo-700/10 bg-indigo-400/20 p-4 dark:border-0">
              <p className="text-indigo-700 dark:text-indigo-200">
                Static parent
              </p>
              <div className="flex gap-4">
                <div className="absolute top-0 right-0 rounded-lg bg-indigo-500 p-4 text-white shadow-lg">
                  <p>Absolute child</p>
                </div>
                <div className="rounded-lg bg-indigo-100 p-4 text-indigo-600 shadow-lg">
                  <p>Static sibling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
