
import Image from "next/image";

export default function MatchCard({
    sport_name,
    eventTicket,
    clickHandler,
    venue_name,
    home_team_logo,
    home_team_name,
    away_team_name,
    away_team_logo,
    date,
    time,
    price
}) {
    return (
        <div
            className="
                group
                bg-white
                w-[320px]
                min-h-[390px]
                rounded-2xl
                p-5
                m-4
                border
                border-gray-100
                shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
            "
        >

            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <span
                    className="
                        text-xs
                        font-medium
                        text-[#10243D]
                        bg-[#10243D]/8
                        px-3
                        py-1.5
                        rounded-full
                    "
                >
                    {sport_name}
                </span>

                <span className="text-xs text-gray-400">
                    مسابقه
                </span>
            </div>


            {/* Teams */}
            <div
                dir="rtl"
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-2
                "
            >

                {/* Away Team */}
                <div className="flex-1 flex flex-col items-center gap-2">
                    <div
                        className="
                            w-20
                            h-20
                            rounded-full
                            bg-gray-50
                            border
                            border-gray-100
                            flex
                            items-center
                            justify-center
                            p-3
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        "
                    >
                        <Image
                            src={away_team_logo}
                            alt={away_team_name}
                            width={58}
                            height={58}
                            className="object-contain"
                        />
                    </div>

                    <h2 className="font-bold text-sm text-gray-800 text-center">
                        {away_team_name}
                    </h2>
                </div>


                {/* VS */}
                <div className="flex flex-col items-center gap-1">
                    <span
                        className="
                            text-xs
                            text-gray-400
                            font-medium
                        "
                    >
                        مقابل
                    </span>

                    <span
                        className="
                            w-8
                            h-8
                            rounded-full
                            bg-[#10243D]
                            text-white
                            flex
                            items-center
                            justify-center
                            text-[10px]
                            font-bold
                        "
                    >
                        VS
                    </span>
                </div>


                {/* Home Team */}
                <div className="flex-1 flex flex-col items-center gap-2">
                    <div
                        className="
                            w-20
                            h-20
                            rounded-full
                            bg-gray-50
                            border
                            border-gray-100
                            flex
                            items-center
                            justify-center
                            p-3
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        "
                    >
                        <Image
                            src={home_team_logo}
                            alt={home_team_name}
                            width={58}
                            height={58}
                            className="object-contain"
                        />
                    </div>

                    <h2 className="font-bold text-sm text-gray-800 text-center">
                        {home_team_name}
                    </h2>
                </div>

            </div>


            {/* Divider */}
            <div className="my-5 border-t border-gray-100" />


            {/* Venue */}
            <div
                dir="rtl"
                className="
                    flex
                    items-center
                    gap-3
                    text-gray-600
                    mb-3
                "
            >
                <div
                    className="
                        w-9
                        h-9
                        rounded-lg
                        bg-[#10243D]/7
                        flex
                        items-center
                        justify-center
                        shrink-0
                    "
                >
                    <svg
                        className="w-5 h-5 text-[#10243D]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18.583c-.557 0-1.071-.248-1.413-.679C6.688 15.514 3.5 10.98 3.5 7.49c0-3.446 2.916-6.25 6.5-6.25s6.5 2.804 6.5 6.25c0 3.55-3.185 8.052-5.084 10.421-.341.427-.856.672-1.411.672H10Zm0-15.843c-2.757 0-5 2.13-5 4.75 0 3.147 3.331 7.679 4.763 9.481.08.101.195.111.241.111h.001c.045 0 .161-.01.239-.109 1.43-1.783 4.755-6.277 4.755-9.483 0-2.62-2.243-4.75-5-4.75Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-0.5">
                        محل برگزاری
                    </p>

                    <p className="text-sm font-medium text-gray-700 truncate">
                        {venue_name}
                    </p>
                </div>
            </div>


            {/* Date */}
            <div
                dir="rtl"
                className="
                    flex
                    items-center
                    gap-3
                    text-gray-600
                "
            >
                <div
                    className="
                        w-9
                        h-9
                        rounded-lg
                        bg-[#10243D]/7
                        flex
                        items-center
                        justify-center
                        shrink-0
                    "
                >
                    <svg
                        className="w-5 h-5 text-[#10243D]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                    >
                        <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                        />

                        <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                </div>

                <div>
                    <p className="text-xs text-gray-400 mb-0.5">
                        تاریخ و ساعت
                    </p>

                    <p className="text-sm font-medium text-gray-700">
                        {date} - {time}
                    </p>
                </div>
            </div>


            {/* Price */}
            <div
                dir="rtl"
                className="
                    mt-5
                    pt-4
                    border-t
                    border-gray-100
                    flex
                    items-center
                    justify-between
                "
            >
                <span className="text-xs text-gray-400">
                    شروع قیمت
                </span>

                <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-[#10243D]">
                        {price.toLocaleString("fa-IR")}
                    </span>

                    <span className="text-xs text-gray-400">
                        تومان
                    </span>
                </div>
            </div>


            {/* Button */}
            <button
                onClick={() => clickHandler(eventTicket)}
                className="
                    group/button
                    relative
                    overflow-hidden
                    mt-4
                    w-full
                    h-11
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#52D15C]
                    text-[#07111F]
                    font-bold
                    rounded-xl
                    cursor-pointer

                    transition-all
                    duration-300

                    hover:bg-[#63DF6D]
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    hover:shadow-[#52D15C]/25

                    active:translate-y-0
                    active:scale-[0.98]
                "
            >
                <span className="relative z-10">
                    مشاهده و خرید
                </span>

                <svg
                    className="
                        relative
                        z-10
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover/button:-translate-x-1
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                    fill="currentColor"
                >
                    <path d="M2048 896v256H490l459 459-181 181L0 1024l768-768 181 181-459 459h1558z" />
                </svg>

                {/* Shine */}
                <span
                    className="
                        absolute
                        inset-0
                        -translate-x-full
                        skew-x-[-20deg]
                        bg-white/20
                        transition-transform
                        duration-500
                        group-hover/button:translate-x-full
                    "
                />
            </button>

        </div>
    );
}

