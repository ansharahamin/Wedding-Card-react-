import React, { useEffect, useState } from 'react'

const useCountdown = (targetDate) => {
    const [daysLeft, setdaysLeft] = useState(0)
    useEffect(() => {
      const calculate = ()=>{
        const diff = new Date(targetDate) - new Date()
        const days = Math.max(Math.ceil(diff/1000 *60 *60*24),0)
        setdaysLeft(days)
      }
    calculate()
    const interval = setInterval(calculate,1000*60*60)
      return () => {
        clearInterval(interval)
      }
    }, [targetDate])
    
  return daysLeft
}

export default useCountdown