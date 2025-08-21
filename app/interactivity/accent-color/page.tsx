export default function Home() {
  return <div className="flex space-x-4 items-center justify-center h-screen bg-gray-100">
    <label className=" flex items-center space-x-2">
      <input className="accent-pink-500" type="checkbox" checked/>
      <div className="text-sm font-semibold text-gray-900 dark:text-gray-200">CheckValue</div>
    </label>

    <label className=" flex items-center space-x-2">
      <input className="accent-pink-500/25" type="checkbox" checked/>
      <div className="text-sm font-semibold text-gray-900 dark:text-gray-200">CheckValue</div>
    </label>

  </div>;
}
