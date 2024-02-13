import Link from 'next/link'
import React from 'react'
import {auth} from '@/firebase'
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import { useRouter } from 'next/router'

function Input({ label, type, plc, value, onChange }: any) {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="">{label}</label>
            <input placeholder={plc} type={type} value={value} onChange={onChange} className='bg-transparent rounded-xl p-2 border-[1px] border-subteks focus:outline-none outline-purple-950 ' />
        </div>
    )
}

const SignUp = () => {
    const {push} = useRouter()
    const [data, setdata] = React.useState<any>({ name: '', email: '', password: '', confirmation: '' })

    function handleSignUp() {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential:any) => {
                const user = userCredential.user;
                console.log(user)
                updateProfile(user, {displayName:data.name})
                push('/')
            })
            .catch((error:any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className='flex flex-col justify-center items-center backdrop-blur-3xl px-8 bg-transparent h-screen gap-8 text-white'>
            <Link href={'/'} className='flex flex-row gap-3 justify-center items-center'>
        <img className='w-[35px]  rounded-xl p-1 border-[1px] border-white/20' src="/logo-aeli-putih.png" alt="" />
        <h1>AELI</h1>
      </Link>
            <div className='p-8 border-2 border-subteks/20 rounded-2xl flex flex-col gap-4 sm:w-[400px] w-full bg-gradient-to-br from-teks/20 to-transparent'>

                <h1 className='text-3xl  text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 ' >Sign Up</h1>
                

                <Input plc="Masukkan nama lengkap anda" label='Full Name' type='text' value={data.name} onChange={(e: any) => setdata({ ...data, name: e.target.value })} />
                <Input plc="Masukkan email aeli anda" label='Email' type='email' value={data.email} onChange={(e: any) => setdata({ ...data, email: e.target.value })} />
                <Input plc='Masukkan password' label='Password' type='password' value={data.password} onChange={(e: any) => setdata({ ...data, password: e.target.value })} />
                <Input plc="Masukkan password sekali lagi" label='Confirmation Password' type='password' value={data.confirmation} onChange={(e: any) => setdata({ ...data, confirmation: e.target.value })} />
                <button type='button' onClick={handleSignUp} className='bg-gradient-to-br from-dongker border-[1px] border-white/20 to-purple-950 text-white rounded-xl p-2'>Sign Up</button>
                <Link href={'/signin'}>Sudah punya akun?</Link>
            </div>
        </div>
    )
}

export default SignUp