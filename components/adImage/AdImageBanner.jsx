import Image from 'next/image'
import React from 'react'

export default function AdImageBanner({img}) {
    return (
        <div className='adImage'>
            <img src={`/ad-image/${img}.jpg`}
                alt='Ad image'
            />
        </div>
    )
}
