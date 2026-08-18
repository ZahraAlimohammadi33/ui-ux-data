"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MatchCard from "@/components/layout/MatchCard";
import SearchFillter from "@/components/layout/SearchFillter";
import { mockMatches } from "@/data/mockData";







export default function Matches(){



    const [filltered , setFilltered] = useState(false)
    const [data , setData] = useState()
    const router = useRouter() 

        

  const searchHandler = (sport , city, venue, dateto, datefrom, name)=>{
        setFilltered(true)

        const filters = {
            sport_id :sport,
            team_id : name,
            city_id: city,
            venue_id : venue,
            date_from: datefrom,
            date_to : dateto
        }
         const params = new URLSearchParams();

    if (sport && sport !== "-1") {
        params.append("sport_id", sport);
    }

    if (name && name !== "-1") {
        params.append("team_id", name);
    }

    if (city && city !== "-1") {
        params.append("city_id", city);
    }

    if (venue && venue !== "-1") {
        params.append("venue_id", venue);
    }

    if (datefrom) {
        params.append("date_from", datefrom);
    }

    if (dateto) {
        params.append("date_to", dateto);
    }


          const getTeams = async() =>{
           const res =  await fetch(`http://127.0.0.1:8000/api/tickets/search/?${params.toString()}`)
           const datas = await res.json()
           console.log(datas)


            const groupEvent = Object.values(
        datas.data.tickets.reduce((groups, data) =>{
        const eventId = data.event_id

            if(!groups[eventId]){
                groups[eventId] = []
            }
            groups[eventId].push(data)

            return groups
        }, {})

        );

    setData(mockMatches)
        
    }
     setData(mockMatches)
    //   getTeams()
}


  const searchAdvancHandler = (sport , city, venue, dateto, datefrom, name)=>{
        setFilltered(true)

        const filters = {
            sport_id :sport,
            team_id : name,
            city_id: city,
            venue_id : venue,
            date_from: datefrom,
            date_to : dateto
        }
         const params = new URLSearchParams();

    if (sport && sport !== "-1") {
        params.append("sport_id", sport);
    }

    if (name && name !== "-1") {
        params.append("team_id", name);
    }

    if (city && city !== "-1") {
        params.append("city_id", city);
    }

    if (venue && venue !== "-1") {
        params.append("venue_id", venue);
    }

    if (datefrom) {
        params.append("date_from", datefrom);
    }

    if (dateto) {
        params.append("date_to", dateto);
    }


          const getTeams = async() =>{
           const res =  await fetch(`http://127.0.0.1:8000/api/tickets/search/?${params.toString()}`)
           const datas = await res.json()
           console.log(datas)


            const groupEvent = Object.values(
        datas.data.tickets.reduce((groups, data) =>{
        const eventId = data.event_id

            if(!groups[eventId]){
                groups[eventId] = []
            }
            groups[eventId].push(data)

            return groups
        }, {})

        );

      

        setData(groupEvent)
        
    }
      getTeams()
      setData(mockMatches)
}



    useEffect(() => {

        const getTeams = async() =>{
           const res =  await fetch("http://127.0.0.1:8000/api/tickets/search/")
           const datas = await res.json()
           console.log(datas)
            const groupEvent = Object.values(
        datas.data.tickets.reduce((groups, data) =>{
        const eventId = data.event_id

            if(!groups[eventId]){
                groups[eventId] = []
            }
            groups[eventId].push(data)

            return groups
        }, {})

        );

        setData(mockMatches)
        }

        setData(mockMatches.map(match => [match]));
        // getTeams()
        // console.log(data)
       
      }, []);


     const clickHandler = (evenTicket)=>{
        sessionStorage.setItem(
            "selectedEvent",
            JSON.stringify(evenTicket)
        )
        router.push(`/match/${evenTicket[0].event_id}`)
    }

   return (
    data && (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#F5F8FA]
                py-8
            "
        >

            {/* Background Decorations */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -top-40
                    right-[-120px]
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
                    top-[500px]
                    left-[-180px]
                    w-[400px]
                    h-[400px]
                    rounded-full
                    bg-[#52D15C]/5
                    blur-3xl
                "
            />


            <div className="relative z-10 w-11/12 max-w-[1400px] mx-auto">

                {/* Page Header */}
                <div
                    dir="rtl"
                    className="
                        mt-16
                        mb-0
                        flex
                        flex-col
                        md:flex-row
                        md:items-end
                        md:justify-between
                        gap-4
                    "
                >

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span
                                className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-[#52D15C]
                                "
                            />

                            <span className="text-sm text-[#52D15C] font-medium">
                                رویدادهای ورزشی
                            </span>
                        </div>

                        <h1
                            className="
                                text-3xl
                                md:text-4xl
                                font-extrabold
                                text-[#10243D]
                                tracking-tight
                            "
                        >
                            مسابقات
                        </h1>

                        <p className="mt-2 text-sm md:text-base text-gray-500">
                            مسابقه مورد نظر خود را پیدا کنید و بلیت خود را رزرو کنید.
                        </p>
                    </div>


                    {/* Results Count */}
                    <div
                        className="
                            self-start
                            md:self-auto
                            flex
                            items-center
                            gap-2
                            bg-white
                            border
                            border-gray-100
                            rounded-xl
                            px-4
                            py-2.5
                            shadow-sm
                        "
                    >
                        <span className="text-sm text-gray-500">
                            تعداد مسابقات
                        </span>

                        <span
                            className="
                                min-w-7
                                h-7
                                px-2
                                rounded-lg
                                bg-[#10243D]
                                text-white
                                text-sm
                                font-bold
                                flex
                                items-center
                                justify-center
                            "
                        >
                            {data.length}
                        </span>
                    </div>

                </div>


                {/* Search Filter */}
                <SearchFillter
                    searchHandler={searchHandler}
                />


                {/* Matches */}
                <section className="mt-8">

                    <div
                        dir="rtl"
                        className="
                            flex
                            items-center
                            justify-between
                            mb-5
                            px-1
                        "
                    >
                        <h2 className="text-lg font-bold text-[#10243D]">
                            مسابقات پیش‌رو
                        </h2>

                        <span className="text-xs text-gray-400">
                            جدیدترین رویدادها
                        </span>
                    </div>


                    <div
                        className="
                            w-full
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                            gap-4
                            justify-items-center
                        "
                    >

                        {data.map((eventTicket) => {

                            const datetime =
                                eventTicket?.[0]?.event_datetime;

                            const [date, fullTime] = datetime
                                ? datetime.split("T")
                                : ["", ""];

                            const time = fullTime
                                ? fullTime.slice(0, 5)
                                : "";

                            return (
                                <MatchCard
                                    clickHandler={clickHandler}
                                    eventTicket={eventTicket}
                                    key={eventTicket[0].event_id}
                                    sport_name={
                                        eventTicket[0].sport_name
                                    }
                                    venue_name={
                                        eventTicket[0].venue_name
                                    }
                                    away_team_name={
                                        eventTicket[0].away_team_name
                                    }
                                    away_team_logo={
                                        eventTicket[0].away_team_logo
                                    }
                                    home_team_name={
                                        eventTicket[0].home_team_name
                                    }
                                    home_team_logo={
                                        eventTicket[0].home_team_logo
                                    }
                                    date={date}
                                    time={time}
                                    price={Math.min(
                                        ...eventTicket.map(
                                            ticket =>
                                                ticket.current_price
                                        )
                                    )}
                                />
                            );
                        })}

                    </div>

                </section>

            </div>
        </main>
    )
);
}