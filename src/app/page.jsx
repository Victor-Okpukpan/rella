import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center mt-24">
        <h1 className="font-bold text-5xl animate-pulse">WaveSearch</h1>
        <HomeSearch />
      </div>
    </>
  );
}
