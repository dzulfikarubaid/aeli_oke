
import WithNavbar from './navigation'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion'
import Dpp from './dpp'
import Footer from './Footer2'
const CardDesc = (props: any) => {
  const { judul, deskripsi } = props
  const ref = useRef(null)
  const isVisible = useInView(ref)
  const mainControl = useAnimation()
  useEffect(() => {
    if (isVisible) {
      mainControl.start({
        opacity: 1, y: 0
      })
      console.log('visible')
    }
    else {
      mainControl.start({
        opacity: 0, y: 100
      })
      console.log('not visible')
    }
  }, [isVisible])
  return (
    <>

      <motion.div ref={ref} initial={{ opacity: 0, y:100 }} animate={mainControl} transition={{ duration: 1}} className='flex flex-col bg-gradient-to-br from-white/10 to-transparent rounded-xl border-2 gap-4 border-white/30 text-teks p-4 sm:w-[380px] text-left'>
        <p className='text-left mb-10 mt-4 text-subteks '>{deskripsi}</p>

      </motion.div>

    </>


  )
}

const About = () => {
   
    function CardSlider({year, desc}:any){
        const ref = useRef(null)
        const isVisible = useInView(ref)
      const mainControl = useAnimation()
      useEffect(() => {
        if (isVisible) {
          mainControl.start({
            opacity: 1, y: 0
          })
          console.log('visible')
        }
        else {
          mainControl.start({
            opacity: 0, y: 100
          })
          console.log('not visible')
        }
      }, [isVisible])
        return(
            <motion.div ref={ref} initial={{ opacity: 0, y:100 }} animate={mainControl} transition={{ duration: 1}} className='flex flex-col gap-2 relative border-[1px] border-white/40 rounded-xl  bg-gradient-to-b from-white/20 to-transparent mb-10'>
           <div className='p-4 bg-dongker rounded-t-xl'>
           <h1 className='text-3xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/70 via-white to-slate-400  '>{year}</h1>
           </div>
            <h1 className=' p-4 h-[220px] text-left text-subteks'>{desc}</h1>

        </motion.div>
        )
    }
    function Slider(){
        return(
            <div className='text-teks w-full p-4 relative'>
                <Swiper
                className='flex flex-row justify-center items-center w-full'
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            pagination
            
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
               <CardSlider desc="AELI dideklarasikan pada bersamaan dengan penyelenggaraan Festival Outbound Nasional di Tangerang Selatan, Banten." year="2007"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2007-2008" desc="Ketua Umum Enda Mulyanto AELI mendirikan DPD Pertama di Jawa Tengah"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2010-2013" desc="Ketua Umum Robby Seahan AELI mendirikan DPD Jatim, Bali & Sumut AELI menjadi Tim Ahli Kemenpar dalam merancang SKKNI Kepemanduan Outbound dan disahkan dengan Kepmenakertrans Nomor KEP.329/MEN/XII / 2011"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2013-2016" desc="Ketua Umum Kresno Wiyoso AELI mendirikan 11 DPD baru yaitu Sumbar, Sumsel, Kepri, Riau, Bengkulu, Lampung, DKI Jakarta, Banteng, Jabar, DIY & NTB Melaksanakan 9 kali Uji Kompetensi Kepemanduan Outbound"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2016-2019" desc="Ketua Harian Nurfahmi AELI mendirikan 2 DPD Baru yaitu Kaltim & Sulsel (total 17 DPD) 1 Dekade AELI Pengembangan Organisasi meluaskan kiprah EL di Indonesia"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2019-2022" desc="Ketua Umum Nurfahmi Penguatan Organisasi semasa Covid 19 Inovasi program Virtual"></CardSlider>
            </SwiperSlide>
            <SwiperSlide>
                <CardSlider year="2022-2025" desc="Ketua Umum Nurfahmi Capacity Building Program Campaign"></CardSlider>
            </SwiperSlide>
          </Swiper>
          <div className='bg-white/20 w-[300px] rounded-xl h-5 absolute bottom-[24px] mx-auto left-0 right-0 border-[1px] border-white/20'>
          </div>
            </div>
        )
    }
    function List({text}:any){
        return(
            <h1 className='p-2 border-[1px] border-white/40 rounded-2xl bg-gradient-to-br from-subteks/40 to-transparent sm:w-[500px]'>{text}</h1>
        )
    }
    const listItems = [
        "Tebet, Senin, 17 November 2014 (para asesor)",
        "Cibubur, Selasa, 24 Maret 2015",
        "Pancawati, Selasa, April 2015",
        "Boyolali, Selasa, 26 Mei 2015",
        "Denpasar, Rabu, 25 November 2015",
        "Kaliurang, Selasa, 1 Desember 2015",
        "Cibubur, Minggu, 6 Desember 2015",
        "Panjang Jiwo, Rabu, 16 Desember 2015",
        "Lembang, Senin, 10 Mei 2016",
        "Denpasar, Rabu-Kamis, 2-3 Agustus 2017",
        "Lubana Sengkol, Selasa-Rabu, 15-16 Agustus 2017",
        "Makassar, Minggu, 20 Agustus 2017"
      ];
  return (
    <div className='relative'>
   <WithNavbar></WithNavbar>
   <div className='flex flex-row justify-around w-full items-center border-b-[1px] border-white/20 p-6 top-[90px] z-[99999999] bg-dongker text-teks left-0'>
    {/* <a href="#aeli">AELI</a> */}
    <a href="#vision">Vision</a>
    <a href="#mission">Mission</a>
    <a href="#dpp">DPP</a>
    <a href="#history">History</a>
    <a href="#cert">Certification</a>
   </div>
    <div className='w-full flex flex-col items-center justify-center text-teks px-20 text-center h-full bg-dongker '>
    <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' id="aeli">Asosiasi Experiental Learning Indonesia</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>Asosiasi Experiential Learning Indonesia (AELI) adalah sebuah wadah yang menaungi beberapa lembaga pegiat kegiatan pendidikan alternatif berbasis alam bebas dengan pendekatan utama metode experiential Learning. Asosiasi ini lahir dilatar belakangi keprihatinan dan belum adanya wadah untuk beberapa lembaga yang selama ini dikenal dengan pegiat outbound training.</p>
           <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' id='vision'>Our Vision</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>Menjadi wadah dan mitra yang berkualitas bagi seluruh lembaga atau perorangan pengguna metode pelatihan berbasis pengalaman di Indonesia dan bertanggung jawab terhadap pengembangan kualitas manusia Indonesia.</p>

        <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' id='mission'>Our Mission</h1>
        <div className='flex flex-wrap gap-4 justify-center w-full mt-4 mb-10'>
            <CardDesc deskripsi="Memasyarakatkan pelatihan berbasis pengalaman kepada masyarakat Indonesia" >
            </CardDesc>
            <CardDesc deskripsi="Meningkatkan kualitas pelatihan dan pendidikan berbasis pengalaman, sehingga menjadi metode pelatihan yang efektif dan diakui di Indonesia"></CardDesc>
            <CardDesc deskripsi="Meningkatkan kualitas pelaksana pelatihan berbasis pengalaman sehingga menjadi pelaksana pelatihan yang bertanggung jawab terhadap pengembangan manusia Indonesia"></CardDesc>
        </div>
        <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' id="dpp">Dewan Pengurus Pusat</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>Dewan Pengurus Pusat (DPP) adalah pengurus pusat yang menggerakkan AELI yang berkoordinasi dengan Dewan Pimpinan Daerah (DPD).</p>

        <div>
            <Dpp></Dpp>
        </div>
        <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '  id="history">Our History</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>AELI memiliki sejarah yang panjang sebelum menjadi seperti sekarang.</p>
       <Slider></Slider>
       <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' id="cert">Certification</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>AELI telah menjadi mitra BNSP dan LSP untuk mengadakan Sertifikasi Uji Kompetensi Kepemanduan Outbound sejak tahun 2014. </p>
        <div className='w-full p-4'>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={2.2}
      autoplay={{ pauseOnMouseEnter:true,delay:2000 }}
    >
      {listItems.map((item, index) => (
        <SwiperSlide key={index}>
          <List text={item} />
        </SwiperSlide>
      ))}
    </Swiper>
        </div>
   
    </div>
    <Footer></Footer>
    </div>
 
  )
}

export default About