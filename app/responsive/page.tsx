export default function Responsive() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-2xl">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:shrink-0">
          <img
            className="h-[200px] w-full object-cover object-bottom sm:w-[193px] sm:object-center"
            width="202"
            height="192"
            alt="Beautiful abstract building in the sun"
            src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=404&amp;q=80"
          />
        </div>
        <div className="space-y-2 p-6 2xl:p-8">
          <div className="text-sm leading-6 font-medium text-indigo-600">
            Company retreats
          </div>
          <a
            className="block text-base leading-6 font-semibold text-gray-900 hover:underline"
            href="#"
          >
            Incredible accommodation for your team
          </a>
          <p className="text-sm leading-6 text-gray-600">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}
