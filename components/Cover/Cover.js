import Image from "next/image";
import CodePic from "/public/codePic.jpg";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen min-h-[400] justify-center items-center">
      <Image
        alt="CodePic"
        src={CodePic}
        className="mix-blend-soft-light"
        priority
      />
      <div className="max-w-5xl z-10" >{children}</div>
    </div>
  );
};
