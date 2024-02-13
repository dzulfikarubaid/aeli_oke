import React, { useEffect, useRef } from 'react'
import WithNavbar from './navigation'
import { motion, useAnimation, useDragControls, useInView, useScroll, useTransform } from 'framer-motion'
import Card from './card'
import Map from '@/components/Map'
import Link from 'next/link'

import { FaAngleDown, FaAngleUp, FaFacebook, FaInstagram, FaYoutube, } from 'react-icons/fa6'
import { MdOutlineClose, MdOutlineEmail } from 'react-icons/md'
import { BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'
import Footer from './Footer2'
const New = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const refmap = useRef(null)
  const dragControls = useDragControls()
  const visible = useInView(refmap)
  const animation = useAnimation()
  const refEarth = useRef(null)
  const visibleEarth = useInView(refEarth)
  const animationEarth = useAnimation()
  const [message, setMessage] = React.useState('')
  useEffect(() => {
    if (visible) {
      animation.start({
        opacity: 1,
        y: 0
      })

    }
    else {
      animation.start({
        opacity: 1,
        y: -200
      })
    }
    if (visibleEarth) {
      animationEarth.start({
        opacity: 1,
        rotate: 360
      })
    }
    else {
      animationEarth.start({
        opacity: 0,
        rotate: 0
      })
    }
  }, [visible])
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const [clicked, setClicked] = React.useState(false)
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "30%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"])
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const backgroundX2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY3 = useTransform(scrollYProgress, [0, 1], ["0%", "240%"])
  const backgroundX3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const backgroundX4 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  return (

    <div className=' bg-dongker overflow-x-hidden h-full relative'>

      <WithNavbar />
      <div ref={ref} style={{ backgroundImage: 'url(/stars.png)', backgroundSize: 'contain', backgroundRepeat: 'repeat' }} className='w-full flex flex-col items-center justify-center text-teks px-20 text-center h-full'>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, ease: "anticipate", bounce: "0.5" }, }} style={{ y: textY2, }} className='pt-20 text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-purple-500 to-pink-300'>Experience is not necessarily Experiential</motion.h1>
        <motion.h1 className='text-subteks' style={{ y: textY3, }}>Build Capacity, Upgrade Skills, and Enhance Creativity</motion.h1>
      </div>
      <div className='relative '>
        <motion.img className='w-full' style={{ y: backgroundY }} src="/mountainbg2.png" alt="" />
        <motion.img style={{ x: backgroundX, y: backgroundY }} className='absolute z-[1] -bottom-1 transform  -left-72 w-[1000px] ' src="/men23.png" alt="" />

        <motion.img style={{ y: backgroundY, x: backgroundX2 }} className='absolute -right-72 bottom-[-2px] w-[1000px]' src="/mountainpur.png" alt="" />


      </div>
      <div className=' p-20'>
        <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '>Achievement is a reflection of dedication and hard work.</h1>
        <p className='text-center mb-10 mt-4 text-subteks '>AELI has notched up a series of impressive achievements, underscoring its commitment to excellence and constant progress.</p>
        <div className='flex w-full justify-center items-center mb-6'>
          <img src="/archer.png" alt="" /></div>
        <div className='flex flex-wrap w-full justify-center gap-6'>

          <Card isVisible={true} judul="Pelatihan Berdaya Saing" deskripsi="AELI membuat program pelatihan bagi anggota baik perorangan maupun Lembaga"></Card>
          <Card judul="Tim Ahli Kementrian" deskripsi="AELI menjadi Tim Ahli Kementerian Pariwisata dalam merancang SKKNI Kepemanduan Outbound"></Card>
          <Card judul="Mitra BNSP dan LSP" deskripsi="AELI menjadi mitra BNSP dan LSP untuk melaksanakan sertifikasi Profesi Kepemanduan Outbound di Indonesia"></Card>

        </div>
        <div>
          <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '>Expansion is a testament to dedication and strategic planning.
          </h1>
          <p className='text-center mb-10 mt-4 text-subteks '>AELI has successfully established a widespread presence across 15 provinces in Indonesia, underscoring its commitment to excellence and continuous growth.</p>

        </div>
        <motion.div ref={refmap} initial={{
          opacity: 1,
          y: -200
        }} transition={{ duration: 1 }} animate={animation} className='flex flex-col bg-gradient-to-b mt-10 from-transparent to-purple-950 rounded-b-3xl gap-4  text-teks p-6 border-t-0 '>
          <Map></Map>
          <Link href={'/members'} className='self-center border-[1px] border-white/20 rounded-2xl p-2 px-10 bg-gradient-to-br from-white/20 to-transparent'>See All</Link>
        </motion.div>
        <div className='flex justify-center flex-col  items-center'>
          <div>
          <h1 className='pt-20 text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '>Connecting is a reflection of openness and thoughtful engagement.
          </h1>
          <p className='text-center mb-10 mt-4 text-subteks '>AELI has proudly extended its reach to connect with individuals and communities across 15 provinces in Indonesia, emphasizing our dedication to fostering meaningful relationships and continual collaboration.</p>
          </div>
          {/* <img src="/logo-aeli-putih.png" className='w-[500px] h-fit p-20 bg-gradient-to-tl from-purple-950 to-transparent border-[1px] rounded-[60px] border-white/30' alt="" /> */}
          <motion.img animate={animationEarth} ref={refEarth} initial={{ opacity: 0, rotate: 0 }} transition={{ duration: 10 }} className='w-[400px] h-fit' src="/pngearth.png" alt="" />
          {/* <div className='flex flex-row text-teks gap-6 items-center'>
            <div className='flex gap-2 items-center'>
              <FaInstagram size={30}></FaInstagram>
              <h1>@experiential.id</h1></div>
            <div className='flex gap-2 items-center'>

              <FaYoutube size={30}></FaYoutube>
              <h1>Experiential Channel</h1></div>

          </div> */}
          <button className='border-[1px] border-white/20 rounded-2xl p-2 mt-6 px-10 bg-gradient-to-br from-purple-800 to-transparent text-teks flex gap-2 items-center' onClick={() => setClicked(!clicked)}>
            <MdOutlineEmail size={25} />
            Send Email
          </button>
          {
            clicked &&

            <motion.div initial={{ opacity: 0, y: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1, y: -400 }} className='w-1/2 flex flex-col gap-4 text-teks rounded-3xl p-10 border-[1px] border-white/20 mt-10 bg-gradient-to-b from-purple-950 to-dongker'>
              <div className='flex flex-row-reverse'>
                <button><MdOutlineClose size={20} onClick={() => setClicked(!clicked)} /></button>
              </div>
              <label htmlFor="name">Name</label>
              <input className='w-full text-dongker border-[1px] border-white/20 rounded-2xl p-2 px-4' type="text" id="name" name="name" placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input className='w-full text-dongker  border-[1px] border-white/20 rounded-2xl p-2 px-4' type="email" id="email" name="email" placeholder="Email" />
              <label htmlFor="message">Message</label>
              <textarea className='w-full border-[1px] border-white/20 rounded-2xl text-dongker  p-2 px-4' id="message" name="message" placeholder="Message"></textarea>
              <button className='border-[1px] border-white/20 rounded-2xl p-2 px-10 bg-gradient-to-br from-white/20 to-transparent'>Send</button>
            </motion.div>
          }



        </div>


      </div>
      <Footer></Footer>
      {
          isOpen ?
            <motion.div initial={{ opacity: 0, y: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1, y: -50 }} className='w-1/2 flex flex-col gap-4 text-teks rounded-3xl p-10 border-[1px] border-white/20 mt-10 bg-gradient-to-b from-purple-950 to-dongker fixed right-10 bottom-0 z-[99999]'>
              <div className='flex flex-row-reverse'>
                <button><MdOutlineClose size={20} onClick={() => setIsOpen(!isOpen)} /></button>
              </div>
        
              <label htmlFor="message">Message</label>
              <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='w-full border-[1px] border-white/20 rounded-2xl text-dongker  p-2 px-4' id="message" name="message" placeholder="Message"></textarea>
              <Link href={`https://wa.me/6285156831740?text=${message}`} target='_blank' className='border-[1px] border-white/20 rounded-2xl p-2 px-10 bg-gradient-to-br from-white/20 to-transparent text-center'>Send</Link>
            </motion.div>
            :
            <motion.button initial={{ opacity: 0}} transition={{ duration: 1 }} animate={{ opacity: 1, y: 0 }} onClick={() => setIsOpen(!isOpen)} className='fixed bottom-14 -right-10'>
              <h1 className='bg-purple-800 p-4 text-teks rotate-90 rounded-b-2xl'>CONTACT US</h1>
            </motion.button>
        }


    </div>
  )
}

export default New