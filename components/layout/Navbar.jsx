"use client";

import Modal from "./Modal";
import Link from "next/link";
import LogButton from "../ui/Buttons/LogButton";
import NottifButton from "../ui/Buttons/NottifButton";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
     const [logedin, setlogedin]= useState(false)
    const [address, setaddress]= useState("")
    useEffect(()=>{
        const token = sessionStorage.getItem("access_token")
        const role = sessionStorage.getItem("role")

        if(role == "support"){
            setaddress("/profile/supporter/")
        }
        else{
            setaddress("/profile/user/")
        }
            if(token){
                setlogedin(true)
            }
            else{
                
                setlogedin(false)
            }
        
    },[])
    const showModal = ()=>{
        setModal(true)
    }

    const closeModal = ()=>{
        setModal(false)
    }


    const logeinAccess = ()=>{
        const role = sessionStorage.getItem("role")
        setlogedin(true)
        if (role === "support") {
        setaddress("/profile/supporter/")
        } else {
            setaddress("/profile/user/")
        }
    }
    const [menuOpen, setMenuOpen] = useState(false);
   const pathname = usePathname();
    const [modal, setModal]= useState(false)

return (
  <div>
    <nav
      className="
        bg-[#10243D]
        z-50 fixed top-2 left-1/2 -translate-x-1/2
        rounded-xl
        w-[calc(100%-16px)]
        max-w-7xl
        px-3 sm:px-5
        py-2
      "
    >
      {/* نوار اصلی */}
      <div className="flex items-center justify-between w-full">

        {/* لوگو */}
        <div className="flex items-center gap-2 text-white shrink-0">
          <div className="font-bold text-lg sm:text-xl whitespace-nowrap">
            اسپورت تیکت
          </div>

          <svg
            className="w-7 h-7 sm:w-[30px] sm:h-[30px] fill-[#52D15C]"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216 578c0 0 326 -326 326 -326c0 0 178 178 178 178c0 0 -326 326 -326 326c0 0 -178 -178 -178 -178m710 -244c9.333 9.333 14 21.333 14 36c0 14.667 -4.667 26.667 -14 36c0 0 -550 550 -550 550c-10.667 10.667 -22.667 16 -36 16c-13.333 0 -25.333 -5.333 -36 -16c0 0 -76 -76 -76 -76c8 -13.333 12 -29.333 12 -48c0 -28 -9.667 -52 -29 -72c-19.333 -20 -43 -30 -71 -30c-14.667 0 -31.333 4.667 -50 14c0 0 -74 -76 -74 -76c-10.667 -10.667 -16 -22.667 -16 -36c0 -13.333 5.333 -25.333 16 -36c0 0 550 -550 550 -550c9.333 -9.333 21.333 -14 36 -14c14.667 0 26.667 4.667 36 14c0 0 74 76 74 76c-8 14.667 -12 30.667 -12 48c0 28 10 51.667 30 71c20 19.333 44 29 72 29c17.333 0 33.333 -4 48 -12c0 0 76 76 76 76m-532 502c0 0 406 -406 406 -406c0 0 -258 -258 -258 -258c0 0 -408 406 -408 406c0 0 260 258 260 258" />
          </svg>
        </div>


        {/* منوی دسکتاپ */}
        <div className="hidden md:flex items-center gap-3 text-lg">

          <Link
            href="/test"
            className={`px-4 py-2 ${
              pathname === "/test"
                ? "text-[#52D15C] border-b-2 border-[#52D15C]"
                : "text-white"
            }`}
          >
            تیم ها
          </Link>

          <Link
            href="/matches"
            className={`px-4 py-2 ${
              pathname === "/matches"
                ? "text-[#52D15C] border-b-2 border-[#52D15C]"
                : "text-white"
            }`}
          >
            مسابقات
          </Link>

          <Link
            href="/"
            className={`px-4 py-2 ${
              pathname === "/"
                ? "text-[#52D15C] border-b-2 border-[#52D15C]"
                : "text-white"
            }`}
          >
            خانه
          </Link>

        </div>


        {/* سمت چپ دسکتاپ */}
        <div className="hidden md:flex items-center gap-3">

          {logedin ? (
            <Link href={address}>
              <svg
                className="
                  w-10 h-10
                  rounded-full
                  p-2
                  border-2 border-[#52D15C]
                "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  className="fill-[#52D15C]"
                  d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                />
              </svg>
            </Link>
          ) : (
            <LogButton showModal={showModal} />
          )}

          <NottifButton />

        </div>


        {/* همبرگر موبایل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            w-10 h-10
            flex flex-col
            items-center
            justify-center
            gap-1.5
            rounded-lg
            hover:bg-white/10
            transition
          "
          aria-label="منوی سایت"
        >
          <span
            className={`
              w-6 h-0.5
              bg-white
              rounded
              transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          />

          <span
            className={`
              w-6 h-0.5
              bg-white
              rounded
              transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              w-6 h-0.5
              bg-white
              rounded
              transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          />
        </button>

      </div>


      {/* ================= منوی موبایل ================= */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="border-t border-white/10 pt-3 pb-2">

          {/* لینک‌ها */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`
              block
              px-4 py-3
              rounded-lg
              text-right
              ${
                pathname === "/"
                  ? "text-[#52D15C] bg-white/5"
                  : "text-white hover:bg-white/5"
              }
            `}
          >
            خانه
          </Link>

          <Link
            href="/matches"
            onClick={() => setMenuOpen(false)}
            className={`
              block
              px-4 py-3
              rounded-lg
              text-right
              ${
                pathname === "/matches"
                  ? "text-[#52D15C] bg-white/5"
                  : "text-white hover:bg-white/5"
              }
            `}
          >
            مسابقات
          </Link>

          <Link
            href="/test"
            onClick={() => setMenuOpen(false)}
            className={`
              block
              px-4 py-3
              rounded-lg
              text-right
              ${
                pathname === "/test"
                  ? "text-[#52D15C] bg-white/5"
                  : "text-white hover:bg-white/5"
              }
            `}
          >
            تیم ها
          </Link>


          {/* جداکننده */}
          <div className="h-px bg-white/10 my-2" />


          {/* ورود / پروفایل */}
          <div className="px-2 py-2">

            {logedin ? (
              <Link
                href={address}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center
                  justify-end
                  gap-3
                  px-3 py-3
                  rounded-lg
                  text-white
                  hover:bg-white/5
                "
              >
                <span>پروفایل</span>

                <svg
                  className="
                    w-9 h-9
                    rounded-full
                    p-2
                    border-2 border-[#52D15C]
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    className="fill-[#52D15C]"
                    d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
                  />
                </svg>
              </Link>
            ) : (
              <div className="flex justify-end">
                <LogButton showModal={showModal} />
              </div>
            )}

          </div>


          {/* اعلان‌ها */}
          <div
            className="
              flex items-center
              justify-between
              px-4 py-3
              rounded-lg
              text-white
              hover:bg-white/5
            "
          >
            <span>اعلان‌ها</span>

            <NottifButton />
          </div>

        </div>
      </div>

    </nav>

    <Modal
      modal={modal}
      closeModal={closeModal}
      showModal={showModal}
      login={logeinAccess}
    />
  </div>
);

}