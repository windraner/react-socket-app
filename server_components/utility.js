const objectToArray = (obj) => {
    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    }
    return array;
}
module.exports.objectToArray = objectToArray;