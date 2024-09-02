import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import Head from "next/head";
import ProjectNavbar from "@/components/ProjectNavbar";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <>
      <Head>
        <title>Projects | Abdus-Samad Ajao Portfolio</title>
        <meta
          name="description"
          content="Abdus-Samad Ajao personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-5 py-2 overflow-y-auto"
        style={{ height: "65vh" }}
      >
        <ProjectNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="col-span-12 p-2 bg-gray-100 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={fadeInUp}
            >
              <ProjectCard
                project={project}
                setShowDetail={setShowDetail}
                showDetail={showDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
