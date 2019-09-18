import { useState } from "react"

/**
 * @intro 设置LocalStorage
 * @param key storage里存的键
 * @param initialValue 默认值,默认{}
 * @return [value,setValue]
 */

function useLocalstorage(key: string, initialValue = {}) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.log("get Localstorage error------->", err)
      return initialValue
    }
  })
  const setStorageValue = (data:any) => {
    try {
      const pushValue = value instanceof Function ? data(value) : value
      setValue(pushValue)
      window.localStorage.setItem(key, JSON.stringify(pushValue))
    } catch (err) {
      console.log("set Localstorage error------->", err)
    }
  }

  return [value, setStorageValue]
}
export default useLocalstorage
