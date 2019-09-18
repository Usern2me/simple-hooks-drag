import { useState, useEffect } from "react"

/**
 * @intro 每n秒只触发一次函数,如监听鼠标,input输入
 * @param value 需要防抖的数据
 * @param time 每n秒触发的时间
 */

function useDebounce(value: any, time: number) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, time)
    return () => {
      clearTimeout(handler)
    }
  }, [value, time])
  return debounceValue
}

export default useDebounce
