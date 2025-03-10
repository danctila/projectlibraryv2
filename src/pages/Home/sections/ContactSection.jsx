import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function ContactSection() {
  const links = [
    {
      href: "https://github.com/danctila",
      ariaLabel: "GitHub Profile",
      hoverClass: "group-hover:fill-[#2dba4e]",
      svg: (className) => (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.0001 0C5.3735 0 0 5.50847 0 12.3038C0 17.74 3.43839 22.3519 8.2064 23.9789C8.80613 24.0927 9.02631 23.7119 9.02631 23.387C9.02631 23.0936 9.01518 22.1244 9.01001 21.0963C5.67157 21.8405 4.96712 19.6446 4.96712 19.6446C4.42125 18.2224 3.63473 17.8443 3.63473 17.8443C2.54596 17.0806 3.7168 17.0963 3.7168 17.0963C4.92181 17.1831 5.55632 18.3642 5.55632 18.3642C6.6266 20.2452 8.36359 19.7014 9.04836 19.387C9.15607 18.5918 9.46706 18.049 9.81024 17.7418C7.14486 17.4307 4.34295 16.3757 4.34295 11.6612C4.34295 10.3179 4.81172 9.22032 5.57937 8.35868C5.45477 8.04878 5.04402 6.79737 5.69562 5.10261C5.69562 5.10261 6.70331 4.77193 8.9965 6.3638C9.95372 6.09119 10.9803 5.95447 12.0001 5.94979C13.0199 5.95447 14.0473 6.09119 15.0063 6.3638C17.2967 4.77193 18.303 5.10261 18.303 5.10261C18.9562 6.79737 18.5452 8.04878 18.4206 8.35868C19.1901 9.22032 19.6557 10.3179 19.6557 11.6612C19.6557 16.3869 16.8484 17.4274 14.1762 17.732C14.6067 18.1138 14.9902 18.8626 14.9902 20.0105C14.9902 21.6568 14.9763 22.9817 14.9763 23.387C14.9763 23.7144 15.1923 24.098 15.8006 23.9772C20.566 22.3485 24 17.7381 24 12.3038C24 5.50847 18.6273 0 12.0001 0Z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/danctil/",
      ariaLabel: "LinkedIn Profile",
      hoverClass: "group-hover:fill-[#0077B5]",
      svg: (className) => (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.7143 3H4.2817C3.57455 3 3 3.58259 3 4.29777V19.7022C3 20.4174 3.57455 21 4.2817 21H19.7143C20.4214 21 21 20.4174 21 19.7022V4.29777C21 3.58259 20.4214 3 19.7143 3ZM8.44018 18.4286H5.77232V9.83839H8.4442V18.4286H8.44018ZM7.10625 8.66518C6.25045 8.66518 5.55938 7.97009 5.55938 7.1183C5.55938 6.26652 6.25045 5.57143 7.10625 5.57143C7.95804 5.57143 8.65312 6.26652 8.65312 7.1183C8.65312 7.97411 7.96205 8.66518 7.10625 8.66518ZM18.4406 18.4286H15.7728V14.25C15.7728 13.2536 15.7527 11.9719 14.3866 11.9719C12.9964 11.9719 12.7835 13.0567 12.7835 14.1777V18.4286H10.1156V9.83839H12.675V11.0116H12.7112C13.0687 10.3366 13.9406 9.62545 15.2384 9.62545C17.9384 9.62545 18.4406 11.4054 18.4406 13.7196V18.4286Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] font-neue flex items-center justify-center">
      <motion.div
        className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {" "}
        {/* Section Header */}
        <div className="mb-10">
          <motion.h1
            variants={textVariants}
            className="text-[40px] font-normal text-[#262329] dark:text-white pb-[8px]"
          >
            Contact
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px] pb-[32px]"
          >
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus.
          </motion.p>
          <motion.a
            href="mailto:danctilla@gmail.com"
            className="text-[20px] text-black dark:text-[#D8D6DC] underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              delay: 0.2,
            }}
          >
            danctilla@gmail.com
          </motion.a>
          <motion.div
            className="flex space-x-4 mt-4"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                {link.svg(
                  `fill-[#262329] dark:fill-[#FBFBFB] ${link.hoverClass} transition-colors duration-300`
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
