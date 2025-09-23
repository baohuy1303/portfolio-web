import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Button, Card, CardBody, Tabs} from "@heroui/react";
import {Avatar} from "@heroui/react";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faGraduationCap, faHashtag, faLocationDot, faLocationPin, faMapPin, faServer,  } from '@fortawesome/free-solid-svg-icons'
import {faCss, faHtml5, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { 
  faJs, 
  faReact, 
  faNode, 
  faPython, 
  faJava, 
  faGithub, 
  faGitAlt, 
  faBootstrap, 
  faUnity, 
  faWordpress, 
  faMicrosoft 
} from "@fortawesome/free-brands-svg-icons";

import { 
  faDatabase, 
  faCode, 
  faCloud, 
  faBolt, 
  faFire, 
  faV, 
  faLeaf, 
  faWind 
} from "@fortawesome/free-solid-svg-icons";
import { addToast } from "@heroui/react";

import {Chip} from "@heroui/chip";
import {Tab} from "@heroui/react";
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";
import { useDisclosure } from "@heroui/react";

export default function IndexPage() {

  const [clicked, setClick] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<string>("experience");
  const email = "huynhbaohuy130333@gmail.com";
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const techSkills = [
    // Languages
    { name: "JavaScript", icon: faJs, textCol: "text-yellow-400" },
    { name: "TypeScript", icon: faJs, textCol: "text-blue-500" },
    { name: "Java", icon: faJava, textCol: "text-red-500" },
    { name: "Python", icon: faPython, textCol: "text-yellow-400" },
    { name: "C#", icon: faHashtag, textCol: "text-purple-500" }, // custom icon likely
    { name: "SQL", icon: faDatabase, textCol: "text-orange-400" },
      { name: "HTML", icon: faHtml5, textCol: "text-orange-500" },
      { name: "CSS", icon: faCss, textCol: "text-blue-400" },
    
      // Frameworks & Libraries
      { name: "React.js", icon: faReact, textCol: "text-blue-400" },
      { name: "Vite", icon: faV, textCol: "text-yellow-300" }, // swap for custom
      { name: "Node.js", icon: faNode, textCol: "text-green-400" },
      { name: "ASP.NET Core", icon: faMicrosoft, textCol: "text-blue-600" },
      { name: "Express.js", icon: faServer, textCol: "text-gray-400" },
      { name: "TailwindCSS", icon: faWind, textCol: "text-teal-400" }, // custom
      { name: "jQuery", icon: faCode, textCol: "text-blue-500" },
      { name: "EJS", icon: faCode, textCol: "text-gray-500" },
      { name: "Bootstrap", icon: faBootstrap, textCol: "text-purple-500" },
      { name: "Unity", icon: faUnity, textCol: "text-gray-400" },
    
      // Technologies
      { name: "Git", icon: faGitAlt, textCol: "text-red-500" },
      { name: "GitHub", icon: faGithub, textCol: "text-gray-300" },
      { name: "MongoDB", icon: faLeaf, textCol: "text-green-500" }, // custom
      { name: "PostgreSQL", icon: faDatabase, textCol: "text-blue-500" },
      { name: "Firebase", icon: faFire, textCol: "text-yellow-500" }, // custom
      { name: "Redis", icon: faDatabase, textCol: "text-red-500" },
      { name: "Visual Studio", icon: faMicrosoft, textCol: "text-blue-500" },
/*       { name: "Vercel", icon: faV, textCol: "text-white" }, // custom
      { name: "Render", icon: faCloud, textCol: "text-indigo-400" },
      { name: "WordPress", icon: faWordpress, textCol: "text-blue-400" } */
    ];

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
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
              {/* <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div> */}
              <Card isBlurred={true} shadow="sm" isHoverable={!clicked} isPressable={true} 
              className="border-1 focus:ring-0 focus:ring-offset-0 border-gray-600 md:grid md:grid-cols-[1fr_auto_2fr] flex flex-col 
              justify-center gap-5 p-5 md:w-xl"
              onClick={() => {
                setClick(true);
              }}>
                  <CardBody className="flex flex-col justify-center items-center">
                    <Avatar size="lg" className="w-20 h-20 mb-5" src="" />
                    <div className="flex flex-col gap-2 mb-5">
                      <h1 className="text-gray-400">
                      <FontAwesomeIcon icon={faLocationDot} /> Kirksville, MO</h1>
                      <h1 className="text-gray-400">
                      <FontAwesomeIcon icon={faLocationDot} /> San Jose, CA</h1>
                    </div>
                    <div className="flex flex-row gap-2 text-xl">

                      <a href="mailto:huynhbaohuy130333@gmail.com" onClick={handleCopy}
                      className="hover:scale-130 hover:text-red-300 ease-in-out transition-all duration-150">
                      <FontAwesomeIcon icon={faEnvelope} /></a>
                      <a href="https://github.com/baohuy1303" target="_blank"
                      className="hover:scale-130 hover:text-gray-500 ease-in-out transition-all duration-150">
                      <FontAwesomeIcon icon={faGithub} /></a>
                      <a href="https://www.linkedin.com/in/hbhuy/" target="_blank"
                      className="hover:scale-130 hover:text-blue-400 ease-in-out transition-all duration-150">
                      <FontAwesomeIcon icon={faSquareLinkedin} /></a>
                    
                    </div>
                  </CardBody>
                  <div className="w-px bg-gray-300 mx-auto" />
                  <CardBody className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-2">Huy B. Huynh</h1>
                    <h2 className="text-lg italic">Fullstack - Backend - Frontend</h2>
                    <h3 className="text-gray-400 text-sm italic mb-5">CS 29' Truman State University</h3>
                    <div className="text-md">
                      <p>• Aspiring <span className={`ease-in-out transition-all duration-250 ${clicked ? `bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500` : `text-white`}`}>Full Stack Software Engineer</span></p>
                      <p>• Impactful <span className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent` : `text-white`}`}>web apps</span> that brings <span className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent` : `text-white`}`}>value</span></p>
                      <p>• Game dev & photography for the <span className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent` : `text-white`}`}>vibes :)</span></p>
                    </div>
                  </CardBody>
              </Card>
          </section>

          <section className="flex flex-col gap-4 py-8 md:py-10 z-10">
            <h1 className="text-3xl font-bold mb-2 self-baseline">Tech stack</h1>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
            {techSkills.map((skill, index) => (
              <Chip
                key={index}
                variant="shadow"
                radius="sm"
                size="lg"
                classNames={{
                  base: "border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-4 px-1",
                  content: `text-md font-medium ${skill.textCol} group-hover:text-white`
                }}
                className="group hover:bg-opacity-80 transition-all duration-200"
                style={{
                  background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))`,
                }}
              >
                <div className="flex items-center gap-2 px-2">
                  <FontAwesomeIcon icon={skill.icon} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>{skill.name}</span>
                </div>
              </Chip>
            ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 py-8 md:py-10">
            <h1 className="text-3xl font-bold mb-3 self-baseline">Experience</h1>
            
            <Tabs aria-label="Tabs variants" variant="bordered" fullWidth={true}
            onSelectionChange={(key) => setSelected(String(key))}
             className="w-full justify-center items-center" size="md" radius="md" 
             motionProps={{
              initial: { opacity: 0, x: -10, scale: 0.9 },
              animate: { opacity: 1, x: 0, scale: 1 },
              exit: { opacity: 0, x: -10, scale: 0.9 },
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            selectedKey={selected}>
              <Tab key="experience" title={<><FontAwesomeIcon icon={faBriefcase} /> Experience & Activities</>}>
              <div className="flex flex-col">
                {/* NaNi Kids */}
                <Card className="rounded-t-2xl border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-3" radius="none"
                isHoverable={true} isPressable={true} isBlurred={true} onPress={onOpen}>
                <CardBody className="grid grid-cols-3 justify-center items-center" >
                  <img src="Logo_2_PNG.png" alt="" className="w-18 mb-5 justify-self-center"/>
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="flex flex-col mb-4">
                      <h2 className="text-gray-400 text-sm">July 2025 - Present</h2>
                      <h1 className="text-xl font-bold">Software Engineer</h1>
                      <h2 className="text-gray-400 text-sm">NaNi Kids Futsal - Soccer Academy</h2>
                    </div>
                    <div className="flex flex-col text-[0.8125rem] mb-2">
                      <p>MERN Stack Web Development; API Design & Authentication; Database Migration & Automation; Admin Dashboard & Media Integration; Attendance & Tuition Management Optimization.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur" placement="center">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-row gap-4 items-center">
                      <img src="Logo_2_PNG.png" alt="" className="w-8"/>
                      NaNi Kids Futsal - Software Engineer</ModalHeader>
                    <ModalBody>
                      <div className="text-sm text-gray-400 flex flex-row justify-center items-center gap-10 mb-1">
                        <div className="text-blue-500"><FontAwesomeIcon icon={faReact} /> React.js</div>
                        <div className="text-green-500"><FontAwesomeIcon icon={faNode} /> Node.js</div>
                        <div className="text-gray-500"><FontAwesomeIcon icon={faServer} /> Express.js</div>
                        <div className="text-green-500"><FontAwesomeIcon icon={faLeaf} /> MongoDB</div>
                      </div>
                      <div className="flex flex-col gap-2 mb-5">
                            <p>
                            • Engineered and migrated legacy codebase to a MERN-stack website for 1200+ soccer students, reducing
                            admin workload on attendance, tuition, and student management by 80% and saving $1000+ monthly.
                            </p>
                            <p>
                          • Constructed 45+ RESTful APIs and JWT auth for 3 roles using Node.js and Express, led migration of 2.9k+
                          documents to a new schema via scripting and algorithms, and integrated Cloudinary for secure media storage.
                          </p>
                          <p>
                          • Automated daily attendance tracking via MongoDB aggregation pipelines, saving 25+ hours/month at 99.9%
                          accuracy, and streamlined tuition reporting process by 90% via responsive and filterable dashboard.
                          </p>
                      </div>
                      <div>
                        <img src="" alt="" />
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

              {/* Google Student */}
              <Card className="border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-2" radius="none"
                isHoverable={true} isPressable={true} isBlurred={true}>
                <CardBody className="grid grid-cols-3 justify-center items-center" >
                  <Avatar size="lg" className="w-22 h-22 mb-5 justify-self-center" src="" />
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="flex flex-col mb-4">
                      <h2 className="text-gray-400 text-sm">July 2025 - Present</h2>
                      <h1 className="text-xl font-bold">Project Lead</h1>
                      <h2 className="text-gray-400 text-sm">Google Student Developer Club</h2>
                    </div>
                    <div className="flex flex-col text-[0.8125rem] mb-2">
                      <p>Project & Team Management; Technical Workshops & Mentorship for 40+ students; Web Development (HTML/CSS, React.js, Node.js); Real-world Project Guidance.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="rounded-b-2xl border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-1" radius="none"
                isHoverable={true} isPressable={true} isBlurred={true}>
                <CardBody className="grid grid-cols-3 justify-center items-center" >
                  <Avatar size="lg" className="w-22 h-22 mb-5 justify-self-center" src="" />
                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="flex flex-col mb-4">
                      <h2 className="text-gray-400 text-sm">June 2019 - Present</h2>
                      <h1 className="text-xl font-bold">Founder - Developer</h1>
                      <h2 className="text-gray-400 text-sm">BillyMan Game Dev</h2>
                    </div>
                    <div className="flex flex-col text-[0.8125rem] mb-2">
                      <p>Game Development & Release (Unity, C#, GMS2, Blender); YouTube Tutorials & Community Growth; Competitive Game Jam Participation.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              </div>              
              </Tab>
              <Tab key="education" title={<><FontAwesomeIcon icon={faGraduationCap} /> Education</>}>
              <div>
                <Card>
                  <CardBody>
                    <h1>Education</h1>
                  </CardBody>
                </Card>
              </div>
              </Tab>
            </Tabs>
          </section>
          </>
  );
}
