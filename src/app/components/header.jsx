/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [addHead, setAddHead] = useState(false);
  const { status, data } = useSession();
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  //states ends

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setAddHead(true);
      } else {
        setAddHead(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full px-12 py-4 flex items-center justify-between shadow bg-white ${
        addHead ? "fixed" : ""
      } duration-300 z-50`}
    >
      <div className="flex gap-3">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrqpulRxEcRlxzfcxz9_FR4LF3dO7NTppHw&usqp=CAU"
          }
          width={100}
          height={100}
          alt="logo"
        />
        <Link href="/" className="text-[1.8rem] font-bold">
          Bloggify
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center font-bold text-[20px]">
        <Link className="hover:text-[royalblue] duration-200" href="/">
          Home
        </Link>
        <Link className="hover:text-[royalblue] duration-200" href="/sports">
          Sports
        </Link>
        <Link
          className="hover:text-[royalblue] duration-200"
          href="/technology"
        >
          Technology
        </Link>
        <Link className="hover:text-[royalblue] duration-200" href="/politics">
          Politics
        </Link>
        <Link className="hover:text-[royalblue] duration-200" href="/about">
          About
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center">
        {status === "authenticated" ? (
          <img
            src={data?.user?.image}
            alt="profile"
            className="h-[50px] w-[50px] rounded-full"
            onClick={openDrawer}
          />
        ) : (
          <Button className="bg-black" onClick={() => signIn("google")}>
            Login
          </Button>
        )}
      </div>
      {/* drawer */}
      <Drawer open={open} onClose={closeDrawer} className="p-4 z-50">
        <div className="mb-6 flex items-center justify-between">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray">
                {data?.user?.name}
              </Typography>
            </div>
            <List className="flex flex-col gap-4">
              {/* <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                E-Commerce
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Inbox
                <ListItemSuffix>
                  <Chip
                    value="14"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem> */}
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Button className="text-black w-full" onClick={() => signOut()}>
                  Logout
                </Button>
              </ListItem>
            </List>
          </Card>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
