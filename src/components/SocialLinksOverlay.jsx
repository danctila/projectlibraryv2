import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "../Context/ScrollContext";

const SocialLinksOverlay = () => {
  const { activeSection } = useScroll();
  const shouldHide = activeSection === "contact";

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
    {
      href: "mailto:danctilla@gmail.com",
      ariaLabel: "Email Contact",
      hoverClass: "",
      svg: (className) => (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="stroke-[#262329] dark:stroke-[#FBFBFB] transition-[fill,stroke] duration-300 group-hover:fill-[#4285F4] group-hover:stroke-[#4285F4]"
            strokeWidth="0.5"
            d="M4.22727 18.5657H7.09091V11.6112L3 8.54297V17.3384C3 18.0165 3.5492 18.5657 4.22727 18.5657Z"
          />
          <path
            className="stroke-[#262329] dark:stroke-[#FBFBFB] transition-[fill,stroke] duration-300 group-hover:fill-[#34A853] group-hover:stroke-[#34A853]"
            strokeWidth="0.5"
            d="M16.9091 18.5657H19.7727C20.4508 18.5657 21 18.0165 21 17.3384V8.54297L16.9091 11.6112V18.5657Z"
          />
          <path
            className="stroke-[#262329] dark:stroke-[#FBFBFB] transition-[fill,stroke] duration-300 group-hover:fill-[#FBBC05] group-hover:stroke-[#FBBC05]"
            strokeWidth="0.5"
            d="M16.9091 6.29308V11.6113L21 8.54308V6.90672C21 5.39001 19.2685 4.52376 18.0545 5.43399L16.9091 6.29308Z"
          />
          <path
            className="stroke-[#262329] dark:stroke-[#FBFBFB] transition-[fill,stroke] duration-300 group-hover:fill-[#EA4335] group-hover:stroke-[#EA4335]"
            strokeWidth="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.09094 11.6112V6.29297L12 9.97479L16.9091 6.29297V11.6112L12 15.293L7.09094 11.6112Z"
          />
          <path
            className="stroke-[#262329] dark:stroke-[#FBFBFB] transition-[fill,stroke] duration-300 group-hover:fill-[#BB001B] group-hover:stroke-[#BB001B]"
            strokeWidth="0.5"
            d="M3 6.90672V8.54308L7.09091 11.6113V6.29308L5.94545 5.43399C4.73148 4.52376 3 5.39001 3 6.90672Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {!shouldHide && (
        <motion.div
          className="absolute left-3 flex-col space-y-[18px] pointer-events-auto hidden tablet:flex desktop:flex"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: -100 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.svg(
                `fill-[#262329] dark:fill-[#FBFBFB] ${link.hoverClass} transition-colors duration-300`
              )}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinksOverlay;
