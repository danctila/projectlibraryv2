import { waveform } from "ldrs";

export default function Loader() {
  waveform.register();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBFBFB] dark:bg-[#262329]">
      <l-waveform
        size="140"
        stroke="3.5"
        speed="1.2"
        color="#8A34F9"
      ></l-waveform>
    </div>
  );
}
