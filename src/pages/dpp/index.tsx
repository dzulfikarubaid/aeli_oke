import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import useResponsive from '@/components/useResponsive'



const pengurus = [
    {
        nama: "NURFAHMI",
        jabatan: "Ketua Umum",
        foto: "/useroke.png"

    },
    {
        nama: "JEPIH NURHADI",
        jabatan: "Bendahara Umum",
        foto: "/useroke.png"
    },
    {
        nama: "GIGIH GESANG",
        jabatan: "Sekretaris Jenderal",
        foto: "/useroke.png"
    },
    {
        nama: "NURSANTI ADJI",
        jabatan: "Kepala BidangKesekretariatan",
        foto: "/useroke.png"
    },
    {
        nama: "UNANG RUSNADI",
        jabatan: "Kepala Bidang Keanggotaan",
        foto: "/useroke.png"
    },
    {
        nama: "DIAN WIBOWO",
        jabatan: "Kepala Bidang Keorganisasian",
        foto: "/useroke.png"
    },
    {
        nama: "ADI WALUYO",
        jabatan: "Kepala Bidang Penelitian dan Pengembangan",
        foto: "/useroke.png"
    },
    {
        nama: "ARDIAN RANGGA F",
        jabatan: "Kepala Bidang Pendidikan dan Pelatihan",
        foto: "/useroke.png"
    },
    {
        nama:"D.P. ARSA",
        jabatan: "Kepala Bidang Sertifikasi dan Akreditasi",
        foto: "/useroke.png"
    },
    {
        nama: "SOFIYAN HADI",
        jabatan: "Kepala Bidang Komunikasi Publik",
        foto: "/useroke.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/useroke.png"
    },
    {
        nama: "HERIYANTO",
        jabatan: "Kepala Bidang Hubungan Pemerintah",
        foto: "/useroke.png"
    },
    {
        nama: "DENY NUR ALAM",
        jabatan: "Kepala Bidang Hubungan Internasional",
        foto: "/useroke.png"
    },
    {
        nama: "DWIKI PRAYOGA MENZANO",
        jabatan: "Kepala Bidang Hubungan Pasar dan Mitra",
        foto: "/useroke.png"
    },
    
]
function Dpp() {
    const {isDesktop, isTablet, isMobile, isOnlyMobile} = useResponsive()
    function Card(props:any){
        const {nama, jabatan, foto} = props
        const formattedNama = nama
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')

        const namaUrl = nama.toLowerCase().replace(/\s+/g, '-');
      return(
        <Link href={`/dpp/${namaUrl}`} >
        <div  className={`sm:p-4 p-2 text-blue-500 flex flex-col gap-4 rounded-xl sm:w-[250px] w-[100px] justify-center items-center`}>
          <img className={`sm:w-[200px] sm:h-[200px]  w-[80px] h-[80px] object-contain`} src={foto} alt="" />
          <div className='text-center sm:text-md text-sm'>
            <h1 className='text-teks '>{formattedNama}</h1>
            <h1 className='text-subteks'>{jabatan}</h1>
          </div>
        </div>
        </Link>
      )
    }
    
    return (
        <div  className={`w-full flex flex-col flex-center`}>
        
        <div className='flex flex-col justify-center items-center w-full'>
            {/* <object data="Pengurus/Pengurus.pdf" type="application/pdf" width="80%" height="400">
            </object> */}

          <div className='w-full mt-10'>
            <div className='flex flex-col justify-center items-center w-full sm:gap-20 gap-10'>
                <div>
                    <h1 className='text-center text-xl mb-10'>Dewan Etik</h1>
                    <div className='flex flex-row gap-4 sm:gap-10'>
                    <Card nama="Ferdin Boy" jabatan="Ketua Dewan Etik" foto="/useroke.png"></Card>
                    <Card nama="Agus Supriyo" jabatan="Anggota Dewan Etik" foto="/useroke.png"></Card>
                    <Card nama="Tri Cahyono Putra" jabatan="Anggota Dewan Etik" foto="/useroke.png"></Card>
                    </div>

                </div>
                <div>
                    <h1 className='text-xl text-center  mb-10'>Dewan Pembina</h1>
                    <div className='flex flex-row gap-10'>
                    <Card nama="Muhammad Haydar" jabatan="Ketua Dewan Pembina" foto="/Foto Pengurus/heydar.jpg"></Card>
                    <Card nama="Adhik Iwan Sulistiyanto" jabatan="Anggota Dewan Pembina" foto="/useroke.png"></Card>
                    <Card nama="Ronie Ibrahim" jabatan="Anggota Dewan Pembina" foto="/useroke.png"></Card>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='text-xl text-center mb-10'>Ketua Umum</h1>
                  
                    <Card nama="Nurfahmi" jabatan="Ketua Umum" foto="/Pengurus/2.png"></Card>
            
                </div>
                <div className='flex flex-row justify-center sm:gap-[200px] gap-[50px] w-full'>
                    <div className={`flex flex-col gap-10 items-center `}>
                        <h1 className={`font-bold text-center `}>Sekretaris Jenderal</h1>
                        <Card nama="Gigih Gesang" jabatan="Sekretaris Jenderal" foto="/Pengurus/3.png"></Card>
                        <Card nama="Nursanti Adji" jabatan="Kesekretariatan" foto="/Pengurus/5.png"></Card>
                    </div>
                    <div className={`flex flex-col gap-10 items-center `}>
                        <h1 className={`font-bold text-center `}>Bendahara Umum</h1>
                    <Card nama="Jepih Nurhadi" jabatan="Bendahara Umum" foto="/Pengurus/4.png"></Card>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='text-xl text-center  mb-10'>Komite Pelaksana</h1>
                    <div className={`flex flex-wrap gap-10 justify-center ${!isDesktop ? 'w-full' : 'w-full'}`}>
                    <Card nama="Muchamad Mansur" jabatan="Ketua Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="Yohanes Batista Hanes" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="M. Deny Yudiana" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="Dewa Putu Gede Wesnawa" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="Arifanti Murniawati" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="M. Prasetyo Bagus" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="Arwin Prayetno" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    <Card nama="Desi Panca Putri Syamsul" jabatan="Anggota Komite Pelaksana" foto="/useroke.png"></Card>
                    
                
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>
                    <h1 className='text-xl text-center  mb-10'>Ketua Bidang</h1>
                    <div className='flex flex-wrap gap-10 justify-center w-full'>
                    <Card nama="Unang Rusnadi" jabatan="Kabid. Keanggotaan" foto="/Pengurus/6.png"></Card>
                    <Card nama="Dian Wibowo" jabatan="Kabid. Keorganisasian" foto="/Pengurus/7.png"></Card>
                    <Card nama="Ardian Rangga" jabatan="Kabid. Pendidikan dan Pelatihan" foto="/Pengurus/8.png"></Card>
                    <Card nama="D. P. Arsa" jabatan="Kabid. Sertifikasi dan Akreditasi" foto="/Pengurus/9.png"></Card>
                    <Card nama="Sofyan Hadi" jabatan="Kabid. Komunikasi Publik" foto="/Pengurus/10.png"></Card>
                    <Card nama="Heriyanto" jabatan="Kabid. Hubungan Pemerintah" foto="/Pengurus/11.png"></Card>
                    <Card nama="Deny Nur Alam" jabatan="Kabid. Hubungan Internasional" foto="/Pengurus/12.png"></Card>
                    <Card nama="Dwiki Prayoga" jabatan="Kabid. Hubungan Pasar dan Mitra" foto="/Pengurus/13.png"></Card>
                
                    </div>
                </div>
            </div>
        
          </div>
        </div>

        </div>
  
    )
  }
  
  export default Dpp