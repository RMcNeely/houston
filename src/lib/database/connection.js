/**
 * lib/database.js
 * Sets up database connection
 * TODO: turn this into a class for easier handling of errors and things
 *
 * @exports {Object} - initialized mongoose object
 */

import mongoose from 'mongoose'

import Log from 'lib/log'

const log = new Log('lib:database')

mongoose.Promise = global.Promise

mongoose.connection.on('error', (msg) => {
  log.error('Database error')
  log.error(msg)

  log.report(msg)

  // Disconnect on error, calling the close event, crashing the process, and
  // hoping the sys-admin has some service to start it!
  mongoose.disconnect()
})

mongoose.connection.on('open', () => {
  log.info('Connected to database')

  const downloads = mongoose.connection.db.collection('downloads')
  downloads.ensureIndex({ expireAt: 1 }, { expireAfterSeconds: 0 }, (err) => {
    if (err == null) return

    log.error('Unable to create indexes for downloads')
    log.error(err)
  })
})

mongoose.connection.on('close', () => {
  log.warn('Disconnected to database')

  if (process.env.NODE_ENV !== 'test') {
    process.exit(1)
  }
})

export default mongoose
