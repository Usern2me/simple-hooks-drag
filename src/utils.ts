function arrayMove<T>(array: T[], from: number, to: number) {
  array = array.slice()
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
  return array
}

function arrayRemove<T>(array: T[], index: number) {
  array = array.slice()
  array.splice(index, 1)
  return array
}

export { arrayMove, arrayRemove }
