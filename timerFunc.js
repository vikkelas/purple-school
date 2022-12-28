const timerFunc = (string)=>{
    const arrTime = parserString(string);
    const timeTimer = +(arrTime[0]*360 + arrTime[1]*60 + arrTime[2])*1000;
    setTimeout(()=>{
        console.log('таймер закончился');
    }, timeTimer);
    console.log(`таймер запущен на ${timeTimer/1000} секунд`);
}

const parserString = (string)=>{
    return string.split(' ').map(item=>item.replace(/\D/g,''))
}

export default timerFunc;