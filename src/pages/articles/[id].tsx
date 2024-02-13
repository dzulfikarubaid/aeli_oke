import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import axios from "axios";
 import { collection, getDocs } from 'firebase/firestore';
import {fire} from '@/firebase'; // Pastikan Anda mengimpor objek db dari file firebase Anda

import Link from "next/link";

import {

  FacebookShareButton,
 
  WhatsappShareButton,

} from "react-share";
import {Swiper, SwiperSlide}
 from "swiper/react";
 import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaHandsClapping, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import {PiHandsClapping} from "react-icons/pi";
import {RiShareForward2Line, RiShareForwardBoxFill} from "react-icons/ri";
interface DataItem {
  id: string,
  name: string,
  content: string,
  title: string,
  create_at: string
}
import useResponsive from "@/components/useResponsive";
import WithNavbar from "../navigation";
import Footer from "../Footer2";


function DetailArticles() {
  const [selectedArticle, setSelectedArticle] = useState<DataItem | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState<DataItem[]>([]);
  const { query } = useRouter();
  const router = useRouter();
  const articleTitle = selectedArticle ? selectedArticle.title : "Artikel tidak ditemukan";
  const [share, setShare] = useState(false);
  const {isDesktop, isTablet} = useResponsive()

  
 
useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(fire, 'articles'));
      const articles:any = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setValue(articles);

      // Jika Anda ingin menampilkan artikel yang dipilih berdasarkan query.id
      const selectedArticle = articles.find((item:any) => item.id === query.id);
      if (selectedArticle) {
        setSelectedArticle(selectedArticle);
      }
    } catch (error) {
      console.error('Error fetching articles: ', error);
    }
  };

  fetchData();
}, [query.id]);


  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    // Membuat URL dengan parameter pencarian dan mengarahkan pengguna
    const url = `/articles?search=${searchInput}`;
    router.push(url);
  };

  useEffect(() => {
    // Mengambil nilai parameter pencarian dari URL jika ada
    const querySearch = router.query.search || '';
    setSearchInput(querySearch.toString());

    // Filter data based on searchInput
    const filteredResults:any = value.filter(({ title }: any) =>
      title.toLowerCase().includes(querySearch.toString().toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [router.query.search, value]);

  const [count, setCount] = useState(0);
  const formatTimeLeft = (createdAt: string) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const timeLeftMillis = now.getTime() - createdAtDate.getTime();
    const secondsLeft = Math.floor(timeLeftMillis / 1000);

    if (secondsLeft < 60) {
      return "kurang dari 1 menit yang lalu";
    } else if (secondsLeft < 3600) {
      const minutes = Math.floor(secondsLeft / 60);
      return `pada ${minutes} ${minutes > 1 ? "menit" : "menit"} yang lalu`;
    } else if (secondsLeft < 86400) {
      const hours = Math.floor(secondsLeft / 3600);
      return `pada ${hours} ${hours > 1 ? "jam" : "jam"} yang lalu`;
    } else {
      const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
      return "pada " + createdAtDate.toLocaleDateString('id-ID', options);
    }
  };
  const updateCounter = (counterValue:any) => {
    axios.post('/api/updateCounter', { counter: counterValue })
      .then((response) => {
        // Berhasil mengirim data ke server
      })
      .catch((error) => {
        // Terjadi kesalahan dalam pengiriman data
      });
  };
  return (
  <div className="w-full ">
  <WithNavbar></WithNavbar>
    <div className="flex flex-col justify-center items-center pt-20 bg-dongker text-teks h-fit">
     
       <div className={`flex flex-col justify-center items-center w-full px-6`}>
        {selectedArticle ? (
          <div className={`flex ${!isDesktop ? 'w-full' : 'w-[1000px]'} flex-col gap-10 justify-center items-center `}>
            <h1 className={`font-extrabold ${!isDesktop ? 'text-[20px]' : 'text-[40px]'}`}>{articleTitle}</h1>
            <div className="flex flex-col w-full">
              <Link className='hover:border-b w-fit hover:border-black' href={`/profile/${selectedArticle.name}`}>{selectedArticle.name}</Link>
              <h1>Diposting {formatTimeLeft(selectedArticle.create_at)}</h1>
              
              <div className="flex flex-row justify-between items-center mt-10 p-3 border-t border-b border-white/20">
                <div className="flex flex-row gap-2">
                  <button onClick={()=>setCount(count + 1)}><PiHandsClapping size={22}></PiHandsClapping></button>
                  <h1>{count}</h1>
                </div>
                {
                share ? 
                <div className="flex flex-row gap-6">
              <WhatsappShareButton title={`Baca artikel dari ${selectedArticle.name} dengan judul ${selectedArticle.title}`} separator=" " url={`https://aeli.vercel.app/articles/${selectedArticle.id}`}>
                <FaWhatsapp size={22}></FaWhatsapp>
              </WhatsappShareButton>
              <FacebookShareButton
                url={`https://aeli.vercel.app/articles/${selectedArticle.id}`}
            
                hashtag={"#aeli"}
              >
              <FaFacebook size={22}/>
              </FacebookShareButton>
              </div>
              :
              <button onClick={() => setShare(!share)}>
                  <RiShareForwardBoxFill size={22}></RiShareForwardBoxFill>
                </button>
              }
                
              </div>
              
            </div>
            <div className="w-full" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />

            <div className="flex flex-row justify-start items-start w-full">
            {/* <h1 className="text-left mt-20 mb-4">Rekomendasi</h1> */}
            </div>
          </div>
        )
        :
        <div className="h-[400px]">
        </div>
        }

      </div>
      <div>
   
      {/* <Swiper
      className='h-full w-full '
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      slidesPerView={!isDesktop ? 1.4 : 1.9}
      onSlideChange={(swiper) =>
        isNaN(swiper.realIndex) && swiper.slideTo(0)
      }
      onSwiper={(swiper) => console.log(swiper)}
      >
        {
          filteredData.length > 0 ? filteredData.map((item: any, index) => (
            <SwiperSlide key={item.id} className="">
              <div className="flex flex-col w-full  justify-center items-center">
              <div  className={`flex flex-col ${!isDesktop ? 'w-full' : 'w-[500px]'}  border-[1px] border-white/20 bg-gradient-to-br from-white/20 to-transparent rounded-xl h-[200px] gap-4 p-4`}>
            <div className={`flex flex-row gap-1 h-6 ${!isDesktop ? 'text-[12px]' : 'text-md'} `}>
              <Link className='hover:border-b hover:border-black w-fit' href={`/profile/${item.name}`}>
                {item.name}
              </Link>
              <p>•</p>
              <Link href={`/articles/${item.id}`}>{formatTimeLeft(item.create_at)}</Link>
            </div>
            <Link href={`/articles/${item.id}`} className=' flex flex-row justify-between gap-4'>
              <div>
                <h1 className={`font-bold ${!isDesktop ? 'text-[16px]' : 'text-xl'} `}>{item.title}</h1>
                <div
                  className={`font-light ${!isDesktop ? 'text-[12px]' : 'text-md'} `}
                  dangerouslySetInnerHTML={{
                    __html:
                      item.content.length > 50
                        ? item.content.substring(0, 50).trim().replace(/\s+/g, ' ') + '...'
                        : item.content
                  }}
                />
              </div>
              {
                !item.image ? 
                <img className='w-[100px] h-[100px] object-scale-down' src={'/logo-aeli.png'} alt='' />:
                <img className='w-[100px] h-[100px] object-scale-down' src={item.image} alt='' />
              }
            </Link>
          </div>
              </div>
            </SwiperSlide>
          )):
          ''
        }
      </Swiper> */}
 
     
      </div>
     
    </div>
    <Footer></Footer>
    
    </div>
  )
}

export default DetailArticles;
