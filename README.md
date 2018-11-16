# Pomodoro Stats

Generate pomodoro stats

## Install

[TODO]

## Usage

```js
const time2pomodoros = require('pomodoro-stats').time2pomodoros;
const stats = time2pomodoros('2:30'); // hh:mm format 

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
