"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const PostPage = () => {
  const {data} = useSession()
  const router = useRouter()
  const [title, setTitle]= useState('')
  const [content, setContent]= useState('')

  const handleSubmit = async () =>{
    if(title != "" && content != ""){
      const response = await fetch(`${process.env.PAGE_URL}/api/postcontent`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          title,
          content,
          author: data?.user?.name
        })
      })
      if(response.ok){
        setTitle('')
        setContent('')
        toast.info('Your content Uploaded')
        router.push('/')
      }else{
        toast('Something went wrong!')
      }
    }else{
      toast.info('Please enter valid content!')
    }
  }

  return (
    <div className="container mx-auto">
      <Card
        color="transparent"
        shadow={false}
        className=" rounded-lg bg-white shadow mx-auto w-full flex flex-col items-center justify-center my-5 max-w-[420px] py-10"
      >
        <Typography
          variant="h4"
          color="blue-gray "
          className="text-[2rem] font-bold"
        >
          Post Content
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details for post
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <input
              type="text"
              className="px-5 py-2 rounded-full border"
              placeholder="Title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea
              type="text"
              className="px-5 py-2 rounded-[25px] h-[100px] border"
              placeholder="Content"
              value={content}
              onChange={(e)=> setContent(e.target.value)}
            />
          </div>
          <Button className="mt-6 bg-black text-white rounded-full" fullWidth onClick={handleSubmit}>
            Post
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default PostPage;
