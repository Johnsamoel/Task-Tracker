import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Login/Navbar";
import FooterSmall from "@/Components/Login/FooterSmall";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export default function Home(props:{transparent:boolean}) {
  return (
    <>
      <Navbar transparent={true} />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage: "url(" + "/register_bg_2.png" + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="container mx-auto px-4 flex justify-around items-center flex-col h-5/6 w-full  relative">
            <div className="flex justify-evenly items-center flex-col h-2/5 w-2/5  rounded-lg">
              <p className="text-center text-slate-300 font-semibold text-lg">
                Welcome To Our Task Pro App. Saving Your Time Is Not a Dream
                anymore !
              </p>
              <div className="w-full flex justify-center items-start ">
                <div className="items-start flex w-full  justify-center">
                  <span className="w-full h-1/2  text-sm text-white bg-blueGray-200 inline-flex items-start justify-center ">
                  <Link href='/Login' >
                  <button
                      className={
                        (props.transparent
                          ? "bg-white text-gray-800 active:bg-gray-100"
                          : "bg-pink-500 text-white active:bg-pink-600 shadow-md   shadow-pink-300") +
                        " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 h-10 w-40"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="fas fa-arrow-alt-circle-down  w-full h-full">Start Now</i> 
                    
                    </button>
                  </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
