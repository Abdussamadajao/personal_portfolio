import { motion } from "framer-motion";
import { languages, tools } from "../data";
import { fadeInUp, routeAnimation } from "../animation";
import Head from "next/head";
import Bar from "@/components/Bar";

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume | Abdus-Samad Ajao Portfolio</title>
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
        className="px-6 py-2"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Bachelor of Engineering, Software Engineering
              </h5>
              <p className="font-semibold">
                Al-Hikmah University, Ilorin, Nigeria
              </p>
              <p className="my-3">November 2021 - December 2025</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">PneumaCare</h5>
              <p className="font-semibold">Frontend Developer</p>
              <p className="my-3">August 2022 - Present</p>
              <ul className="my-3">
                <li className="mb-2">
                  Developed and maintained responsive web applications using
                  React, ensuring cross-browser compatibility and optimal
                  performance.
                </li>
                <li className="mb-2">
                  Increased company revenue by 30% by developing a dashboard to
                  manage appointments and user data using React, NextJS, Redux,
                  and Firebase.
                </li>
                <li>
                  Collaborated with designers and backend developers to
                  integrate front-end components with backend services via
                  RESTful APIs.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default resume;
