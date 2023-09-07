"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const PostPage = () => {
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
            />
            <textarea
              type="text"
              className="px-5 py-2 rounded-[25px] h-[100px] border"
              placeholder="Content"
            />
          </div>
          <Button className="mt-6 bg-black text-white rounded-full" fullWidth>
            Post
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default PostPage;
