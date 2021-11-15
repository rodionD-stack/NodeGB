const EventEmitter = require('events');
const emitter = new EventEmitter();
const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

const setDateTimeForTimer = () => {
    let arrDateTime = process.argv[2].split("-");
    let seconds = Number(arrDateTime[0]);
    let minutes = Number(arrDateTime[1]);
    let hours = Number(arrDateTime[2]);
    let days = Number(arrDateTime[3]);
    let month = Number(arrDateTime[4] - 1);
    let year = Number(arrDateTime[5]);
    
    return new Date(year, month, days, hours, minutes, seconds, 0);
};

showTimeLeft = (currentTime) => {
    const currentDate = new Date();
    const a = dayjs(currentTime);
    const b = dayjs(currentDate);
    const durationTime = dayjs.duration(a.diff(b));

    let secondsShow = Number(durationTime('ss'));
    let minutesShow = Number(durationTime('mm'));
    let hoursShow = Number(durationTime('HH'));
    let daysShow = Number(durationTime('DD'));
    let monthShow = Number(durationTime('MM'));
    let yearShow = Number(durationTime('YYYY'));

    let message = 'Left time is: years: ' + yearShow + ', months: ' + monthShow + ', days: ' + daysShow + ', hours: ' + hoursShow + ', minutes: ' + minutesShow + ', seconds: ' + secondsShow;

    if(currentDate < currentTime) {
        return message;
    } else {
        message = 'Time is over';
        return message;
    }

};

class Handlers {
    static teakTimer(timerDateTime) {
        console.clear();
        console.log(showTimeLeft(timerDateTime));
    }
}

const run = () => {
    const timerDateTime = setDateTimeForTimer();

    setInterval( () => {
        emitter.emit('teak', timerDateTime);
    }, 1000);

    emitter.on('teak', Handlers.teakTimer);
};

run()