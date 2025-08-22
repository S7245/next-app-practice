export default function Home() {
  return (
    <div className="flex shrink-0 items-center justify-around gap-12 p-8 font-mono font-bold sm:gap-4">
      <div className="flex shrink-0 flex-col items-center">
        <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
          bg-origin-border
        </p>
        <div className="h-24 w-24 rounded-lg border-4 border-dashed border-white/75 bg-gray-300 bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)] bg-cover bg-no-repeat bg-origin-border object-cover p-3 dark:border-white/40"></div>
      </div>
      <div className="flex shrink-0 flex-col items-center">
        <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
          bg-origin-padding
        </p>
        <div className="h-24 w-24 rounded-lg border-4 border-dashed border-white/75 bg-gray-300 bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)] bg-cover bg-no-repeat bg-origin-padding object-cover p-3 dark:border-white/25 dark:bg-gray-700"></div>
      </div>
      <div className="flex shrink-0 flex-col items-center">
        <p className="mb-3 text-center font-mono text-xs font-medium text-gray-500 dark:text-gray-400">
          bg-origin-content
        </p>
        <div className="h-24 w-24 rounded-lg border-4 border-dashed border-white/75 bg-gray-300 bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)] bg-cover bg-no-repeat bg-origin-content object-cover p-3 dark:border-white/25 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
