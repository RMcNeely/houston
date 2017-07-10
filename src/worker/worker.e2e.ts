/**
 * houston/src/worker/worker.e2e.ts
 * Runs some repositories through tests for end to end testing
 */

import * as fs from 'fs-extra'
import * as os from 'os'
import * as path from 'path'
import * as uuid from 'uuid/v4'

import { Repository as GithubRepository } from '../lib/service/github/repository'
import { Worker } from './worker'

import { setup as setupConfig } from '../../test/utility/config'
import { timeout } from '../../test/utility/jasmine'

let config = null
const testingDir = path.resolve(os.tmpdir(), 'houston-test', 'worker', uuid())

// Extend the default timeout time due to long running tests
timeout(30)

// Change the default workspace location for testing
Worker.tempDir = testingDir

beforeEach(async () => {
  config = await setupConfig()
})

afterAll(async () => {
  await fs.remove(testingDir)
})

test('needle-and-thread/vocal passes release process', async () => {
  const repo = new GithubRepository('needle-and-thread', 'vocal')
  repo.reference = 'refs/tags/2.0.19'

  const proc = new Worker(config, repo)

  await proc.setup()
  await proc.teardown()
})

test('Philip-Scott/Spice-up passes release process', async () => {
  const repo = new GithubRepository('Philip-Scott', 'Spice-up')
  repo.reference = 'refs/tags/0.6.0'

  const proc = new Worker(config, repo)

  await proc.setup()
  await proc.teardown()
})
