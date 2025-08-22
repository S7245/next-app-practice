export default function Home() {
  return (
    <div className="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 p-8">
      <textarea
        rows={2}
        className="mx-auto block w-80 resize rounded-md p-2 text-sm text-gray-950 outline-1 outline-gray-900/10 focus:outline-2 focus:outline-gray-900"
      />
      <textarea
        rows={2}
        className="mx-auto block w-80 resize-y rounded-md p-2 text-sm text-gray-950 outline-1 outline-gray-900/10 focus:outline-2 focus:outline-gray-900"
      />
      <textarea
        rows={2}
        className="mx-auto block w-80 resize-x rounded-md p-2 text-sm text-gray-950 outline-1 outline-gray-900/10 focus:outline-2 focus:outline-gray-900"
      />
    </div>
  );
}
