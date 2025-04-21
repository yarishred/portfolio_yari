import { useState } from "react";
import { useEffect } from "react";


//Cutsom Hook to build the grid Icons 
export const useRandomIcons = (icons) => {
  const [randomIcons, setRandomIcons] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const generateNumbers = () => {
        const randomNumber = Math.floor(Math.random() * 9) + 1;

        if (!randomIcons.includes(randomNumber)) {
          setRandomIcons((prevIcons) => [...prevIcons, randomNumber]);
          setCounter((counter) => counter + 1);
        }
      };

      generateNumbers();
    }, 10);

    return () => clearInterval(interval);
  }, [randomIcons, counter, icons]);

  return [randomIcons];
};
