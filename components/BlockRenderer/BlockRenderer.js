import { Cover } from "./../Cover/Cover";
import  Header  from "../Header/Header";
import { Paragraph } from './../Paragraph/Paragraph';
import { theme } from './../../theme';

export const BlockRenderer = ({ blocks }) => {
 //console.log("blocks!!!", blocks);
  return blocks?.map((block) => {
    switch (block.name) {
      case "core/paragraph":{
        return <Paragraph 
        textAlign={block.attributes.align}
        content={block.attributes.content}
        textColor={
         // theme[block.attributes.textColor] ||
          block.attributes.style?.color?.text
        }
        key={block.id} />
      }
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
  console.log("block!", block.id);
        
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} /> 
            {/* 
            */}
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
