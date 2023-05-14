import VerifiedBadge from "./VerifiedBadge";
import Link from "next/link";

interface MemeberData {
  name: string;
  email: string;
  gitHub: string;
  linkedIn: string;
  resumeLink: string;
  contibutionPercentage:string;
  image?: string;
}

const MemberCard = ({
  email,
  name,
  gitHub,
  linkedIn,
  resumeLink,
  image,
  contibutionPercentage
}: MemeberData) => {

  return (
    <div className="flex bg-slate-700 w-3/4  rounded-md relative hover:shadow-md hover:shadow-pink-400 " style={{height: '400px'}}>
      <div
        className="absolute -top-16 rounded-full max-w-28 max-h-28 w-28 h-28 left-28 z-20 "
        style={{
          backgroundImage: image ? `url('${image}')` : "url(" + "/man.png" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="w-full flex flex-col justify-start pt-16">
        {/* member name */}
        <div className="flex justify-center items-center w-full gap-3">
          <p
            className="font-semibold text-2xl text-pink-500"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </p>

          <VerifiedBadge />
        </div>

        <p
          className="font-semibold text-1xl text-pink-500 flex justify-center align-middle"
          style={{ textTransform: "capitalize" }}
        >
          Software Engineer @ _VOIS
        </p>

        <div className="w-full">
            <div className="flex justify-start">
            <p className="text-yellow-300 ml-2">{contibutionPercentage}%</p>
            </div>
          <div className="w-full h-1 bg-yellow-300 mt-4">
            <div className={`bg-pink-500 h-1`} style={{width: `${contibutionPercentage}%`}}></div>
          </div>
        </div>

        {/* member links */}
        <div className=" flex  justify-center items-center flex-wrap flex-col w-full gap-2 mt-10 ">
          <div className="flex justify-start  items-center w-3/4 gap-2">
            <p
              className="font-semibold text-md text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              email:
            </p>
            <Link href={`mailto:${email}`} className="text-left w-1/2">{email}</Link>
          </div>
          <div className="flex justify-start    items-center w-3/4 gap-2">
            <p
              className="font-semibold text-md text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              LinkedIn:
            </p>
            <Link
              className="text-left w-1/2 hover:text-pink-500"
              href={linkedIn ? linkedIn : "/"}
            >
              {name}
            </Link>
          </div>

          <div className="flex justify-start    items-center w-3/4 gap-2">
            <p
              className="font-semibold text-md text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              GitHub:
            </p>
            <Link
              className="text-left w-1/2 hover:text-pink-500"
              href={gitHub ? gitHub : "/"}
            >
              {name}
            </Link>
          </div>
        </div>

        <Link
          href={resumeLink ? resumeLink : "/"}
          className="absolute bottom-5 left-1/4 bg-pink-500 hover:bg-pink-700 text-yellow-300 shadow-md hover:shadow-yellow-300 shadow-pink-300 font-bold py-2 px-4 rounded"
        >
          DownLoad Resume
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
