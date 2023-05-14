import UserProfile from "@/Components/UserProfile";
import Sidebar from "@/Components/Sidebar";
import axios from "axios";
import { useEffect } from "react";

const Profile = ( { userData }:any) => {


  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div className="relative bg-slate-900 h-full">
          <div className=" mx-auto w-full h-full flex gap-5 flex-col">
            <div className="">
              {/* Card stats */}
              <UserProfile
                email={userData.email}
                age={userData.age}
                TotalTask={userData.tasks.length}
                name={userData.name}
                Friends={userData.friends.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const userId  = context.params.userId;

  const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie
    }
  });
  
 const FetchUserDataResult = await axiosInstance.get("http://localhost:3001/GetUser/" + userId)
    
  if(FetchUserDataResult){
    return {
      props: { userData: FetchUserDataResult.data },
    };
  }else {
    return {
      props: { userData: null },
    };
  }


};

export default Profile;
