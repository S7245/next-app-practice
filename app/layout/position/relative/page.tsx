export default function Home() {
  return (
    <div className="rounded-lg border border-sky-700/10 bg-sky-400/20 p-4 ">
      <div className="relative h-32 border border-sky-700/10 bg-sky-400/20 p-4 ">
        <p className="text-sky-700 dark:text-white">Relative parent</p>
        <div className="absolute bottom-0 left-0 rounded-lg bg-sky-500 p-4 text-white shadow-lg ">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
