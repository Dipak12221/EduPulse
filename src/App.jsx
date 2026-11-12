import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institute: "",
    email: "",
    plan: "School Pro",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.institute.trim())
      newErrors.institute = "Please enter school/coaching name";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 1. NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
              E
            </div>
            <span className="text-xl font-bold text-slate-900">EduPulse</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollTo("features")}
              className="hover:text-blue-600 transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="hover:text-blue-600 transition"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="hover:text-blue-600 transition"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2">
            <button
              onClick={() => scrollTo("features")}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="block w-full text-left py-2 text-slate-700 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium text-center"
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
              Cloud School & Coaching ERP
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Manage Your School Operations on{" "}
              <span className="text-blue-600">Autopilot</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Automate student fee receipts, exam marksheets, attendance, and
              parent notices from one simple dashboard. Built for modern schools
              and coaching institutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-center"
              >
                Request Free Demo
              </button>
              <button
                onClick={() => scrollTo("features")}
                className="px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-100 transition text-center"
              >
                Explore Features
              </button>
            </div>
          </div>

          {/* Dashboard Visual Mockup */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase">
                Admin Overview — Session 2026-27
              </span>
              <span className="px-2 py-0.5 text-xs rounded bg-emerald-100 text-emerald-700 font-medium">
                Live Sync
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs text-slate-500">Total Students</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">1,420</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <p className="text-xs text-slate-500">Fees Collected</p>
                <p className="text-2xl font-bold text-emerald-700 mt-1">
                  92.4%
                </p>
              </div>
              <div className="col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Half-Yearly Marksheets Ready
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Auto-generated PDF cross-lists for Class 1–10
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600">
                  Exported ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section
        id="features"
        className="py-16 px-4 bg-white border-y border-slate-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Everything Your Institute Needs
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Eliminate manual registers and Excel errors with built-in
              automation tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                ₹
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Automated Fee Receipts
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Generate instant digital demand slips and fee receipts with
                automated due reminders.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
                📊
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Smart Marksheet Engine
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Calculate PA, Half-Yearly, and Annual totals automatically
                without formula mistakes.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                🔔
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Digital Notice Board
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Publish exam schedules, holiday circulars, and transport updates
                in one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / HOW IT WORKS */}
      <section id="how-it-works" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How EduPulse Works
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Get your institute running online in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl border border-slate-200">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h4 className="font-bold text-slate-900">
              Create Institute Profile
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Set up your classes, sections, and fee structures in minutes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h4 className="font-bold text-slate-900">Import Student Records</h4>
            <p className="text-sm text-slate-600 mt-2">
              Upload existing student lists directly from Excel or CSV files.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h4 className="font-bold text-slate-900">
              Manage Daily Operations
            </h4>
            <p className="text-sm text-slate-600 mt-2">
              Track attendance, collect fees, and print report cards
              effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PRICING SECTION */}
      <section
        id="pricing"
        className="py-16 px-4 bg-white border-y border-slate-200"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Simple, Affordable Pricing
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Choose a plan that fits your institute size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plan 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Coaching Starter
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Ideal for coaching centers & small academies.
                </p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ₹999
                  </span>
                  <span className="text-slate-500 text-sm"> / month</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li>✓ Up to 250 students</li>
                  <li>✓ Digital fee receipts & attendance</li>
                  <li>✓ Basic Excel report exports</li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 w-full py-2.5 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              >
                Select Starter
              </button>
            </div>

            {/* Plan 2 */}
            <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50/30 flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 px-3 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                MOST POPULAR
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">School Pro</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Complete ERP for full-scale schools.
                </p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ₹2,499
                  </span>
                  <span className="text-slate-500 text-sm"> / month</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li>✓ Unlimited students & staff accounts</li>
                  <li>✓ Automated marksheet & cross-list generator</li>
                  <li>✓ Transport & notice board modules</li>
                  <li>✓ Priority phone & WhatsApp support</li>
                </ul>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Select School Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT / DEMO FORM */}
      <section id="contact" className="py-16 px-4 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Book a Free Demo
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Enter your details below and we will set up a live walkthrough for
            your school.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
            <h3 className="text-lg font-bold text-emerald-800">
              Demo Request Received!
            </h3>
            <p className="text-sm text-emerald-700 mt-1">
              Thank you, <span className="font-semibold">{form.name}</span>. Our
              team will contact you shortly regarding{" "}
              <span className="font-semibold">{form.institute}</span>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setForm({
                  name: "",
                  institute: "",
                  email: "",
                  plan: "School Pro",
                });
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Dipak Kumar"
                className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.name ? "border-red-500" : "border-slate-300"} text-sm focus:outline-none focus:border-blue-600`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                School / Coaching Name
              </label>
              <input
                type="text"
                value={form.institute}
                onChange={(e) =>
                  setForm({ ...form, institute: e.target.value })
                }
                placeholder="e.g. R.B.G. Public School"
                className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.institute ? "border-red-500" : "border-slate-300"} text-sm focus:outline-none focus:border-blue-600`}
              />
              {errors.institute && (
                <p className="text-xs text-red-500 mt-1">{errors.institute}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="admin@school.com"
                className={`w-full px-3.5 py-2.5 rounded-lg border ${errors.email ? "border-red-500" : "border-slate-300"} text-sm focus:outline-none focus:border-blue-600`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                Select Plan
              </label>
              <select
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-blue-600"
              >
                <option value="Coaching Starter">
                  Coaching Starter (₹999/mo)
                </option>
                <option value="School Pro">School Pro (₹2,499/mo)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
            >
              Submit Demo Request
            </button>
          </form>
        )}
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 EduPulse ERP Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span>support@edupulse.in</span>
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
