import { Cover } from "./../Cover/Cover";
import  Header  from "../Header/Header";

export const BlockRenderer = ({ blocks }) => {
  console.log("block", blocks);
  return blocks?.map((block) => {
    switch (block.name) {
      case "core/heading": {
        return (
          <Header key={block.id}
          textAlign={block.attributes.textAlign}
          level={block.attributes.level}
          content={block.attributes.content}
          />
           
          //<div>jjjj</div>
              );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            {/* <BlockRenderer blocks={block.innerBlocks} /> */}
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
