const divisionRemainder = (array) => {
    let index = 0;
    array.forEach(item=>{
        item%3===0?index++:null;
    })
    return index;
}

export default divisionRemainder;