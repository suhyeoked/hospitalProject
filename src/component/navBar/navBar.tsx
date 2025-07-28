import style from './style.module.css'

export default function NavBar(){
    return(
        <div className={style.header}>
            <header>
                <div className={style.navBar}>
                    <div>
                        로고
                    </div>
                    <div className={style.navBarRight}>
                        <ul>
                            <li>질병 찾기</li>
                            <li>의사</li>
                            <li>병원</li>
                            <li>고객센터</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}