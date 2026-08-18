"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import stadium from "../../../public/6.png";
import logo1 from "../../../public/7.png";
import logo2 from "../../../public/8.png";
import { useRouter } from "next/navigation";
export default function Match() {
    const [match, setMatch] = useState();
    const [seats, setSeats] = useState([]);
    const ticketNumRef = useRef({});

    useEffect(() => {
        const data = sessionStorage.getItem("selectedEvent");

        if (data) {
            setMatch(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if (!match) return;

        match.forEach((ticket) => {
            loadSeats(ticket);
        });
    }, [match]);
    const router = useRouter();

    const bookHandler = async () => {
        // const token = sessionStorage.getItem("access_token");

        // if (!token) {
        //     alert("برای رزرو بلیط ابتدا وارد حساب خود شوید.");
        //     return;
        // }

        // for (let i = 0; i < match.length; i++) {
        //     const selectedSeat = ticketNumRef.current[i]?.value;

        //     if (!selectedSeat) continue;

        //     const res = await fetch(
        //         "http://127.0.0.1:8000/api/reservations/",
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Authorization: `Bearer ${token}`,
        //             },
        //             body: JSON.stringify({
        //                 ticket_category_id:
        //                     match[i].ticket_category_id,
        //                 inventory_id: Number(selectedSeat),
        //             }),
        //         }
        //     );

        //     const result = await res.json();

        //     if (res.ok) {
        //         alert(
        //             "بلیط با موفقیت در لیست بلیط‌های رزرو شده قرار گرفت. برای ثبت نهایی در پروفایل خود نسبت به پرداخت آن اقدام کنید."
        //         );
        //     } else {
        //         console.log(result.error);
        //     }
        // }
        router.push("/profile/user");
    };

    const getSeats = async (ticketId) => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/reservations/seats/?ticket_category_id=${ticketId}`
        );

        const result = await response.json();

        return result.data.seats;
    };

    const loadSeats = async (ticket) => {
        const Seats = await getSeats(ticket.ticket_category_id);

        setSeats((prev) => ({
            ...prev,
            [ticket.ticket_category_id]: Seats,
        }));
    };

    if (!match) return null;

    const datetime = match[0]?.event_datetime;

    const [date, fullTime] = datetime
        ? datetime.split("T")
        : ["", ""];

    const time = fullTime ? fullTime.slice(0, 5) : "";

    const mainMatch = match[0];

    const sectionColors = {
        VIP: "#F59E0B",
        Regular: "#3B82F6",
        Economy: "#3B82F6",
        Premium: "#A855F7",
    };

  return (
        <main
            dir="rtl"
            className="
                min-h-screen
                bg-[#F5F8FA]
                pt-28
                pb-16
                relative
                overflow-hidden
            "
        >
            {/* Background decoration */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    left-[-180px]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-[#10243D]/5
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    top-[600px]
                    right-[-180px]
                    w-[450px]
                    h-[450px]
                    rounded-full
                    bg-[#52D15C]/5
                    blur-3xl
                "
            />

            <div className="relative z-10 w-11/12 max-w-[1250px] mx-auto">

                {/* Breadcrumb */}

                <div className="mb-4 text-sm text-gray-400">
                    مسابقات
                    <span className="mx-2">/</span>
                    جزئیات مسابقه
                </div>


                {/* ========================= */}
                {/* MATCH HEADER */}
                {/* ========================= */}

                <section
                    className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        shadow-sm
                        px-6
                        py-5
                        md:px-8
                        md:py-6
                        mb-6
                    "
                >

                    {/* Top information */}

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-4
                            mb-5
                        "
                    >

                        {/* League */}

                        <div className="flex items-center gap-2">

                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-[#52D15C]
                                "
                            />

                            <span
                                className="
                                    text-sm
                                    font-medium
                                    text-[#10243D]
                                "
                            >
                                {mainMatch.league_name}
                            </span>

                        </div>


                        {/* Date / Time / Venue */}

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-2
                                text-xs
                                text-gray-500
                            "
                        >

                            <InfoBadge
                                icon="📅"
                                text={date}
                            />

                            <InfoBadge
                                icon="⏰"
                                text={time}
                            />

                            <InfoBadge
                                icon="📍"
                                text={mainMatch.venue_name}
                            />

                        </div>

                    </div>


                    {/* Divider */}

                    <div className="border-t border-gray-100" />


                    {/* Teams */}

                    <div
                        className="
                            flex
                            flex-row-reverse
                            items-center
                            justify-center
                            gap-8
                            md:gap-20
                            pt-5
                        "
                    >

                        {/* Away Team */}

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-2
                                w-28
                                md:w-36
                            "
                        >

                            <div
                                className="
                                    w-20
                                    h-20
                                    md:w-24
                                    md:h-24
                                    rounded-full
                                    bg-[#F8FAFC]
                                    border
                                    border-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    p-3
                                "
                            >

                                <Image
                                    src={logo1}
                                    alt={mainMatch.away_team_name}
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                    "
                                />

                            </div>

                            <h2
                                className="
                                    font-bold
                                    text-[#10243D]
                                    text-center
                                    text-sm
                                    md:text-base
                                "
                            >
                                {mainMatch.away_team_name}
                            </h2>

                        </div>


                        {/* VS */}

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                gap-1
                            "
                        >

                            <span className="text-xs text-gray-400">
                                مقابل
                            </span>

                            <div
                                className="
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-[#10243D]
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    font-extrabold
                                    text-xs
                                    shadow-md
                                "
                            >
                                VS
                            </div>

                        </div>


                        {/* Home Team */}

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-2
                                w-28
                                md:w-36
                            "
                        >

                            <div
                                className="
                                    w-20
                                    h-20
                                    md:w-24
                                    md:h-24
                                    rounded-full
                                    bg-[#F8FAFC]
                                    border
                                    border-gray-100
                                    flex
                                    items-center
                                    justify-center
                                    p-3
                                "
                            >

                                <Image
                                    src={logo2}
                                    alt={mainMatch.home_team_name}
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                    "
                                />

                            </div>

                            <h2
                                className="
                                    font-bold
                                    text-[#10243D]
                                    text-center
                                    text-sm
                                    md:text-base
                                "
                            >
                                {mainMatch.home_team_name}
                            </h2>

                        </div>

                    </div>

                </section>


                {/* ========================= */}
                {/* MAIN CONTENT */}
                {/* ========================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-[1.45fr_0.75fr]
                        gap-6
                        items-start
                    "
                >

                    {/* ========================= */}
                    {/* TICKET SELECTION */}
                    {/* ========================= */}

                    <section
                        className="
                            bg-[#10243D]
                            rounded-2xl
                            shadow-xl
                            overflow-hidden
                        "
                    >

                        {/* Header */}

                        <div
                            className="
                                px-6
                                pt-6
                                pb-5
                                border-b
                                border-white/10
                            "
                        >

                            <h1
                                className="
                                    text-xl
                                    font-bold
                                    text-white
                                "
                            >
                                انتخاب بلیت
                            </h1>

                            <p
                                className="
                                    text-sm
                                    text-white/45
                                    mt-1
                                "
                            >
                                جایگاه و صندلی مورد نظر خود را انتخاب کنید
                            </p>

                        </div>


                        {/* ========================= */}
                        {/* STADIUM IMAGE */}
                        {/* ========================= */}

                        <div className="px-6 pt-6">

                            <div
                                className="
                                    relative
                                    rounded-xl
                                    overflow-hidden
                                    bg-[#0B1D31]
                                "
                            >

                                <Image
                                    src={stadium}
                                    alt="نمای ورزشگاه"
                                    className="
                                        w-full
                                        h-auto
                                        object-contain
                                        rounded-xl
                                    "
                                />

                                {/* فقط سایه پایین تصویر */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-x-0
                                        bottom-0
                                        h-28
                                        bg-gradient-to-t
                                        from-[#10243D]
                                        via-[#10243D]/70
                                        to-transparent
                                    "
                                />

                            </div>

                        </div>


                        {/* ========================= */}
                        {/* TICKET LIST */}
                        {/* ========================= */}

                        <ul className="p-6">

                            {match.map((ticket, index) => {

                                const color =
                                    sectionColors[
                                        ticket.section_type_name
                                    ] || "#64748B";

                                const available =
                                    ticket.available_count > 0;

                                return (
                                    <li
                                        key={ticket.ticket_category_id}
                                        className="
                                            border
                                            border-white/10
                                            rounded-xl
                                            p-4
                                            mb-3
                                            last:mb-0
                                            hover:bg-white/[0.04]
                                            transition
                                        "
                                    >

                                        <div
                                            className="
                                                flex
                                                flex-col
                                                md:flex-row
                                                md:items-center
                                                gap-4
                                                justify-between
                                            "
                                        >

                                            {/* Section */}

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-3
                                                "
                                            >

                                                <span
                                                    className="
                                                        w-4
                                                        h-4
                                                        rounded-full
                                                        shrink-0
                                                    "
                                                    style={{
                                                        backgroundColor:
                                                            color,
                                                    }}
                                                />

                                                <div>

                                                    <h2
                                                        className="
                                                            text-white
                                                            font-bold
                                                        "
                                                    >
                                                        {
                                                            ticket.section_name
                                                        }
                                                    </h2>

                                                    <p
                                                        className="
                                                            text-xs
                                                            text-white/40
                                                            mt-1
                                                        "
                                                    >
                                                        {
                                                            ticket.section_type_name
                                                        }
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Price */}

                                            <div className="text-right">

                                                <p
                                                    className="
                                                        text-white
                                                        font-bold
                                                    "
                                                >
                                                    {ticket.current_price.toLocaleString()}
                                                </p>

                                                <span
                                                    className="
                                                        text-xs
                                                        text-white/40
                                                    "
                                                >
                                                    تومان
                                                </span>

                                            </div>


                                            {/* Availability */}

                                            <div>

                                                {available ? (

                                                    <span
                                                        className="
                                                            text-[#52D15C]
                                                            bg-[#52D15C]/10
                                                            px-3
                                                            py-1.5
                                                            rounded-lg
                                                            text-xs
                                                            whitespace-nowrap
                                                        "
                                                    >
                                                        {
                                                            ticket.available_count
                                                        }{" "}
                                                        بلیت موجود
                                                    </span>

                                                ) : (

                                                    <span
                                                        className="
                                                            text-red-400
                                                            bg-red-400/10
                                                            px-3
                                                            py-1.5
                                                            rounded-lg
                                                            text-xs
                                                        "
                                                    >
                                                        ناموجود
                                                    </span>

                                                )}

                                            </div>


                                            {/* Seat */}

                                            <select
                                                disabled={!available}
                                                ref={(element) => {
                                                    ticketNumRef.current[
                                                        index
                                                    ] = element;
                                                }}
                                                className="
                                                    w-full
                                                    md:w-48
                                                    bg-white/10
                                                    border
                                                    border-white/10
                                                    text-white
                                                    rounded-lg
                                                    px-3
                                                    py-2.5
                                                    text-sm
                                                    outline-none
                                                    focus:border-[#52D15C]
                                                    focus:ring-2
                                                    focus:ring-[#52D15C]/20
                                                    transition
                                                "
                                            >

                                                <option
                                                    value=""
                                                    className="text-black"
                                                >
                                                    انتخاب صندلی
                                                </option>

                                                {(
                                                    seats[
                                                        ticket
                                                            .ticket_category_id
                                                    ] || []
                                                ).map((seat) => (

                                                    <option
                                                        key={
                                                            seat.inventory_id
                                                        }
                                                        value={
                                                            seat.inventory_id
                                                        }
                                                        className="text-black"
                                                    >
                                                        ردیف{" "}
                                                        {
                                                            seat.row_number
                                                        }
                                                        {" ، "}
                                                        شماره{" "}
                                                        {
                                                            seat.seat_number
                                                        }
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    </li>
                                );
                            })}

                        </ul>


                        {/* ========================= */}
                        {/* BUY BUTTON */}
                        {/* ========================= */}

                        <div className="px-6 pb-6">

                            <button
                                onClick={bookHandler}
                                className="
                                    group
                                    w-full
                                    bg-[#52D15C]
                                    hover:bg-[#45bd50]
                                    active:scale-[0.99]
                                    text-[#10243D]
                                    font-bold
                                    py-4
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    shadow-lg
                                    shadow-[#52D15C]/20
                                    transition-all
                                    duration-200
                                "
                            >

                                <span>
                                    ادامه و رزرو بلیت
                                </span>

                                <svg
                                    className="
                                        w-5
                                        transition-transform
                                        group-hover:-translate-x-1
                                    "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2048 2048"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M2048 896v256H490l459 459-181 181L0 1024l768-768 181 181-459 459h1558z"
                                    />
                                </svg>

                            </button>

                        </div>

                    </section>


                    {/* ========================= */}
                    {/* MATCH DETAILS */}
                    {/* ========================= */}

                    <aside className="space-y-4">

                        <section
                            className="
                                bg-white
                                rounded-2xl
                                border
                                border-gray-100
                                shadow-sm
                                p-6
                            "
                        >

                            <h2
                                className="
                                    font-bold
                                    text-lg
                                    text-[#10243D]
                                "
                            >
                                جزئیات مسابقه
                            </h2>

                            <p
                                className="
                                    text-sm
                                    text-gray-400
                                    mt-1
                                "
                            >
                                اطلاعات رویداد
                            </p>


                            <div className="mt-5 space-y-1">

                                <DetailRow
                                    label="رقابت"
                                    value={mainMatch.league_name}
                                />

                                <DetailRow
                                    label="تاریخ"
                                    value={date}
                                />

                                <DetailRow
                                    label="ساعت شروع"
                                    value={time}
                                />

                                <DetailRow
                                    label="ورزشگاه"
                                    value={mainMatch.venue_name}
                                />

                                <DetailRow
                                    label="آدرس"
                                    value={mainMatch.venue_address}
                                />

                                <DetailRow
                                    label="ظرفیت"
                                    value={`${mainMatch.venue_capacity.toLocaleString()} نفر`}
                                />

                            </div>

                        </section>


                        {/* Help */}

                        <section
                            className="
                                bg-[#10243D]
                                rounded-2xl
                                p-5
                                text-white
                            "
                        >

                            <div className="flex gap-3 items-start">

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        bg-white/10
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    "
                                >
                                    ℹ️
                                </div>

                                <div>

                                    <h3 className="font-bold">
                                        راهنمای رزرو
                                    </h3>

                                    <p
                                        className="
                                            text-xs
                                            text-white/50
                                            leading-6
                                            mt-1
                                        "
                                    >
                                        ابتدا جایگاه و سپس صندلی مورد نظر
                                        خود را انتخاب کنید و روی دکمه رزرو
                                        بزنید.
                                    </p>

                                </div>

                            </div>

                        </section>

                    </aside>

                </div>

            </div>
        </main>
    );
}


/* ================================= */
/* Info Badge */
/* ================================= */

function InfoBadge({ icon, text }) {
    return (
        <div
            className="
                flex
                items-center
                gap-1.5
                bg-[#F8FAFC]
                border
                border-gray-100
                rounded-lg
                px-3
                py-1.5
                text-xs
                text-gray-500
                whitespace-nowrap
            "
        >
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    );
}


/* ================================= */
/* Detail Row */
/* ================================= */

function DetailRow({ label, value }) {
    return (
        <div
            className="
                flex
                flex-row-reverse
                justify-between
                gap-5
                py-3
                border-b
                border-gray-100
                last:border-0
                text-sm
            "
        >

            <span
                className="
                    text-gray-400
                    shrink-0
                "
            >
                {label}
            </span>

            <span
                className="
                    text-[#10243D]
                    font-medium
                    text-left
                "
            >
                {value}
            </span>

        </div>
    );
}