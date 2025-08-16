export default function Home() {
    return (
            
            <div className="flex">
                {/* 01 块 - 浅蓝色 */}
                <div className="h-8 flex-1 bg-blue-300 sm:bg-amber-300">
                    01
                </div>
                
                {/* 02 块 - 深蓝色，较宽 */}
                <div className="h-8 w-32 shrink-2 bg-blue-600 ">
                    02
                </div>
                
                {/* 03 块 - 浅蓝色 */}
                <div className="h-8 flex-1 bg-blue-300 ">
                    03
                </div>
                
            </div>
    );
}
