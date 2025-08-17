export default function Home() {
  return (
    <div>

      <div className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <p>
          123456789,
          <a className="text-blue-600 after:content-['_↗']">Showcase</a>
        </p>
        <p className="hyphens-none">12345&shy;6789 -- hyphens-none</p>
        <p className="hyphens-manual">12345&shy;6789 -- hyphens-manual</p>
        <p className="hyphens-auto">12345&shy;6789 -- hyphens-auto</p>
      </div>

      <div className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <span className="bg-cyan-200 inline-block align-bottom">New Yorkers are facing the winter chill with less warmth this year as</span>
        <br/>
        <span className="bg-cyan-500">New Yorkers are facing the winter chill with less warmth this year as</span>
      </div>

      <article className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-nowrap">
        <h3>Beloved Manhattan soup stand closes</h3>
        <p>
          New Yorkers are facing the winter chill with less warmth this year as
          the city's most revered soup stand unexpectedly shutters, following a
          series of events that have left the community puzzled.
        </p>
      </article>

      <div className="mt-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <p className="text-justify text-lg">
          So I started to walk into the water. I won't lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I don't know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I
          <a className="underline decoration-transparent">My Company, Inc</a>
        </p>
      </div>

      <div className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <p className="mx-auto max-w-xs bg-cyan-50 overflow-hidden text-ellipsis p-8">
          The longest word in any of the major English language dictionaries is
          <span className="font-bold">
            pneumonoultramicroscopicsilicovolcanoconiosis,
          </span>
          a word that refers to a lung disease contracted from the inhalation of
          very fine silica particles, specifically from a volcano; medically, it
          is the same as silicosis.
        </p>
      </div>
    </div>
  );
}
