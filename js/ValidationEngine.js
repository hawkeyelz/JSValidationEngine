
const GetNewEmptyValidationObject = () => {
  return {
    domElement: null,
    targetElement: null,
    event: "blur",
    validationFunction: null,
    invalidCssClass: null,
  };
};

const CreateValidationObject= (ID) => {
  const validationObject = { ... GetNewEmptyValidationObject()};
  validationObject.domElement = GetElementById(ID);
  return validationObject;
};

const createValidationGroupObject = (groupName, targetID) => {
  const validationObject = {... GetNewEmptyValidationObject()};
  validationObject.domElement = getElementsByName(groupName);
  validationObject.targetElement = getElementById(targetID);
  return validationObject;
};


const ToggleValid = (validationObject, isValid) => {
  const invalidCss = validationObject.invalidCssClass? validationObject.invalidCssClass : 'invalid';
  validationObject.domElement.setAttribute('valid', isValid);
  if (!isValid) {
    validationObject.domElement.classList.add(invalidCss);
  } else {
    validationObject.domElement.classList.remove(invalidCss);
  }
};





const ObjectValidation = ( validationObject) => {
  const isValid = validationObject.validationFunction(validationObject.domElement);
  ToggleValid(
    validationObject,
    isValid
  );
  return isValid;
};

const CheckDomElementForValidStatus = (domElement) => {
  return false;
}

const ValidateForm = (validationObjects = []) => {
  let count = 0;
  validationObjects.forEach((validationObject) => {
    if (!CheckDomElementForValidStatus(validationObject.domElement)) {
      ( ObjectValidation(validationObject)) && count++;
    } else {
      count ++;
    }
  });
  return (count === validationObjects.length);
};

const AttachEvent = (validationObject,event) => {
  validationObject.domElement.addEventListener(event, () => {
    ObjectValidation(validationObject);
  });
};

const AttachEventsToValidationObject = (validationObject) => {
  if (Array.isArray(validationObject.event) && validationObject.event.length > 0) {
    if (validationObject.event) {
      validationObject.events.forEach((event) => {
        AttachEvent(validationObject, event);
      });
    }
  }
  else {
      AttachEvent(validationObject, validationObject.event);
    }
};

const ValidationInit = (
  validationObjects = []
  ) => {
    if (validationObjects.length > 0) {
      validationObjects.forEach((validationObject) => {
        AttachEventsToValidationObject(validationObject);
      });
    }
};
