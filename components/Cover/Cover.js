import Image from "next/image";

export const Cover = ({ children, background }) => {
 return (
    <div 
    className=" min-h-[400px] justify-center items-center"
    >
      <Image
        alt="CodePic"
        src={background}
        className="mix-blend-soft-light object-cover"
        priority
        fill
            />
        {children}
    </div>
  );
};
