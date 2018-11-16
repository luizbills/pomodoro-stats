const time2minutes = (time) => {
    if ( time.indexOf(':') === -1 ) {
        time += ':00';
    }
    
    const parts = time.split(':');
    const hours = parts[0] | 0;
    const minutes = parts[1] | 0;
    
    return minutes + (hours * 60);
}

const getPomodoroStatistics = (time, _options = {}) => {
    const minutes = time2minutes(time);
    const defaults = {
        pomodoro: 25,
        shortPause: 5,
        longPause: 10,
        longPauseAfter: 4,
    };
    const options = Object.assign({}, defaults, _options);
    const stats = {
        pomodoros: 0,
        shortPauses: 0,
        longPauses: 0,
        remainingMinutes: 0,
        totalMinutes: minutes,
    }
    let current = minutes;

    while (current >= options.pomodoro) {
        current -= options.pomodoro;
        stats.pomodoros++;
        if (stats.pomodoros % 4 === 0) {
            if (current >= options.longPause) {
                stats.longPauses++;
                current -= options.longPause;
            }
        } else if (current >= options.shortPause) {
            stats.shortPauses++;
            current -= options.shortPause;
        }
    }

    stats.remainingMinutes = current;

    return stats;
}
