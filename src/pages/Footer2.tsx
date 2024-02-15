import Link from 'next/link'
import React from 'react'
import { BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='sm:px-20 px-10 bg-dongker pt-20'>
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-subteks/40 to-transparent'></div>
      <div className='w-full  py-20 sm:flex-row flex-col flex text-teks justify-center gap-10'>
        <div className='w-full flex-row flex gap-8'>
        <div className='flex flex-col sm:gap-10 gap-4 items-start'>
          <div className='flex flex-row gap-3 justify-center items-center text-teks'>
            <img className='w-[35px]  rounded-xl p-1 border-[0.5px] border-white/20' src="/logo-aeli-putih.png" alt="" />
            <h1>AELI</h1>
          </div>
          <div>
            <p className='font-extralight sm:text-lg text-md text-teks/90'>Experience is not necessarily Experiential</p>
          </div>


        </div>
        <div className='flex flex-col gap-4 text-white/50 sm:text-md text-sm'>
          <h1 className='text-white font-semibold'>Organization</h1>
          <Link href={'/about'}>About</Link>
          <Link href={'/activities'}>Activities</Link>
          <Link href={'/members'}>Members</Link>
          <Link href={'/blog'}>Blog</Link>
        </div>
        <div className='flex flex-col gap-4 text-white/50 sm:text-md text-sm'>
          <h1 className='text-white font-semibold'>Legal</h1>
          <Link href={'/about'}>Terms of Services</Link>
          <Link href={'/activities'}>Privacy Policy </Link>
        </div></div>
        <div className='border-[1px] border-teks/20 rounded-2xl p-8 bg-gradient-to-tr from-transparent  to-white/10 sm:w-[400px] w-full hover:border-white/20 hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent flex flex-col gap-4 text-subteks mt-4'>
          <h1 className='font-bold text-2xl text-teks'>Get in touch</h1>
          <p className=''>JI. Merak Blok P No. 19 RT 015 /RW 03, Cipinang Indah II Kel. Pondok Bambu, Kec. Duren Sawit, Jakarta Timur </p>
          <p>
            0813-8137-0076
          </p>
          <p>
            dpp@aeli.or.id
          </p>

        </div>


      </div>
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-subteks/40 to-transparent'></div>
      <div>
        <div className='flex flex-row gap-4 text-md text-subteks  py-20 justify-between px-6'>
          <h1>Copyright © 2023 AELI Archives. All Rights Reserved</h1>
          <div className='flex sm:flex-row flex-col gap-4 text-2xl'>
            <Link href={'https://www.instagram.com/experiential.id/'}><BiLogoInstagram size={30}></BiLogoInstagram></Link>
            <Link href={'https://www.youtube.com/channel/UC9kGp7wY6k0L9zJ0P6cZdXg'}><BiLogoYoutube size={30}></BiLogoYoutube></Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer