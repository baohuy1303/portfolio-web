import { Link } from "@heroui/link";
import {Tabs, Tab} from "@heroui/react";
import { Navbar } from "@/components/navbar";
import { useLocation } from "react-router-dom";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {pathname} = useLocation();
  return (
    <div className="relative flex flex-col h-screen">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    >
      {/* <Navbar /> */}
      <Tabs aria-label="Tabs variants" variant="underlined" className="w-full justify-center items-center mt-10 " size="lg" 
      selectedKey={pathname} motionProps={{
        initial: { opacity: 0, x: -10, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -10, scale: 0.9 },
        transition: { duration: 0.3, ease: "easeInOut" }
      }}>
        <Tab key="/" title="home" href="/" className="hover:scale-110 ease-in-out transition-all duration-150" />
        <Tab key="/about" title="about" href="/about" className="hover:scale-110 ease-in-out transition-all duration-150"/>
        <Tab key="/projects" title="projects" href="/projects" className="hover:scale-110 ease-in-out transition-all duration-150"/>
        <Tab key="/contact" title="contact" href="/contact" className="hover:scale-110 ease-in-out transition-all duration-150"/>
      </Tabs>
      <main className="container mx-auto max-w-2xl px-6 flex-grow pt-16">
        {children}
      </main>

    </div>
    </div>
  );
}
