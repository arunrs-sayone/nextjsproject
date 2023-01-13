import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../../../public/vercel.svg'
import Styles from './header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {

    const [scroll, setScroll] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                setScroll(true);
            } else {
                setScroll(false);
            }
           
          });
          return () => {
            window.removeEventListener("scroll")
          }
    },[])


    return (
        <div className="container-fluid position-fixed headerzindex">
            <div className='container'>
                <div className={scroll ? Styles.headerouterscroll : Styles.headerouter}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={Styles.logo}>
                            <Image
                                src={profilePic}
                                alt="Picture of the author"
                                height={40}
                                />
                            </div>
                        </div>
                        <div className="col-md-8 d-flex align-center">
                            <ul className='d-flex align-items-center m-0'>
                                <li className='d-inline me-2'>
                                    <span className={Styles.link}><Link href="/">Home</Link></span>
                                </li>
                                <li className='d-inline me-2'>
                                     <span className={Styles.link}><Link href="/about-us">About Us</Link></span>
                                </li>
                        
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header