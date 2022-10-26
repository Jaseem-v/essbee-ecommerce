import React from 'react'
import Image from "next/image"
import Card from '@mui/material/Card';
import Link from 'next/link';

function SingleCategory({ title, img, page = false, format = "webp" }) {
    return (
        <Card>
            <Link href="/shop/groceries">
                <a >
                    <div className='category__card'>
                        <div className="category__img">
                            {page ?
                                <Image
                                    src={`/categories-page/${img}.png`}
                                    alt="Picture of the author"
                                    objectFit='contain'
                                    layout='fill'
                                />
                                :

                                <Image
                                    src={img < 10 ? `/categories/category-img-0${img}.webp` : `/categories/category-img-${img}.webp`}
                                    alt="Picture of the author"
                                    objectFit='contain'
                                    layout='fill'
                                />
                            }
                        </div>
                        <h4 className='category__title'>{title} </h4>
                    </div>
                </a>
            </Link>
        </Card>
    )
}

export default SingleCategory