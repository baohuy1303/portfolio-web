import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardFooter, Image } from "@heroui/react";
import { faServer, faFire, faDatabase, faLeaf, faRobot, faCodeCompare, faCodeCommit, faHashtag, faPaintBrush, faGamepad, faCamera } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNode, faUnity, faAws, faPython } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {

  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col gap-4 py-8 md:pb-10 md:pt-2">
              <h1 className="text-3xl font-bold mb-3 self-baseline">
                  Projects
              </h1>
              <Card
                      isFooterBlurred
                      className="w-full col-span-12 sm:col-span-7
              hover:scale-103 transition-all duration-150"
                  >
                      <Image
                          removeWrapper
                          alt="Relaxing app background"
                          className="z-0 w-full h-full object-cover"
                          src="/wiwi/WIWI3.jfif.webp"
                      />
                      
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="md:block hidden text-xl font-bold">WIWI</h1>
                                  <div className="flex grow gap-4 items-center text-sm">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faReact} />{' '}
                                          React.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faPython} />{' '}
                                          Python
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faAws} />{' '}
                                          AWS
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faServer} />{' '}
                                          Express.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faLeaf} />{' '}
                                          MongoDB
                                      </div>
                                  </div>
                              </div>
                              <Button onPress={() => navigate('/projects/wiwi')} radius="full" size="md" className="md:block hidden hover:bg-blue-500 transition-all duration-150"> 
                                More details
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                        <h1 className="text-xl font-bold">WIWI</h1>
                        <Button onPress={() => navigate('/projects/wiwi')} radius="full" size="md" className="hover:bg-blue-500 transition-all duration-150"> 
                                  More details
                        </Button>         
                  </div>


              <div className="flex flex-col gap-10 justify-center items-center">
                  <Card
                      isFooterBlurred
                      className="w-full col-span-12 sm:col-span-7
              hover:scale-103 transition-all duration-150"

                  >
                      <Image
                          removeWrapper
                          alt="Relaxing app background"
                          className="z-0 w-full h-full object-cover cursor-pointer"
                          src="/projs/Glow3.webp"
                          onClick={() => navigate('/projects/glow')}
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
                              <Button onPress={() => navigate('/projects/glow')} radius="full" size="md" className="md:block hidden hover:bg-blue-500 transition-all duration-150"> 
                                  Work In Progress
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                        <h1 className="text-xl font-bold">AI GLOW</h1>
                        <Button onPress={() => navigate('/projects/glow')} radius="full" size="md" className="hover:bg-blue-500 transition-all duration-150"> 
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
                              <Button radius="full" size="md" onPress={() => navigate('/projects/gradvisor')}
                                className="md:block hidden hover:bg-blue-500 transition-all duration-150">
                                  More details
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                    <h1 className="text-xl font-bold">GRADVISOR</h1>
                    <Button radius="full" size="md" onPress={() => navigate('/projects/gradvisor')} className="hover:bg-blue-500 transition-all duration-150">
                      More details
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
                          src="/projs/SoccerStats.webp"
                      />
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="text-xl font-bold md:block hidden">
                                      Soccer Stats Explorer
                                  </h1>
                                  <div className="flex grow gap-4 items-center text-sm ">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faReact} />{' '}
                                          React.js
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faCodeCommit} />{' '}
                                          Context API
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faCodeCompare} />{' '}
                                          React Router
                                      </div>
                                  </div>
                              </div>
                              <Button radius="full" size="md" onPress={() => navigate('/projects/soccer-stats')}
                                className="md:block hidden hover:bg-blue-500 transition-all duration-150">
                                  More details
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                    <h1 className="text-xl font-bold">Soccer Stats Explorer</h1>
                    <Button radius="full" size="md" onPress={() => navigate('/projects/soccer-stats')} className="hover:bg-blue-500 transition-all duration-150">
                      More details
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
                          src="/projs/wys.webp"
                      />
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="text-xl font-bold md:block hidden">
                                      Will You Squid
                                  </h1>
                                  <div className="flex grow gap-4 items-center text-sm ">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faHashtag} />{' '}
                                          C#
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faUnity} />{' '}
                                            Unity
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faPaintBrush} />{' '}
                                          Aseprite
                                      </div>
                                  </div>
                              </div>
                              <Button radius="full" size="md" onPress={() => navigate('/projects/wys')}
                                className="md:block hidden hover:bg-blue-500 transition-all duration-150">
                                  More details
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                    <h1 className="text-xl font-bold">Will You Squid</h1>
                    <Button radius="full" size="md" onPress={() => navigate('/projects/wys')} className="hover:bg-blue-500 transition-all duration-150">
                      More details
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
                          src="/projs/itchio.webp"
                      />
                      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                              <div className="flex flex-col gap-3">
                                  <h1 className="text-xl font-bold md:block hidden">
                                      All Public Games
                                  </h1>
                                  <div className="flex grow gap-4 items-center text-sm ">
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faHashtag} />{' '}
                                          C#
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faUnity} />{' '}
                                            Unity
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faGamepad} />{' '}
                                            GMS 2
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faCamera} />{' '}
                                            Photoshop
                                      </div>
                                      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-1">
                                          <FontAwesomeIcon icon={faPaintBrush} />{' '}
                                          Aseprite
                                      </div>
                                  </div>
                              </div>
                              <Button radius="full" size="md" onPress={() => navigate('/projects/all-games')}
                                className="md:block hidden hover:bg-blue-500 transition-all duration-150">
                                  More details
                              </Button>
                          </div>
                      </CardFooter>
                  </Card>
                  <div className="md:hidden flex flex-row justify-between items-center w-[80%] gap-3 mb-10">
                    <h1 className="text-xl font-bold">All Public Games</h1>
                    <Button radius="full" size="md" onPress={() => navigate('/projects/all-games')} className="hover:bg-blue-500 transition-all duration-150">
                      More details
                    </Button>
                  </div>

                  
              </div>
            
      </section>
      
    </>
  );
}
