"use client";
import { useRef } from "react";

export default function SendPage(){

    const ticketRef = useRef()
    const reserveRef = useRef()
    const messageRef = useRef()
    const issueRef = useRef()

    const sendReport=async()=>{
        if(!ticketRef.current.value &&issueRef.current.value ){
            alert("شماره بلیط یا کد رزرو را وارد کنید.")
        }
        const token = sessionStorage.getItem("access_token")

        const res = await fetch(
             
                "http://127.0.0.1:8000/api/reports/",
               {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ticket_id: ticketRef.current.value,
                    reservation_id: reserveRef.current.value,
                    issue_type: issueRef.current.value,
                    message: issueRef.current.value
                })
               }
            )

            const result = await res.json()
            console.log(result)
            if(res.ok){
                alert("گزارش جدید با موفقیت ثبت شد")
            } else{
                alert(result.error.detail)
            }
    }

   return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12 mt-10 lg:mt-25 p-4 sm:p-5 bg-white rounded-xl shadow-2xl flex flex-col gap-5 items-stretch lg:items-end">

        <h1 className="w-fit self-end border-b-2 p-1 mb-2 sm:mb-5 text-base sm:text-lg">
            ثبت گزارش جدید
        </h1>

        <div className="w-full flex flex-col sm:flex-row-reverse flex-wrap gap-4 sm:gap-5 justify-between items-stretch sm:items-center">

            <input
                ref={ticketRef}
                className="w-full sm:flex-1 p-2 border-b-2 outline-none"
                placeholder="شماره بلیط"
            />

            <input
                ref={reserveRef}
                className="w-full sm:flex-1 p-2 border-b-2 outline-none"
                placeholder="کد رزرو"
            />

            <select
                ref={issueRef}
                className="w-full sm:flex-1 p-2 border-b-2 bg-white outline-none"
            >
                <option value={"purchase_problem"}>مشکل خرید</option>
                <option value={"payment_problem"}>مشکل پرداخت</option>
                <option value={"ticket_information"}>اطلاعات بلیط</option>
                <option value={"pricing_problem"}>مشکل قیمت</option>
                <option value={"seat_problem"}>مشکل صندلی</option>
                <option value={"venue_problem"}>مشکل ورزشگاه</option>
                <option value={"event_time_change"}>تغییر زمان مسابقه</option>
                <option value={"unexpected_cancellation"}>لغو غیرمنتطره</option>
                <option value={"other"}>سایر</option>
            </select>

        </div>

        <input
            type="text"
            ref={messageRef}
            className="w-full p-3 border-2 rounded-xl h-32 sm:h-36 resize-none outline-none"
            placeholder="توضیحات"
        />

        <button
            className="w-full sm:w-auto self-stretch sm:self-end bg-[#10243D] text-white p-3 px-6 rounded-xl hover:opacity-90 transition"
            onClick={sendReport}
        >
            ثبت گزارش
        </button>

    </div>
)
}