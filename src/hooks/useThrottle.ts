import { useState, useRef, useEffect } from "react"

/**
 * @intro 节流函数,n秒空挡之后才执行fn,比如input输入停止1s之后才发请求
 * @param value 需要防抖的数据
 * @param time 每n秒触发的时间,默认500
 */

function useThrottle(value: any, time: number = 500) {
  const [throttleValue, setThrottleValue] = useState(value)
  const lastRun = useRef(Date.now())
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRun.current >= time) {
        setThrottleValue(value)
        lastRun.current = Date.now()
      }
    }, time - (Date.now() - lastRun.current))
    return () => {
      clearTimeout(handler)
    }
  }, [value, time])
  return throttleValue
}

export default useThrottle
