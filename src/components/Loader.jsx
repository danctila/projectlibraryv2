export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB] dark:bg-[#262329] -mt-20">
      <style jsx>{`
        .loader {
          width: 140px;
          aspect-ratio: 1;
          border: 4px solid #8a34f9;
          animation: l1 2s infinite;
        }
        @keyframes l1 {
          0% {
            border-radius: 50% 50% 0 0;
          }
          25% {
            border-radius: 0 50% 50% 0;
          }
          50% {
            border-radius: 0 0 50% 50%;
          }
          75% {
            border-radius: 50% 0 0 50%;
          }
          100% {
            border-radius: 50% 50% 0 0;
          }
        }
      `}</style>
      <div className="loader"></div>
    </div>
  );
}
