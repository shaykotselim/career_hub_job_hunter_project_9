import { useState, Fragment } from "react";
import qa from "../../assets/All Images/qa.png"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function BlogQuestion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className=" sm:flex items-center gap-4 lg:px-32  px-4 py-4 lg:py-20">
      <div>
        <img width={600} src={qa} alt="" />
      </div>
      <div>
      <Fragment className="px-32">
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p>When should you use context API?</p>
          </AccordionHeader>
          <AccordionBody>
            Context API is primarily used when some data needs to be accessible by many components at different nesting levels. 
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is a custom hook?
          </AccordionHeader>
          <AccordionBody>
          Custom hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is useRef?
          </AccordionHeader>
          <AccordionBody>
          useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref).
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            What is useMemo?
          </AccordionHeader>
          <AccordionBody>
          useMemo() is a function that returns a memoized value of a passed in resource-intensive function.
          </AccordionBody>
        </Accordion>
      </Fragment>
      </div>
    </div>
  );
}
