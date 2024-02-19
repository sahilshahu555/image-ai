import Link from 'next/link'
import React from 'react'
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { SignIn, SignedIn, UserButton } from '@clerk/nextjs'
  
const MobileNav = () => {
  return (
    <header className='header'>
       <Link href="/" className='flex items-center gap-2 md:py-2'>
        <Image src="/logo-icon.png" alt="logo" width={30} height={30}/>
        <p className="text-purple-500 font-[800] text-3xl ml-1">ImageAI</p>
       </Link>
       <nav className='flex gap-2'>
        <SignedIn>
          <UserButton/>
          <Sheet>
              <SheetTrigger>
                <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32}
                className='cursor-pointer'/>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
           </Sheet>

        </SignedIn>
        
       </nav>
    </header>
  )
}

export default MobileNav
