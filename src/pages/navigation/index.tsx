
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import {auth} from '@/firebase'
import { useRouter } from 'next/router'

const Navigation = () => {
  const [active, setActive] = useState("")
  const {push} = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user:any) => {
      if (user) {
        // User signed in
        console.log('User is signed in:', user);
        setActive(user.displayName)
        
      } else {
        // User signed out
        console.log('User is signed out');
      }
    });

    // Unsubscribe listener when component unmounts
    return () => unsubscribe();
  }, [active]); 
  function handleSignOut(){
    signOut(auth)
    .then(()=>{
      setActive("")
    })
    .catch((error:any)=>{
      console.log(error.message)
    })
    
  }
  return (
    <div className=' z-[99999999] fixed top-0 py-6 items-center px-20 flex-row w-full justify-between backdrop-blur-3xl bg-transparent text-teks flex '>
      <Link href={'/'} className='flex flex-row gap-3 justify-center items-center'>
        <img className='w-[35px]  rounded-xl p-1 border-[0.5px] border-white/20' src="/logo-aeli-putih.png" alt="" />
        <h1>AELI</h1>
      </Link>
      <div className='flex flex-row gap-6 border-[1px] border-white/20 rounded-2xl p-2 px-4 font-extralight text-sm'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/activities'}>Activities</Link>
        <Link href={'/members'}>Members</Link>
        <Link href={'/articles'}>Articles</Link>
        <Link href={'/news'}>News</Link>
      </div>
      {
        active ? 
        <div className='flex flex-row gap-4 items-center'>
        <h1>{active}</h1>
        <button onClick={handleSignOut} className='border-[1px] border-white/20 rounded-2xl p-2 px-4' >Sign Out</button>
      </div>
        
        :
        <div className='flex flex-row gap-4 items-center'>
        <Link href={'/signin'}>Sign In</Link>
        <Link href={'/signup'} className='border-[1px] border-white/20 rounded-2xl p-2 px-4'  >Sign Up</Link>
      </div>
      }
     
    </div>
  )
}
function WithNavbar(props: any) {
  const [openmenu, setOpenMenu] = useState(false)
  return (
    <div> <div className='bg-dongker h-fit w-full hidden sm:block'>
      <Navigation></Navigation>
      <div className='h-[85px] flex justify-center items-center'>
        <h1 className='text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-purple-500 to-pink-300'>Build Capacity With AELI</h1>
      </div>
    </div>
    <div className='fixed bg-transparent  backdrop-blur-3xl left-0 top-0 z-[9999999999999]  sm:hidden w-full'>
  
    <div className=' flex p-8 justify-between w-full z-[99999999999999] '>
    <Link href={'/'} className='flex flex-row gap-3 justify-center items-center'>
        <img className='w-[35px]  rounded-xl p-1 border-[0.5px] border-white/20' src="/logo-aeli-putih.png" alt="" />
        <h1>AELI</h1>
      </Link>
    <button onClick={()=>setOpenMenu(!openmenu)}>
    {openmenu ? <BiX size={35}></BiX> : <BiMenu size={35}></BiMenu>}</button>
    </div>
      
    {
      openmenu &&
      <div className='flex flex-col gap-8 items-center py-8 bg-dongker fixed w-full z-[99999999999999] h-full overflow-y-hidden'>
    <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/activities'}>Activities</Link>
        <Link href={'/members'}>Members</Link>
        <Link href={'/articles'}>Articles</Link>
        <Link href={'/news'}>News</Link>
    </div>
    }
    </div>
    <h1 className=' text-center text-7xl pb-4 w-full sm:hidden bg-dongker'>AELI</h1>
    </div>
  )
}

export default WithNavbar