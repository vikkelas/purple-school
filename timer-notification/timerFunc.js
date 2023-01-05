import notifier from 'node-notifier';

const timerFunc = (string)=>{
    const {hours,minute,second} = parserString(string);
    const timeTimer = (hours*360 + minute*60 + second)*1000;
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
    const state = {
        hours: 0,
        minute: 0,
        second: 0
    }
    const data = string.split(' ');
    data.forEach(item=>{
        const reg = item.replace(/\d/g,'');
        switch (reg){
            case 'h':
                state.hours=Number(item.replace(/\D/g, ''));
                break;
            case 'm':
                state.minute=Number(item.replace(/\D/g, ''));
                break
            case 's':
                state.second=Number(item.replace(/\D/g, ''));
                break
        }
    });
    return state;
}

export default timerFunc;