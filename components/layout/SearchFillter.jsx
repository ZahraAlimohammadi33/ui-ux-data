import { mockFilters } from "@/data/mockData"
import { useState } from "react"
import { useRef, useEffect } from "react"

export default function SearchFillter({searchHandler, searchَAdvancedHandler}){
    const datetoRef = useRef(null)
     const timetoRef = useRef(null)
     const datefromRef = useRef(null)
      const timefromRef = useRef(null)
    const sportRef = useRef(null)
    const cityRef = useRef(null)
    const venueRef = useRef(null)
    const nameRef = useRef(null)
    const [teams, setTeams] = useState([])
    const [venues, setvenues] = useState([])
    const [cities, setCitis] = useState([])

    useEffect(() => {

        const getTeams = async() =>{
           const res =  await fetch("http://127.0.0.1:8000/api/catalog/teams/")
           const data = await res.json()
           setTeams(data.data.teams)
        }

        const getVenues = async() =>{
           const res =  await fetch("http://127.0.0.1:8000/api/catalog/venues/")
           const data = await res.json()
           setvenues(data.data.venues)
        }

        const getCities = async() =>{
           const res =  await fetch(" http://127.0.0.1:8000/api/catalog/cities/")
           const data = await res.json()
           setCitis(data.data.cities)
        }

        
        getTeams()
        getVenues()
        getCities()
     
       
      }, []);




return (
    <div className="mt-15 w-full">
        <div
            className="
                w-full
                bg-[#10243D]
                text-white
                rounded-2xl
                p-5
            
                shadow-lg
                shadow-[#10243D]/10
                flex
                flex-wrap
                flex-row-reverse
                gap-4
                items-end
                justify-center
            "
        >

            {/* Team */}
            <div className="flex flex-col gap-1.5 min-w-[150px]">
                <label className="text-xs text-gray-300 text-right pr-1">
                    تیم
                </label>

                <select
                    ref={nameRef}
                    className="
                        w-full
                        bg-white
                        text-gray-700
                        rounded-lg
                        px-3
                        py-2.5
                        outline-none
                        border
                        border-transparent
                        cursor-pointer
                        transition-all
                        duration-200
                        hover:border-[#52D15C]
                        focus:border-[#52D15C]
                        focus:ring-2
                        focus:ring-[#52D15C]/20
                    "
                >
                    <option value="-1">همه تیم‌ها</option>

                    {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
            </div>


            {/* Sport */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
                <label className="text-xs text-gray-300 text-right pr-1">
                    ورزش
                </label>

                <select
                    ref={sportRef}
                    className="
                        w-full
                        bg-white
                        text-gray-700
                        rounded-lg
                        px-3
                        py-2.5
                        outline-none
                        border
                        border-transparent
                        cursor-pointer
                        transition-all
                        duration-200
                        hover:border-[#52D15C]
                        focus:border-[#52D15C]
                        focus:ring-2
                        focus:ring-[#52D15C]/20
                    "
                >
                    <option value="-1">همه ورزش‌ها</option>

                    {mockFilters.sports.map((sport) => (
                        <option key={sport.id} value={sport.id}>
                            {sport.name}
                        </option>
                    ))}
                </select>
            </div>


            {/* Venue */}
            <div className="flex flex-col gap-1.5 min-w-[170px]">
                <label className="text-xs text-gray-300 text-right pr-1">
                    ورزشگاه
                </label>

                <select
                    ref={venueRef}
                    className="
                        w-full
                        bg-white
                        text-gray-700
                        rounded-lg
                        px-3
                        py-2.5
                        outline-none
                        border
                        border-transparent
                        cursor-pointer
                        transition-all
                        duration-200
                        hover:border-[#52D15C]
                        focus:border-[#52D15C]
                        focus:ring-2
                        focus:ring-[#52D15C]/20
                    "
                >
                    <option value="-1">همه ورزشگاه‌ها</option>

                    {venues.map((venue) => (
                        <option key={venue.id} value={venue.id}>
                            {venue.name}
                        </option>
                    ))}
                </select>
            </div>


            {/* City */}
            <div className="flex flex-col gap-1.5 min-w-[140px]">
                <label className="text-xs text-gray-300 text-right pr-1">
                    شهر
                </label>

                <select
                    ref={cityRef}
                    className="
                        w-full
                        bg-white
                        text-gray-700
                        rounded-lg
                        px-3
                        py-2.5
                        outline-none
                        border
                        border-transparent
                        cursor-pointer
                        transition-all
                        duration-200
                        hover:border-[#52D15C]
                        focus:border-[#52D15C]
                        focus:ring-2
                        focus:ring-[#52D15C]/20
                    "
                >
                    <option value="-1">همه شهرها</option>

                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>


            {/* Date */}
            <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-300 text-right pr-1">
                    بازه زمانی
                </label>

                <div
                    dir="rtl"
                    className="
                        flex
                        items-center
                        gap-2
                        bg-white
                        rounded-lg
                        px-2
                        py-1
                    "
                >
                    <input
                        type="date"
                        ref={datefromRef}
                        className="
                            bg-transparent
                            text-gray-700
                            text-sm
                            p-1.5
                            outline-none
                            cursor-pointer
                        "
                    />

                    <span className="text-gray-400 text-xs">
                        تا
                    </span>

                    <input
                        type="date"
                        ref={datetoRef}
                        className="
                            bg-transparent
                            text-gray-700
                            text-sm
                            p-1.5
                            outline-none
                            cursor-pointer
                        "
                    />
                </div>
            </div>


            {/* Search Button */}
            <button
                onClick={() =>
                    searchHandler(
                        sportRef.current.value,
                        cityRef.current.value,
                        venueRef.current.value,
                        datetoRef.current.value,
                        datefromRef.current.value,
                        nameRef.current.value
                    )
                }
                className="
                    group
                    relative
                    overflow-hidden
                    min-w-[125px]
                    h-[46px]
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#52D15C]
                    text-[#07111F]
                    font-semibold
                    rounded-lg
                    cursor-pointer

                    transition-all
                    duration-300
                    ease-out

                    hover:bg-[#63DF6D]
                    hover:shadow-lg
                    hover:shadow-[#52D15C]/25
                    hover:-translate-y-0.5

                    active:translate-y-0
                    active:scale-[0.97]
                "
            >
                <span className="relative z-10">
                    جستجو
                </span>

                <svg
                    className="
                        relative
                        z-10
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        group-hover:rotate-[-8deg]
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.323 13.383a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06l-2.897-2.897ZM13 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                        clipRule="evenodd"
                    />
                </svg>

                {/* Hover shine */}
                <span
                    className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-white/20
                        skew-x-[-20deg]
                        transition-transform
                        duration-500
                        group-hover:translate-x-full
                    "
                />
            </button>

        </div>
    </div>
);


}