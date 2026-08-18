"use client";
import { useRef } from "react";
export default function UserProfile(){

    const firstNameRef =useRef()
    const lastNameRef =useRef()
    const passRef =useRef()
    const newpassRef =useRef()
    const confirmpassRef =useRef()
    const phoneRef =useRef()
    const phonePassRef =useRef()
    const phoneOtpRef =useRef()
    const emailRef =useRef()
    const emailPassRef =useRef()
    const emailOtpRef =useRef() 

    const editName =async ()=>{
        const token = sessionStorage.getItem("access_token")
        console.log(token)
         const res = await fetch(
                "http://127.0.0.1:8000/api/accounts/profile/",
               {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    first_name: firstNameRef.current.value,
                    last_name: lastNameRef.current.value
                })
               }
            )

            const result = await res.json()

            console.log(result)
            if(res.ok){
                 alert("با موفقیت تغییر یافت.")
            }
            
    }

    const editPass = async()=>{
        if(newpassRef.current.value != confirmpassRef.current.value){
             alert("تکرار رمز عبور جدید با رمز عبور جدید یکسان نیست.")
             return
        }

        const token = sessionStorage.getItem("access_token")

         const res = await fetch(
                "http://127.0.0.1:8000/api/accounts/profile/password/change/",
               {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    current_password: passRef.current.value,
                    new_password: newpassRef.current.value,
                    new_password_confirm: confirmpassRef.current.value
                })
               }
            )

            const result = await res.json()
            console.log(result)
            if(res.ok){
                 alert("با موفقیت تغییر یافت.")
                 passRef.current.value=""
                 newpassRef.current.value=""
                 confirmpassRef.current.value=""

            } else{
                alert(result.errors.new_password)
            }
           
    }

    const editPhone =async()=>{
        
        const token = sessionStorage.getItem("access_token")
          if(!phoneOtpRef.current.value){
            alert("لطفا کد otp را وارد کنید.")
            return
        }
        const res = await fetch(
                "http://127.0.0.1:8000/api/accounts/profile/contact-change/confirm/",
               {
                 method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    identifier_type: "phone",
                    new_identifier: phoneRef.current.value,
                    otp_code: phoneOtpRef.current.value
                })
               }
            )

            const result = await res.json()
            if(res.ok){
                 alert("با موفقیت تغییر یافت.")
                 phoneOtpRef.current.value=""
                 phoneRef.current.value=""
                 phonePassRef.current.value=""

            } else{
                alert(result.errors)
            }
    }

    const editEmail =async()=>{
        const token = sessionStorage.getItem("access_token")
         if(!emailOtpRef.current.value){
            alert("لطفا کد otp را وارد کنید.")
            return
        }
        const res = await fetch(

                "http://127.0.0.1:8000/api/accounts/profile/contact-change/confirm/",
               {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    identifier_type: "email",
                    new_identifier: emailRef.current.value,
                    otp_code: emailOtpRef.current.value
                })
               }
            )

            const result = await res.json()

              if(res.ok){
                 alert("با موفقیت تغییر یافت.")
                 emailOtpRef.current.value=""
                 emailPassRef.current.value=""
                 emailOtpRef.current.value=""

            } else{
                alert(result.errors)
            }
    }

     const phoneOtpReauest =async()=>{
         const token = sessionStorage.getItem("access_token")
        if(!phoneRef.current.value || !phonePassRef.current.value){
            alert("لطفا برای درخواست کد ابتدا شماره موبایل و رمز عبور خود را وارد کنید")
            return
        }
        const res = await fetch(
                "http://127.0.0.1:8000/api/accounts/profile/contact-change/otp/request/",
               {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    identifier_type: "phone",
                    new_identifier: phoneRef.current.value,
                    password: phonePassRef.current.value
                })
               }
            )

             const result = await res.json()
            console.log(result.data.otp_code_for_test)
            if(res.ok){
                alert(`otp code is: ${result.data.otp_code_for_test}`)
            } else{
                console.log(result)
            }
    }

     const emailOtpReauest =async()=>{
         const token = sessionStorage.getItem("access_token")
        if(!emailRef.current.value || !emailPassRef.current.value){
            alert("لطفا برای درخواست کد ابتدا ایمیل و رمز عبور خود را وارد کنید")
            return
        }
        const res = await fetch(
                "http://127.0.0.1:8000/api/accounts/profile/contact-change/otp/request/",
               {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    identifier_type: "email",
                    new_identifier: emailRef.current.value,
                    password: emailPassRef.current.value
                })
               }
            )

          
            const result = await res.json()
            console.log(result.data.otp_code_for_test)
            if(res.ok){
                alert(`otp code is: ${result.data.otp_code_for_test}`)
            } else{
                console.log(result)
            }
            
    }

    

  return (
  <div className="w-full px-0 pb-10">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-8">

      {/* عنوان اصلی */}
      <div className="text-right mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[#10243D]">
          تنظیمات حساب کاربری
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          اطلاعات حساب کاربری خود را مدیریت و ویرایش کنید
        </p>
      </div>


      {/* ویرایش نام */}
      <section className="flex flex-col items-end gap-4">

        <div className="w-full text-right border-b border-gray-100 pb-4">
          <h2 className="text-lg font-bold text-[#10243D]">
            ویرایش نام
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            نام و نام خانوادگی خود را وارد کنید
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input
            ref={firstNameRef}
            placeholder="نام"
            type="text"
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              transition
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

          <input
            ref={lastNameRef}
            placeholder="نام خانوادگی"
            type="text"
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              transition
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

        </div>

        <button
          className="
            bg-[#10243D]
            hover:bg-[#183653]
            active:scale-95
            text-white
            px-6 py-3
            rounded-xl
            transition-all
            duration-200
          "
          onClick={editName}
        >
          ذخیره تغییرات
        </button>

      </section>


      <div className="w-full h-px bg-gray-100 my-8"></div>


      {/* تغییر رمز عبور */}
      <section className="flex flex-col items-end gap-4">

        <div className="w-full text-right border-b border-gray-100 pb-4">
          <h2 className="text-lg font-bold text-[#10243D]">
            تغییر رمز عبور
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            برای امنیت بیشتر، رمز عبور خود را به‌روز نگه دارید
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">

          <input
            ref={passRef}
            placeholder="رمز عبور فعلی"
            type="password"
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

          <input
            ref={newpassRef}
            placeholder="رمز عبور جدید"
            type="password"
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

          <input
            ref={confirmpassRef}
            placeholder="تکرار رمز عبور جدید"
            type="password"
            className="
              w-full
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

        </div>

        <button
          className="
            bg-[#10243D]
            hover:bg-[#183653]
            active:scale-95
            text-white
            px-6 py-3
            rounded-xl
            transition-all
          "
          onClick={editPass}
        >
          تغییر رمز عبور
        </button>

      </section>


      <div className="w-full h-px bg-gray-100 my-8"></div>


      {/* شماره موبایل */}
      <section className="flex flex-col items-end gap-4">

        <div className="w-full text-right border-b border-gray-100 pb-4">
          <h2 className="text-lg font-bold text-[#10243D]">
            شماره موبایل
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            شماره موبایل خود را اضافه یا ویرایش کنید
          </p>
        </div>

        <input
          ref={phoneRef}
          placeholder="شماره موبایل"
          type="tel"
          className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            bg-gray-50
            text-right
            outline-none
            focus:border-[#52D15C]
            focus:ring-2
            focus:ring-[#52D15C]/20
          "
        />

        <input
          ref={phonePassRef}
          placeholder="رمز عبور"
          type="password"
          className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            bg-gray-50
            text-right
            outline-none
            focus:border-[#52D15C]
            focus:ring-2
            focus:ring-[#52D15C]/20
          "
        />

        <div className="w-full flex gap-2">

          <input
            ref={phoneOtpRef}
            placeholder="کد تأیید"
            className="
              flex-1
              min-w-0
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

          <button
            className="
              shrink-0
              bg-[#10243D]
              hover:bg-[#183653]
              text-white
              px-4 sm:px-5
              rounded-xl
              transition
            "
            onClick={phoneOtpReauest}
          >
            دریافت کد
          </button>

        </div>

        <button
          className="
            bg-[#10243D]
            hover:bg-[#183653]
            active:scale-95
            text-white
            px-6 py-3
            rounded-xl
            transition
          "
          onClick={editPhone}
        >
          ذخیره شماره
        </button>

      </section>


      <div className="w-full h-px bg-gray-100 my-8"></div>


      {/* ایمیل */}
      <section className="flex flex-col items-end gap-4">

        <div className="w-full text-right border-b border-gray-100 pb-4">
          <h2 className="text-lg font-bold text-[#10243D]">
            ایمیل
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            ایمیل خود را اضافه یا ویرایش کنید
          </p>
        </div>

        <input
          ref={emailRef}
          placeholder="ایمیل"
          type="email"
          className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            bg-gray-50
            text-right
            outline-none
            focus:border-[#52D15C]
            focus:ring-2
            focus:ring-[#52D15C]/20
          "
        />

        <input
          ref={emailPassRef}
          placeholder="رمز عبور"
          type="password"
          className="
            w-full
            px-4 py-3
            rounded-xl
            border border-gray-200
            bg-gray-50
            text-right
            outline-none
            focus:border-[#52D15C]
            focus:ring-2
            focus:ring-[#52D15C]/20
          "
        />

        <div className="w-full flex gap-2">

          <input
            ref={emailOtpRef}
            placeholder="کد تأیید"
            className="
              flex-1
              min-w-0
              px-4 py-3
              rounded-xl
              border border-gray-200
              bg-gray-50
              text-right
              outline-none
              focus:border-[#52D15C]
              focus:ring-2
              focus:ring-[#52D15C]/20
            "
          />

          <button
            className="
              shrink-0
              bg-[#10243D]
              hover:bg-[#183653]
              text-white
              px-4 sm:px-5
              rounded-xl
              transition
            "
            onClick={emailOtpReauest}
          >
            دریافت کد
          </button>

        </div>

        <button
          className="
            bg-[#10243D]
            hover:bg-[#183653]
            active:scale-95
            text-white
            px-6 py-3
            rounded-xl
            transition
          "
          onClick={editEmail}
        >
          ذخیره ایمیل
        </button>

      </section>

    </div>
  </div>
);
}