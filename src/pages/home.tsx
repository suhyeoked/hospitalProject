import NavBar from "@/component/navBar/navBar";
import MainSlide from "@/component/mainSlide/mianSlide"
import MainSection from "@/component/mainSection/mainSection"
import DoctorSection from "@/component/doctorSection/doctorSection";
import HospitalSection from "@/component/hospitalSection/hospitalSection"

export default function Home() {
  return (
    <>
      <NavBar />
      <MainSlide />
      <MainSection />
      <DoctorSection />
      <HospitalSection />
    </>
  );
}
