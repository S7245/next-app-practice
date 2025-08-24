export default function Home() {
  return (
    <article className="p-8 @container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5 group-data-dragging:before:absolute group-data-dragging:before:inset-0">
      <img
        className="float-left ml-6 aspect-16/9 w-2/5 rounded-lg object-cover outline -outline-offset-1 outline-black/10"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;h=1000&amp;q=90"
      />
      <p className="text-justify">
        Maybe we can live without libraries, people like you and me. Maybe.
        Sure, we're too old to change the world, but what about that kid,
        sitting down, opening a book, right now, in a branch at the local
        library and finding drawings of pee-pees and wee-wees on the Cat in the
        Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If
        you think this is about overdue fines and missing books, you'd better
        think again. This is about that kid's right to read a book without
        getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe
        that's how y'get your kicks. You and your good-time buddies.
      </p>
    </article>
  );
}
