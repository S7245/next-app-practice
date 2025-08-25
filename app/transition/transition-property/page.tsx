export default function Home() {
  return (
    <div className="flex flex-col mt-8 bg-cyan-50 space-y-4">
      <div className="flex justify-around text-sm leading-6 font-bold bg-cyan-100">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
          Save Changes
        </button>
      </div>

      <div className="bg-cyan-100 flex justify-around">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        Save Changes
      </button>
      </div>
    </div>
  );
}
