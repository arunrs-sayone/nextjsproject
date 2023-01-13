import Head from 'next/head'
import styles from '../styles/tutorial.module.scss';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import React from 'react'

interface Data {
  "albumId":number,
  "id":number,
  "title": string,
  "url": string,
  "thumbnailUrl": string
}



export default function Tutorial({data}:{data:Data[]}) {

  const [state, setstate] = useState<{title:string}>({title:''})

  useEffect(async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const res = await response.json()
    setstate(res)
  },[])



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className={styles.banner}>
          {state ? (
            <>
                {state.title}
            </>
          ) : (
            <>loading</>
          )}

          {data?.map((item) => (
              <div className={styles.banneritem}>
              <Image src={item.url} width={500} height={200}/>
              <div className={styles.text}>
                   {item.title}   
              </div>
          </div>
          ))}
          
      </div>



      
    </div>
  )
}

//on request time
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

//on build time (seo)
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
