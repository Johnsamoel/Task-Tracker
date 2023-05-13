import ContactCard from "@/Components/ContactCard";
import Sidebar from "@/Components/Sidebar";
import Pagination from "@/Components/Pagination";
import axios from "axios";
import store from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";

// fetcher function for swr hook
const fetcher = (url: string) =>
  axios.get(url, { withCredentials: true }).then((res) => {
    let friends = res.data.friends;
    return {
      friends: friends,
      totalPages: res.data.totalPages,
    };
  }).catch((error) => {
    console.log(error)
  });

const Friends = () => {
  const store: any = useSelector((state) => state);

  const { data, error } = useSWR(
    store.userAuthentication
      ? `http://localhost:3001/GetFriends/${store.userAuthentication.userInfo._id}?pageNumber=1`
      : null,
    fetcher,
    { refreshInterval: 1000, revalidateOnReconnect: true }
  );

  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div
          className="relative bg-slate-900  pt-10 h-full"
          style={{
            backgroundImage: "url(" + "/register_bg_2.png" + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-4 md:px-10 mx-auto w-full min-h-full flex gap-5 flex-col">
            <p className=" font-bold text-left text-pink-500 pl-5 text-xl">
              Your Friends
            </p>
            <div className="flex flex-wrap gap-5 justify-center items-center   min-h-full">
              {/* Card stats */}

              {data && data.friends && data.friends.length > 0 ? (
                data.friends.map((friend: any) => {
                  return (
                    <ContactCard
                      key={friend._id}
                      id={friend._id}
                      name={friend.name}
                    />
                  );
                })
              ) : (
                <p>No friends to show</p>
              )}
            </div>
            <div className="flex justify-center items-center my-5">
              {/* <Pagination destinationUrl="/" totalNumber={10}  /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Friends;
