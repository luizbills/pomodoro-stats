# Pomodoro Stats

Generate pomodoro stats

## Install

[TODO]

## Usage

```js
const pomodoroStats = require('pomodoro-stats');
const stats = pomodoroStats('2:30'); // hh:mm format 

console.log(stats);
/*
outputs:
{
  pomodoros: 5,
  shortPauses: 3,
  longPauses: 1,
  remainingMinutes: 0,
  totalMinutes: 150
}
*/
```
