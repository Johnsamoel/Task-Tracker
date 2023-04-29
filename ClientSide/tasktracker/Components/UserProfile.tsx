import Image from "next/image";
import VerifiedBadge from "./VerifiedBadge";

const UserProfile = (props: {
  name: string;
  email: string;
  age: number;
  TotalTask: number;
  Friends: number;
}) => {
  return (
    <div className="h-full  flex flex-col justify-around items-center" >
      <div
        className="w-full h-24 pt-52"
        style={{
          backgroundImage: "url(" + "/landscape.jpeg" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="relative -top-24 rounded-lg w-44 h-44 -left-4/4 z-20 "
        style={{
          backgroundImage: "url(" + "/man.png" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="relative  -top-44 w-full border-pink-500  border-t-4 border-solid border-spacing-28  pt-28 flex justify-center items-center flex-col "
        style={{
            backgroundImage: "url(" + "/register_bg_2.png" + ")",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
      >
        <div className="flex justify-center items-center w-full gap-3">

        <p
          className="font-semibold text-3xl text-pink-500"
          style={{ textTransform: "capitalize" }}
        >
          john samoel 
        </p>

        <VerifiedBadge />
        </div>
        <div className=" flex w-3/6 mx-auto justify-center items-center flex-wrap flex-col h-44 mt-10 bg-pink-500 rounded-lg ">
          <div className="flex justify-between    items-center w-2/4 gap-2">
            <p
              className="font-semibold text-lg text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              email:
            </p>
            <p className="text-left w-1/2">{props.email}</p>
          </div>
          <div className="flex justify-between    items-center w-2/4 gap-2">
            <p
              className="font-semibold text-lg text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              Age:
            </p>
            <p className="text-left w-1/2">{props.age}</p>
          </div>
          <div className="flex justify-between    items-center w-2/4 gap-2">
            <p
              className="font-semibold text-lg text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              Friends:
            </p>
            <p className="text-left w-1/2">{props.Friends}</p>
          </div>

          <div className="flex justify-between    items-center w-2/4 gap-2">
            <p
              className="font-semibold text-lg text-yellow-300"
              style={{ textTransform: "capitalize" }}
            >
              Total Tasks:
            </p>
            <p className="text-left w-1/2">{props.TotalTask}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
