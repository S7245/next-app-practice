export default function Home() {
  return (
    <div className="flex space-x-4 items-center justify-center h-screen bg-gray-100">
      {/* ========================= 按钮 ============================= */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        className="size-6 fill-red-800 stroke-cyan-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
        />
      </svg>

      {/* ========================= 按钮 ============================= */}

      <button className="inline-flex gap-2 rounded-md border border-indigo-100 shadow-sm bg-white px-3 py-2 text-sm font-semibold text-indigo-600 transition-colors duration-150 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
        <svg viewBox="0 0 20 20" className="size-5 fill-current">
          <path
            d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        Check for updates
      </button>

      {/* ========================= 按钮 ============================= */}
      <button className="inline-flex gap-2 bg-white border border-pink-100 rounded-md px-3 py-2 text-sm font-semibold text-pink-600 shadow-sm hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors duration-150">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5 stroke-current stroke-1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          ></path>
        </svg>
        Download file
      </button>
    </div>
  );
}
