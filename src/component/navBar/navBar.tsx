import style from './style.module.css'
import { useRouter } from 'next/navigation'
import Logo from '@/image/logo.png';
import LogoImg from '@/image/logoImg.png';
import Image from 'next/image';


export default function NavBar(){
    const router = useRouter()
    return(
        <div className={style.header}>
            <header>
               <div className={style.Logo}> 
                    <Image src={LogoImg} alt="logo" />
                    <Image src={Logo} alt="logo" />
               </div>
            </header>
        </div>
    )
}