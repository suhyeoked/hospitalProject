import style from "@/component/mainSection/style.module.css"

export default function MainSection() {
    return(
        <div className={style.mainSection}>
            <div className={style.searchInput}>
                <input type="search" placeholder="검색" name="" id="" />
                <button>검색</button>
            </div>
            <div className={style.Category}>
                <div className={style.CategoryMian}>
                    <ul>
                        <li>암</li>
                        <li>감기</li>
                        <li>화상</li>
                    </ul>
                    <ul>
                        <li>피부</li>
                        <li>아픔</li>
                        <li>아픔</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}