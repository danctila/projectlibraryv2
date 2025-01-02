import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue flex items-center justify-center">
      <div className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full">
        {/* Section Header */}
        <div className="mb-10">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]">
            Blog
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]">
            Coming soon...
          </p>
          {/* <Link to="/blog" className="text-blue-600 underline">
            See All Blogs
          </Link> */}
        </div>
      </div>
    </section>
  );
}
