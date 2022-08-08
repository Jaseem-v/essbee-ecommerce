import React from 'react'
import Image from "next/image"

function SingleCategory({ title, img }) {
    return (
        <div className='category__card'>
            <div className="category__img">
                <Image
                    src={`/categories/${img}.png`}
                    alt="Picture of the author"
                    objectFit='contain'
                    layout='fill'
                />
            </div>
            <h4 className='category__title'>{title} </h4>
        </div>
    )
}

export default SingleCategory