"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [addHead , setAddHead] = useState(false)
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 500){
                setAddHead(true)
            }else{
                setAddHead(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <div className={`w-full px-12 py-4 flex items-center justify-between shadow bg-white ${addHead ? "fixed" :""} duration-300`}>
      <div className="flex gap-3">
        <Image
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrqpulRxEcRlxzfcxz9_FR4LF3dO7NTppHw&usqp=CAU'}
          width={100}
          height={100}
          alt="logo"
        />
        <Link href="/" className="text-[1.8rem] font-bold">
          Bloggify
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center font-bold text-[20px]">
        <Link className="hover:text-[royalblue] duration-200" href="/">Home</Link>
        <Link className="hover:text-[royalblue] duration-200" href="/sports">Sports</Link>
        <Link className="hover:text-[royalblue] duration-200" href="/technology">Technology</Link>
        <Link className="hover:text-[royalblue] duration-200" href="/politics">Politics</Link>
        <Link className="hover:text-[royalblue] duration-200" href="/about">About</Link>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button className="px-6 py-2 rounded-full bg-black text-white">Logout</button>
        <h3>username</h3>
      </div>
    </div>
  );
};

export default Header;
