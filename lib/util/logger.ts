import pino from 'pino'

let logger;

if (process.env.NODE_ENV === 'production') {
    logger = pino()
} else {
  if (!global.logger) {
    global.logger = pino()
  }
  logger = global.logger;
}

export default logger;