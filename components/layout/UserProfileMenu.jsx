"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function UserProfileMenu(){


    const getUser =async ()=> {
        const token = sessionStorage.getItem("access_token")
        console.log("TOKEN:", token);
        if(!token){
            alert("ابتدا وارد حساب خود شوید")
             return
        }

        const response = await fetch("http://127.0.0.1:8000/api/accounts/profile/",
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
        const result = await response.json()
        console.log(result)
        setData(result.data.user)
    }
       useEffect(()=>{
     const mockUser = {
    id: 1,
    first_name: "علی",
    last_name: "محمدی",
    email: "ali.mohammadi@example.com",
    phone: "09123456789",
    role: "user"
};
    setData(mockUser)
    },[])

    const [data, setData] = useState()




const logout = ()=>{
    sessionStorage.removeItem("access_token")
}

  return (
  data && (
    <aside
      className="
        w-full
        rounded-2xl
        bg-[#10243D]
        text-white
        p-5
        shadow-lg
      "
    >

      {/* اطلاعات کاربر */}
      <div className="flex flex-col items-center text-center">

        <div
          className="
            w-16 h-16
            rounded-full
            border-2 border-[#52D15C]
            p-2
            flex items-center justify-center
            mb-3
          "
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              className="fill-white"
              d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"
            />
          </svg>
        </div>

        <h1 className="font-bold text-lg">
          {data.first_name} {data.last_name}
        </h1>

        {data.email && (
          <p className="text-xs text-gray-300 mt-2 break-all">
            {data.email}
          </p>
        )}

        {data.phone && (
          <p className="text-xs text-gray-300 mt-1">
            {data.phone}
          </p>
        )}

      </div>


      {/* جداکننده */}
      <div className="w-full h-px bg-white/10 my-5"></div>


      {/* منو */}
      <nav className="flex flex-col gap-1">

        <Link
          href="/profile/user/"
          className="
            flex items-center
            justify-end
            px-4 py-3
            rounded-xl
            text-sm
            hover:bg-white/10
            hover:text-[#52D15C]
            transition
          "
        >
          ویرایش اطلاعات کاربر
        </Link>

        <Link
          href="/profile/user/Reserves"
          className="
            flex items-center
            justify-end
            px-4 py-3
            rounded-xl
            text-sm
            hover:bg-white/10
            hover:text-[#52D15C]
            transition
          "
        >
          رزروهای من
        </Link>

        <Link
          href="/profile/user/Reports"
          className="
            flex items-center
            justify-end
            px-4 py-3
            rounded-xl
            text-sm
            hover:bg-white/10
            hover:text-[#52D15C]
            transition
          "
        >
          گزارش‌های من
        </Link>

        <Link
          href="/profile/user/SendReport"
          className="
            flex items-center
            justify-end
            px-4 py-3
            rounded-xl
            text-sm
            hover:bg-white/10
            hover:text-[#52D15C]
            transition
          "
        >
          ثبت گزارش جدید
        </Link>

        <Link
          href="/"
          onClick={logout}
          className="
            flex items-center
            justify-end
            px-4 py-3
            rounded-xl
            text-sm
            text-red-300
            hover:bg-red-500/10
            hover:text-red-200
            transition
            mt-2
          "
        >
          خروج از حساب
        </Link>

      </nav>

    </aside>
  )
);
}