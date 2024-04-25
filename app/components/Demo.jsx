import Image from 'next/image'
import React from 'react'

export default function Demo() {
  return (
    <div style={{filter: "drop-shadow(0px 0px 9px rgba(0, 77, 255, 1)) drop-shadow(0px 0px 100px rgba(0, 77, 255, 1))"}}>
      <Image src="/tech-stack/nextjs.png" alt="demo" width={40} height={40} />
    </div>
  )
}
