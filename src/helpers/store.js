export function isEqual(param1, param2) {
  if (typeof param1 === 'object' && typeof param2 === 'object') {
    return JSON.stringify(param1) === JSON.stringify(param2)
  }
  return param1 === param2
}
