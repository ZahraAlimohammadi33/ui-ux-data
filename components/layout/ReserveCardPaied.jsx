export default function ReserveCardPaied({showModal,refundHandler, seats,ticket_id, away_team_name, home_team_name,venue_name, city_name, total_amount, event_datetime, paid_at, reservation_id}){
    
   

    const showHandler =()=>{

    }
    

   return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-5 flex flex-col gap-4">

        {/* Status */}
        <span className="self-end w-fit p-2 text-sm sm:text-base text-[#52D15C] rounded-xl bg-[#E8F7EA]">
            پرداخت شده
        </span>

        {/* Main Info */}
        <div className="w-full flex flex-col lg:flex-row-reverse gap-5 lg:gap-8 justify-between items-stretch lg:items-center">

            {/* Match Info */}
            <div className="w-full lg:flex-1">

                <div className="flex flex-row-reverse justify-between items-center gap-2">

                    <h1 className="font-bold text-sm sm:text-lg text-center">
                        {away_team_name}
                    </h1>

                    <h1 className="font-bold text-sm sm:text-lg">
                        VS
                    </h1>

                    <h1 className="font-bold text-sm sm:text-lg text-center">
                        {home_team_name}
                    </h1>

                </div>

                <div className="flex flex-col gap-3 items-center justify-center mt-4">

                    <h1 className="text-sm sm:text-lg text-center">
                        {event_datetime}
                    </h1>

                    <div className="flex m-2 sm:m-3 flex-row-reverse gap-1 justify-center items-center text-center">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="shrink-0"
                        >
                            <path
                                d="M10,9.99023c-1.37891,0-2.5-1.12109-2.5-2.5s1.12109-2.5,2.5-2.5,2.5,1.12109,2.5,2.5-1.12109,2.5-2.5,2.5ZM10,6.49023c-.55176,0-1,.44824-1,1s.44824,1,1,1,1-.44824,1-1-1-1-1-1Z"
                                fill="var(--iconPrimary, #222)"
                            />

                            <path
                                d="M10.00488,18.58301h-.00391c-.55664-.00098-1.07129-.24805-1.41309-.67871-1.89941-2.39062-5.08789-6.92383-5.08789-10.41406,0-3.44629,2.91602-6.25,6.5-6.25s6.5,2.80371,6.5,6.25c0,3.5498-3.18555,8.05176-5.08398,10.4209h0c-.3418.42676-.85645.67188-1.41113.67188ZM10,2.74023c-2.75684,0-5,2.13086-5,4.75,0,3.14746,3.33105,7.67969,4.7627,9.48145.08008.10059.19531.11133.24121.11133h.00098c.0459,0,.16113-.01074.23926-.10938h.00098c1.42969-1.7832,4.75488-6.27637,4.75488-9.4834,0-2.61914-2.24316-4.75-5-4.75Z"
                                fill="var(--iconPrimary, #222)"
                            />
                        </svg>

                        <h3
                            dir="rtl"
                            className="text-sm sm:text-base"
                        >
                            {venue_name}، {city_name}
                        </h3>

                    </div>

                </div>
            </div>

            {/* Reservation Details */}
            <div className="w-full lg:w-auto flex flex-row flex-wrap lg:flex-col gap-4 lg:gap-2 p-2 justify-between">

                <div>
                    <h1 className="text-xs sm:text-sm text-[#64748B]">
                        شماره رزرو
                    </h1>
                    <h1 className="font-bold text-sm sm:text-base text-[#52D15C]">
                        {reservation_id}
                    </h1>
                </div>

                <div>
                    <h1 className="text-xs sm:text-sm text-[#64748B]">
                        شماره بلیط
                    </h1>
                    <h1 className="font-bold text-sm sm:text-base text-[#52D15C]">
                        {ticket_id}
                    </h1>
                </div>

                <div>
                    <h1 className="text-xs sm:text-sm text-[#64748B]">
                        تاریخ پرداخت
                    </h1>
                    <h1 className="font-bold text-sm sm:text-base">
                        {paid_at}
                    </h1>
                </div>

            </div>

        </div>

        {/* Seats */}
        <div className="w-full flex flex-col gap-2">

            {seats.map((seat) => {

                return (
                    <div
                        key={seat.seat_number}
                        className="w-full rounded-lg border border-indigo-100 flex flex-wrap flex-row-reverse items-center justify-between gap-4 p-3"
                    >

                        <div className="flex-1 min-w-[100px] text-center">
                            <h2 className="text-[#64748B] text-xs sm:text-sm">
                                مبلغ پرداختی
                            </h2>
                            <h1
                                dir="rtl"
                                className="font-bold text-sm sm:text-base"
                            >
                                {total_amount} تومان
                            </h1>
                        </div>

                        <div className="hidden sm:block w-px h-12 opacity-45 bg-blue-950/20"></div>

                        <div className="flex-1 min-w-[70px] text-center">
                            <h2 className="text-[#64748B] text-xs sm:text-sm">
                                صندلی
                            </h2>
                            <h1 dir="rtl" className="font-bold text-sm sm:text-base">
                                {seat.seat_number}
                            </h1>
                        </div>

                        <div className="hidden sm:block w-px h-12 opacity-45 bg-blue-950/20"></div>

                        <div className="flex-1 min-w-[70px] text-center">
                            <h2 className="text-[#64748B] text-xs sm:text-sm">
                                ردیف
                            </h2>
                            <h1 dir="rtl" className="font-bold text-sm sm:text-base">
                                {seat.row_number}
                            </h1>
                        </div>

                        <div className="hidden sm:block w-px h-12 opacity-45 bg-blue-950/20"></div>

                        <div className="flex-1 min-w-[70px] text-center">
                            <h2 className="text-[#64748B] text-xs sm:text-sm">
                                جایگاه
                            </h2>
                            <h1 dir="rtl" className="font-bold text-sm sm:text-base">
                                {seat.section_name}
                            </h1>
                        </div>

                    </div>
                )
            })}

        </div>

    </div>
)
}