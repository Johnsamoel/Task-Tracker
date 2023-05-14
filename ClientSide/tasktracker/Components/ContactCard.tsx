import Image from "next/image";
import Link from "next/link";

const ContactCard = ({id, name}:any) => {
  return (
    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div className="relative flex flex-col min-w-0 break-words bg-slate-800 hover:bg-slate-700 hover:shadow-lg hover:shadow-pink-500 rounded mb-6 xl:mb-0 shadow-lg">
    <div className="flex flex-col">
        <div className="flex justify-center items-center flex-col pt-5 gap-4 h-3/6">
        <Image src="/man.png" height={80} width={80} className="rounded-full" alt="user Avatar" />
        <p className="text-center font-semibold text-lg text-pink-500 ">{name}</p>
        </div>
        <div className="flex justify-center item-center mt-3 h-14 hover:text-pink-500">
        <Link href={`/Dashboard/Profile/${id}`}><p className="text-center">View Profile</p></Link>
        </div>
    </div>
    </div>
    </div>
  );
};

export default ContactCard;
