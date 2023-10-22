import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"



export default function Login() {
  return (
    <div className='bg-oblue min-h-screen flex flex-col items-center text-xl pb-10'>
        <Link href={'/'}>
        <Image src={'/logo.png'} width={180} height={180} alt='logo' className='my-10' />
        </Link>

        {/* REST */}
        <div className='w-[27%]  bg-white rounded-lg px-8 flex flex-col '>
          <h4 className='font-bold text-3xl text-opurp my-10'>Sign in to Memories</h4>

          <Input type="email" placeholder="Email Address" className='text-lg h-14 mb-5' />
          <Input type="password" placeholder="Password" className='text-lg h-12 mb-5' />

          <p className='text-oblue text-base font-bold mb-7'>Forgot password?</p>
         
          <Button className='mb-7 text-xl h-12 font-semibold bg-oblue  hover:bg-oblue/90' size={'lg'} >
            Sign in
          </Button>
          

          <div className='flex items-end'>
          <div className='border border-t border-obrown border-opacity-20 mb-5 flex-1 '/>
          <p className='px-4 pb-2 text-sm text-obrown opacity-50 font-semibold '>OR</p>
           <div className='border border-t border-obrown border-opacity-20 mb-5 flex-1 '/>
           </div>


           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg mt-7 text-slate-700 flex items-center justify-start gap-4 mb-3'
           >
            <Image src={'/google.svg'} width={30} height={30} alt='google' />
            
            Sign in with Google
            </Button>

           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg  text-slate-700 flex items-center justify-start gap-4 mb-3'
           >
            <Image src={'/facebook.svg'} width={30} height={30} alt='google' />
            
            Sign in with facebook
            </Button>

           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg  text-slate-700 flex items-center justify-start gap-4 mb-3'
           >
            <Image src={'/apple.svg'} width={30} height={30} alt='google' />
            
            Sign in with Apple
            </Button>


            <p className='font-bold text-base text-obn text-center my-5'>Don&apos;t have an account? <Link href={'/register'} className='text-oblue'>create your account</Link></p>
        </div>

 
    </div>
  )
}
