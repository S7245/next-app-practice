export default function Home() {
    return (
            
            <div className="flex items-center h-12 bg-white rounded-lg border border-gray-200">
                {/* 01 块 - 浅蓝色 */}
                <div className="h-8 w-16 flex-none bg-blue-300 rounded-md flex items-center justify-center text-white font-medium text-sm mx-1">
                    01
                </div>
                
                {/* 02 块 - 深蓝色，较宽 */}
                <div className="h-8 w-32 shrink bg-blue-600 rounded-md flex items-center justify-center text-white font-medium text-sm mx-1">
                    02
                </div>
                
                {/* 03 块 - 浅蓝色 */}
                <div className="h-8 w-16 flex-none bg-blue-300 rounded-md flex items-center justify-center text-white font-medium text-sm mx-1">
                    03
                </div>
                
            </div>
    );
}
