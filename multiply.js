const multiply = (num, factor) => {
    if(num && factor) {
        let result = num * factor;
        return result;
    } else {
        throw new Error('Invalid num or factor');
    }
};

module.exports = multiply;