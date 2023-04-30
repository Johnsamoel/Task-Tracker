import ContactCard from "@/Components/ContactCard";
import Sidebar from "@/Components/Sidebar";
import Pagination from "@/Components/Pagination";

const Friends = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100  h-full">
        {/* Header */}
        <div className="relative bg-slate-900  pt-12 min-h-full pb-16">
          <div className="px-4 md:px-10 mx-auto w-full min-h-full flex gap-5 flex-col" >
            <p className=" font-bold text-left text-pink-500 pl-5 text-xl">
              Your Friends  
            </p>
            <div className="flex flex-wrap gap-5 justify-center items-center   min-h-full"         style={{
          backgroundImage: "url(" + "/register_bg_2.png" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}>
              {/* Card stats */}
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>
            <div className="flex justify-center items-center my-5">
              <Pagination destinationUrl="/" totalNumber={10}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
