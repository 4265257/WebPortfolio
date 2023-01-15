import React from "react";
import Linkedin from "../../public/Linkedin.svg";
import Github from "../../public/Github.svg";
import Image from "next/image";
import { IconsLayout } from "./IconsStyles";
import Link from "next/link";

const Icons = () => (
  <>
    <IconsLayout >
      <Link
        href="https://www.linkedin.com/in/yara-brek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={Linkedin}
          alt="Linkedin Logo"
          width={20}
          height={20}
          priority
        />
      </Link>
    </IconsLayout>
    <IconsLayout>
      <Link
        href="https://github.com/4265257"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image 
        src={Github} 
        alt="Github Logo" 
        width={20} 
        height={20} 
        priority 
        />
      </Link>
    </IconsLayout>
  </>
);

export default Icons;
