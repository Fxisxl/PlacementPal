import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  console.log(loginData);

  const handleChanges = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", loginData)
      .then((response) => {
        console.log("data gaya");
        const token = response.data.token;
        if (token) {
          console.log("Login successful");
          console.log(token);
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          console.log("Incorrect credentials");
        }
      })
      .catch((err) => {
        console.log(`Error hai bhai: ${err}`);
      });
  };

  return (
    <>
      <div className=" w-screen h-screen bg-[#001e2b] flex justify-center items-center">
        <div className=" w-3/5 h-2/3 bg-[#e3fcf7] rounded-xl shadow-lg flex flex-col items-center">
          <h1 className=" w-full h-12 flex-initial flex justify-center items-center text-xl font-semibold rounded-t-lg bg-[#27ff82]">
            Login
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" flex-auto w-full flex flex-col justify-center items-center"
          >
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              onChange={handleChanges}
            />
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              onChange={handleChanges}
            />
            <button
              type="submit"
              className=" w-1/3 h-14 mt-4 rounded-xl outline-none bg-[#27ff82] hover:bg-green-600"
            >
              Login
            </button>
            <p className=" mt-2 text-sm ">
              Don't have an accout?{" "}
              <Link className=" text-green-600" to="/register">
                Create One.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
