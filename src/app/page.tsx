"use client";
import Link from "next/link";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain, BookOpen, GraduationCap, ShoppingBag,
  Users, Star, Video, Wrench, Calendar, Clock, CheckCircle,
} from "lucide-react";

const GRADIENT = "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400";
const GRADIENT_TEXT = `${GRADIENT} bg-clip-text text-transparent`;

export default function NeuroCodeLandingMinimal(): React.ReactElement {
  const [comingSoon, setComingSoon] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200/60">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-7 w-7 rounded-xl grid place-items-center text-white ${GRADIENT}`}>
              <Brain className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">
              Neuro<span className={GRADIENT_TEXT}>Code</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm">
           <NavLink href="/ebooks" icon={<BookOpen className="h-4 w-4" />}>E-books</NavLink>
           <NavLink href="/courses" icon={<GraduationCap className="h-4 w-4" />}>Courses</NavLink>
           <NavLink href="/products" icon={<ShoppingBag className="h-4 w-4" />}>Our Products</NavLink>
          </nav>
          <button onClick={() => setShowBooking(true)} className={`inline-flex h-9 items-center rounded-xl px-4 text-sm text-white ${GRADIENT} shadow-sm hover:shadow-md`}>
            Contact us
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 py-18 md:py-24">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
                >
                  Your hub for <span className={GRADIENT_TEXT}>learning</span> & innovation.
                </motion.h1>
                <p className="mt-4 text-neutral-600 max-w-xl">
                  NeuroCode is both an educational platform and a curated store for premium products that complement your learning and creativity.
                </p>
                <div className="mt-7 flex flex-col gap-2">
                  <button onClick={() => setShowBooking(true)} className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white ${GRADIENT} shadow-sm hover:shadow-md`}>
                    <Video className="h-4 w-4" /> <Wrench className="h-4 w-4" /> Book a Call for Your Custom Product
                  </button>
                  <p className="text-xs text-neutral-500 max-w-xs">Talk with our team to create a product tailored to your needs.</p>
                </div>
                <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 12k+ learners</span>
                  <span className="flex items-center gap-1"><Star className="h-4 w-4" /> 4.9/5 avg. rating</span>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="aspect-[4/5] rounded-3xl border border-neutral-200 bg-white p-8 grid place-items-center shadow-sm">
                  <div className={`h-24 w-24 rounded-2xl grid place-items-center text-white ${GRADIENT}`}>
                    <Brain className="h-10 w-10" />
                  </div>
                  <p className="mt-4 text-sm text-neutral-500">NeuroCode Platform</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {comingSoon && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm text-center">
              <h2 className={`text-xl font-semibold mb-2 ${GRADIENT_TEXT}`}>Coming Soon</h2>
              <p className="text-sm text-neutral-600 mb-4">The {comingSoon} page is currently in development.</p>
              <button onClick={() => setComingSoon(null)} className={`px-4 py-2 rounded-xl text-white ${GRADIENT} hover:shadow-md`}>Close</button>
            </div>
          </div>
        )}

        {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
      </main>

      <footer id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} NeuroCode. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#ebooks" className="hover:opacity-80">E-books</a>
            <a href="#courses" className="hover:opacity-80">Courses</a>
            <a href="#products" className="hover:opacity-80">Our Products</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 relative transition duration-300 bg-transparent border-0 cursor-pointer"
    >
      {icon}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-tr from-neutral-800 to-neutral-800 hover:from-violet-600 hover:via-pink-500 hover:to-orange-400 transition-colors duration-300">
        {children}
      </span>
    </Link>
  );
}



function BookingModal({ onClose }: { onClose: () => void }): React.ReactElement {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // demo only
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className={`rounded-t-2xl p-5 ${GRADIENT} text-white`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Calendar className="h-4 w-4" /> Book a Zoom Call</h3>
            <button onClick={onClose} className="text-white/90 hover:text-white">x</button>
          </div>
          <p className="text-xs mt-1 opacity-90">Tell us about your custom product needs. We will send you a Zoom invite.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-5 grid gap-4">
            {error && <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
            <div className="grid gap-2">
              <label className="text-sm">Full name</label>
              <input name="name" required className="h-10 rounded-xl border border-neutral-200 px-3 outline-none focus:ring-2 focus:ring-purple-400" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">Email</label>
              <input name="email" type="email" required className="h-10 rounded-xl border border-neutral-200 px-3 outline-none focus:ring-2 focus:ring-purple-400" placeholder="you@company.com" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm">What do you need?</label>
              <select name="need" className="h-10 rounded-xl border border-neutral-200 px-3 outline-none focus:ring-2 focus:ring-purple-400">
                <option>Custom AI feature</option>
                <option>Full product (web/app)</option>
                <option>Automation / integration</option>
                <option>UI/UX and brand</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm">Goal / brief</label>
              <textarea name="brief" rows={4} className="rounded-xl border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-purple-400" placeholder="Briefly describe your project and goals" />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="grid gap-2">
                <label className="text-sm flex items-center gap-1"><Calendar className="h-4 w-4" /> Preferred date</label>
                <input name="date" type="date" className="h-10 rounded-xl border border-neutral-200 px-3 outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm flex items-center gap-1"><Clock className="h-4 w-4" /> Preferred time</label>
                <select name="time" className="h-10 rounded-xl border border-neutral-200 px-3 outline-none focus:ring-2 focus:ring-purple-400">
                  <option>09:00</option>
                  <option>11:00</option>
                  <option>14:00</option>
                  <option>16:00</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={loading} className={`mt-2 h-11 rounded-2xl text-white ${GRADIENT} shadow-sm hover:shadow-md disabled:opacity-60`}>
              {loading ? "Sending invite..." : "Request booking"}
            </button>
            <p className="text-xs text-neutral-500">We will email a calendar invite with a private Zoom link.</p>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className={`mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full text-white shadow-sm ${GRADIENT}`}>
              <CheckCircle className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold mb-1">Invitation sent</h4>
            <p className="text-sm text-neutral-600">Check your inbox for a Zoom invite and calendar event. See you soon!</p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={onClose} className="h-10 rounded-xl border border-neutral-200 px-4 hover:bg-neutral-50">Close</button>
              <a href="#" className={`h-10 grid place-items-center rounded-xl px-4 text-white ${GRADIENT} shadow-sm hover:shadow-md`}>View agenda</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
