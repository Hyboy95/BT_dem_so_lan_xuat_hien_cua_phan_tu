function countValueInArray(_number: number[], _value: number) {
    let _count = 0;
    _number.forEach(item => {
        if (_value === item) _count ++;
    })
    return _count;
}

console.log(countValueInArray([1,2,2,1,5,5,2,2,9],2));