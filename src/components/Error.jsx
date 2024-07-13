import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2 className="text-center text-2xl lg:text-3xl mt-9">
        Something went wrong..
      </h2>
      <Link to={"/"} className="text-blue-700 underline">
        <p className="mt-4 text-center">go to home page</p>
      </Link>
    </div>
  );
};

export default Error;
