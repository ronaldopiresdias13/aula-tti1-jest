function soma(a, b){
    return a + b;
}

function cloneObj(obj){
    return {...obj};
}

function array(arr){
    var num = arr;
    return num.map(Math.sqrt);
}

module.exports = {
    soma,
    cloneObj,
    array
};