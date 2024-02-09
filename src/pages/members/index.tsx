import React from 'react'
import Table from './Table'

import useResponsive from '@/components/useResponsive'
import WithNavbar from './Nav'
import Footer from '../Footer2'
const Dpd = () => {
  const { isDesktop, isMobile, isTablet, isOnlyMobile } = useResponsive()
  return (
    <div>
    <WithNavbar>
    
    </WithNavbar>
    <div className={`px-20 bg-dongker h-full py-10 text-center ${!isDesktop ? 'w-[800px]' : 'w-full'}`}>
    <h1 className='text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '>Dewan Perwakilan Daerah
          </h1>
    <p className='text-subteks'>AELI telah berkembang pesat di Indonesia dan sudah tersebar pada 15 Provinsi di Indonesia</p>
      <div className='py-10'>
      <Table></Table>
      </div>
    </div>
    <Footer></Footer>
  
    </div>
    

  )
}

export default Dpd