// get an element with some error checking
const GetElementById = (ID) => {
    try {
      const element = document.getElementById(ID);
      if (element) {
        return element;
      } else {
        throw `An element with the ID of ${ID} was not found`;
      }
    } catch (error) {
      return null;
    }
  };

//gets a group of DOm elements using the name attribute with some error checking 
  const GetDomElementGroup = (name) => {
      try {
    const groupElements = document.getElementsByName(name);
    if (namedElements && namedElements.length > 0) {
        return groupElements;        
    }  else {
        throw(`No elements found with a name of ${name}`);
    }
      }
    catch (error){
        return null;
    }
};


// Use to match a value against any regx  strored in an array;
const ValueInRegExArray = (regExArray = [], value) => {
    regExArray.forEach((rgex) => {
      if (value.match(rgex)) {
        return true;
      }
    });
    return false;
  };