export default function Home() {
  return (
    <div className="flex items-start justify-center mt-32 space-x-4">
      <label>Tell us your story:</label>
      <textarea
        className="w-80 rounded-md p-2 text-sm caret-pink-500 ring-1 ring-gray-900/10 focus:ring-2 focus:ring-pink-500 focus:outline-none dark:bg-gray-950/25 dark:ring-1 dark:ring-white/5 dark:focus:bg-gray-950/10 dark:focus:ring-2 dark:focus:ring-pink-500"
        rows={3}
        placeholder="Type here..."
        title="This is a text area with custom caret color"
      ></textarea>
    </div>
  );
}
