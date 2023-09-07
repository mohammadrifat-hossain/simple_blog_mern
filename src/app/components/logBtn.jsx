"use client"
import { useSession, signIn, signOut } from 'next-auth/react'

const logBtn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { status, data} = useSession()
  return (
    <div>
        {
            status === 'authenticated'? (
                <button className='px-6 py-2 rounded-full bg-black text-white' onClick={()=> signOut()}>Logout</button>
            ):(
                <button className='px-6 py-2 rounded-full bg-black text-white' onClick={()=> signOut('google')}>Logout</button>
            )
        }
    </div>
  )
}

export default logBtn