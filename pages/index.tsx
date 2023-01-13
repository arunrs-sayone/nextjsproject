import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import SectionImageText from '../src/components/sectionImageText';
import ContactCard from '../src/components/ContactCard';
import Banner from '../src/components/banner';
import OurService from '../src/components/ourService';


interface Data {
  content:{
    "createdAt": string,
    "updatedAt": string,
    "publishedAt":string,
    "Banner": {
      "id": number,
      "title": string,
      "sub_title": string,
      "button1text": string,
      "button2text": string,
      "Show_banner": boolean
    },
    "home_section2": {
      "id": number,
      "description": string,
      "title": string,
      "subtitle": string
    },
    "home_section3": {
      "id": number,
      "title": string,
      "subtitle":string
    },
    "home_section4": {
      "id": number,
      "location": string,
      "emailaddress": string,
      "phone": number
    }
  },
  sectionthree:{
    "createdAt": string,
    "updatedAt": string,
    "publishedAt":string,
    "home_section3": {
        "id": number,
        "title": string,
        "subtitle":string
        "items": [
            {
              "id": number,
              "title": string,
                "description": string
            }
        ]
  }, 
  },
  sectiontwo:any
}


export default function Home({content, sectionthree, sectiontwo}:Data) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Banner data={content.Banner}/>

      <div className='container'>
          <SectionImageText  data={sectiontwo.home_section2}/>
      </div>
      
      <div className={styles.contactus}>
        <div className='container py-5'>
          <OurService data={sectionthree.home_section3}/>
        </div>
        
      </div>
      <div className={styles.contactus}>
        <div className='container py-5'>
          <ContactCard data={content.home_section4}/>
        </div>
        
      </div> 

    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const [content, sectionthree, sectiontwo] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/home?populate=*`).then((res) => {
     return  res.json()
    }).then((data) => {
      return data.data.attributes
    }),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/home?populate[home_section3][populate]=*`).then((res) => {
      return  res.json()
    }).then((data) => {
      return data.data.attributes
    }),
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/home?populate[home_section2][populate]=*`).then((res) => {
       return  res.json()
    }).then((data) => {
      return data.data.attributes
    })
  ])

 
  return {
    props: { content, sectionthree, sectiontwo }
  }

}


