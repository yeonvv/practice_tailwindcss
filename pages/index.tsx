import { useState } from "react";

const items = [
  {
    item: "Grey Chair",
    price: 19,
  },
  {
    item: "Tooly Table",
    price: 80,
  },
  {
    item: "Lib Bom",
    price: 2,
  },
];
export default function Home() {
  // 반응형에 사용되는 sm, md, xl 등은 그 크기부터~ 적용된다는 의미이다. min~ max(x)
  const [darkMode, setDarkMode] = useState("Dark Mode");
  const [darkModeClass, setDarkModeClass] = useState("");
  function onDarkMode() {
    darkMode === "Dark Mode"
      ? setDarkMode("Light Mode")
      : setDarkMode("Dark Mode");
    darkModeClass === "" ? setDarkModeClass("dark") : setDarkModeClass("");
  }
  return (
    <div className={darkModeClass}>
      <div className="min-h-screen min-w-max grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:items-center py-20 px-5 bg-gradient-to-r from-cyan-50 to-blue-100 landscape:from-slate-300 landscape:to-red-200 dark:from-slate-700 dark:to-slate-800">
        <button
          onClick={onDarkMode}
          className="text-white dark:text-black bg-black dark:bg-white rounded-2xl"
        >
          {darkMode}
        </button>
        <div className="flex flex-col bg-white p-6 rounded-3xl shadow-xl sm:bg-red-400 md:bg-teal-400 xl:bg-yellow-400 lg:bg-indigo-400 2xl:bg-pink-400">
          <span className="font-bold text-2xl">Select Item</span>
          <div className="my-2">
            <ul>
              {items.map((i) => (
                <div
                  key={i.item}
                  className="flex justify-between first:bg-blue-100 last:bg-blue-100 only:bg-red-100 odd:text-green-500 even:text-yellow-500"
                >
                  <span className="text-gray-400">{i.item}</span>
                  <span className="font-medium">${i.price}</span>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex justify-between py-2 border-t-2 border-slate-300 border-dashed">
            <span className="font-medium">Total</span>
            <span className="font-medium">
              ${items.reduce((acc, cur) => acc + cur.price, 0)}
            </span>
          </div>
          <button className="px-10 mt-2 mx-auto py-3 w-1/2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-400 hover:text-black active:bg-blue-600 active:text-white focus:text-black">
            Checkout
          </button>
        </div>
        <div className="overflow-hidden relative bg-white rounded-3xl shadow-xl group">
          <div className="flex justify-between p-6 pb-20 bg-blue-500 dark:bg-black">
            <span className="font-bold text-2xl text-white">Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="relative flex flex-col -top-5 px-6 pt-6 rounded-t-3xl bg-white">
            <div className="flex justify-between pb-2">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400">Spent</span>
                <span className="font-medium">$2,310</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 rounded-full bg-sky-100 absolute -top-14 ring-2 ring-yellow-300 group-hover:ring-yellow-500 transition" />
              <span className="text-xl font-medium">Tony Molly</span>
              <span className="text-sm text-gray-400">New York, USA</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden md:col-span-2 xl:col-span-1">
          <div className="flex justify-between items-center p-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <div className="flex items-center space-x-5">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span className="font-medium">4.9</span>
              </div>
              <div className="p-1 shadow-xl rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-slate-300 h-60" />
          <div className="flex flex-col px-6 py-2">
            <span className="text-lg font-medium">Swoon Lounge</span>
            <span className="text-sm text-gray-400">Chair</span>
          </div>
          <div className="flex justify-between items-center px-6 py-2">
            <div className="space-x-5">
              <button className="aspect-square w-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="aspect-square w-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="aspect-square w-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex justify-center items-center text-3xl text-gray-600 aspect-square w-8 rounded-md bg-sky-100">
                -
              </button>
              <span className="text-2xl">1</span>
              <button className="flex justify-center items-center text-3xl text-gray-600 aspect-square w-8 rounded-md bg-sky-100">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between mb-3 px-6 py-2">
            <span className="text-2xl font-medium">$450</span>
            <button className="px-10 py-2 rounded-xl text-white font-medium bg-blue-500">
              Add to cart
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow-xl">
          <form className="flex flex-col space-y-2 bg-blue-500 p-5 rounded-xl focus-within:bg-blue-400">
            <input
              type="text"
              required
              placeholder="Username"
              className="px-2 required:border-2 border-red-500 invalid:bg-red-200 valid:bg-blue-200 placeholder-shown:text-white"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="px-2"
            />
            <input
              type="submit"
              value="Login"
              className="bg-white cursor-pointer"
            />
          </form>
        </div>
        <div className="rounded-xl shadow-xl p-5">
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              required
              placeholder="Username"
              className="border p-1 peer border-gray-400 rounded-lg"
            />
            <span className="text-sm peer-invalid:text-red-500 peer-valid:hidden">
              This input is invalid
            </span>
            <span className="text-sm peer-invalid:hidden peer-valid:text-teal-500">
              Awesome name
            </span>
            <input type="submit" value="Login" className="cursor-pointer" />
          </form>
        </div>
        <div className="rounded-xl shadow-xl p-5 space-y-5">
          <div>
            <span className="text-xl font-bold">Detail tag</span>
            <details className="select-none open:text-white open:bg-indigo-400">
              <summary className="cursor-pointer">
                What is my fav. food.
              </summary>
              <span>김치</span>
            </details>
          </div>
          <div>
            <span className="text-xl font-bold">ul, li tags</span>
            <ul className="list-decimal">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
            <ul className="list-disc marker:text-teal-500">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
          <div>
            <span className="text-xl font-bold">input : file</span>
            <input
              type="file"
              className="file:px-5 file:cursor-pointer file:transition file:border-0 file:rounded-xl file:bg-purple-700 file:text-white file:hover:bg-purple-500"
            />
          </div>
        </div>
        <div className="rounded-xl shadow-xl p-5 space-y-5 bg-[url('/vercel.svg')]"></div>
      </div>
    </div>
  );
}
