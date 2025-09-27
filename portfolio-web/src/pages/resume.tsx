import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button, Image } from "@heroui/react";

export default function ResumePage() {
  return (
    <>
    <div className="flex justify-center items-center mb-10">
    <Button onClick={() => window.open("/resume/HuyHuynhResumeFM.pdf", "_blank")} size="lg" variant="shadow" color="primary" className="hover:scale-110 ease-in-out transition-all duration-150"> <FontAwesomeIcon icon={faDownload} /> Download Resume</Button>
    </div>
    <div className="flex flex-col gap-4 justify-center items-center mb-10">

      <Image
        src="/resume/Resume.png"
        alt="Resume"
        className="w-full h-full"
        isBlurred
        radius="sm"
      />
    </div>
    </>
  );
}
