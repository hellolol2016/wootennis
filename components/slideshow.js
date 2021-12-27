
import { useState } from "react" 
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { Box, Center, HStack, VStack } from "@chakra-ui/react";
export default function Page({ ...rest}) {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) =>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0) {
      return people.length-1;
    }
    return number;
  }

  const nextPerson = () =>{
    setIndex((index)=>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () =>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }


  return <VStack className='review' style={{marginTop:"90px", marginBottom:"30px" }} {...rest}>
    <HStack >


      <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
      <Center width={{base:"60vw",xl:"20vw"}} >
        <img style={{ height: { base:"300px", } }} src={image} alt={name} className='person-img' />
      </Center>

      <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
    </HStack>
    <div className="img-container">
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info" style={{width:'60%', textAlign:"center"}}>{text}</p>


      
  </VStack>;

}