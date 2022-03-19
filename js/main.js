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
    });

   const lastName = CreateValidationObject('Last');
   lastName.validationFunction = DefaultValidationFunctions('text');
   const ValidationObjects = [lastName];

    ValidationInit(ValidationObjects,);
  }