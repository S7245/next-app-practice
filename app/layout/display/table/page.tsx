export default function Home() {
  return (
    <div className="my-8 overflow-hidden">
      <div className="table w-full table-auto border-collapse text-sm">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-medium text-gray-400 dark:border-white/20 dark:text-white">
              Row 1
            </div>
            <div className="table-cell border-b border-gray-200 p-4 pt-0 pb-3 text-left font-medium text-gray-400 dark:border-white/20 dark:text-white">
              Row 1
            </div>
            <div className="table-cell border-b border-gray-200 p-4 pt-0 pr-8 pb-3 text-left font-medium text-gray-400 dark:border-white/20 dark:text-white">
              Row 1
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
            <div className="table-cell border-b border-gray-100 p-4 pl-8 text-gray-500 dark:border-white/10 dark:text-gray-300">Row 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
