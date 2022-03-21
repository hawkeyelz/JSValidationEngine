console.log('Main Script Loaded');
window.addEventListener(
    "load",
    () => {
      Main();
    },
    false
  );
  const Main = () => {
    const submitBtn  = document.getElementById('Submit');
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      ValidateForm(ValidationObjects);
      const maskel = GetElementById('dob');
    });
    
    const lastName = CreateValidationObject('Last');
    lastName.validationFunction = GetDefaultValidationFunction('text');
    const ValidationObjects = [lastName];
    
const dobDomElement = GetElementById('Dob');

console.log(dobDomElement);
  CreateMask(dobDomElement, ()=> {
  console.log('mask now');
});

    ValidationInit(ValidationObjects,);
  }