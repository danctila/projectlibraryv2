export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50">
      {/* Simple spinner or fancy animation */}
      <div className="loader border-4 border-t-blue-500 rounded-full w-12 h-12 animate-spin mb-2"></div>
      <p>Loading...</p>
    </div>
  );
}
