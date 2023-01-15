import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { Inter } from "@next/font/google";
import { sections } from "./../../data/sections";
import { Container } from "./SectionsStyles";

const inter = Inter({ subsets: ["latin"] });

const Sections = () => {
  return (
    <div className={styles.flex}>
      {sections.map((section) => {
        return (
          <>
            <Link
              href={section.href}
              className={styles.card}
              rel="noopener noreferrer"
            >
              <Container>
                <h2 className={inter.className}>{section.name}</h2>
              </Container>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Sections;
