'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4">
        <Image 
          src="/logoText.webp" 
          alt="MakeMyPass" 
          width={60}
          height={20}
        />
        <div className="flex gap-2 md:gap-4 items-center">
          <span className="text-white text-sm md:text-base">Request Demo</span>
          <Link 
            href="/tickets" 
            className="bg-[#01f77e] text-black px-3 md:px-4 py-2 rounded text-sm md:text-base"
          >
            View Tickets
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-6xl font-cooper text-white space-y-2 md:space-y-4">
            <div>
              <span className="bg-[#01f77e] text-black px-2">Simplify</span> Event
              Planning,
            </div>
            <div>
              <span className="bg-[#01f77e] text-black px-2">Amplify</span>
            </div>
            <div>Event Experience</div>
          </h1>
          <p className="text-gray-300 mt-4 md:mt-6 mb-6 md:mb-8 text-sm md:text-base">
            Why wrestle with Event Chaos when you can be smooth sailing into 
            Event Clarity? With MakeMyPass, forget about paper — 'cause your 
            tickets are safe and sound in your phone!
          </p>
          <div className="flex gap-3 md:gap-4">
            <button className="bg-[#01f77e] text-black px-4 md:px-6 py-2 rounded text-sm md:text-base">
              Talk to Us
            </button>
            <button className="text-white text-sm md:text-base">
              Schedule a Demo
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Image 
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            width={500}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="border-t border-gray-800 py-8 md:py-12 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex gap-8 md:justify-between items-center opacity-50 min-w-max md:min-w-0">
            {partnerLogos.map((logo, index) => (
              <Image 
                key={index}
                src={logo}
                alt="Partner"
                width={80}
                height={30}
                className="grayscale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111] px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#01f77e] mb-2 text-sm md:text-base">DID YOU KNOW?</p>
          <h2 className="text-3xl md:text-4xl text-white mb-6 md:mb-8">
            You're Wasting <span className="bg-[#01f77e] text-black px-2">Over 17 Hours</span> Per Event!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-4 text-gray-300">
            {timeStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                <span className="text-[#01f77e] whitespace-nowrap">{stat.hours}</span>
                <span>{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSV Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-8">
            Ditch The Dull CSV's! 'Cause We've Got Stunning 
            <span className="bg-[#01f77e] text-black px-2">Insights!</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Image 
                src="/analytics-dashboard.webp"
                alt="Analytics Dashboard"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="text-gray-300">
              <p>Imagine your data brought to life with vibrant graphics! Now picture all that in real-time. Sounds insightful, right? We've got that covered too!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Check In Section */}
      <section className="px-8 py-16 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-8">
            Ready, Set, <span className="bg-[#01f77e] text-black px-2">Check In!</span> With Just
            <span className="bg-[#01f77e] text-black px-2">3 Clicks</span> You're Done!
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Add check-in process images */}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-8 md:mb-12">
            MakeMyPass is <span className="bg-[#01f77e] text-black px-2">Ready</span>
            for You! <span className="bg-[#01f77e] text-black px-2">Let's Get Started!</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
                <h3 className="text-white text-lg md:text-xl mb-2">{plan.name}</h3>
                <p className="text-[#01f77e] text-xl md:text-2xl mb-6">{plan.price}</p>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-[#01f77e] text-black py-2 rounded mt-6 text-sm md:text-base">
                  Contact Sales
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-4 md:gap-8 text-gray-400 text-sm md:text-base">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
          <div className="text-gray-500 text-sm text-center max-w-md">
            <p className="mb-2">🚀 Crafted with chaos for Nagaraj Menon K S & Felix Jobi</p>
            <p className="italic">
              "Got copyright issues? Bring it on! We'll handle it like we handle our bugs - 
              with a mix of panic and questionable solutions! 😎. Just for a fake ticket!"
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

const partnerLogos = [
  '/partner1.svg',
  '/partner2.svg',
  '/partner3.svg',
  '/partner4.svg',
  '/partner5.svg',
  '/partner6.svg',
  '/partner7.svg',
  '/partner8.svg',
]

const timeStats = [
  { hours: '+4 hrs', description: 'Sending emails to users at various points.' },
  { hours: '+3 hrs', description: 'Sending custom tickets to the participants.' },
  { hours: '+3 hrs', description: 'Generating event statistics from CSVs.' },
  { hours: '+2 hrs', description: 'Distribution of event materials to the attendees.' },
  { hours: '+3 hrs', description: 'Setting up attendee check-ins at the venue.' },
  { hours: '+2 hrs', description: 'Managing on-site attendance and ticket sales.' },
]

const pricingPlans = [
  {
    name: 'Free Events',
    price: 'Free',
    features: [
      'Registration Analytics',
      'Basic Reports',
      'Mail Communication',
      'Self Checkin',
    ]
  },
  {
    name: 'Paid Events',
    price: '4%',
    features: [
      'All Free Features',
      'Payment Processing',
      'Advanced Analytics',
      'Priority Support',
    ]
  },
  {
    name: 'Large Events',
    price: 'Custom',
    features: [
      'All Paid Features',
      'Custom Branding',
      'API Access',
      'Dedicated Support',
    ]
  }
]
