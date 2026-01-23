import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/home/services/ServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";
import ContactSection from "@/components/contact/ContactSection";
import AnimationLayout from "../../layouts/AnimationLayout";

export default function Home() {
  return (
  <AnimationLayout>
    <HeroSection/>
    <ServiceSection/>
    <ResumeSection/>
    <ProjectSection/>
    <SkillSection/>
    <ContactSection/>
   </AnimationLayout>
  
  );
}
