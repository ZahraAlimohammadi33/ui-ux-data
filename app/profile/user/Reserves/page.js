"use client"
import { useState, useEffect } from "react";
import { mockReservations } from "@/data/mockData";
import ReserveCardPaied from "@/components/layout/ReserveCardPaied";
import ReserveCardUnPaied from "@/components/layout/ReserveCardUnpaied";
import CheckoutModal from "@/components/layout/CheckoutModal";
import CancelModal from "@/components/layout/CancelModal";
import ReserveCardCancelled from "@/components/layout/ReserveCardCancelled";

export default function Reserves (){

    const [data, setData]=useState([])
    const [books, setBooks]=useState([])
    const [info, setInofo]=useState([])
    const [cacels, setCancels]=useState([])

       useEffect(()=>{
    const getDetails = async ()=>{

         const token = sessionStorage.getItem("access_token")
        const response = await fetch("http://127.0.0.1:8000/api/reservations/mine/", {
        headers: {
        Authorization: `Bearer ${token}`
    }
    });
    console.log(response)
    
    const result = await response.json()
        setData(result.data.active)
        console.log(data)

    }
    getDetails()
    

    },[])

   

    useEffect(()=>{
     const getBooks = async ()=>{

         const token = sessionStorage.getItem("access_token")
        const response = await fetch("http://127.0.0.1:8000/api/tickets/my-bookings/", {
        headers: {
        Authorization: `Bearer ${token}`
    }
    });
    
        const result = await response.json()
        console.log(result)
        
        

        const formattedBooks = result.data.upcoming.map(ticket => ({
    ...ticket,
    seats: [
        {
            seat_number: ticket.seat_number,
            row_number: ticket.row_number,
            section_name: ticket.section_name
        }
    ]
}))

        setBooks(formattedBooks)

        const formattedCancels = result.data.cancelled.map(ticket => ({
    ...ticket,
    seats: [
        {
            seat_number: ticket.seat_number,
            row_number: ticket.row_number,
            section_name: ticket.section_name
        }
    ]
}))

        setCancels(formattedCancels)
    }

    getBooks()
    console.log(books)

    },[])
    
    const [modal, setModal] = useState(false)
    const [cancelModal, setCancelModal] = useState(false)
    const [id, setId]=useState()

       const showModal = async (id)=>{
        setId(id)
        setModal(true)
    }

    const closeCancelModal = async ()=>{
        setCancelModal(false)
    }

         const showCancelModal = async ()=>{
        setCancelModal(true)
    }

    const closeModal = async ()=>{
        setModal(false)
    }

    const payHandler =(id)=>{
        showModal(id)
    }

     const refundHandler =async (ticket_id)=>{
        const token = sessionStorage.getItem("access_token")
        const response = await fetch(`http://127.0.0.1:8000/api/tickets/${ticket_id}/cancellation-info/`, {
        headers: {
        Authorization: `Bearer ${token}`
    }});


        const res= await response.json()
        if(response.ok){
            setInofo(res.data)
            showCancelModal()
        }

        console.log(res)
    }

  return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12 mt-10 lg:mt-25 p-3 sm:p-5 flex flex-col gap-3">

        {modal && (
            <CheckoutModal
                closeModal={closeModal}
                id={id}
            />
        )}

        {cancelModal && info && (
            <CancelModal
                info={info}
                closeModal={closeCancelModal}
            />
        )}

        {mockReservations.map((ticket) => {

            if (ticket.status === "paid") {
                return (
                    <ReserveCardPaied
                        key={ticket.reservation_id}
                        total_amount={ticket.total_amount}
                        seats={ticket.seats}
                        away_team_name={ticket.away_team_name}
                        home_team_name={ticket.home_team_name}
                        venue_name={ticket.venue_name}
                        city_name={ticket.city_name}
                        event_datetime={ticket.event_datetime}
                        paid_at={ticket.paid_at}
                        reservation_id={ticket.reservation_id}
                    />
                )
            }

            if (ticket.status === "pending") {
                return (
                    <ReserveCardUnPaied
                        key={ticket.reservation_id}
                        ticket_id={ticket.ticket_id}
                        payHandler={payHandler}
                        total_amount={ticket.total_amount}
                        seats={ticket.seats}
                        away_team_name={ticket.away_team_name}
                        home_team_name={ticket.home_team_name}
                        venue_name={ticket.venue_name}
                        city_name={ticket.city_name}
                        event_datetime={ticket.event_datetime}
                        remaining_seconds={ticket.remaining_seconds}
                        reserved_at={ticket.reserved_at}
                        reservation_id={ticket.reservation_id}
                    />
                )
            }

            return null
        })}

    </div>
)
    
}