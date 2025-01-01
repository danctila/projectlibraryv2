import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import filler from "../../../assets/filler.jpg";

export default function ProjectsSection() {
  const carouselRef = useRef(null);
  const flickityRef = useRef(null);

  const projects = [
    {
      id: "1",
      title: "Project One",
      description: "This is a brief description of Project One.",
      image: filler,
    },
    {
      id: "2",
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      image: filler,
    },
    {
      id: "3",
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      image: filler,
    },
    {
      id: "4",
      title: "Project Four",
      description: "This is a brief description of Project Four.",
      image: filler,
    },
    {
      id: "5",
      title: "Project Five",
      description: "This is a brief description of Project Four.",
      image: filler,
    },
    {
      id: "6",
      title: "Project Six",
      description: "This is a brief description of Project Four.",
      image: filler,
    },
    {
      id: "7",
      title: "Project Seven",
      description: "This is a brief description of Project Four.",
      image: filler,
    },
  ];

  useEffect(() => {
    flickityRef.current = new Flickity(carouselRef.current, {
      cellAlign: "left",
      contain: true,
      draggable: false,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
      freeScrollFriction: 0.075,
      selectedAttraction: 0.025,
      friction: 0.28,
    });

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  const handlePrev = () => {
    if (flickityRef.current) {
      flickityRef.current.previous();
    }
  };

  const handleNext = () => {
    if (flickityRef.current) {
      flickityRef.current.next();
    }
  };

  return (
    <section className="min-h-screen snap-start bg-[#FBFBFB] dark:bg-[#262329] pt-16 font-neue">
      <div className="max-w-[1915px] mx-auto px-[30px] tablet:px-[100px] desktop:px-[130px]">
        {/* Section Header */}
        <div className="mb-10">
          <h1 className="text-[40px] font-normal text-[#262329] dark:text-white">
            Projects
          </h1>
          <p className="text-[20px] text-[#645E6E] dark:text-[#D8D6DC] leading-[25px] w-[310px] tablet:w-[450px] desktop:w-[450px]">
            Explore some of the exciting projects I've worked on recently.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative  h-[470px]">
          {/* Flickity Carousel */}
          <div ref={carouselRef} className="overflow-hidden">
            {projects.map((project) => (
              <div key={project.id} className="mr-4 last:mr-0 w-[350px]">
                <div className="flex flex-col items-start">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[230px] rounded-[5px] object-cover"
                  />
                  <h2 className="mt-6 text-[32px] font-medium text-[#262329] dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-[20px] text-[#645E6E] dark:text-[#D8D6DC]">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-4 text-[16px] text-[#3AED7C] hover:underline"
                  >
                    SEE MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#262329] dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#262329] dark:text-white" />
            </button>
          </div>
        </div>
      </div> */}

          {/* Navigation Arrows */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-8">
            {/* Previous Button */}
            <button onClick={handlePrev} className="bg-transparent">
              {/* Light Mode Left Arrow */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block dark:hidden"
              >
                <path
                  d="M16 24L8 16L16 8"
                  stroke="black"
                  strokeWidth="1.33333"
                />
                <path
                  d="M24 24L16 16L24 8"
                  stroke="black"
                  strokeWidth="1.33333"
                />
              </svg>
              {/* Dark Mode Left Arrow */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden dark:block"
              >
                <path
                  d="M16 24L8 16L16 8"
                  stroke="white"
                  strokeWidth="1.33333"
                />
                <path
                  d="M24 24L16 16L24 8"
                  stroke="white"
                  strokeWidth="1.33333"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button onClick={handleNext} className="bg-transparent">
              {/* Light Mode Right Arrow */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block dark:hidden"
              >
                <path
                  d="M16 24L24 16L16 8"
                  stroke="black"
                  strokeWidth="1.33333"
                />
                <path
                  d="M8 24L16 16L8 8"
                  stroke="black"
                  strokeWidth="1.33333"
                />
              </svg>
              {/* Dark Mode Right Arrow */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden dark:block"
              >
                <path
                  d="M16 24L24 16L16 8"
                  stroke="white"
                  strokeWidth="1.33333"
                />
                <path
                  d="M8 24L16 16L8 8"
                  stroke="white"
                  strokeWidth="1.33333"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .flickity-enabled {
          outline: none;
        }
      `}</style>
    </section>
  );
}
