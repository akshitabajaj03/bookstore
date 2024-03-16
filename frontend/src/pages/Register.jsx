import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registered Successfully");
        navigate("/auth/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Register</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto">
          <label className="block mb-2 text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-purple-500"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-purple-500"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <label className="block mb-2 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-purple-500"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
