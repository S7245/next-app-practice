export default function Home() {
  return (
    <div className="rounded-lg border border-purple-700/10 bg-purple-400/20 p-4">
      <div className="static h-32 border border-purple-700/10 bg-purple-400/20 p-4">
        <p className="text-purple-700 dark:text-sky-200">Static parent</p>
        <div className="absolute bottom-0 left-0 rounded-lg bg-purple-500 p-4 text-white shadow-lg">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
