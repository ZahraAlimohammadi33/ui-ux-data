"use client"
import { useState, useEffect } from "react"
import { mockReports } from "@/data/mockData"
export default function Reports(){

    useEffect(()=>{
         const getDetails = async ()=>{
        
               const token = sessionStorage.getItem("access_token")
                const response = await fetch("http://127.0.0.1:8000/api/reports/", {
                headers: {
                Authorization: `Bearer ${token}`
            }
            });
            
                const result = await response.json()
        
                console.log(result)
                setReports(result.data.reports)
        
            }
            // getDetails()
 setReports(mockReports)            
        
    },[])

    const [reports, setReports]=useState()

    const issueTypeLabels = {
        purchase_problem: "مشکل خرید",
        payment_problem: "مشکل پرداخت",
        ticket_information: "اطلاعات بلیط",
        pricing_problem: "مشکل قیمت",
        seat_problem: "مشکل صندلی",
        venue_problem: "مشکل ورزشگاه",
        event_time_change: "تغییر زمان مسابقه",
        unexpected_cancellation: "لغو غیرمنتظره",
        other: "سایر",
        };
    const reportStatusLabels = {
        pending: "در انتظار بررسی",
        in_review: "در حال بررسی",
        resolved: "حل شده",
        rejected: "رد شده",
        };

  return (
    reports && (
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12 mt-10 lg:mt-25 p-3 sm:p-5 flex flex-col gap-3">

            {reports.map((report) => {
                return (
                    <div
                        key={report.id}
                        className="w-full bg-white rounded-lg p-4 sm:p-5 flex flex-col lg:flex-row-reverse gap-5 lg:gap-8 items-stretch lg:items-center justify-between"
                    >

                        {/* Issue / Message */}
                        <div
                            dir="rtl"
                            className="w-full lg:w-4/12 text-right"
                        >
                            <h1 className="font-bold text-base sm:text-lg mb-2">
                                {issueTypeLabels[report.issue_type]}
                            </h1>

                            <p className="text-[#64748B] text-sm sm:text-base break-words leading-7">
                                {report.message}
                            </p>
                        </div>

                        {/* Reservation / Ticket */}
                        <div className="w-full lg:w-auto flex flex-row sm:flex-col gap-4 sm:gap-2 items-center justify-between sm:justify-center text-sm sm:text-base">

                            <div className="text-center">
                                <h1 className="text-[#64748B] text-xs sm:text-sm">
                                    شماره رزرو
                                </h1>
                                <h3 className="font-bold">
                                    {report.reservation_id}
                                </h3>
                            </div>

                            <div className="text-center">
                                <h1 className="text-[#64748B] text-xs sm:text-sm">
                                    شماره بلیط
                                </h1>
                                <h3 className="font-bold">
                                    {report.ticket_id}
                                </h3>
                            </div>

                        </div>

                        {/* Support Response */}
                        <div
                            dir="rtl"
                            className="w-full lg:w-4/12 text-right"
                        >
                            <h1 className="font-bold mb-2">
                                پاسخ پشتیبان
                            </h1>

                            {report.support_response ? (
                                <p className="text-[#64748B] text-sm sm:text-base leading-7 break-words">
                                    {report.support_response}
                                </p>
                            ) : (
                                <p className="text-[#64748B] text-sm sm:text-base">
                                    در حال بررسی
                                </p>
                            )}
                        </div>

                    </div>
                )
            })}

        </div>
    )
)
}