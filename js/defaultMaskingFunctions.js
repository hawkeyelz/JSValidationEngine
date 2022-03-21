defaultMakFunctions = {
  date: (domElement) => {
    const  elementValue = domElement.value;
    const mm = elementValue.slice(0,2);
    const dd = elementValue.slice(3, 5);
    const yyy = elementValue.split(6,10);
    
    domElement.value = `${mm}/${dd}/${yyyy}`;
  },
};

GetMaskFunction = (requestedMakingFunction) => {


  maskingFunction = defaultMakFunctions[requestedMakingFunction];

  if (maskingFunction) {
    return maskingFunction;
  }
  console.error(`The requested masking function was not found`);
  return null;
};
