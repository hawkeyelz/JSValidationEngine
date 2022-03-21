
const CreateMaskingObject = (domElement, maskingFunction, maskingEvent='keydown') => {
    return {domElement: domElement, maskingFunction, maskingEvent};
}

const CreateMask = (domElement, maskingFunction, event='keydown') => {
    domElement.addEventListener(event,  ()=> {maskingFunction(domElement);});
}

const ApplyMaskEvents = (maskingObjects) => {
    maskingObjects.forEach(maskObject => {
        console.log(maskObject);
        maskObject.domElement.addEventListener(maskObject.maskingEvent, () => { maskObject.maskingFunction(maskObject.domElement)});
    });
};

const MaskingSetup = (MaskObjects=[]) => {
   if (MaskObjects.length > 0) {
        ApplyMaskEvents(MaskObjects);
    } else {
    console.error('Masking objects not supplied');
    return;
    }
}