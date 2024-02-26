import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid sm:grid-cols-2 items-center gap-x-2 py-20 font-poppins sm:mx-16">
        <div className="m-5">
          <h2 className="text-3xl font-bold">Find your job of your choices</h2>
          <p className="my-3 leading-relaxed font-inter">
            Its a portal where you can post your job vacancy in your company all
            around India. And also You can find your jobs by matching your
            location, company, salary and recruiting status of the company
          </p>
          <div className="sm:space-x-4 space-x-1 my-6">
            <Link
              to={"/jobs"}
              className="outline rounded-sm px-4 py-2 outline-1 outline-blue-500 hover:bg-blue-500  hover:text-white hover:cursor-pointer font-semibold text-blue-500"
            >
              Search Jobs
            </Link>
            <button className="outline rounded-sm px-4 py-2 outline-1 bg-blue-500 outline-blue-500 hover:bg-white hover:text-blue-500 hover:cursor-pointer font-semibold text-white transition hover:transition">
              <Link to="/postjob">Post A Jobs</Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src="./Illustration.png"
            alt="landing-page"
            className="w-88 h-88 rounded object-contain mx-auto"
          ></img>
        </div>
      </div>
    </div>
  );
};
