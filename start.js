import { logMsg } from 'utils/library.js'

export async function main(ns) {
  if ('home' !== ns.getHostname()) {
    throw new Exception('Script must be run from home')
  }

  logMsg(ns, 'Starting hacking scripts')

  const homeRam = ns.getServerRam('home').shift()

  if (homeRam <= 8) {
    logMsg(ns, 'Detected 8GB of RAM, using stage1 scripts')
    ns.spawn('stage1.js', 1, 'stage1hack.js')
  } else {
    logMsg(ns, 'Detected over 8GB of RAM, using stage2 scripts')
  }
}