import { UserButton } from '@stackframe/stack'
import React from 'react'
import Image from 'next/image'

function AppHeader() {
    return (
        <div className='p-3 shadow-sm flex justify-between items-center'>
            <Image src={'/loog.png'} alt='Echo Learn' width={160} height={48} />
            <UserButton/>
        </div>
    )
}

export default AppHeader