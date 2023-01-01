import notifier from 'node-notifier';

const timerFunc = (string)=>{
    const arrTime = parserString(string);
    const timeTimer = +(arrTime[0]*360 + arrTime[1]*60 + arrTime[2])*1000;
    setTimeout(()=>{
        notifier.notify({
            sound: true,
            wait: true,
            title: "Таймер закончился ура!",
            message: "Таймер закончился все операции успешны",
        })
    }, timeTimer);
    notifier.notify({
        sound: true,
        wait: true,
        title: "Таймер запущен",
        message: `Таймер запущен на ${timeTimer/1000} секунд`,
    })
}

const parserString = (string)=>{
    return string.split(' ').map(item=>item.replace(/\D/g,''))
}

export default timerFunc;