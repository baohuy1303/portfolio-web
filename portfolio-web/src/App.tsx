import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectsPage from "@/pages/projects";
import About from "@/pages/about";
import DefaultLayout from "./layouts/default";
import ResumePage from "@/pages/resume";

function App() {
  return (
    <DefaultLayout>
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<ResumePage />} path="/resume" />
    </Routes>
    </DefaultLayout>
  );
}

export default App;
