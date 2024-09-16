"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("authenticated", true);
      alert(data.message);
      router.push("/details");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="bg-slate-50 h-screen p-5 l">
      <div className="p-5 bg-white rounded-xl mx-auto mt-20 shadow-xl lg:max-w-lg">
        <h1 className="font-bold text-center text-3xl mb-5">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full my-5 p-3 rounded-xl shadow-md border-[1px] "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full my-5 p-3 rounded-xl shadow-md border-[1px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-600 text-lg text-white flex justify-center mx-auto rounded-full w-[90%] p-2 my-5"
            type="submit"
          >
            Sign in
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
