export default function Home() {
  return (
    <div className="space-y-4 bg-amber-100">
      <div className="h-14 rounded-lg bg-linear-to-t from-white to-blue-700 text-cyan-400">
        -t
      </div>
      <div className="h-14 rounded-lg bg-linear-to-tr from-white to-blue-700 text-cyan-400">
        -tr
      </div>

      <div className="h-14 rounded-lg bg-linear-to-r from-white to-blue-700 text-cyan-400">
        -r
      </div>
      <div className="h-14 rounded-lg bg-linear-to-br from-white to-blue-700 text-cyan-400">
        -br
      </div>

      <div className="h-14 rounded-lg bg-linear-to-b from-white to-blue-700 text-cyan-400">
        -b
      </div>
      <div className="h-14 rounded-lg bg-linear-to-bl from-white to-blue-700 text-cyan-400">
        -bl
      </div>

      <div className="h-14 rounded-lg bg-linear-to-l from-white to-blue-700 text-cyan-400">
        -l
      </div>
      <div className="h-14 rounded-lg bg-linear-to-tl from-white to-blue-700 text-cyan-400">
        -tl
      </div>

      <div className="h-14 rounded-lg bg-linear-65 from-white to-blue-700 text-cyan-400">
        -65
      </div>

      <div className="flex justify-around p-8 sm:p-12">
        <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 sm:size-24"></div>
        <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% sm:size-24"></div>
        <div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% sm:size-24"></div>
      </div>

      <div className="flex justify-around p-8 sm:p-12">
        <div className="size-18 rounded-full bg-conic from-blue-600 to-sky-400 to-50% sm:size-24"></div>
        <div className="size-18 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 sm:size-24"></div>
        <div className="size-18 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 sm:size-24"></div>
      </div>

      <div className="h-10 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
    </div>
  );
}
