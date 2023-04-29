import Image from "next/image";

const TaskForm = () => {
  return (
    <div className="bg-slate-500 rounded-lg flex justify-around items-center flex-col w-full ">
      <div className="justify-center w-full flex ">
        <Image src={"/man.png"} height={100} width={100} alt="Task Image" className=" relative -top-14" />
      </div>

      <div className="flex justify-start items-center  flex-col h-64 w-full ">
        <div className="flex justify-center items-center flex-col  w-full h-full">
          <div className="flex justify-around items-center w-full gap-1">
            <div className=" flex flex-col justify-start items-center w-2/5 h-40 max-h-56">
              <label
                htmlFor="title"
                className="text-slate-800 text-start w-full"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="h-10 border mt-1 rounded px-4 w-full text-slate-900 bg-gray-50 "
                value=""
              />
            </div>

            <div className="flex justify-start items-center flex-col w-2/5 h-40 max-h-56">
              <label htmlFor="description" className="text-slate-800 w-full">
                description
              </label>
              <textarea
                name="description"
                id="description"
                className="h-10 border mt-1 rounded px-1 w-full bg-gray-50 text-slate-900"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex items-center justify-start pl-10 w-full h-32 ">
            <label htmlFor="status" className="  text-slate-900">
              status
            </label>
            <select
              id="status"
              name="status"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>Cancelled</option>
              <option>Not Started</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className=" text-right my-12">
            <div className="inline-flex items-end">
              <button className="bg-pink-500 hover:bg-pink-700 text-yellow-300 shadow-md hover:shadow-yellow-300 shadow-pink-300 font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
