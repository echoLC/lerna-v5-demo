export default function eeCore() {
  log('eeCore log')
  return 'Hello from eeCore'
}

export function log(message, type = 'log') {
  console[type](message)
}
