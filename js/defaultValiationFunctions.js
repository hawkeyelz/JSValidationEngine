const ValidationFunctions =() => {

    return {
        text: (domElement) => {
          return domElement.value ? true : false;
        },
        date: (domElement) => {},
        checkbox: (domElement) => {},
        select: (domElement) => {},
        radioGroup: (radioGroupElements) => {
          radioGroupElements.forEach((domElement) => {
            if (domElement.checked) {
              return true;
            }
            return false;
          });
        },
      };
}

const GetDefaultValidationFunction = (requestedvalidationFunction) => { 
    return ValidationFunctions()[requestedvalidationFunction];
  };