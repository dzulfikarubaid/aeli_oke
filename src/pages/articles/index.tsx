import { auth, fire } from '@/firebase';
import React, { useEffect } from 'react'
import WithNavbar from '../navigation';
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link';
import { BiPencil } from 'react-icons/bi';
import Footer from '../Footer2';
import { format } from 'date-fns';

const Articles = () => {
  const [articles, setArticles] = React.useState<any>([])
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(fire, "articles"));
        const fetchedArticles = querySnapshot.docs.map(doc => ({
          id: doc.id, // Include the id here
          ...doc.data()
        }));
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles: ', error);
      }
    };
    fetchData();
  }, []);

  const renderHTML = (htmlString: any) => {
    return { __html: htmlString };
  };
  const shortenText = (text: any, maxLength: any) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  return (
    <div className='bg-dongker text-white w-full relative'>
      <WithNavbar></WithNavbar>
      <div className='sm:px-20 px-10 w-full flex flex-col gap-10 '>
        <div className='flex flex-row items-center justify-center gap-6 mt-4'>
          <Link href='/articles/write' className='p-2 fixed right-6 bottom-5 bg-purple-800 rounded-2xl flex flex-row gap-2 items-center text-white'><BiPencil size={35}></BiPencil></Link>

        </div>
        <div className='flex flex-wrap gap-6 w-full justify-center'>
          {
            articles.map((item: any) => {
              return (
                <Link key={item.id} href={`/articles/${item.id}`} className={`rounded-2xl sm:p-8 p-4 w-full sm:w-[380px] hover:border-white/20 hover:bg-gradient-to-t hover:from-white/10 hover:to-transparent flex flex-col text-subteks mt-4 justify-between`}>
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

export default Articles