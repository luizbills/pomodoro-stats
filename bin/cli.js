#!/usr/bin/env node

const time2pomodoros = require('..').time2pomodoros;
const cli = require('caporal');

cli
  .version('1.0.0')
  .argument('<time>', 'Time in HH:MM format')
  .action(function(args, options, logger) {
	if (args.time) {
      logger.info(time2pomodoros(args.time));
    }
  })

cli.parse(process.argv);