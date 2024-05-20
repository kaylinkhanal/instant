'use client'
import Image from "next/image";
import {Button, Input} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateRideCount } from "@/redux/reducerSlices/userSlice";

export default function Home() {
  const todaysRideCount = useSelector(state=> state.user.todaysRideCount)
  const dispatch = useDispatch()
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
   
      <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Image
              src="/instantlogo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={120}
              height={120}
              priority
            />
          </a>
       
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" w-[50%]">
            <h1 className="title-font  text-8xl  mb-4 font-medium text-gray-900">
             <span className="text-red-600">Let’s</span> <span className="text-yellow-300">{todaysRideCount}</span> 
            </h1>
            <p className="mb-8 leading-relaxed text-white">
                DRIVE WITH INSTANT:
                <Button onClick={()=>dispatch(updateRideCount())}>UPDATE RIDE COUNT</Button>
                Set your own hours. Earn on your own terms.

                Reliable earnings:
                Make money, keep your tips, and cash out when you want.

                A flexible schedule:
                Be your own boss and drive whenever it works for you.

                Get paid instantly:
                Cash out your earnings whenever you want.</p>
            <div className="flex-col justify-center">
              <Input className="m-2 w-[60%]" placeholder="Enter location"/>
              <Input  className="m-2 w-[60%]" placeholder="Enter location"/>
              <Button className="m-2 bg-red-700  text-white text-2xl p-6">Check Prices</Button>
            
            </div>
          </div>
          <div className=" w-[50%]">
            <img className="w-full" alt="hero" src="/items.jpeg"/>
          </div>
        </div>
      </section>
  

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 classNameName={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
