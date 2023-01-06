import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  console.log("Home");
  return (
    <div className="pt-4 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-2xl text-center">Welcome to Artist AI</h1>
        <p className="text-center ">The place where AI meets art</p>
      </div>
    </div>
  );
}
