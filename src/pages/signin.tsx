import Link from 'next/link'
import React from 'react'
import {auth} from '@/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'


function Input({ label, type, plc, value, onChange }: any) {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="">{label}</label>
            <input placeholder={plc} type={type} value={value} onChange={onChange} className='bg-transparent rounded-xl p-2 border-[1px] border-subteks focus:outline-none outline-purple-950 ' />
        </div>
    )
}

const SignIn = () => {
    const [data, setdata] = React.useState<any>({ email: '', password: '' })
    const {push} = useRouter()
    function handleSignIn() {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential:any) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                push('/')
            })
            .catch((error:any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }
    return (
        <div className='flex flex-col justify-center items-center  w-full backdrop-blur-lg bg-transparent h-screen gap-8 text-purple-950'>
            <div className='p-8 border-[1px] border-subteks/20 rounded-2xl flex flex-col gap-4 w-[400px] bg-white'>

                <h1 className='text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-dongker via-purple-950 to-slate-400 ' >Sign In</h1>
                <Input plc="Masukkan email aeli anda" label='Email' type='email' value={data.email} onChange={(e: any) => setdata({ ...data, email: e.target.value })} />
                <Input plc='Masukkan password' label='Password' type='password' value={data.password} onChange={(e: any) => setdata({ ...data, password: e.target.value })} />
                <button onClick={handleSignIn} className='bg-gradient-to-br from-dongker to-purple-950 text-white rounded-xl p-2'>Sign In</button>
                <Link href={'/signup'}>Belum punya akun?</Link>

            </div>
        </div>
    )
}

export default SignIn