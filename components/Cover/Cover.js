import Image from "next/image";
import CodePic from "/public/codePic.jpg";

export const Cover = ({ children, background }) => {
 // console.log("Background",background)
  return (
    <div 
    className=" min-h-[400px] justify-center items-center"
    >
      <Image
        alt="CodePic"
        src={background}
        className="mix-blend-soft-light"
        priority
        fill
            />
      {/* <div className="max-w-5xl z-10" >
         </div> */}
        {children}
    </div>
  );
};
