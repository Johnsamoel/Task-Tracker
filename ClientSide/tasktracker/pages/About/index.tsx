import FooterSmall from "@/Components/Login/FooterSmall";
import MemberCard from "@/Components/MemberCard";
import Navbar from "../../Components/Login/Navbar";
import Link from "next/link";

const Memebers = [
  {
    name: "Menna Ayman",
    email: "mennaayman94@gmail.com",
    linkedIn: "https://www.linkedin.com/in/menna-ayman-9973a4102",
    gitHub: "https://github.com/mennaayman94",
    resumeLink: "",
    image:'/meena.jpg',
    contibutionPercentage: "50"
    
  },
  {
    name: "John Samoel",
    email: "johnsamoel82@gmail.com",
    linkedIn: "https://www.linkedin.com/in/johnsamoel",
    gitHub: "https://github.com/Johnsamoel",
    resumeLink:
      "https://drive.google.com/file/d/1eawQPJ1-N6PDDUXMA6pnDEg9Gcg2zYts/view?usp=sharing",
    image: '/john.jpg',
    contibutionPercentage:"50"
  },
];

const About = ({ transparent }: any) => {
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
            <div className="flex justify-evenly items-center flex-col h-2/5 w-3/5  rounded-lg">
              <div className="w-full flex justify-center items-start ">
                <div className="flex w-full  justify-center items-center">
                  <div className="flex justify-between items-center gap-16 w-full h-full mt-16">
                    {Memebers && Memebers.length > 0
                      ? Memebers.map((item) => {
                          return (
                            <MemberCard
                              email={item.email}
                              gitHub={item.gitHub}
                              linkedIn={item.linkedIn}
                              name={item.name}
                              resumeLink={item.resumeLink}
                              image={item.image}
                              contibutionPercentage={item.contibutionPercentage}
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

export default About;
