"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

const SinglePage = ({ params }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentInput, setCommentInput] = useState("");
  const router = useRouter()
  const name = "something";
  const {status, data: session} = useSession()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.PAGE_URL}/api/getsinglecontent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: params.pageid }),
        }
      );
      const result = await response.json();
      setContent(result);
      setLoading(false);
    };
    fetchData();

    
  });

  //
  const handleAddComment = async ()=>{
    if(status === 'authenticated'){
      const postData = await fetch(`${process.env.PAGE_URL}/api/postcomment`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          id:params.pageid,
          commentData: commentInput,
          author: session?.user?.name
        })
      })
      if(postData.ok){
        setCommentInput('')
      }else{
        alert("something went wrong")
      }
    }else{
      signIn()
    }
  }
  


//get time age
function timeAgo(timestamp) {
  const now = new Date();
  const postedTime = new Date(timestamp);
  const elapsedMilliseconds = now - postedTime;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedSeconds < 60) {
      return `${elapsedSeconds} second${elapsedSeconds !== 1 ? 's' : ''} ago`;
  } else if (elapsedSeconds < 3600) {
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      return `${elapsedMinutes} minute${elapsedMinutes !== 1 ? 's' : ''} ago`;
  } else if (elapsedSeconds < 86400) {
      const elapsedHours = Math.floor(elapsedSeconds / 3600);
      return `${elapsedHours} hour${elapsedHours !== 1 ? 's' : ''} ago`;
  } else {
      const elapsedDays = Math.floor(elapsedSeconds / 86400);
      return `${elapsedDays} day${elapsedDays !== 1 ? 's' : ''} ago`;
  }
}

  return (
    <div className="container min-h-[50vh] mx-auto">
      <div className="w-full px-6 py-3 flex gap-4 items-center justify-left bg-slate-300">
        <Link href={"/"}>
          <AiFillHome className="text-[2rem]" />
        </Link>{" "}
        / <h1 className="font-bold">{content.title}</h1>
      </div>

      {/* page stats */}

      <div className="w-full p-8 flex flex-col gap-5">
        <div>
          {loading && <h1>Loading...</h1>}
          <h1 className="font-bold">{content.title}</h1>
          <h3>{content.author}</h3>
          <p>{content.content}</p>
        </div>
        <div className="mt-10 px-10 py-6 rounded-lg border border-solid shadow">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Add Comment"
              className="rounded-full px-5 py-2"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />{" "}
            <button className="px-8 py-2 rounded-full bg-black text-white" onClick={handleAddComment}>
              Add
            </button>
          </div>
          <div>
            {content.comments?.map((item, i) => (
              <div key={i} className="flex flex-col px-5 py-2 rounded bg-slate-100 shadow my-3">
                <h4 className="font-bold">{item.author}</h4>
                <h3>{item.comment}</h3>
                <p className=" font-light">{timeAgo(item.posted)}</p>
                <div className="flex gap-4 p-2">
                  <button>Like</button>
                  <button>Reply</button>
                </div>
              </div>
            )).reverse()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
