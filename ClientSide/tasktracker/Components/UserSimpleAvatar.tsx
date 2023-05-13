import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";



const UserSimpleAvatar = () => {
    const store:any = useSelector((state:any)=>{return state.userAuthentication.userInfo})
    console.log(store,"storeeeeeee")
    return (<div className="flex justify-around items-center h-full rounded-lg bg-pink-500 hover:shadow-md hover:shadow-pink-500 hover:bg-pink-400">
        <div className="flex justify-start sitems-center w-2/6">
            <Image src="/man.png" height={80} width={80} className="rounded-full" alt="user Avatar" />
        </div>

   {store&&<div className="flex justify-start align-top h-full w-3/6 flex-col">
      <p>{store.name}</p>
        <Link href="/">
            <p className="font-semibold text-xs text-slate-700">View Profile</p>
        </Link>
        </div>}    
         
    </div>)
}

export default UserSimpleAvatar;