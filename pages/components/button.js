import React from 'react'
import Image from 'next/image'

export default function Button({ btn, className }) {
    return (
        <button className={className}>{btn} <a><Image src="/icon.svg" width="20px" height="15px"/></a></button>
    )
}
