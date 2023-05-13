import UserProfile from '@/Components/UserProfile';
import Sidebar from '@/Components/Sidebar';
import axios from 'axios';

const Profile = (props:{userData:any}) => {

    // console.log(props.userData)

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

export const getServerSideProps = async (context: any) => {
 
  const {userId} = context.params;
  console.log(userId , 'from next')
  const FetchUserDataResult = await axios.get(`http://localhost:3001/GetUser/${userId}` , {withCredentials:true})
  console.log(FetchUserDataResult.data)
  if(FetchUserDataResult) {
    return {
      props: { userData: FetchUserDataResult.data }
    }
  }

  return {
    props: { userData: null }
  };
};


export default Profile;