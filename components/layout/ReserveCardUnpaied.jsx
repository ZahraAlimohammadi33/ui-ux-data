export default function ReserveCardUnPaied({
    seats,
    payHandler,
    ticket_id,
    away_team_name,
    home_team_name,
    venue_name,
    city_name,
    event_datetime,
    total_amount,
    reservation_id,
    reserved_at,
    remaining_seconds
}) {

    return (
        <div className="bg-white w-full rounded-lg p-3 sm:p-4 flex flex-col gap-4">

            <div className="self-end w-fit p-2 text-[#B45309] rounded-xl bg-[#FEF3C7] text-sm sm:text-base">
                در انتظار پرداخت
            </div>

            
            <div className="flex flex-col md:flex-row-reverse justify-between items-stretch md:items-center gap-5">

                
                <div className="w-full md:w-auto">

                    <div className="flex flex-row-reverse justify-between items-center gap-3">
                        <h1 className="font-bold text-base sm:text-lg truncate">
                            {away_team_name}
                        </h1>

                        <h1 className="font-bold text-base sm:text-lg shrink-0">
                            VS
                        </h1>

                        <h1 className="font-bold text-base sm:text-lg truncate">
                            {home_team_name}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center mt-3">

                        <h1 className="text-base sm:text-lg text-center">
                            {event_datetime}
                        </h1>

                        <div className="flex m-2 sm:m-3 flex-row-reverse justify-center items-center gap-1 text-center">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                className="shrink-0"
                            >
                                <path
                                    d="M10,9.99023c-1.37891,0-2.5-1.12109-2.5-2.5s1.12109-2.5,2.5-2.5,2.5,1.12109,2.5,2.5-1.12109,2.5-2.5,2.5ZM10,6.49023c-0.55176,0-1,.44824-1,1s.44824,1,1,1,1-0.44824,1-1-0.44824-1-1-1Z"
                                    fill="var(--iconPrimary, #222)"
                                />

                                <path
                                    d="M10.00488,18.58301h-.00391c-.55664-.00098-1.07129-.24805-1.41309-.67871-1.89941-2.39062-5.08789-6.92383-5.08789-10.41406,0-3.44629,2.91602-6.25,6.5-6.25s6.5,2.80371,6.5,6.25c0,3.5498-3.18555,8.05176-5.08398,10.4209h0c-.3418.42676-.85645.67188-1.41113.67188ZM10,2.74023c-2.75684,0-5,2.13086-5,4.75,0,3.14746,3.33105,7.67969,4.7627,9.48145.08008.10059.19531.11133.24121.11133h.00098c.0459,0,.16113-.01074.23926-.10938h.00098c1.42969-1.7832,4.75488-6.27637,4.75488-9.4834-0.0-2.61914-2.24316-4.75-5-4.75Z"
                                    fill="var(--iconPrimary, #222)"
                                />
                            </svg>

                            <h3 dir="rtl" className="text-sm sm:text-base">
                                {venue_name}، {city_name}
                            </h3>

                        </div>
                    </div>
                </div>

            
                <div className="flex flex-row-reverse md:flex-col flex-wrap justify-between gap-4 md:gap-2 p-2 border-y md:border-y-0 py-3 md:py-2">

                    <div className="text-center md:text-right">
                        <h1 className="text-sm">
                            شماره رزرو
                        </h1>

                        <h1 className="font-bold text-[#F59E0B] text-sm sm:text-base">
                            {reservation_id}
                        </h1>
                    </div>

                    <div className="text-center md:text-right">
                        <h1 className="text-sm">
                            تاریخ رزرو
                        </h1>

                        <h1 className="font-bold text-sm sm:text-base">
                            {reserved_at}
                        </h1>
                    </div>

                </div>
            </div>
             {/* onClick={() => payHandler(reservation_id)} */}

            {/* اطلاعات صندلی */}
            {seats.map((seat) => {
                return (
                    <div
                        key={seat.number}
                        className="rounded-lg border border-indigo-100 grid grid-cols-2 sm:grid-cols-4 gap-4 p-3"
                    >

                        <div className="text-center">
                            <h2 className="text-gray-400 text-sm">
                                مبلغ پرداختی
                            </h2>

                            <h1
                                dir="rtl"
                                className="text-[#F59E0B] font-bold text-sm sm:text-base"
                            >
                                {total_amount} تومان
                            </h1>
                        </div>

                        <div className="text-center">
                            <h2 className="text-gray-400 text-sm">
                                صندلی
                            </h2>

                            <h1
                                dir="rtl"
                                className="font-bold text-sm sm:text-base"
                            >
                                {seat.seat_number}
                            </h1>
                        </div>

                        <div className="text-center">
                            <h2 className="text-gray-400 text-sm">
                                ردیف
                            </h2>

                            <h1
                                dir="rtl"
                                className="font-bold text-sm sm:text-base"
                            >
                                {seat.row_number}
                            </h1>
                        </div>

                        <div className="text-center">
                            <h2 className="text-gray-400 text-sm">
                                جایگاه
                            </h2>

                            <h1
                                dir="rtl"
                                className="font-bold text-sm sm:text-base"
                            >
                                {seat.section_name}
                            </h1>
                        </div>

                    </div>
                )
            })}

        
            <div className="flex flex-col-reverse sm:flex-row-reverse items-stretch sm:items-center justify-between gap-4">

                <button
                    className="text-white bg-[#F59E0B] p-3 rounded-lg w-full sm:w-auto"
                   
                >
                    پرداخت و تکمیل خرید
                </button>

                <div className="text-center sm:text-right">
                    <div className="text-sm">
                        فرصت باقی مانده برای پرداخت
                    </div>

                    <div
                        className="text-[#F59E0B] mt-1"
                        dir="rtl"
                    >
                        {(remaining_seconds / 60).toFixed(0)} دقیقه
                    </div>
                </div>

            </div>

        </div>
    )
}