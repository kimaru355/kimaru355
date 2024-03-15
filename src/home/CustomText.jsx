import { useEffect, useState } from "react";

export default function CustomText() {
  const mylist = ["Web Developer", "React Developer", "Software Engineer"];
  const [current, setCurrent] = useState({
    currentString: mylist[0],
    currentPosition: 0,
    displayString: " ",
  });

  useEffect(() => {
    const setIntval = setInterval(() => {
      if (current.currentString.length > current.currentPosition) {
        setCurrent((prevCurrent) => {
          let newCurrent = { ...prevCurrent };
          newCurrent.displayString +=
            newCurrent.currentString[newCurrent.currentPosition];
          newCurrent.currentPosition += 1;
          return newCurrent;
        });
      } else {
        setCurrent((prevCurrent) => {
          let newCurrent = { ...prevCurrent };
          let count = 0;
          if (newCurrent.currentString != mylist[mylist.length - 1]) {
            while (count < newCurrent.currentString.length) {
              if (mylist[count] == newCurrent.currentString) {
                newCurrent.currentString = mylist[count + 1];
                break;
              }
              count += 1;
            }
          } else {
            newCurrent.currentString = mylist[0];
          }
          newCurrent.displayString = " ";
          newCurrent.currentPosition = 0;
          return newCurrent;
        });
      }
    }, 250);

    return () => {
      clearInterval(setIntval);
    };
  });

  return <p className="h-6 text-2xl text-teal-400">{current.displayString}</p>;
}
