# Pomodoro Stats

Generate pomodoro stats

## Install

[TODO]

## Usage

```
const pomodoroStats = require('pomodoro-stats');
const stats = pomodoroStats('2:30');

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