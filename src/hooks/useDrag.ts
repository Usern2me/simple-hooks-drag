import { useState, useEffect } from "react"

function useDrag(ref: React.RefObject<HTMLElement>) {
  const [{ dx, dy }, setOffset] = useState({ dx: 0, dy: 0 })
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const startX = event.pageX - dx
      const startY = event.pageY - dy
      const handleMouseMove = (event: MouseEvent) => {
        const moveX = event.pageX - startX
        const moveY = event.pageY - startY
        setOffset({ dx: moveX, dy: moveY })
      }
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleMouseMove)
      })
    }
    if (ref.current) {
      ref.current.addEventListener("mousedown", handleMouseDown)
    }
    return () => {
      ref.current && ref.current.removeEventListener("mousedown", handleMouseDown)
    }
  }, [dx, dy])
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `transform3d(${dx},${dy},0)`
    }
  }, [dx, dy])
  return { dx, dy }
}
export default useDrag
