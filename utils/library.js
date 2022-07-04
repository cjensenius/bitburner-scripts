export function logMsg(ns, msg, ms = 0) {
  if (!ms) {
      ms = new Date().getTime()
  }

  const dateString = new Date(ms).toLocaleDateString()
  const timeString = new Date(ms).toLocaleTimeString()

  ns.tprint(`[${dateString} ${timeString}] ${msg}`)
}

export function settings() {
  return {
    minSecurityLevelOffset: 2,
    maxMoneyMultiplayer: 0.9,
    minSecurityWeight: 100,
    mapRefreshInterval: 24 * 60 * 60 * 1000,
    keys: {
      serverMap: 'BB_SERVER_MAP',
      hackTarget: 'BB_HACK_TARGET',
      action: 'BB_ACTION',
    },
  }
}

export function getItem(key) {
  let item = localStorage.getItem(key)

  return item ? JSON.parse(item) : undefined
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export async function main(ns) {
  return {
    settings,
    getItem,
    setItem,
    logMsg
  }
}