export function storage(key, value = null) {
  if (!value) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return localStorage.setItem(key, JSON.stringify(value))
  }
}
