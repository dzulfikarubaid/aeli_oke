import {auth, fire} from '@/firebase';
import React, { useEffect } from 'react'
import WithNavbar from '../navigation';
import { collection, getDocs } from "firebase/firestore"; 

const News = () => {
    const [news, setNews] = React.useState<any>([])
    useEffect(() => {
       const fetchData = async () => {
          const querySnapshot = await getDocs(collection(fire, "news"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            setNews([...news, doc.data()])
          });
        }
        fetchData()
  
    },[])
      const renderHTML = (htmlString:any) => {
        return { __html: htmlString };
    };
  return (
    <div className='bg-dongker text-white'>
    <WithNavbar></WithNavbar>

    <div className='flex flex-wrap p-20 gap-4'>
    {
        news.map((item:any)=>{
            return(
             <div key={item.id} className={`w-[400px] flex-col p-4  rounded-xl border-2 border-teks/40 gap-4 text-left flex h-[400px] bg-gradient-to-br from-white/30 to-transparent`}>
                    <img className='w-full h-[200px] object-contain rounded-xl' src={item.image} alt="" />
                <h1 className='text-3xl font-bold'>{item.title.toUpperCase()}</h1>
                 <div dangerouslySetInnerHTML={renderHTML(item.content)} />
              </div>
            )
          })
    }
    </div>
    
    </div>
  )
}

export default News