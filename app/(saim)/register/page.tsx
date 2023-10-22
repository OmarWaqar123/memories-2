import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"



export default function Register() {
  return (
    <div className='bg-oblue min-h-screen flex flex-col items-center text-xl pb-10'>
        <Link href={'/'}>
        <Image src={'/logo.png'} width={180} height={180} alt='logo' className='my-10' />
        </Link>

        {/* REST */}
        <div className='w-[27%]  bg-white rounded-lg px-8 flex flex-col '>
          <h4 className='font-bold text-3xl text-opurp mt-10'>Create your account</h4>

          <p className='mt-3 mb-6 text-base text-obn'>Your private space to capture life&apos;s most important memories
           </p>

           <div className='flex items-center gap-2 mb-4'>
           <Input
           className='h-12 text-lg'
            placeholder='First name'
           />
           <Input
           className='h-12 text-lg'
            placeholder='Last name'
           />

           </div>

           <Input type="email" placeholder="Email Address" className='text-lg h-14 mb-4' />

          <Input type="password" placeholder="Password" className='text-lg h-12 mb-5' />

          <Button className='mb-7 text-xl font-semibold h-12 bg-oblue  hover:bg-oblue/90' size={'lg'} >
             Create account
          </Button>
          

          <div className='flex items-end'>
          <div className='border border-t border-obrown border-opacity-20 mb-5 flex-1 '/>
          <p className='px-3 pb-2 text-sm text-obrown opacity-50 font-semibold '>Or create an account with</p>
           <div className='border border-t border-obrown border-opacity-20 mb-5 flex-1 '/>
           </div>


           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg mt-7 text-slate-700 flex items-center justify-center gap-4 mb-3'
           >
            <Image src={'/google.svg'} width={30} height={30} alt='google' />
            
            Google
            </Button>

           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg  text-slate-700 flex items-center justify-center gap-4 mb-3'
           >
            <Image src={'/facebook.svg'} width={30} height={30} alt='google' />
            
            facebook
            </Button>

           <Button variant={'outline'} size={'lg'}
           className='h-12 text-lg  text-slate-700 flex items-center justify-center gap-4 mb-3'
           >
            <Image src={'/apple.svg'} width={30} height={30} alt='google' />
            
             Apple
            </Button>


            <p className='font-bold text-base text-obn text-center my-5'>Already have an account? <Link href={'/login'} className='text-oblue'>Sign in</Link></p>
        </div>

 
    </div>
  )
}
