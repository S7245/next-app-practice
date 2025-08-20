export default function Home() {
  return (
    <div>
      <div className="flex space-x-4 text-sm leading-6 font-bold text-white flex-row">
        <div className="flex h-14 basis-64 items-center justify-center rounded-lg bg-purple-500">
          01
        </div>
        <div className="flex h-14 basis-64 items-center justify-center rounded-lg bg-purple-500">
          02
        </div>
        <div className="flex h-14 basis-128 items-center justify-center rounded-lg bg-purple-500">
          03
        </div>
      </div>

      <div className="flex flex-nowrap text-sm leading-6 font-bold text-white">
        <div className="flex h-14 w-[500px] items-center justify-center rounded-lg bg-purple-500">01</div>
        <div className="flex h-14 w-[500px] items-center justify-center rounded-lg bg-purple-500">02</div>
        <div className="flex h-14 w-[600px] items-center justify-center rounded-lg bg-purple-500">03</div>
      </div>
    </div>
  );
}
