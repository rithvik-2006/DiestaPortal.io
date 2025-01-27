"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Diesta">
      <div className="text-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl mb-6">
            Introduced in 2021, Diesta is the annual interdepartmental sports
            and cultural fest of IIT Hyderabad, uniting students from various
            disciplines into 7-10 teams competing for the coveted trophy and
            ultimate glory. The fest features a dynamic mix of sports, cultural
            performances, quizzes, and group activities, fostering teamwork,
            creativity, and healthy competition. Diesta celebrates talent,
            camaraderie, and diversity, offering participants and spectators an
            exhilarating experience filled with energy, collaboration, and
            memorable moments that embody the vibrant spirit of IIT Hyderabad’s
            campus life.{" "}
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
