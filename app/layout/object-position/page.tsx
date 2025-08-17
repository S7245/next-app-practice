export default function Home() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      {/* mx-auto: 水平居中; 
      max-w-md: 最大宽度为md; 
      overflow-hidden: 隐藏溢出内容; 
      rounded-xl: 大圆角; 
      bg-white: 背景白色; 
      shadow-md: 中等阴影; 
      md:max-w-2xl: 在中等屏幕及以上最大宽度为2xl 
    */}
      <div className="md:flex">
        {/* md:flex: 在中等屏幕及以上显示为弹性布局 */}

        <div className="md:shrink-0">
          {/* md:shrink-0: 在中等屏幕及以上不收缩 */}

          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://dummyimage.com/400x400/000/fff"
            alt=""
          />
          {/* h-48: 高度48; w-full: 宽度100%; object-cover: 保持宽高比填充内容框; md:h-full: 在中等屏幕及以上高度100%; md:w-48: 在中等屏幕及以上宽度48 */}
        </div>

        <div className="p-8">
          {" "}
          {/* p-8: 内边距8 */}
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Company retreats
          </div>{" "}
          {/* text-sm: 字体小; font-semibold: 字体粗细为semibold; tracking-wide: 字间距宽; text-indigo-500: 文字颜色为indigo-500; uppercase: 大写 */}
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {" "}
            {/* mt-1: 上外边距1; block: 块级元素; text-lg: 字体大; leading-tight: 行高紧凑; font-medium: 字体粗细为medium; text-black: 文字颜色黑色; hover:underline: 鼠标悬停时下划线 */}
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-gray-500">
            {" "}
            {/* mt-2: 上外边距2; text-gray-500: 文字颜色为gray-500 */}
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  );
}
