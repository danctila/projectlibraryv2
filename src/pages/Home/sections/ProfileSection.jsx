export default function ProfileSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[#FBFBFB] dark:bg-[#262329]">
      <div className="flex flex-col desktop:flex-row items-center desktop:items-start desktop:space-x-8">
        {/* Text Section */}
        <div className="flex flex-col items-start text-left w-[310px] tablet:w-[450px] desktop:w-[450px]">
          <p className="font-neue text-[40px] font-normal text-[#262329] dark:text-white leading-[50px]">
            {/* Desktop and Tablet Layout */}
            <span className="hidden tablet:block desktop:block">Hey,</span>
            <span className="hidden tablet:block desktop:block">
              My name is{" "}
              <span className="font-bold text-[#6E07F3] dark:text-[#8A34F9]">
                Dylan Anctil
              </span>
            </span>
            {/* Mobile Layout */}
            <span className="block tablet:hidden desktop:hidden">
              Hey, my name is
            </span>
            <span className="block tablet:hidden desktop:hidden">
              <span className="font-bold text-[#6E07F3] dark:text-[#8A34F9]">
                Dylan Anctil
              </span>
            </span>
          </p>
          <p className="font-neue text-[20px] font-normal text-[#645E6E] dark:text-[#D8D6DC] mt-4 leading-[25px]">
            This is some filler text about me. Feel free to replace it with
            something meaningful.
          </p>
        </div>
        {/* Image Section */}
        <div className="mt-6 tablet:mt-8 desktop:mt-0">
          <div className="bg-gray-300 dark:bg-gray-600 w-[270px] h-[270px] mobile:w-[270px] mobile:h-[270px] tablet:w-[430px] tablet:h-[430px] desktop:w-[430px] desktop:h-[430px]"></div>
        </div>
      </div>
    </div>
  );
}
