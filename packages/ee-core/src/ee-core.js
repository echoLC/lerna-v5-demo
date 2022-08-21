export default function eeCore() {
  log('eeCore log')
  return 'Hello from eeCore'
}

const types = ['log', 'warn', 'info', 'error']

export function log(message, type = 'log') {
  if (!types.includes(type)) {
    throw new Error('invalid type')
  }
  console[type](message)
}
