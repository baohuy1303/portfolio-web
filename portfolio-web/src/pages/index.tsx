import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {
    Button,
    Card,
    CardBody,
    Divider,
    Tabs,
    CardFooter,
    CardHeader,
} from '@heroui/react';
import {Avatar} from "@heroui/react";
import { Image } from "@heroui/react";

import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBlender,
    faBriefcase,
    faCamera,
    faCubes,
    faEnvelope,
    faExternalLink,
    faExternalLinkAlt,
    faFileImage,
    faFilm,
    faGamepad,
    faGraduationCap,
    faHashtag,
    faLocationDot,
    faLocationPin,
    faMapPin,
    faRobot,
    faServer,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import {faCss, faHtml5, faSquareLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

export default function IndexPage() {

  const navigate = useNavigate();
  const [clicked, setClick] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<string>("experience");
  const email = "huynhbaohuy130333@gmail.com";
  const [isOpen, setIsOpen] = useState<string | null>(null);



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
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:pb-10 md:pt-2">
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
              <Card
                  isBlurred={true}
                  shadow="sm"
                  isHoverable={!clicked}
                  isPressable={true}
                  className="border-1 focus:ring-0 focus:ring-offset-0 border-gray-600 md:grid md:grid-cols-[1fr_auto_2fr] flex flex-col 
              justify-center gap-5 p-5 md:w-xl"
                  onClick={() => {
                      setClick(true);
                  }}
              >
                  <CardBody className="flex flex-col justify-center items-center">
                      <Avatar
                          size="lg"
                          className="w-20 h-20 mb-5"
                          src="Avatar2.webp"
                      />
                      <div className="flex flex-col gap-2 mb-5">
                          <h1 className="text-gray-400">
                              <FontAwesomeIcon icon={faLocationDot} />{' '}
                              Kirksville, MO
                          </h1>
                          <h1 className="text-gray-400">
                              <FontAwesomeIcon icon={faLocationDot} /> San Jose,
                              CA
                          </h1>
                      </div>
                      <div className="flex flex-row gap-2 text-xl">
                          <a
                              href="mailto:huynhbaohuy130333@gmail.com"
                              onClick={handleCopy}
                              className="hover:scale-130 hover:text-red-300 ease-in-out transition-all duration-150"
                          >
                              <FontAwesomeIcon icon={faEnvelope} />
                          </a>
                          <a
                              href="https://github.com/baohuy1303"
                              target="_blank"
                              className="hover:scale-130 hover:text-gray-500 ease-in-out transition-all duration-150"
                          >
                              <FontAwesomeIcon icon={faGithub} />
                          </a>
                          <a
                              href="https://www.linkedin.com/in/hbhuy/"
                              target="_blank"
                              className="hover:scale-130 hover:text-blue-400 ease-in-out transition-all duration-150"
                          >
                              <FontAwesomeIcon icon={faSquareLinkedin} />
                          </a>
                      </div>
                  </CardBody>
                  <div className="w-px bg-gray-300 mx-auto" />
                  <CardBody className="flex flex-col items-center">
                      <h1 className="text-3xl font-bold mb-2">Huy B. Huynh</h1>
                      <h2 className="text-lg italic">
                          Fullstack - Backend - Frontend
                      </h2>
                      <h3 className="text-gray-400 text-sm italic mb-5">
                          CS 29' Truman State University
                      </h3>
                      <div className="text-md">
                          <p>
                              • Aspiring{' '}
                              <span
                                  className={`ease-in-out transition-all duration-250 ${clicked ? `bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500` : `text-white`}`}
                              >
                                  Full Stack Software Engineer
                              </span>
                          </p>
                          <p>
                              • Impactful{' '}
                              <span
                                  className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent` : `text-white`}`}
                              >
                                  web apps
                              </span>{' '}
                              that brings{' '}
                              <span
                                  className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent` : `text-white`}`}
                              >
                                  value
                              </span>
                          </p>
                          <p>
                              • Game dev & photography for the{' '}
                              <span
                                  className={`ease-in-out transition-all duration-250 ${clicked ? `bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent` : `text-white`}`}
                              >
                                  vibes :)
                              </span>
                          </p>
                      </div>
                  </CardBody>
              </Card>
          </section>

          <section className="flex flex-col gap-4 py-8 md:py-10 z-10">
              <h1 className="text-3xl font-bold mb-2 self-baseline">
                  Tech stack
              </h1>
              <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                  {techSkills.map((skill, index) => (
                      <Chip
                          key={index}
                          variant="shadow"
                          radius="sm"
                          size="lg"
                          classNames={{
                              base: 'border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-4 px-1',
                              content: `text-md font-medium ${skill.textCol} group-hover:text-white`,
                          }}
                          className="group hover:bg-opacity-80 transition-all duration-200"
                          style={{
                              background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))`,
                          }}
                      >
                          <div className="flex items-center gap-2 px-2">
                              <FontAwesomeIcon
                                  icon={skill.icon}
                                  className="group-hover:scale-110 transition-transform duration-200"
                              />
                              <span>{skill.name}</span>
                          </div>
                      </Chip>
                  ))}
              </div>
          </section>

          <section className="flex flex-col gap-4 py-8 md:py-10">
              <h1 className="text-3xl font-bold mb-3 self-baseline">
                  Experience
              </h1>

              <Tabs
                  aria-label="Tabs variants"
                  variant="bordered"
                  fullWidth={true}
                  onSelectionChange={(key) => setSelected(String(key))}
                  className="w-full justify-center items-center"
                  size="md"
                  radius="md"
                  motionProps={{
                      initial: { opacity: 0, x: -10, scale: 0.9 },
                      animate: { opacity: 1, x: 0, scale: 1 },
                      exit: { opacity: 0, x: -10, scale: 0.9 },
                      transition: { duration: 0.3, ease: 'easeInOut' },
                  }}
                  selectedKey={selected}
              >
                  <Tab
                      key="experience"
                      title={
                          <>
                              <FontAwesomeIcon icon={faBriefcase} /> Experience
                              & Activities
                          </>
                      }
                  >
                      <div className="flex flex-col">
                          {/* NaNi Kids */}
                          <Card
                              className="rounded-t-2xl border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-3"
                              radius="none"
                              isHoverable={true}
                              isPressable={true}
                              isBlurred={true}
                              onPress={() => setIsOpen('nanikids')}
                          >
                              <CardBody className="grid grid-cols-3 gap-2 md:gap-0 justify-center items-center">
                                  <div className="justify-self-center">
                                      <Image
                                          src="Logo_2_PNG.png"
                                          alt=""
                                          isBlurred
                                          width={80}
                                          className="w-17 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              July 2025 - Present
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Software Engineer
                                          </h1>
                                          <h2 className="text-gray-400 text-sm">
                                              NaNi Kids Futsal - Soccer Academy
                                          </h2>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2">
                                          <p>
                                              MERN Stack Web Development; API
                                              Design & Authentication; Database
                                              Migration & Automation; Admin
                                              Dashboard & Media Integration;
                                              Attendance & Tuition Management
                                              Optimization.
                                          </p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Modal
                              isOpen={isOpen === 'nanikids'}
                              onOpenChange={() => setIsOpen(null)}
                              size="4xl"
                              backdrop="blur"
                              placement="center"
                              scrollBehavior="inside"
                          >
                              <ModalContent>
                                  {(onClose) => (
                                      <>
                                          <ModalHeader className="flex flex-row gap-4 items-center">
                                              <img
                                                  src="Logo_2_PNG.png"
                                                  alt=""
                                                  className="w-8"
                                              />
                                              NaNi Kids Futsal - Software
                                              Engineer
                                          </ModalHeader>
                                          <ModalBody>
                                              <div className="text-sm text-gray-400 flex flex-row justify-center items-center gap-5 md:gap-10 mb-1">
                                                  <div className="text-blue-500">
                                                      <FontAwesomeIcon
                                                          icon={faReact}
                                                      />{' '}
                                                      React.js
                                                  </div>
                                                  <div className="text-green-500">
                                                      <FontAwesomeIcon
                                                          icon={faNode}
                                                      />{' '}
                                                      Node.js
                                                  </div>
                                                  <div className="text-gray-500">
                                                      <FontAwesomeIcon
                                                          icon={faServer}
                                                      />{' '}
                                                      Express.js
                                                  </div>
                                                  <div className="text-green-500">
                                                      <FontAwesomeIcon
                                                          icon={faLeaf}
                                                      />{' '}
                                                      MongoDB
                                                  </div>
                                              </div>
                                              <Divider orientation="horizontal" />
                                              <div className="flex flex-col gap-2 mb-5">
                                                  <p>
                                                      • Engineered and{' '}
                                                      <span className="font-bold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
                                                          migrated legacy
                                                          codebase
                                                      </span>{' '}
                                                      to a MERN-stack website
                                                      for{' '}
                                                      <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                                                          1200+ soccer students
                                                      </span>
                                                      , reducing admin workload
                                                      on attendance, tuition,
                                                      and student management by{' '}
                                                      <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                                                          80%
                                                      </span>{' '}
                                                      and saving{' '}
                                                      <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                                                          $1000+
                                                      </span>{' '}
                                                      monthly.
                                                  </p>
                                                  <p>
                                                      • Constructed{' '}
                                                      <span className="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                                                          45+
                                                      </span>{' '}
                                                      RESTful APIs and JWT auth
                                                      for 3 roles using Node.js
                                                      and Express, led migration
                                                      of{' '}
                                                      <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
                                                          2.9k+
                                                      </span>{' '}
                                                      documents to a new schema
                                                      via scripting and
                                                      algorithms, and integrated{' '}
                                                      <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">
                                                          Cloudinary
                                                      </span>{' '}
                                                      for secure media storage.
                                                  </p>
                                                  <p>
                                                      • Automated daily
                                                      attendance tracking via
                                                      MongoDB aggregation
                                                      pipelines, saving{' '}
                                                      <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
                                                          25+ hours/month
                                                      </span>{' '}
                                                      at{' '}
                                                      <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                                                          99.9%
                                                      </span>{' '}
                                                      accuracy, and streamlined
                                                      tuition reporting process
                                                      by{' '}
                                                      <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                                                          90%
                                                      </span>{' '}
                                                      via responsive and
                                                      filterable dashboard.
                                                  </p>
                                              </div>
                                              <div>
                                                  <p className="text-sm">
                                                      <span className="font-bold">
                                                          Skills learned and
                                                          used:{' '}
                                                      </span>{' '}
                                                      System Design • Database
                                                      Optimization • Process
                                                      Automation • Cost
                                                      Efficiency • Scalability •
                                                      Problem-Solving with
                                                      Algorithms • Project
                                                      Leadership • Full-Stack
                                                      Engineering • Corporate
                                                      Collaboration
                                                  </p>
                                              </div>
                                              <Image
                                                  src="/nanikids/TapThe.webp"
                                                  alt=""
                                                  className="mb-4 w-full rounded-lg"
                                              />
                                              <div className="columns-1 md:columns-3 gap-4">
                                                  <Image
                                                      src="/nanikids/cup15.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/DSC_4085.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/dsc00257.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/HY_00682.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/dsc08099.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/full-field-3.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/DSC01331.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/AdminWeb1.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/nanikids/AdminWeb2.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                              </div>
                                          </ModalBody>
                                          <ModalFooter>
                                              <Button
                                                  color="danger"
                                                  variant="light"
                                                  onPress={onClose}
                                                  className="hover:scale-110 transition-transform duration-100"
                                                  radius="sm"
                                              >
                                                  Close
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="solid"
                                                  isDisabled
                                                  radius="sm"
                                                  className="cursor-not-allowed"
                                              >
                                                  Developing new landing page
                                              </Button>
                                          </ModalFooter>
                                      </>
                                  )}
                              </ModalContent>
                          </Modal>

                          {/* Google Student */}
                          <Card
                              className="border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-2"
                              radius="none"
                              isHoverable={true}
                              isPressable={true}
                              isBlurred={true}
                              onPress={() => setIsOpen('gdsc')}
                          >
                              <CardBody className="grid grid-cols-3 justify-center items-center gap-2 md:gap-0">
                                  <div className="justify-self-center">
                                      <Image
                                          src="GDSC.png"
                                          alt=""
                                          isBlurred
                                          width={90}
                                          radius="full"
                                          className="w-18 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              July 2025 - Present
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Project Lead
                                          </h1>
                                          <h2 className="text-gray-400 text-sm">
                                              Google Student Developer Club
                                          </h2>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2">
                                          <p>
                                              Project & Team Management;
                                              Technical Workshops & Mentorship
                                              for 40+ students; Web Development
                                              (HTML/CSS, React.js, Node.js);
                                              Real-world Project Guidance.
                                          </p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Modal
                              isOpen={isOpen === 'gdsc'}
                              onOpenChange={() => setIsOpen(null)}
                              size="4xl"
                              backdrop="blur"
                              placement="center"
                              scrollBehavior="inside"
                          >
                              <ModalContent>
                                  {(onClose) => (
                                      <>
                                          <ModalHeader className="flex flex-row gap-4 items-center">
                                              <img
                                                  src="GDSC.png"
                                                  alt=""
                                                  className="w-8 rounded-full"
                                              />
                                              Google Student Developer Club -
                                              Project Lead
                                          </ModalHeader>
                                          <ModalBody>
                                              <div className="text-sm text-gray-400 flex flex-row justify-center items-center gap-5 md:gap-10 mb-1">
                                                  <div className="text-orange-500">
                                                      <FontAwesomeIcon
                                                          icon={faHtml5}
                                                      />{' '}
                                                      HTML
                                                  </div>
                                                  <div className="text-blue-500">
                                                      <FontAwesomeIcon
                                                          icon={faCss}
                                                      />{' '}
                                                      CSS
                                                  </div>
                                                  <div className="text-blue-500">
                                                      <FontAwesomeIcon
                                                          icon={faReact}
                                                      />{' '}
                                                      React.js
                                                  </div>
                                                  <div className="text-green-500">
                                                      <FontAwesomeIcon
                                                          icon={faNode}
                                                      />{' '}
                                                      Node.js
                                                  </div>
                                              </div>
                                              <Divider orientation="horizontal" />
                                              <div className="flex flex-col gap-2 mb-5">
                                                  <p>
                                                      • Led end-to-end planning
                                                      and execution of software
                                                      projects and tech
                                                      initiatives and managed
                                                      team workflows.
                                                  </p>
                                                  <p>
                                                      • Facilitated technical
                                                      workshops and guided <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">40+</span> students in mastering web
                                                      technologies <span className="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">(HTML/CSS,
                                                      React.js, Node.js)</span>,
                                                      enabling them to build
                                                      real-world projects and
                                                      strengthen coding skills.
                                                  </p>
                                              </div>
                                              <div className="mb-5 ">
                                                  <p className="text-sm">
                                                      <span className="font-bold">
                                                          Skills learned and
                                                          used:{' '}
                                                      </span>
                                                      Cross-Functional
                                                      Collaboration & Team
                                                      Coordination • Project
                                                      planning and execution •
                                                      Team leadership •
                                                      Technical mentoring •
                                                      Workshop facilitation •
                                                      Curriculum design
                                                  </p>
                                              </div>
                                              <div className="flex flex-col justify-center items-center">
                                                  <Image
                                                      src="/gdg/GDGTruman.webp"
                                                      alt=""
                                                      className="mb-4 rounded-lg"
                                                  width={500}
                                              />
                                              <Image
                                                  src="/gdg/Sponsors.webp"
                                                  alt=""
                                                  className="mb-4 rounded-lg"
                                                  width={500}
                                              />
                                              </div>
                                          </ModalBody>
                                          <ModalFooter>
                                              <Button
                                                  color="danger"
                                                  variant="light"
                                                  onPress={onClose}
                                                  className="hover:scale-110 transition-transform duration-100"
                                                  radius="sm"
                                              >
                                                  Close
                                              </Button>
                                              <Button
                                                  color="primary"
                                                  variant="solid"
                                                  onPress={() =>
                                                      window.open(
                                                          'https://gdg.community.dev/gdg-on-campus-truman-state-university-kirksville-united-states/',
                                                          '_blank'
                                                      )
                                                  }
                                                  className="hover:scale-110 transition-transform duration-100"
                                                  radius="sm"
                                              >
                                                  GDG Website <FontAwesomeIcon icon={faExternalLinkAlt} />
                                              </Button>
                                          </ModalFooter>
                                      </>
                                  )}
                              </ModalContent>
                          </Modal>

                          {/* BillyMan Game Dev */}
                          <Card
                              className="border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-1"
                              radius="none"
                              isHoverable={true}
                              isPressable={true}
                              isBlurred={true}
                              onPress={() => setIsOpen('billy')}
                          >
                              <CardBody className="grid grid-cols-3 justify-center items-center gap-2 md:gap-0">
                                  <div className="justify-self-center">
                                      <Image
                                          src="billy150x150.png"
                                          alt=""
                                          isBlurred
                                          width={90}
                                          radius="full"
                                          className="w-18 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              June 2019 - Present
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Founder - Developer
                                          </h1>
                                          <h2 className="text-gray-400 text-sm">
                                              BillyMan Game Dev
                                          </h2>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2">
                                          <p>
                                              Game Development & Release (Unity,
                                              C#, GMS2, Blender); YouTube
                                              Tutorials & Community Growth;
                                              Competitive Game Jam
                                              Participation.
                                          </p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Modal
                              isOpen={isOpen === 'billy'}
                              onOpenChange={() => setIsOpen(null)}
                              size="4xl"
                              backdrop="blur"
                              placement="center"
                              scrollBehavior="inside"
                          >
                              <ModalContent>
                                  {(onClose) => (
                                      <>
                                          <ModalHeader className="flex flex-row gap-4 items-center">
                                              <img
                                                  src="billy150x150.png"
                                                  alt=""
                                                  className="w-8 rounded-full"
                                              />
                                              BillyMan Game Dev - Founder &
                                              Developer
                                          </ModalHeader>
                                          <ModalBody>
                                              <div className="text-sm text-gray-400 flex flex-row justify-center items-center gap-5 md:gap-10 mb-1">
                                                  <div className="text-purple-500">
                                                      <FontAwesomeIcon
                                                          icon={faHashtag}
                                                      />{' '}
                                                      C#
                                                  </div>
                                                  <div className="text-gray-300">
                                                      <FontAwesomeIcon
                                                          icon={faUnity}
                                                      />{' '}
                                                      Unity
                                                  </div>
                                                  <div className="text-purple-400">
                                                      <FontAwesomeIcon
                                                          icon={faVideo}
                                                      />{' '}
                                                      Premiere Pro
                                                  </div>
                                                  <div className="text-orange-500">
                                                      <FontAwesomeIcon
                                                          icon={faCubes}
                                                      />{' '}
                                                      Blender
                                                  </div>

                                              </div>
                                              <Divider orientation="horizontal" />
                                              <div className="flex flex-col gap-2 mb-5">
                                                  <p>
                                                      • Built and scaled a game
                                                      development channel by
                                                      producing <span className="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">30+</span> tutorials
                                                      and development videos,
                                                      attracting <span className="font-bold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">85k+</span> views, and
                                                      growing a community of
                                                      <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent"> 700+ subscribers.</span>
                                                  </p>
                                                  <p>
                                                      • Designed and released
                                                      multiple games on Itch.io
                                                      using Unity, C#, GMS 2 and
                                                      Blender, earning <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">4,800+ views and 2,200+ plays </span>and securing <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">multiple Top-10 finishes</span> in competitive international Game Jams.
                                                  </p>
                                              </div>
                                              <div className="mb-5">
                                                  <p className="text-sm">
                                                      <span className="font-bold">
                                                          Skills learned and
                                                          used:{' '}
                                                      </span>{' '}
                                                      Game Design, Development &
                                                      Testing • Collaborative
                                                      Teamwork & Agile
                                                      Development •
                                                      High-Pressure Game Jam
                                                      Experience (2–3 Day
                                                      Sprints) • Content
                                                      Creation & Video
                                                      Production • Community
                                                      Building & Engagement
                                                  </p>
                                              </div>
                                              <div className="flex flex-col justify-center items-center gap-2">
                                                  <Image
                                                      src="/ytbgame/game1.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                  />
                                                  <Image
                                                      src="/ytbgame/game2.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                  />
                                                    <Image
                                                      src="/ytbgame/ytb1.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      
                                                  />
                                              </div>
                                          </ModalBody>
                                          <ModalFooter>
                                              <Button
                                                  color="danger"
                                                  variant="light"
                                                  radius="sm"
                                                  onPress={onClose}
                                                  className="hover:scale-110 transition-transform duration-100"
                                              >
                                                  Close
                                              </Button>
                                              <Button
                                                  color="danger"
                                                  variant="solid"
                                                  onPress={() =>
                                                      window.open(
                                                          'https://www.youtube.com/@billyman',
                                                          '_blank'
                                                      )
                                                  }
                                                  className="hover:scale-110 transition-transform duration-100"
                                                  radius="sm"
                                              >
                                                  YouTube <FontAwesomeIcon icon={faExternalLinkAlt} />
                                              </Button>
                                              <Button
                                                  color="warning"
                                                  variant="solid"
                                                  onPress={() =>
                                                      window.open(
                                                          'https://billyman.itch.io/',
                                                          '_blank'
                                                      )
                                                  }
                                                  className="hover:scale-110 transition-transform duration-100"
                                                  radius="sm"
                                              >
                                                  Games Page <FontAwesomeIcon icon={faExternalLinkAlt} />
                                              </Button>
                                          </ModalFooter>
                                      </>
                                  )}
                              </ModalContent>
                          </Modal>

                          <Card
                              className="rounded-b-2xl border-1 border-gray-600 hover:scale-105 transition-transform duration-200 py-3 px-1 z-1"
                              radius="none"
                              isHoverable={true}
                              isPressable={true}
                              isBlurred={true}
                              onPress={() => setIsOpen('63')}
                          >
                              <CardBody className="grid grid-cols-3 justify-center items-center gap-2 md:gap-0">
                                  <div className="justify-self-center">
                                      <Image
                                          src="63TRon.jpg"
                                          alt=""
                                          isBlurred
                                          width={90}
                                          radius="full"
                                          className="w-18 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              October 2022 - May 2025
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Co-Head of Media
                                          </h1>
                                          <h2 className="text-gray-400 text-sm">
                                              63 Cassette
                                          </h2>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2">
                                          <p>
                                              Video Production & Photography
                                              (Team Leadership, Post-Production
                                              Workflow); Event Content Creation
                                              & Sponsorships; Social Media
                                              Growth & Analytics.
                                          </p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Modal
                              isOpen={isOpen === '63'}
                              onOpenChange={() => setIsOpen(null)}
                              size="4xl"
                              backdrop="blur"
                              placement="center"
                              scrollBehavior="inside"
                          >
                              <ModalContent>
                                  {(onClose) => (
                                      <>
                                          <ModalHeader className="flex flex-row gap-4 items-center">
                                              <img
                                                  src="63TRon.jpg"
                                                  alt=""
                                                  className="w-8 rounded-full"
                                              />
                                              63 Cassette - Co-Head of Media
                                          </ModalHeader>
                                          <ModalBody>
                                              <div className="text-sm text-gray-400 flex flex-row justify-center items-center gap-5 md:gap-10 mb-1">
                                                  <div className="text-purple-500">
                                                      <FontAwesomeIcon
                                                          icon={faVideo}
                                                      />{' '}
                                                      Premiere Pro
                                                  </div>
                                                  <div className="text-blue-500">
                                                      <FontAwesomeIcon
                                                          icon={faCamera}
                                                      />{' '}
                                                      Photoshop
                                                  </div>
                                                  <div className="text-gray-400">
                                                      <FontAwesomeIcon
                                                          icon={faFilm}
                                                      />{' '}
                                                      CapCut
                                                  </div>
                                                  <div className="text-blue-300">
                                                      <FontAwesomeIcon
                                                          icon={faFileImage}
                                                      />{' '}
                                                      Lightroom
                                                  </div>
                                              </div>
                                              <Divider orientation="horizontal" />
                                              <div className="flex flex-col gap-2 mb-5">
                                                  <p>
                                                      • Co-led video production and photography for school events, managing a student media team of <span className="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">5 members</span> and
                                                      overseeing post-production workflow.
                                                  </p>
                                                  <p>
                                                      • Secured <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">$3,000+</span> in sponsorships and grew Facebook to <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">11K+ followers</span> by producing strategic event content
                                                      with Premiere Pro, Photoshop batch scripting, and content analytics.
                                                  </p>
                                              </div>
                                              <div className="mb-5">
                                                  <p className="text-sm">
                                                      <span className="font-bold">
                                                          Skills learned and
                                                          used:{' '}
                                                      </span>{' '}
                                                      Video Production & Photography (Team Leadership, Post-Production Workflow); Event Content Creation & Sponsorships; Social Media Growth & Analytics.
                                                  </p>
                                              </div>
                                              <div className="columns-1 md:columns-3 gap-4">
                                                  <Image
                                                      src="/63/48 Bchuyen.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/434743656_1254444939105967_7842720612555236667_n.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/316679587_896720738211724_6990299099548636146_n.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/DSC_4560.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/IMG_0119.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/IMG_4983.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/IMG_9506.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/IMG_9937.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                                  <Image
                                                      src="/63/sports.webp"
                                                      alt=""
                                                      className="mb-4 w-full rounded-lg"
                                                      isBlurred
                                                  />
                                              </div>
                                          </ModalBody>
                                          <ModalFooter>
                                              <Button
                                                  color="danger"
                                                  variant="light"
                                                  onPress={onClose}
                                              >
                                                  Close
                                              </Button>
                                          </ModalFooter>
                                      </>
                                  )}
                              </ModalContent>
                          </Modal>
                      </div>
                  </Tab>
                  <Tab
                      key="education"
                      title={
                          <>
                              <FontAwesomeIcon icon={faGraduationCap} />{' '}
                              Education
                          </>
                      }
                  >
                      <div>
                          <Card
                              className="rounded-t-2xl border-1 border-gray-600 py-3 px-1 z-2"
                              radius="none"
                              isBlurred={true}
                              onPress={() => setIsOpen('gdsc')}
                          >
                              <CardBody className="grid grid-cols-3 justify-center items-center gap-2 md:gap-0">
                                  <div className="justify-self-center">
                                      <Image
                                          src="truman.png"
                                          alt=""
                                          isBlurred
                                          width={90}
                                          radius="full"
                                          className="w-18 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              August 2025 - May 2029
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Truman State University
                                          </h1>
                                          <h2 className="text-gray-400 text-[0.8125rem]">
                                              Bachelor of Science in Computer
                                              Science, Minor in Data Science
                                          </h2>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2 gap-2">
                                          <p>
                                              • <span className="font-bold">Relevant courseworks:</span> Foundations of CS I, Foundations
                                              of CS II (OOP, Data Structures),
                                              Computing Structures (Discrete
                                              Math, Algorithms), Calculus I,
                                              Calculus II
                                          </p>
                                          <p>• <span className="font-bold">SAT:</span> 1510/1600</p>
                                          <p>• <span className="font-bold">Awarded Presidential Honorary Scholarship (80% tuition)</span></p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Card
                              className="rounded-b-2xl border-1 border-gray-600 py-3 px-1 z-2"
                              radius="none"
                              isBlurred={true}
                              onPress={() => setIsOpen('gdsc')}
                          >
                              <CardBody className="grid grid-cols-3 justify-center items-center gap-2 md:gap-0">
                                  <div className="justify-self-center">
                                      <Image
                                          src="hht.webp"
                                          alt=""
                                          isBlurred
                                          width={90}
                                          radius="full"
                                          className="w-18 md:w-full"
                                      />
                                  </div>
                                  <div className="col-span-2 flex flex-col justify-center">
                                      <div className="flex flex-col mb-4">
                                          <h2 className="text-gray-400 text-sm">
                                              September 2022 - May 2025
                                          </h2>
                                          <h1 className="text-xl font-bold">
                                              Hoang Hoa Tham High School
                                          </h1>
                                      </div>
                                      <div className="flex flex-col text-[0.8125rem] mb-2 gap-2">
                                        <p>• <span className="font-bold">Varsity Team:</span> <br />Soccer, Volleyball</p>
                                        <p>• <span className="font-bold">Clubs:</span> <br />Soccer, Volleyball, Media, Hoa Phuong Do - Volunteering Club</p>
                                        <p>• <span className="font-bold">Awards:</span> <br /> <span className="font-bold">Bronze Medal</span> – The XXVIII Olympic 30/4 Contest, Regional Level (2024) • <span className="font-bold">1st Place</span> – English Debate Contest, School Level (2024) • <span className="font-bold">1st Place</span> – Olympic English Debate Contest, Municipal Level (2023) • <span className="font-bold">1st Place</span> – GenZ Xu Quang General Knowledge Questionnaire & Presentation (2023) • <span className="font-bold">1st Place</span> – City-Level Excellence Award in English (2022) • <span className="font-bold">3rd Place</span> – Engineering Science Contest, Municipal Level (2022) • <span className="font-bold">Awarded</span> – Le Van Hien Scholarship (2021–2022)</p>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                      </div>
                  </Tab>
              </Tabs>
          </section>

          <section className="flex flex-col gap-4 py-8 md:py-10 z-10">
              <h1 className="text-3xl font-bold mb-2 self-baseline">
                  Projects
              </h1>
              <div className="flex flex-col gap-5 justify-center items-center">
                  <Card
                      isFooterBlurred
                      className="w-full col-span-12 sm:col-span-7
              hover:scale-103 transition-all duration-150"
                  >
                      <Image
                          removeWrapper
                          alt="Relaxing app background"
                          className="z-0 w-full h-full object-cover"
                          src="/projs/Glow3.webp"
                      />
                      
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="md:block hidden text-xl font-bold">AI GLOW</h1>
                                  <div className="flex grow gap-4 items-center text-sm">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faReact} />{' '}
                                          React.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faNode} />{' '}
                                          Node.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faServer} />{' '}
                                          Express.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faFire} />{' '}
                                          Firebase
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faDatabase} />{' '}
                                          Redis
                                      </div>
                                  </div>
                              </div>
                              <Button isDisabled radius="full" size="md" className="md:block hidden"> 
                                  Work In Progress
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                        <h1 className="text-xl font-bold">AI GLOW</h1>
                        <Button isDisabled radius="full" size="md"> 
                                  Work In Progress
                        </Button>         
                  </div>

                  <Card
                      isFooterBlurred
                      className="w-full col-span-12 sm:col-span-7
            hover:scale-103 transition-all duration-150"
                  >
                      <Image
                          removeWrapper
                          alt="Relaxing app background"
                          className="z-0 w-full h-full object-cover"
                          src="/projs/Thumb.webp"
                      />
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="text-xl font-bold md:block hidden">
                                      GRADVISOR
                                  </h1>
                                  <div className="flex grow gap-4 items-center text-sm ">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faReact} />{' '}
                                          React.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faNode} />{' '}
                                          Node.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faServer} />{' '}
                                          Express.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faLeaf} />{' '}
                                          MongoDB
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faRobot} />{' '}
                                          ChatBot
                                      </div>
                                  </div>
                              </div>
                              <Button radius="full" size="md" onClick={() => window.open('https://score-aim-results-tracker.onrender.com/', '_blank')}
                                className="md:block hidden">
                                  Click for Demo
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                    <h1 className="text-xl font-bold">GRADVISOR</h1>
                    <Button radius="full" size="md" onClick={() => window.open('https://score-aim-results-tracker.onrender.com/', '_blank')}>
                      Click for Demo
                    </Button>
                  </div>

                  <Button radius="sm" size="md" variant="ghost" onClick={() => navigate('/projects')}>
                    View more projects <FontAwesomeIcon icon={faExternalLink} />
                  </Button>
              </div>
          </section>

          
      </>
  );
}
