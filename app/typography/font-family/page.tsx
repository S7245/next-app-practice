export default function Home() {
  return (
    <div className="m-8">
      <p className="text-center text-lg font-medium">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-center text-lg font-medium antialiased">
        The quick brown fox jumps over the lazy dog.
      </p>
      
      
      <p className="text-center text-lg tracking-tight">
        `tracking-tight`: The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-center text-lg tracking-[10px]">
        `tracking-tight`: The quick brown fox jumps over the lazy dog.
      </p>

      <p className="text-center text-lg">1st</p>
      <p className="text-center text-lg ordinal">1st</p>

      <div className="mt-4 flex justify-center space-x-4">
        <p className="text-center text-lg">1234567890</p>
        <p className="text-center text-lg lining-nums">1234567890</p>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <p className="text-center text-lg">1/2 3/4 5/6</p>
        <p className="text-center text-lg text-gray-900 stacked-fractions dark:text-gray-200">
          1/2 3/4 5/6
        </p>
      </div>

      <div className="max-w-xs bg-cyan-100 text-right">
        <p className="proportional-nums text-lg">123</p>
        <p className="proportional-nums text-lg">123456</p>
        <p className="text-lg">123456</p>
      </div>

      <div>
        <dl className="mx-auto grid max-w-2xs grid-cols-2 text-gray-900 dark:text-gray-200">
          <dt className="border-b border-gray-200 py-2 dark:border-white/10">
            Subtotal
          </dt>
          <dd className="border-b border-gray-200 py-2 text-right slashed-zero tabular-nums dark:border-white/10">
            $100.00
          </dd>
          <dt className="border-b border-gray-200 py-2 dark:border-white/10">
            Tax
          </dt>
          <dd className="border-b border-gray-200 py-2 text-right slashed-zero tabular-nums dark:border-white/10">
            $14.50
          </dd>
          <dt className="py-2 font-medium">Total</dt>
          <dd className="py-2 text-right font-medium slashed-zero tabular-nums">
            $114.50
          </dd>
        </dl>
      </div>
    </div>
  );
}
