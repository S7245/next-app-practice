export default function Home() {
  return (
  
  <div className="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 p-8">
      
      <div className="flex justify-center font-mono text-sm leading-6 font-bold text-white">
          <div className="relative flow-root rounded-lg">
              <div className="absolute inset-0">
                  <div
                      className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
                  </div>
              </div>
              <div className="relative m-8 rounded-lg bg-blue-500 p-4">m-8</div>
          </div>
      </div>

      <br/>
  
      <div className="flex justify-center font-mono text-sm leading-6 font-bold text-white">
          <div className="flex flex-col items-center">
              <div className="relative h-16 w-36 overflow-hidden rounded-md border border-sky-700/10 bg-sky-400/20"></div>
              <div className="relative flex items-center justify-center rounded-md bg-sky-500 p-4">-mt-8</div>
          </div>
      </div>

      <br/>

      <div className="flex justify-center font-mono text-sm leading-6 font-bold text-white">
          <div className="relative flow-root rounded-lg">
              <div className="absolute inset-0">
                  <div
                      className="h-full rounded-lg border text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]">
                  </div>
              </div>
              <div className="relative m-auto rounded-lg bg-blue-500 p-4">m-8</div>
          </div>
      </div>


  </div>
  );
  }