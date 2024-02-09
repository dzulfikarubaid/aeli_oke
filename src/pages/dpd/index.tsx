import React from 'react'
import Table from './Table'
import Navbar from './SpecialNavbar'
import useResponsive from '@/components/useResponsive'
const Dpd = () => {
  const { isDesktop, isMobile, isTablet, isOnlyMobile } = useResponsive()
  return (
    <div>
    <Navbar>
    
    </Navbar>
    <div className={`p-10 mt-24 ${!isDesktop ? 'w-[800px]' : 'w-full'}`}>
    <h1 className='font-bold text-xl text-left p-4'>Daftar DPD AELI di Indonesia</h1>
      <Table></Table>
    </div>
  
    </div>
    

  )
}

export default Dpd