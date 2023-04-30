import UserProfile from '@/Components/UserProfile';
import Sidebar from '@/Components/Sidebar';

const Profile = () => {
    return     <div className="bg-slate-100 h-screen">
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100  h-full">
      {/* Header */}
      <div className="relative bg-slate-900 h-full">
        <div className=" mx-auto w-full h-full flex gap-5 flex-col">
          <div className="">
            {/* Card stats */}
            <UserProfile email='JohnSamoel82@gmail.com' age={28} TotalTask={120} name='John samoel' Friends={99}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Profile;