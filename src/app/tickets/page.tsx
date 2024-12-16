'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Ticket {
  id: string
  eventName: string
  date: string
  time: string
  venue: string
  ticketType: string
  ticketImage: string
}

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  const tickets: Ticket[] = [
    {
      id: '1',
      eventName: 'Money Conclave 2024',
      date: '18 December 2024',
      time: '10:00 AM',
      venue: 'CIAL Convention Center',
      ticketType: 'VISITOR',
      ticketImage: '/ticket1.png'
    },
    {
      id: '2',
      eventName: 'Money Conclave 2024',
      date: '18 December 2024',
      time: '6:00 PM',
      venue: 'CIAL Convention Center',
      ticketType: 'VISITOR',
      ticketImage: '/ticket2.png'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-4 md:p-8">
      {/* Header with Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-[#01f77e] mb-4 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-white text-3xl md:text-4xl font-cooper mb-2">Your Tickets</h1>
        <p className="text-gray-400">View and manage your event tickets</p>
      </div>

      {/* Tickets List */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
          <div 
            key={ticket.id}
            className="bg-[#1A1A1A] rounded-lg p-6 cursor-pointer hover:bg-[#222] transition-colors"
            onClick={() => setSelectedTicket(ticket)}
          >
            <Image
              src={ticket.ticketImage}
              alt={ticket.eventName}
              width={400}
              height={200}
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h2 className="text-white text-xl mb-2">{ticket.eventName}</h2>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>📅 {ticket.date} at {ticket.time}</p>
              <p>📍 {ticket.venue}</p>
              <p>🎟️ {ticket.ticketType}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-white text-2xl font-cooper">{selectedTicket.eventName}</h2>
              <button 
                onClick={() => setSelectedTicket(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <Image
              src={selectedTicket.ticketImage}
              alt={selectedTicket.eventName}
              width={800}
              height={400}
              className="rounded-lg mb-6 w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="text-[#01f77e] mb-1">Date & Time</p>
                <p>{selectedTicket.date}</p>
                <p>{selectedTicket.time}</p>
              </div>
              <div>
                <p className="text-[#01f77e] mb-1">Venue</p>
                <p>{selectedTicket.venue}</p>
              </div>
              <div>
                <p className="text-[#01f77e] mb-1">Ticket Type</p>
                <p>{selectedTicket.ticketType}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 