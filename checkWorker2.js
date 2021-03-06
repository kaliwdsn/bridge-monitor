const fs = require('fs')
const logger = require('./logger')('checkWorker2');
const eventsStats = require('./eventsStats')

async function checkWorker2() {
  try {
    logger.debug('calling eventsStats()');
    const evStats = await eventsStats();
    if (!evStats) throw new Error('evStats is empty: ' + JSON.stringify(evStats));
    fs.writeFileSync(__dirname + '/responses/eventsStats.json', JSON.stringify(evStats,null,4));
    logger.debug("Done");
    return evStats;
  } catch(e) {
    logger.error('checkWorker2.js', e);
    throw e;
  }
}
checkWorker2();
