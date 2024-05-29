// Barcha inputlar uchun tekshiruv
export const checkInput = (input, translateFunction = null, errorMessage = null) => {
    let error = false;
    if (!input.value) {
        input.error = errorMessage ? errorMessage : translateFunction('validate.required');
        error = true;
    } else {
        input.error = null;
    }
    return error;
};



// Telefon nomer uchun tekshiruv
export const checkPhone = (input, translateFunction = null, errorMessage = null, errorMessageMask = null) => {
    let error = false;
    if (!input.value) {
        input.error = errorMessage ? errorMessage : translateFunction('validate.required');
        error = true;
    } else {
        if (input.value && input.value.length != 12) {
            input.error = errorMessageMask ? errorMessageMask : translateFunction('validate.phone');
            error = true
        } else {
            input.error = null;
        }
    }
    return error;
};