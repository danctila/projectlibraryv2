export default function ContactSection() {
  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue flex items-center justify-center">
      <div className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full">
        {/* Section Header */}
        <div className="mb-10">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]">
            Contact
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.{" "}
          </p>
          <a
            href="mailto:danctilla@gmail.com"
            className="text-[20px] text-black dark:text-[#D8D6DC] underline"
          >
            danctilla@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
