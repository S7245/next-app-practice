export default function Home() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        
        {/* 
        When the parent is a flex container, we want to make sure the image never shrinks, so we've added md:shrink-0 to prevent shrinking on medium screens and larger. 
        当父级是弹性容器时，我们要确保图像不会缩小，所以需要使用 shrink-0 类 以防止图像在中等屏幕和更大屏幕上缩小。*/}
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://dummyimage.com/400x400/000/fff"
            alt="Modern building architecture"
          />
        </div>

        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
          <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-gray-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
            places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}
