import HeroSection from "@/components/landing/HeroSection";
import UsersProgramSection from "@/components/landing/UserProgram";

const HomePage = async () => {
  return (
    <>
      <main className="space-y-8">
        {/* HERO SECTION */}
        <HeroSection />
        <UsersProgramSection />
      </main>
    </>
  );
};

export default HomePage;
