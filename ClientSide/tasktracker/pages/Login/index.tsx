import FooterSmall from "@/Components/Login/FooterSmall";
import Navbar from "@/Components/Login/Navbar";
import Image from "next/image";
import LoginForm from "@/Components/Login/LoginForm";

export default function Login() {
  return (
    <>
      <Navbar transparent={true} />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" + "/register_bg_2.png" + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
               <LoginForm />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
