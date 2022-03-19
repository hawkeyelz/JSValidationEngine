const DefaultTask = (cb) =>{
    
    cb();
}

const Logger = (cb, message, type='text') => {
    const logger = {
    text:() => { console.log(message)},
    error: () =>  {console.error(message)}
    };

    logger[type]();
    cb();
}




exports.default = DefaultTask