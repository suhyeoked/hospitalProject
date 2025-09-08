import style from './style.module.css'
import { useRouter } from 'next/navigation'


export default function NavBar(){
    const router = useRouter()
    return(
        <div className={style.header}>
            <header>
                <div className={style.navBar}>
                    <div onClick={()=>{
                         router.push('/home')
                    }}>
                        로고
                    </div>
                    <div className={style.navBarRight}>
                        <ul>
                            <li>질병 찾기</li>
                            <li>의사</li>
                            <li>병원</li>
                            <li>고객센터</li>
                            <li onClick={()=>{
                                router.push('/qnaSection')
                            }}
                            >Q&A</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}