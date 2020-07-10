const outer = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };
  return incrementCounter;
};
const newFunction = outer();
newFunction();
newFunction();
