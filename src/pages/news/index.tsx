import { auth, fire } from '@/firebase';
import React, { useEffect, useState } from 'react'
import WithNavbar from '../navigation';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from 'next/link';
import { BiPencil, BiSearch, BiX } from 'react-icons/bi';
import Footer from '../Footer2';
import { format } from 'date-fns';
import { FaSearch } from 'react-icons/fa';
import { setActive } from '@material-tailwind/react/components/Tabs/TabsContext';

const News = () => {
  const [news, setNews] = React.useState<any>([])
  const formatTimeLeft = (createdAt: string) => {
    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const timeLeftMillis = now.getTime() - createdAtDate.getTime();
    const secondsLeft = Math.floor(timeLeftMillis / 1000);

    if (secondsLeft < 60) {
      return "kurang dari 1 menit yang lalu";
    } else if (secondsLeft < 3600) {
      const minutes = Math.floor(secondsLeft / 60);
      return `${minutes} ${minutes > 1 ? "menit" : "menit"} yang lalu`;
    } else if (secondsLeft < 86400) {
      const hours = Math.floor(secondsLeft / 3600);
      return `${hours} ${hours > 1 ? "jam" : "jam"} yang lalu`;
    } else {
      const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
      return  createdAtDate.toLocaleDateString('id-ID', options);
    }
  };
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(fire, "news"), orderBy("create_at", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchednews = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNews(fetchednews);
      } catch (error) {
        console.error('Error fetching news: ', error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  const filterednews = news.filter((item:any) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });


  const renderHTML = (htmlString: any) => {
    return { __html: htmlString };
  };
  const shortenText = (text: any, maxLength: any) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  const [searchActive, setSearchActive] = useState(false)
  return (
    <div className='bg-dongker text-white w-full relative'>
      <WithNavbar></WithNavbar>
      <div className='sm:px-10 px-4 w-full flex flex-col gap-10 '>
        <div className='flex flex-row items-center  gap-6 mt-4'>
        <div className='fixed right-6 bottom-5 flex flex-col gap-4'>
        {!searchActive ? <button className='p-2  bg-gradient-to-br from-white/40 to-transparent border-[1px] border-white/20 text-white rounded-2xl flex flex-row gap-2 items-center  w-fit' onClick={()=>setSearchActive(true)}><BiSearch size={30}></BiSearch></button> : <div className='flex flex-row gap-3 rounded-2xl border-gray-500 bg-white border-[1px]  pl-4 py-2 items-center  text-purple-950 w-full'>
      <FaSearch ></FaSearch>
      <input type="text" 
        placeholder="Cari berita..."
        value={searchQuery}
        onChange={handleSearchChange} className='focus:outline-none bg-transparent text-dongker text-sm sm:w-[400px]' />
        <button onClick={()=>setSearchActive(false)} className='px-2'><BiX size={30}></BiX></button>
      </div>}
        <div className='w-full flex flex-row-reverse'>
        <Link href='/news/write' className='p-2  bg-purple-950 border-[1px] border-white/20 rounded-2xl flex flex-row gap-2 items-center text-white w-fit'><BiPencil size={30}></BiPencil></Link></div>
        
        </div>
          

        </div>
        <div className='flex flex-wrap gap-6 w-full justify-center'>
          {
            filterednews.map((item: any) => {
              return (
                <Link key={item.id} href={`/news/${item.id}`} className={`rounded-2xl sm:p-8 p-4 w-full sm:w-[380px] hover:border-white/20 hover:bg-gradient-to-t hover:from-white/10 hover:to-transparent flex flex-col text-subteks mt-4 justify-between`}>
                  <div>
                  <img className='w-full h-[180px] object-contain rounded-2xl bg-black/40' src={item.image} alt="" />
                  <h1 className='text-sm text-teks my-5'>{item.name}</h1>
                  <h1 className='sm:text-2xl text-xl font-bold text-teks mb-2'>{item.title.toUpperCase()}</h1>
                  <div dangerouslySetInnerHTML={{ __html: shortenText(item.content, 50) }} />
                  </div>
                  <div className='w-full flex flex-row-reverse mt-2'>
                  <h1 className='text-sm text-teks'>{formatTimeLeft(item.create_at)}</h1>
                  </div>
                </Link>
              )
            })
          }
        </div></div>
      <Footer></Footer>
    </div>
  )
}

export default  News