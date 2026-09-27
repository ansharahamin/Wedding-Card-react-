import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import closedCard from '../assets/card-closed.webp'
import openedCard from '../assets/card-opened.webp'
const WeddingCover = ({onOpenComplete}) => {
     const containerRef = useRef(null);
  const layerARef = useRef(null);
  const buttonRef = useRef(null);
  const timelineRef = useRef(null);
  const {contextSafe} = useGSAP(()=>{
    timelineRef.current = gsap
    .timeline({paused:true,onComplete:onOpenComplete})
  
  })
  return (
    <div>WeddingCover</div>
  )
}

export default WeddingCover