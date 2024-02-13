import React, { useState } from 'react';
import WithNavbar from '../navigation';
import Footer from '../Footer2';
import { BiCross, BiX } from "react-icons/bi";

const ActivityCard = ({ title, imageUrl, description }:any) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={`sm:w-[380px] w-full flex-col p-4  rounded-xl border-2 border-teks/40 gap-4 text-left ${clicked ? "bg-gradient-to-br from-purple-950 to-transparent ":"flex h-[400px] bg-gradient-to-br from-white/30 to-transparent" }`}>
      {clicked ? 
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row-reverse w-full'>
            <button onClick={() => setClicked(!clicked)}><BiX size={30}></BiX></button>
          </div>
          <h1 className='font-bold text-2xl text-center'>{title}</h1>
          <img className='' src={imageUrl} alt="" />
          <h1>{description}</h1>
        </div> 
      :
        <div className='flex flex-col justify-between h-full'>
         <div>
          <img className='filter grayscale mb-4' src={imageUrl} alt="" />
          <h1 className='font-bold text-2xl'>{title}</h1></div>
          <div className='flex flex-row-reverse w-full'>
            <button onClick={() => setClicked(!clicked)} className='border-[1px] border-white/20 p-2 rounded-xl'>More Info</button>
          </div>
        </div>
      }
    </div>
  );
};

const Activity = () => {
  return (
    <div>
      <WithNavbar />
      <div className='sm:px-20 px-10 bg-dongker h-full py-10 text-center text-teks'>
        <h1 className='text-4xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 '>Activities</h1>
        <p className='text-subteks'>AELI has been active in various activities, from seminars, workshops, to social activities</p>
        <div className='flex flex-wrap w-full mt-10 gap-6 justify-center items-center'>
          <ActivityCard 
            title="PELANTIKAN, RAKERNAS, DAN TOT" 
            imageUrl="https://www.tourismvaganza.com/wp-content/uploads/2020/01/IMG_20200107_115718.jpg" 
            description="AELI telah hadir selama hampir dua dekade sebagai pionir kegiatan peningkatan kompetensi sumber daya manusia Indonesia. Melalui experiential learning, AELI memberi kontribusi nyata untuk bangsa. Berikut beberapa aktivitas AELI sebagai upaya realisasi mimpi. Kegiatan Pelantikan, Rakernas, dan Training of Trainer (TOT) dengan mengusung gerakan “AELI untuk Negeri” sebagai semangat kerja seluruh anggota AELI." 
          />
           <ActivityCard 
            title="KERJA SAMA DISPAREKRAF DKI JAKARTA DAN LSP PRAMINDO" 
            imageUrl="https://www.bernas.id/wp-content/uploads/2022/06/IMG_202206163_183158220-750x430.png" 
            description="Bekerja sama dengan Disparekraf DKI Jakarta dan LSP Pramindo untuk melakukan proses penilaian mengenai knowledge, skills, dan attitude guna menentukan seorang FasEL sudah berkompeten  memandu sebuah kegiatan outbound sesuai dengan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) atau belum." 
          />
           <ActivityCard 
            title="PENGEMBANGAN WISATA" 
            imageUrl="https://venuemagz.com/wp-content/uploads/2021/02/Goa-Lawang-scaled-800x533_c.jpg" 
            description="Pengembangan wisata dengan mengajak wisatawan untuk turut terlibat dalam berbagai aktivitas berbasis kearifan lokal, alam, budaya, dan lingkungan sehingga melahirkan pengalaman baru." 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
