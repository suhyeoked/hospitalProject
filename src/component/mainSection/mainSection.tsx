import style from "@/component/mainSection/style.module.css"
import NavBar from "../navBar/navBar"
import Image from "next/image"
import SearchImg from "@/image/SearchImg.png"
import MianImg_1 from "@/image/MainImg_1.png"
import MianImg_2 from "@/image/MainImg_2.png"
import MianImg_3 from "@/image/MainImg_3.png"
import MianImg_4 from "@/image/MainImg_4.png"
import MianImg_5 from "@/image/MainImg_5.png"
import MianImg_6 from "@/image/MainImg_6.png"
import DoctorImg_1 from "@/image/ImgDoctor_1.png"
import DoctorImg_2 from "@/image/ImgDoctor_2.png"
import DoctorImg_3 from "@/image/ImgDoctor_3.png"
import MainHospital from "@/image/MainHospital_Img.png"

export default function MainSection() {
    return(
        <div>
            <div className={style.MainImg}>
                <NavBar />
                <div>
                    <p>
                        당신의 질병에 <br />
                        가장 잘 맞는 사람
                    </p>
                </div>
            </div>
            <div className={style.mainSection}>
                <div className={style.searchInput}>
                    <input type="search" placeholder="어디가 아프신가요?" name="" id="" />
                    <Image src={SearchImg} alt="SearchImg" />
                </div>
                <div className={style.Category}>
                    <div className={style.CategoryMian}>
                        <ul>
                            <li>
                                <Image src={MianImg_1} alt="MianImg_1" />
                            </li>
                            <li>
                                <Image src={MianImg_2} alt="MianImg_2" />
                            </li>
                            <li>
                                <Image src={MianImg_3} alt="MianImg_3" />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Image src={MianImg_4} alt="MianImg_4" />
                            </li>
                            <li>
                                <Image src={MianImg_5} alt="MianImg_5" />
                            </li>
                            <li>
                                <Image src={MianImg_6} alt="MianImg_6" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.DoctorSection}>
                <h1>
                    환자를 먼저 생각하는 의료진
                </h1>
                <div className={style.DoctorSectionMain}>
                    <ul>
                        <li>
                            <Image src={DoctorImg_1} alt="#DoctorImg_1" />
                            <div className={style.DoctorSectionMainText}>
                                <p>
                                    <h1>
                                        김의사 <br />
                                    </h1>
                                    나쁜 전립선암 환자 치료에 강한
                                    <br />
                                    <span>
                                        행복병원 근무
                                    </span>
                                    <br />
                                    전립선 암, 신장암 각종 비뇨기 종양
                                </p>
                            </div>
                        </li>
                        <li>
                            <Image src={DoctorImg_2} alt="#DoctorImg_2" />
                            <div className={style.DoctorSectionMainText}>
                                <p>
                                    <h1>
                                        김의사 <br />
                                    </h1>
                                    나쁜 전립선암 환자 치료에 강한
                                    <br />
                                    <span>
                                        행복병원 근무
                                    </span>
                                    <br />
                                    전립선 암, 신장암 각종 비뇨기 종양
                                </p>
                            </div>
                        </li>
                        <li>
                            <Image src={DoctorImg_3} alt="#DoctorImg_3" />
                            <div className={style.DoctorSectionMainText}>
                                <p>
                                    <h1>
                                        김의사 <br />
                                    </h1>
                                    <span className={style.DoctorSectionMainText_1}>
                                        나쁜 전립선암 환자 치료에 강한
                                    </span>
                                    <br />
                                    <span className={style.DoctorSectionMainText_2}>
                                        행복병원 근무
                                    </span>
                                    <br />
                                    <span className={style.DoctorSectionMainText_3}>
                                        전립선 암, 신장암 각종 비뇨기 종양
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.hospitalSection}>
                <ul>
                    <li>
                        <Image src={MainHospital} alt="MainHospital"/>
                    </li>
                    <li>
                        <h1>
                            지금 찾는 병원
                        </h1>
                        <p>
                            이 병원은 화상 분야에서 인정받은 의료진이 <br />
                            상주하며 화상에 특화된 치료를 제공합니다.
                        </p>
                        <button>
                            바로가기
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}