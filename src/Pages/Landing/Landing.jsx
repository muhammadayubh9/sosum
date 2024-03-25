import React from 'react'
import "./Landing.scss"
import Logo from "../../Assests/Logo.png"
import jenshen from "../../Assests/jenshen.png"
import saroy from "../../Assests/saroy.svg"
import megaPhone from "../../Assests/MegaPhone.png"
import dori from "../../Assests/dori.png"
import fivth from "../../Assests/fivth.png"
import sixth from "../../Assests/sixth.png"
import seventh from "../../Assests/seventh.png"
import objects from "../../Assests/objects.png"

function Landing() {
    return (
        <div className='landing'>
            <div className="first">
                <div className="header">
                    <img src={Logo} alt="" />
                    <div className="header_right">
                        <a href="#">Kompaniya haqida</a>
                        <a href="#">faktlar</a>
                        <a href="#">mahsulot</a>
                        <a href="#">uz</a>
                        <a href="#" className='buyurtma'>buyurtma berish</a>
                    </div>

                </div>
                <div className="first_l_r_hover">
                    <img src={saroy} className='saroy' alt="" />
                    <div className="left">
                        <h2>100% tabiiy</h2>
                        <h1>Koreya qizil jenshen ichimligi</h1>
                        <a href="#" className='buyurtma'>BUYURTMA BERISH</a>
                    </div>
                    <div className="right">
                        <img src={jenshen} alt="" />
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="form_hover">
                    <h1>Buyurtma berish</h1>
                    <div className="form">
                        <p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
                        <input type="text" className='buyurtma_form' value='Ismingiz' />
                        <input type="text" className='buyurtma_form' value='+998' />
                        <button href="#" className='buyurtma'>Buyurtma berish</button>
                    </div>
                </div>
                <div className="megaphone_hover">
                    <img className='mega_phone' src={megaPhone} alt="" />
                    <div className="title_hover">
                        <h4>Chegirma</h4>
                    </div>
                    <div className="old_price_hover">

                        <h2>1 399 000</h2>
                    </div>
                    <div className="old_price_hover scd">

                        <h2>1 399 000</h2>
                    </div>
                    <div className="foyda_hover">
                        <h5>foyda <span>200 000</span></h5>
                    </div>
                </div>
            </div>
            <div className="thrid">
                <div className="hover_hover">

                    <div className="dori_hover">
                        <img src={dori} className='dori_img' alt="" />
                        <div className="dori_price">
                            <h3>Jenshen</h3>
                            <h3>1 199 100</h3>
                        </div>
                    </div>
                    <div className="dori_hover">
                        <img src={dori} className='dori_img' alt="" />
                        <div className="dori_price">
                            <h3>Jenshen</h3>
                            <h3>1 199 100</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fivth">
                <div className="yozuv">
                    <p>Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
                        Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari juda kop. Giyohlar ichida qizil jenshendan song birinchi orinda turadi)</p>
                </div>
                <img src={fivth} className='img' alt="" />
            </div>
            <div className="fivth">
                <img src={sixth} className='img' alt="" />
                <div className="yozuv">
                    <p>Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
                        Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari juda kop. Giyohlar ichida qizil jenshendan song birinchi orinda turadi)</p>
                </div>
            </div>
            <div className="seventh">
                <div className="yozuv">
                    <p>Qizil jenshen bilan jenshenni foydali hususiyatlaridagi farqi- 1-qizil jenshenni aks tasiri oddiy jenshenga qaraganda kamroq, o'zi esa kuchliroq shuning uchun qizil jenshen 50 yoshdan yuqoridagilar uchun judaham qulay va foydali. 2- qizil jenshen hozirgi kundagi eng ko'p kasalliklar( davlenya, saxr,jinsiy zaiflik)ni davolashdagi eng uchun eng kuchli giyohdir. Oddiy jenshen esa asosan yoshlar(15-40 yosh) uchundir u judaham kuchli issiqlik manbayidir. U insondagi dangasa immunitetlarni uyg'otadi va odamni ishchanlik, harakatchanligini oshiradi, insondagi sovuqlikni tanadan quvib chiqaradi va insonni kop bezovta qiladigan shamollash,grip,tanadagi og'riqlar,prostata kabi kasalliklarni yoq qiladi. Korealik jenshen mutahasislari va doctorlarning hulosasiga ko'ra qizil jenshenni 50 yoshdan yuqorilar uchun. Oddiy jenshenni esa 15 yoshdan-50 yoshgacha bolgan insonlar uchun tafsiya qilish eng to'g'ri yo'ldir.</p>
                </div>
                <img src={seventh} className='img' alt="" />
            </div>
            <div className="eighth_hover">
                <div className="eighth">
                    <div className="eighth_inner">
                        <div className="eighth_left">
                            <h1>Kompaniya haqida</h1>
                            <p>"Soosum" kompaniyasi 2021-yildan boshlab uzoq sharq o’simligi bo’lgan “Jenshen”ning ildizidan tayyorlangan ichimlikni ishlab chiqarib, O’zbekiston bo’ylab yetkazib berishni yo’lga qo’ydi. Kompaniyamiz Koreyaning "Chejun" ITD hamda Qizil Jenshen sharbati MChJ korxonalari bilan hamkorlikda ishlaydi. "Sunmee" qizil jenshen ildizi Janubiy Koreyada yetishtirilib O’zbekistonda qadoqlanadi.</p>
                        </div>
                        <img src={objects} className='objects' alt="" />

                    </div>
                </div>
            </div>
            <div className="ninth">
                <div className="ninth_inner">
                    <h1>Koreya qizil jensheni ichimligini kimlar iste'mol qiladilar?</h1>
                    <p className="ps_hover">
                        <p>O’zida doimiy charchoq va holsizlik xis qiladiganlar</p>
                        <p>Jinsiy quvvati kamligidan aziyat chekadiganlar</p>
                        <p>Saraton kasalligini oldini olishni istaganlar</p>
                        <p>Qarilikni sekinlashtirishni istaganlar</p>
                        <p>Aqliy va jismoniy faoliyati pasayganlar</p>
                        <p>Tana va bo’g’imlarda doimiy og’riq xis qiladiganlar</p>
                        <p>Bemorlikdan keyin oyoqqa tezroq turishni xohlaganlar</p>
                    </p>

                </div>
            </div>
            <div className="tenth">
                <div className="tenth_inner">
                    
                <div className="tenth_right">
                    <h1>Qizil jenshen ildizi ichimligidan qanday foydalaniladi?</h1>
                    <p>Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
                        Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)...*rasm qo'y* bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari juda kop. Giyohlar ichida qizil jenshendan song birinchi orinda turadi). Yerdan yangi uzilgan 1~8 yillik jenshenni zavodda yuvib tozalab ortiqcha shoxlarini qirqib, zavoddagi mahsus bosimli quritish tehnologiyasida quritilgan jenshen( quritilgan jenshen koreyschada 홍삼 xo'ngsam deb ataladi, quriganida qizil tusga kiradi va foydali hususiyatlari yanada ortadi, shuning uchunham bunga yetadigan giyoh yoq va dunyoda giyohlar qiroli hisoblanadi)* rasm qo'y*qizil jenshen deb ataladi.</p>
                </div>
                </div>
            </div>
            <div className="faktalar">
                <div className="faktal_inner">
                <h1>Faktlar sonlarda</h1>
                <div className="faktalar_hover">
                    <div className="fakt">
                        <div className="fakt_datas">
                            <h2>100</h2>
                            <h3>100 ga yaqin kasalliklarni
                                oldini olish va davolashda
                                qollaniladi</h3>
                        </div>
                    </div>
                    <div className="fakt">
                        <div className="fakt_datas">
                            <h2>1.3 mlrd</h2>
                            <h3>1,3 mlrd xitoyliklar jenshenni inson uchun eng foydali mahsulot deb hisoblashadi</h3>
                        </div>
                    </div>
                    <div className="fakt">
                        <div className="fakt_datas">
                            <h2>100</h2>
                            <h3>Jenshen o'simligi 100 yilgacha umr ko'radi</h3>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer_inner">
                <div className="footer_logo_hover">
                    <img src={Logo} alt="" />
                    <p>Janubiy Koreyada tayyorlangan haqiqiy 6 yillik qizil jenshen ekstrakti</p>
                    <div className="social_icons">
                        <i className='bi bi-telegram'></i>
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-facebook'></i>
                        <i className='bi bi-youtube'></i>
                    </div>
                </div>
                <div className="lenks_hover">
                    <a href="#">Kompaniya haqida</a>
                    <a href="#">faktlar</a>
                    <a href="#">mahsulot</a>
                </div>

                <div className="form">
                    <p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
                    <input type="text" className='buyurtma_form' value='Ismingiz' />
                    <input type="text" className='buyurtma_form' value='+998' />
                    <button style={{ background: "#B04C08" }} href="#" className='buyurtma'>Buyurtma berish</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Landing