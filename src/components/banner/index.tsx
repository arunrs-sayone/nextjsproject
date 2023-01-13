import styles from './banner.module.scss'

interface  Props {
   data:{
    "id": number,
    "title": string,
    "sub_title": string,
    "button1text": string,
    "button2text": string,
    "Show_banner": boolean
   }
  }

const Banner = ({data}:Props) => {
    return (
        <div className={styles.banner}>

                <span className={styles.shadow}></span>

                <div className={styles.description}>
                
                    <h6 className={styles.subtitle}>{data.sub_title}</h6>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className="buttons text-center">
                        <a href="#service" className={styles.btn}>{data.button1text}</a>
                        <a href="#contact" className={styles.btn}>{data.button2text}</a>
                    </div>              
                    
                </div>

         
          </div>
    )
}

export default Banner