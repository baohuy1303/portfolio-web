import { Image } from "@heroui/react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faServer, faFire, faDatabase, faCodeCompare, faLeaf, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNode, faUnity } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@heroui/react";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  const PROJECTS: Record<string, { title: string; highlights: JSX.Element; techStack: {icon: FontAwesomeIconProps['icon']; name: string}[]; images: string[]; demoLink: JSX.Element }> = {
    "glow": {
      title: "AI GLOW",
      highlights: (
        <>
        <p>
        • Built a full-stack SAT practice platform with autosave and randomized test generation, enabling students to
        complete timed/untimed full-length or section tests in &lt;3 clicks with 100% progress recovery across sessions.
        </p>
        <p>
        • Integrated AI explanations via OpenAI API + Redis caching, delivering instant feedback, estimated to reduce
        repeated-query latency by ∼85%, and added Chart.js dashboards for score trends.
        </p>
        <p>
        • Developed admin workflows with Firebase Auth and parsing for Image/PDF/Word via tesseract.js and
        pdf-parse, supporting 1000+ questions per import, removing duplicates, and cutting manual entry by &gt;90%.
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
        Web app to help students track and plan academic progress.
        React front-end with Node.js/Express APIs and MongoDB.
        Includes conversational assistant for guidance (ChatBot).
        Deployed demo available via Render.
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
      images: ["/projs/Thumb.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://gradvisor.onrender.com/', '_blank')}
          className="md:block hidden">
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
        Interactive explorer for soccer statistics using React.
        Leverages Context API and React Router for state/routing.
        Focus on clean UI and quick navigation between datasets.
        Deployed demo available.
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
      images: ["/projs/SoccerStats.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://soccer-stats-explorer.onrender.com/', '_blank')}
          className="md:block hidden">
            Click for Demo
        </Button>
        </>
      )
    },
    "will-you-squid": {
      title: "Will You Squid",
      highlights: (
        <>
        <p>
        2D game developed with Unity and C#.
        Pixel art created with Aseprite; emphasis on game feel.
        Public build available on itch.io.
        </p>
        </>
      ),
      techStack: [
        {icon: faUnity, name: "Unity"},
        {icon: faCodeCompare, name: "C#"},
      ],
      images: ["/projs/wys.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://will-you-squid.itch.io/will-you-squid', '_blank')}
          className="md:block hidden">
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
        Collection of publicly available games and prototypes.
        Built using Unity, GameMaker Studio 2, and custom tools.
        Art pipeline includes Photoshop and Aseprite.
        </p>
        </>
      ),
      techStack: [
        {icon: faUnity, name: "Unity"},
        {icon: faCodeCompare, name: "C#"},
      ],
      images: ["/projs/itchio.webp"],
      demoLink: (
        <>
        <Button radius="full" size="md" onClick={() => window.open('https://all-public-games.itch.io/all-public-games', '_blank')}
          className="md:block hidden">
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
      <Button radius="full" size="md" onClick={() => window.open('https://all-public-games.itch.io/all-public-games', '_blank')}
        className="md:block hidden">
          Click for Demo
      </Button>
      </>
    )
  };

  return (
    <>
      <section className="flex flex-col gap-4 py-8 md:pb-5 md:pt-2">
        <h1 className="text-3xl font-bold mb-3 self-baseline">{project.title}</h1>
        <div className="flex grow gap-4 items-center text-sm">
            {project.techStack.map((tech, idx) => (
              <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                <FontAwesomeIcon icon={tech.icon} />
                {tech.name}
              </div>
            ))}
        </div>
        <div className="list-disc space-y-2 mb-5">
          {project.highlights}
        </div>
        <div className="flex justify-center">
            {project.demoLink}
        </div>
      </section>

      <section className="flex flex-col gap-4 py-5 mb-10">
        <h2 className="text-2xl font-bold mb-3 self-baseline">Gallery</h2>
        <div className="columns-1 md:columns-2 gap-4">
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

