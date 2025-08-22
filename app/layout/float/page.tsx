/**
 * A component demonstrating float layout with an image and text
 * 
 * @returns A flex container with:
 * - Image with classes:
 *   - float-left: Floats image to the left
 *   - mr-6: Margin right of 1.5rem
 *   - aspect-16/9: Maintains 16:9 aspect ratio
 *   - w-2/5: Width 40% of container
 *   - rounded-lg: Large border radius
 *   - object-cover: Image covers container while maintaining aspect ratio
 *   - outline & outline-offset: Thin black outline slightly inset
 * 
 * - Text paragraph with:
 *   - text-justify: Justified text alignment
 * 
 * Layout is wrapped in:
 *   - flex flex-col: Vertical flex container
 */
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="p-8 @container relative overflow-auto rounded-lg bg-cyan-50">
        <img
          className="float-left mr-6 aspect-16/9 w-2/5 rounded-lg object-cover outline -outline-offset-1 outline-black/10"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
        />
        <p className="text-justify">
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </div>
      <div className="p-8 @container relative overflow-auto rounded-lg bg-cyan-50">
        <img
          className="float-right ml-6 aspect-16/9 w-2/5 rounded-lg object-cover outline -outline-offset-1 outline-black/10"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
        />
        <p className="text-justify">
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped! Or: maybe that turns you on,
          Seinfeld; maybe that's how y'get your kicks. You and your good-time
          buddies.
        </p>
      </div>
    </div>
  );
}
