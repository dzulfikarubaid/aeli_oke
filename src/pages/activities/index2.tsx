import React from 'react'
import Content from '../Content'
import NoNavbar from '../NoNavbar'
import Navbar from '../components/Navbar'
import useResponsive from '@/components/useResponsive'
import Footer from '../Footer'
function Activities() {
  const { isDesktop, isMobile, isTablet, isOnlyMobile } = useResponsive()
  return (
    <div className={`${!isDesktop ? 'w-[800px]' : 'w-full'} flex flex-col flex-center`}>
    <Navbar className=''/>
    <div className={`flex flex-col justify-center items-center  ${!isDesktop ? 'w-[800px]' : 'w-full'} mb-10`}>
      <img className='w-full' src="https://asset-2.tstatic.net/tribunnews/foto/bank/images/pengurus-pusat-aeli-2019-2022.jpg" alt="" />
    <div className='flex flex-col  gap-4 justify-center items-center px-10 text-justify mt-10'>
      
        <h1 >AELI telah hadir selama hampir dua dekade sebagai pionir kegiatan peningkatan kompetensi sumber daya manusia Indonesia. Melalui experiential learning, AELI memberi kontribusi nyata untuk bangsa. Berikut beberapa aktivitas AELI sebagai upaya realisasi mimpi.</h1>

        <div className='flex flex-row justify-between w-full'>
        <img className='w-[500px] mr-10' src="https://www.tourismvaganza.com/wp-content/uploads/2020/01/IMG_20200107_115718.jpg" alt="" />
        <h1>Kegiatan Pelantikan, Rakernas, dan Training of Trainer (TOT) dengan mengusung gerakan “AELI untuk Negeri” sebagai semangat kerja seluruh anggota AELI.</h1>
        </div>
        <div className='flex flex-row justify-between w-full'>
        <h1>Bekerja sama dengan Disparekraf DKI Jakarta dan LSP Pramindo untuk melakukan proses penilaian mengenai knowledge, skills, dan attitude guna menentukan seorang FasEL sudah berkompeten  memandu sebuah kegiatan outbound sesuai dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) atau belum.</h1>
        <img className='w-[500px] ml-10'src="https://www.bernas.id/wp-content/uploads/2022/06/IMG_202206163_183158220-750x430.png" alt="" />
        
        </div>
      
        <img className='w-auto' />
        <h1><strong>Modern Problems Require Modern Solutions</strong> adalah kalimat yang tepat untuk mendeskripsikan upaya AELI dalam menghadapi tantangan pandemi Covid-19 dengan memaksimalkan teknologi sebagai media pelaksana experiential learning. Beberapa kegiatan yang dilakukan antara lain Team Journey, Team Building, Escape Mission, Team Quiz, Tour, Adventure Activity, Mobile Hunt, Fun Outbound, dan Team Energizing yang semuanya dilakukan secara virtual.
        </h1>
        <div className='flex flex-row justify-between w-full'>
        <img className='w-[500px] mr-10' src="https://venuemagz.com/wp-content/uploads/2021/02/Goa-Lawang-scaled-800x533_c.jpg" alt="" />
        <h1>Pengembangan wisata dengan mengajak wisatawan untuk turut terlibat dalam berbagai aktivitas berbasis kearifan lokal, alam, budaya, dan lingkungan sehingga melahirkan pengalaman baru.</h1>
        </div>
        <h1 className='font-bold text-sm text-center'>
        Berkembangnya kesadaran mengenai konsep experiential learning akan memberikan dorongan kuat bagi peningkatan kapasitas diri bagi banyak individu.
        </h1>
        <h1 className='font-bold text-xl text-center'>...</h1>
       
     
        <h1 className='font-bold'>AELI BERSATU BERJAYA</h1>
    </div>
   
    </div>
    
    <Footer></Footer>
    </div>
    
        
    
  )
}

export default Activities