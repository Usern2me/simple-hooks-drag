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

// 计算所有子元素的top
function calculateChildTop(ref: React.RefObject<HTMLElement>) {
  const childrenList = ref.current ? Array.from(ref.current.children) : []
  const height = childrenList.map(item => item.getBoundingClientRect().top)
  return height
}
// 移动一个元素
function transformItem(element: Element, offsetX: number | null = 0, offsetY: number | null = 0) {
  if (offsetY === null || offsetX === null) {
    ;(element as HTMLElement).style.removeProperty("transform")
    return
  }
  ;(element as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`
}

// TODO: 未经测试
function isOutOfContainer(
  parentRef: React.RefObject<HTMLElement>,
  childRef: React.RefObject<HTMLElement>
) {
  const parentBound = parentRef.current && parentRef.current.getBoundingClientRect()
  const childBound = childRef.current && childRef.current.getBoundingClientRect()
  if (
    parentBound &&
    childBound &&
    (parentBound.top - childBound.top < 0 ||
      parentBound.left - childBound.left < 0 ||
      parentBound.right - childBound.right < 0 ||
      parentBound.bottom - childBound.bottom < 0)
  )
    return false
  return true
}

export { arrayMove, arrayRemove, calculateChildTop, transformItem, isOutOfContainer }
