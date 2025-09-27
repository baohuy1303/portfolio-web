import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faHome, faLaptop, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@heroui/link";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { addToast } from "@heroui/toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {pathname} = useLocation();

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // prevent default link behavior
    addToast({
      title: "Copied email successfully!",
      description: "huynhbaohuy130333@gmail.com",
      timeout: 2000,
      shouldShowTimeoutProgress: true,
      variant: 'flat',
      radius: 'full',
      color: 'success'
    });
    navigator.clipboard.writeText("huynhbaohuy130333@gmail.com");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative flex flex-col h-screen">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    />
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
        <Tab key="/resume" title="resume" href="/resume" className="hover:scale-110 ease-in-out transition-all duration-150"/>
      </Tabs>
      

      <main className="container mx-auto max-w-2xl px-6 flex-grow pt-16">
        {children}



        <Card className="w-[90%] md:w-[70%] mx-auto mb-10 border-1 border-gray-600 p-3" isBlurred>
            <CardBody className="flex justify-center">
                <h1 className="text-xl font-bold mb-5 text-center">© Huy B. Huynh</h1>
              <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
                <div className="flex flex-col gap-2">
                  <h1>Discover More</h1>
                  <Link href="/" className="hover:text-white"><FontAwesomeIcon icon={faHome} className="mr-2" size="lg"/> Home</Link>
                  <Link href="/about" className="hover:text-white"><FontAwesomeIcon icon={faUser} className="mr-2" size="lg"/> About</Link>
                  <Link href="/projects" className="hover:text-white"><FontAwesomeIcon icon={faLaptop} className="mr-2" size="lg"/> Projects</Link>
                  <Link href="/resume" className="hover:text-white"><FontAwesomeIcon icon={faFile} className="mr-2" size="lg"/> Resume</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Let's connect!</h1>
                  <a
                      href="mailto:huynhbaohuy130333@gmail.com"
                      onClick={handleCopy}
                      className="hover:text-red-500 ease-in-out transition-all duration-150"
                  >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg"/> Email
                  </a>
                  <a
                      href="https://github.com/baohuy1303"
                      target="_blank"
                      className="hover:text-gray-500 ease-in-out transition-all duration-150"
                  >
                      <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg"/> GitHub
                  </a>
                  <a
                      href="https://www.linkedin.com/in/huy-b-huynh-0b0b0b0/"
                      target="_blank"
                      className="hover:text-blue-400 ease-in-out transition-all duration-150"
                  >
                      <FontAwesomeIcon icon={faLinkedin} className="mr-2" size="lg"/> LinkedIn
                  </a>

                </div>

              </div>
            </CardBody>
          </Card>
      </main>

      
    </div>
  );
}
