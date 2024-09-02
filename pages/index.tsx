import Head from "next/head";
import { motion } from "framer-motion";

import { services } from "../data";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import ServiceCard from "@/components/service-card";

const index = () => {
  return (
    <>
      <Head>
        <title>Abdus-Samad Ajao Portfolio</title>
        <meta
          name="description"
          content="Abdus-Samad Ajao personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h5 className="my-3 font-medium">
          Hey there! I'm Abdus-Samad, a frontend developer with a passion for
          crafting beautiful, responsive websites. My journey in web development
          started with a love for design, which naturally led me to master CSS.
          Now, I take pride in turning complex layouts into pixel-perfect
          realities.
        </h5>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5em", marginRight: "-1.5rem" }}
        >
          <h6 className="my-3 text-xl font-bold">Skills</h6>
          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default index;
