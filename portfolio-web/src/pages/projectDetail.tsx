import { faAws, faPython, faJs, faNode, faReact, faUnity } from "@fortawesome/free-brands-svg-icons";
import { faCamera, faCodeCommit, faCodeCompare, faDatabase, faFire, faGamepad, faHashtag, faLeaf, faPaintBrush, faRobot, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Button, Image } from "@heroui/react";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  const PROJECTS: Record<string, { title: string; highlights: JSX.Element; techStack: {icon: FontAwesomeIconProps['icon']; name: string}[]; images: string[]; demoLink: JSX.Element }> = {
    
    "wiwi": {
      title: "WIWI",
      highlights: (
        <>
        <p>
  • Led a team of <span className="font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">4</span> to develop an <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">AI-powered resale and raffle marketplace</span> in 
  <span className="font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"> 24 hours</span>, combining 
  <span className="font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Node + FastAPI + AWS Bedrock </span> 
  to let users profit from used items while 
  <span className="font-bold bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent"> 70% </span> 
  of overflow revenue goes to charity.
</p>

<p>
  • Created <span className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">multi-agent AWS Strands pipelines </span> 
  for product verification, autofill, and chatbot automation (image checks, EXIF/web validation, dynamic pricing, trust scoring), cutting manual review by 
  <span className="font-bold bg-gradient-to-r from-fuchsia-500 to-pink-600 bg-clip-text text-transparent"> 90%+</span>.
</p>

<p>
  • Delivered a scalable MVP with <span className="font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Stripe</span> payments, 
  <span className="font-bold bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent"> AWS S3 </span>media storage, and 
  <span className="font-bold bg-gradient-to-r from-yellow-300 to-lime-400 bg-clip-text text-transparent"> cron-based</span> raffle automation, showcasing end-to-end AI orchestration, cloud scalability, and full-stack execution under pressure.
</p>
        </>
      ),
      techStack: [
        {icon: faJs, name: "TypeScript"},
        {icon: faReact, name: "React.js"},
        {icon: faPython, name: "Python"},
        {icon: faAws, name: "AWS"},
        {icon: faNode, name: "Node.js"},
        {icon: faServer, name: "Express.js"},
        {icon: faLeaf, name: "MongoDB"},
      ],
      images: ["/wiwi/WIWI1.webp", "/wiwi/WIWI2.webp", "/wiwi/WIWI3.jfif", "/wiwi/WIWI4.webp", "/wiwi/WIWI5.jfif.webp", "/wiwi/WIWI5.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://github.com/baohuy1303/wiwi-main', '_blank')}
          className="">
            Click for GitHub  
        </Button>
        </>
      )
    },
    "glow": {
      title: "AI GLOW",
      highlights: (
        <>
        <p>
        • Built a <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">full-stack SAT practice platform</span> with autosave and randomized test generation, enabling students to
        complete timed/untimed full-length or section tests in <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">&lt;3 clicks</span> with <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">100% </span>progress recovery across sessions.
        </p>
        <p>
        • Integrated AI explanations via <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">OpenAI API + Redis caching</span>, delivering instant feedback, estimated to reduce
        repeated-query latency by <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">∼85%</span>, and added <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">Chart.js </span>dashboards for score trends.
        </p>
        <p>
        • Developed admin workflows with <span className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Firebase Auth</span> and parsing for Image/PDF/Word via <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">tesseract.js</span> and
        <span className="font-bold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent"> pdf-parse</span>, supporting <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">∼1000 questions</span> per import, removing duplicates, and cutting manual entry by <span className="font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">∼90%</span>.
        </p>
        </>
      ),
      techStack: [
        {icon: faReact, name: "React.js"},
        {icon: faNode, name: "Node.js"},
        {icon: faServer, name: "Express.js"},
        {icon: faFire, name: "Firebase"},
        {icon: faDatabase, name: "Redis"},
      ],
      images: ["/projs/Glow3.webp", "/projs/Glow2.webp", "/projs/Glow1.webp"],
      demoLink: (
        <>
        <Button isDisabled radius="full" size="md"
          className="cursor-not-allowed">
            Work In Progress
        </Button>
        </>
      )
    },
    "gradvisor": {
      title: "GRADVISOR",
      highlights: (
        <>
        <p>
  • Architected and deployed a <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">full-stack academic tracker</span>, delivering real-time GPA analytics and a responsive
  dashboard with <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">&lt;1s</span> load times across devices.
</p>
<p>
  • Developed an <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">AI-powered academic advisor chatbot</span> leveraging <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">Gemini 2.5 Flash</span> to provide personalized
  grade insights and study recommendations, reducing <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">3–5 hours</span> of manual advising work per week.
</p>
<p>
  • Implemented end-to-end authentication and scalable APIs by integrating <span className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">JWT-based role access</span>, designing <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">13+ RESTful APIs</span> with Express.js, and deploying on Render with automated <span className="font-bold bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">GitHub CI/CD pipelines.</span>
</p>

        </>
      ),
      techStack: [
        {icon: faReact, name: "React.js"},
        {icon: faNode, name: "Node.js"},
        {icon: faServer, name: "Express.js"},
        {icon: faLeaf, name: "MongoDB"},
        {icon: faRobot, name: "ChatBot"},
      ],
      images: ["/projs/Thumb.webp", "/projs/ss3.webp", "/projs/ss8.webp", "/projs/ss1.webp", ], 
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://score-aim-results-tracker.onrender.com/', '_blank')}
          className="">
            Click for Demo
        </Button>
        </>
      )
    },
    "soccer-stats": {
      title: "Soccer Stats Explorer",
      highlights: (
        <>
        <p>
        • Developed a responsive soccer statistics web app deployed on Vercel, providing real-time data for <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">95+ European teams</span> by integrating TheSportsDB API with React Context API.
        </p>
        <p>
        • Built reusable UI components and advanced navigation with React Router, implementing search, filtering, and
        favoriting features by name and leagues that streamlined team discovery and optimized user experience.
        </p>
        </>
      ),
      techStack: [
        {icon: faReact, name: "React.js"},
        {icon: faCodeCommit, name: "Context API"},
        {icon: faCodeCompare, name: "React Router"},
      ],
      images: ["/projs/SoccerStats.webp", "/projs/soccer1.webp", "/projs/soccer2.webp", "/projs/soccer3.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://reactjs-football-pract.vercel.app/', '_blank')}
          className="">
            Click for Demo
        </Button>
        </>
      )
    },
    "wys": {
      title: "Will You Squid",
      highlights: (
        <>
        <p>
        • Programmed <span className="font-bold bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">AI pathfinding</span> with raycasts and dynamic grid navigation to mimic human-like decision-making and dodge player-placed obstacles.
        </p>
        <p>
        • Produced and integrated game art and UI assets and released a project video that reached <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">13K+ views and 470+ likes</span> on YouTube.
        </p>
        </>
      ),
      techStack: [
        {icon: faHashtag, name: "C#"},
        {icon: faUnity, name: "Unity"},
        {icon: faPaintBrush, name: "Aseprite"}
      ],
      images: ["/projs/wys.webp", "/projs/WYS 2.webp", "/projs/WYS 4.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://billyman.itch.io/will-you-squid', '_blank')}
          className="">
            Click for Demo
        </Button>
        
        </>
      )
    },
    "all-games": {
      title: "All Public Games",
      highlights: (
        <>
<p>
  • Designed and released multiple indie games on Itch.io using Unity, C#, GameMaker Studio 2, and Blender, reaching <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">4,800+ views</span> and <span className="font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">2,200+ plays</span> while achieving <span className="font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">multiple Top-10 finishes</span> in international Game Jams.
</p>
<p>
  • Implemented advanced gameplay mechanics including <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">soft body</span> and <span className="font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">ragdoll physics</span>, AI pathfinding with raycasts, dynamic grid navigation, and state management systems to simulate human-like decision-making and adaptive enemy behavior.
</p>
<p>
  • Collaborated in fast-paced, deadline-driven game jams, honing skills in rapid prototyping, iterative design, and cross-disciplinary problem-solving.
</p>
<p>
  • Specialized in building engaging player experiences through a mix of creative design, technical implementation, and polished visual assets.
</p>

        </>
      ),
      techStack: [
        {icon: faCodeCompare, name: "C#"},
        {icon: faUnity, name: "Unity"},
        {icon: faGamepad, name: "GMS 2"},
        {icon: faCamera, name: "Photoshop"},
        {icon: faPaintBrush, name: "Aseprite"},
      ],
      images: ["/projs/itchio.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://billyman.itch.io/', '_blank')}
          className="">
            Click for Demo
        </Button>
        </>
      )
    },
  };

  const project = (id && PROJECTS[id]) || {
    title: "Project Not Found",
    highlights: (
      <>
      <p>
      We couldn't find the project you're looking for.
      Please go back to the Projects page and try another card.
      </p>
      </>
    ),
    techStack: [],
    images: [],
    demoLink: (
      <>
      </>
    )
  };

  return (
    <>
      <section className="flex flex-col gap-4 py-8 md:pb-5 md:pt-2">
        <h1 className="text-3xl font-bold mb-1 self-baseline">{project.title}</h1>
        <div className="flex grow gap-4 items-center text-sm mb-5">
            {project.techStack.map((tech) => (
              <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                <FontAwesomeIcon icon={tech.icon} />
                {tech.name}
              </div>
            ))}
        </div>
        <div className="list-disc space-y-2 mb-5 flex flex-col gap-4">
          {project.highlights}
        </div>
        <div className="flex justify-center">
            {project.demoLink}
        </div>
      </section>

      <section className="flex flex-col gap-4 py-5 mb-10">
        <h2 className="text-2xl font-bold mb-3 self-baseline">Gallery</h2>
        <div className="columns-1 md:columns-2 gap-4 place-items-center">
          {project.images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Project image ${idx + 1}`}
              className="mb-4 w-full rounded-lg"
              isBlurred
            />
          ))}
        </div>
      </section>
    </>
  );
}

