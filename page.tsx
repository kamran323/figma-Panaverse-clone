
import Hero from "./Sections/Hero";
import CoreTracks from "./shared/CoreTracks";
import Outcome from "./shared/Outcome";
import SpecializedTracks from "./shared/SpecializedTracks";
import localFont from 'next/font/local'
export default function Home()  {
  return (
    <>
    <main>
      {/* Hero section */}
      <Hero/>
      {/* Core Section */}
      <CoreTracks/>
      {/* SpecializedTracks */}
      <SpecializedTracks/>
      {/* Outcome tracks */}
      <Outcome/>
      
    </main>
    </>
  );
}
