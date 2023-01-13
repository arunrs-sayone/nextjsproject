import Image from 'next/image'
import React from 'react'
import styles from './sectionImageText.module.scss'
import image from '../../../public/images/about.jpg'

interface Props {
    data:{

        "id": number,
        "description": string,
        "title": string,
        "subtitle": string,
        "image":any

    }
}

const SectionImageText = ({data}:Props) => {
    console.log(data)
    return (
        <div className={[styles.maindiv,`row` ].join(" ") }>
            <div className="col-md-4">
                <div className={styles.image}>
                     <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + data.image.data.attributes.url} width={data.image.data.attributes.width} height={data.image.data.attributes.height}/>
                </div>
            </div>
            <div className="col-md-8">
                 <div>
                    <h2 className={styles.title}>{data.title}</h2>
                    <h3 className={styles.subtitle}>{data.subtitle}</h3>
                    <p className={styles.description}>{data.description}</p>
                 </div>   
            </div>

        </div>
    )
}

export default SectionImageText