export const validate = (config,values)=>{
    const errors = {};

    config.map(field=>{
        if(!values[field.name]){
            errors[field.name] = `${field.label} is required!`
        }

        if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
            errors.email = `Email format is not correct!`
        }
    })

    return errors;
}