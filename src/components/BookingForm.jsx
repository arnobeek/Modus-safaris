import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { FormInput, FormCheckboxGroup, CheckboxButton, FormTextarea } from "./FormField"
import { experiences, getExperienceBySlug } from "../data/experiences"
import { sendBookingData } from "../services/emailService"
import { 
  IoTimeOutline, 
  IoCalendarOutline, 
  IoHeartOutline, 
  IoMapOutline, 
  IoPeopleOutline, 
  IoPersonAddOutline, 
  IoCashOutline, 
  IoCreateOutline 
} from "react-icons/io5"

export default function BookingForm() {
  const [searchParams] = useSearchParams()
  const experienceFromUrl = searchParams.get("experience") || ""

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [activeStep, setActiveStep] = useState(1)

  const [form, setForm] = useState({
    duration: "",
    years: [],
    months: [],
    experiences: [],
    countries: [],
    travelingWith: "",
    adults: "",
    children: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    notes: "",
  })

  const [errors, setErrors] = useState({})

  // Auto-fill experience from URL
  useEffect(() => {
    if (experienceFromUrl) {
      const exp = getExperienceBySlug(experienceFromUrl)
      if (exp) {
        setForm((prev) => ({ 
          ...prev, 
          experiences: [exp.title],
          countries: [exp.country] 
        }))
        // Automatically reveal more steps if data is pre-filled
        setActiveStep(4)
      }
    }
  }, [experienceFromUrl])

  const toggleArrayItem = (field, value) => {
    setForm((prev) => {
      const current = prev[field]
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
      return { ...prev, [field]: updated }
    })
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
    if (submitError) setSubmitError("")
  }

  const validate = () => {
    const newErrors = {}
    if (!form.duration) newErrors.duration = "Please select travel duration"
    if (form.years.length === 0) newErrors.year = "Please select a year"
    if (form.months.length === 0) newErrors.month = "Please select at least one month"
    if (form.experiences.length === 0) newErrors.experiences = "Please select at least one experience"
    if (form.countries.length === 0) newErrors.countries = "Please select a country"
    if (!form.travelingWith) newErrors.travelingWith = "Please tell us who you're traveling with"
    
    if (form.travelingWith) {
      if (!form.adults) newErrors.adults = "Required"
      if (!form.children) newErrors.children = "Required"
    }

    if (!form.budget) newErrors.budget = "Please select a budget range"
    if (!form.fullName.trim()) newErrors.fullName = "Required"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email required"
    if (!form.phone.trim()) newErrors.phone = "Required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (nextStep) => {
    setActiveStep(Math.max(activeStep, nextStep))
    setTimeout(() => {
      const element = document.getElementById(`sec-${nextStep}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      const firstError = document.querySelector('[role="alert"]')
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Format data for email service
      const emailData = {
        ...form,
        years: form.years.join(", "),
        months: form.months.join(", "),
        experiences: form.experiences.join(", "),
        countries: form.countries.join(", "),
      }

      await sendBookingData(emailData)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error("Failed to send enquiry:", error)
      setSubmitError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-16 text-center animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto border border-zinc-100">
        <div className="w-20 h-20 bg-[#3a5a40]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-[#3a5a40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Inquiry Sent!</h2>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Thank you for choosing Modus Safaris. We've received your request and our specialists will be in touch within 24 hours to begin crafting your journey.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-10 py-4 bg-[#3a5a40] text-white font-medium hover:bg-[#2f4a33] transition-all rounded-full shadow-lg"
        >
          Explore More Safaris
        </button>
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Progress Line (Desktop only) */}
      <div className="hidden lg:block absolute left-[19px] top-10 bottom-40 w-0.5 bg-gradient-to-b from-[#3a5a40] via-[#3a5a40]/30 to-transparent" />

      <form onSubmit={handleSubmit} className="space-y-20 pb-20 relative">
        {/* Section 1: Duration */}
        <section id="sec-1" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-6 duration-700">
          <div className="flex items-center gap-5">
            <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
              <IoTimeOutline className="text-xl" />
            </span>
            <div className="space-y-1">
              <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 01</p>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">How long do you want to travel for?</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] transition-all duration-500">
            <FormCheckboxGroup label="" error={errors.duration} columns="grid-cols-2 lg:grid-cols-4">
              {["1–3 days", "4–7 days", "8–14 days", "15+ days"].map((d) => (
                <CheckboxButton
                  key={d}
                  id={`duration-${d}`}
                  name="duration"
                  label={d}
                  checked={form.duration === d}
                  type="radio"
                  onChange={() => updateField("duration", d)}
                />
              ))}
            </FormCheckboxGroup>
            {form.duration && activeStep === 1 && (
              <div className="flex justify-start pt-8 mt-8 border-t border-zinc-50">
                <button 
                  type="button" 
                  onClick={() => handleNext(2)}
                  className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                >
                  Next Step <span>&rarr;</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: When */}
        {activeStep >= 2 && (
          <section id="sec-2" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoCalendarOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 02</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Which year and month suits you best?</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-10">
              <div className="space-y-8">
                <FormCheckboxGroup label="Preferred Year" error={errors.year} columns="grid-cols-3">
                  {["2026", "2027"].map((y) => (
                    <CheckboxButton
                      key={y}
                      id={`year-${y}`}
                      label={y}
                      checked={form.years.includes(y)}
                      onChange={() => toggleArrayItem("years", y)}
                    />
                  ))}
                </FormCheckboxGroup>
                <FormCheckboxGroup label="Preferred Month(s)" error={errors.month} columns="grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
                    <CheckboxButton
                      key={m}
                      id={`month-${m}`}
                      label={m}
                      checked={form.months.includes(m)}
                      onChange={() => toggleArrayItem("months", m)}
                    />
                  ))}
                </FormCheckboxGroup>
              </div>
              {form.years.length > 0 && form.months.length > 0 && activeStep === 2 && (
                <div className="flex justify-start pt-8 border-t border-zinc-50">
                  <button 
                    type="button" 
                    onClick={() => handleNext(3)}
                    className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                  >
                    Next Step <span>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 3: Experiences */}
        {activeStep >= 3 && (
          <section id="sec-3" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoHeartOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 03</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">What experience would you like to have?</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <FormCheckboxGroup label="" error={errors.experiences} columns="grid-cols-2 lg:grid-cols-3">
                {[
                  "Gorilla trekking", "Wildlife safari", "Cultural experience", 
                  "Adventure / hiking", "Luxury travel", "Honeymoon / romantic", "Photography"
                ].map((e) => (
                  <CheckboxButton
                    key={e}
                    id={`exp-${e}`}
                    label={e}
                    checked={form.experiences.includes(e)}
                    onChange={() => toggleArrayItem("experiences", e)}
                  />
                ))}
              </FormCheckboxGroup>
              {form.experiences.length > 0 && activeStep === 3 && (
                <div className="flex justify-start pt-8 mt-8 border-t border-zinc-50">
                  <button 
                    type="button" 
                    onClick={() => handleNext(4)}
                    className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                  >
                    Next Step <span>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 4: Countries */}
        {activeStep >= 4 && (
          <section id="sec-4" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoMapOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 04</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Do you have a preferred country?</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <FormCheckboxGroup label="" error={errors.countries} columns="grid-cols-2 lg:grid-cols-5">
                {["Uganda", "Kenya", "Rwanda", "Tanzania", "Other"].map((c) => (
                  <CheckboxButton
                    key={c}
                    id={`country-${c}`}
                    label={c}
                    checked={form.countries.includes(c)}
                    onChange={() => toggleArrayItem("countries", c)}
                  />
                ))}
              </FormCheckboxGroup>
              {form.countries.length > 0 && activeStep === 4 && (
                <div className="flex justify-start pt-8 mt-8 border-t border-zinc-50">
                  <button 
                    type="button" 
                    onClick={() => handleNext(5)}
                    className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                  >
                    Next Step <span>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 5: Travelers */}
        {activeStep >= 5 && (
          <section id="sec-5" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoPeopleOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 05</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Who will you be traveling with?</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <FormCheckboxGroup label="" error={errors.travelingWith} columns="grid-cols-2 lg:grid-cols-5">
                {["Solo", "Couple", "Family", "Friends", "Group"].map((t) => (
                  <CheckboxButton
                    key={t}
                    id={`traveler-${t}`}
                    label={t}
                    checked={form.travelingWith === t}
                    type="radio"
                    onChange={() => updateField("travelingWith", t)}
                  />
                ))}
              </FormCheckboxGroup>
              {form.travelingWith && activeStep === 5 && (
                <div className="flex justify-start pt-8 mt-8 border-t border-zinc-50">
                  <button 
                    type="button" 
                    onClick={() => handleNext(6)}
                    className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                  >
                    Next Step <span>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 6: Counts (Conditional) */}
        {activeStep >= 6 && (
          <section id="sec-6" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoPersonAddOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 06</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Number of travelers</h3>
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-700 max-h-0 ${form.travelingWith ? "max-h-[800px]" : ""}`}>
              <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <FormCheckboxGroup label="Adults" error={errors.adults} columns="grid-cols-5">
                    {["1", "2", "3", "4", "5+"].map((v) => (
                      <CheckboxButton
                        key={`adult-${v}`}
                        id={`adult-${v}`}
                        label={v}
                        checked={form.adults === v}
                        type="radio"
                        onChange={() => updateField("adults", v)}
                      />
                    ))}
                  </FormCheckboxGroup>
                  <FormCheckboxGroup label="Children" error={errors.children} columns="grid-cols-5">
                    {["0", "1", "2", "3", "4+"].map((v) => (
                      <CheckboxButton
                        key={`child-${v}`}
                        id={`child-${v}`}
                        label={v}
                        checked={form.children === v}
                        type="radio"
                        onChange={() => updateField("children", v)}
                      />
                    ))}
                  </FormCheckboxGroup>
                </div>
                {form.adults && form.children && activeStep === 6 && (
                  <div className="flex justify-start pt-8 border-t border-zinc-200">
                    <button 
                      type="button" 
                      onClick={() => handleNext(7)}
                      className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                    >
                      Next Step <span>&rarr;</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Section 7: Budget */}
        {activeStep >= 7 && (
          <section id="sec-7" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoCashOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 07</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Budget in mind, per person (USD)?</h3>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
              <FormCheckboxGroup label="" error={errors.budget} columns="grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {["Under $1,500", "$1,500 – $2,500", "$2,500 – $4,000", "$4,000 – $6,000", "$6,000+"].map((b) => (
                  <CheckboxButton
                    key={b}
                    id={`budget-${b}`}
                    label={b}
                    checked={form.budget === b}
                    type="radio"
                    onChange={() => updateField("budget", b)}
                  />
                ))}
              </FormCheckboxGroup>
              {form.budget && activeStep === 7 && (
                <div className="flex justify-start pt-8 mt-8 border-t border-zinc-50">
                  <button 
                    type="button" 
                    onClick={() => handleNext(8)}
                    className="bg-[#3a5a40] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#2f4a33] hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-95"
                  >
                    Next Step <span>&rarr;</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Section 8: Your Details */}
        {activeStep >= 8 && (
          <section id="sec-8" className="relative pl-0 lg:pl-16 space-y-8 animate-in slide-in-from-bottom-8 duration-700 scroll-mt-24 pb-12">
            <div className="flex items-center gap-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-bold shadow-lg shadow-[#3a5a40]/20 shrink-0">
                <IoCreateOutline className="text-xl" />
              </span>
              <div className="space-y-1">
                <p className="text-[#3a5a40] text-[10px] font-black tracking-[0.2em] uppercase opacity-70">Step 08</p>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">Your details</h3>
              </div>
            </div>
            <div className="bg-white p-10 md:p-14 rounded-[3rem] border-2 border-[#3a5a40]/5 shadow-[0_20px_60px_-15px_rgba(58,90,64,0.1)] space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                <FormInput
                  label="Full Name"
                  placeholder="e.g. Jane Doe"
                  value={form.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  error={errors.fullName}
                  required
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  error={errors.email}
                  required
                />
                <FormInput
                  label="Phone Number"
                  type="tel"
                  placeholder="e.g. +1 555 000 0000"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  error={errors.phone}
                  required
                />
                <FormInput
                  label="Nationality"
                  placeholder="e.g. American"
                  value={form.nationality}
                  onChange={(e) => updateField("nationality", e.target.value)}
                  error={errors.nationality}
                />
              </div>

              <FormTextarea
                label="Additional notes / comments"
                placeholder="Tell us more about your ideal safari..."
                value={form.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                rows={5}
              />

              <div className="flex items-start gap-3 pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-[#3a5a40] focus:ring-[#3a5a40]"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and agree to the <Link to="/terms-and-conditions" target="_blank" className="text-[#3a5a40] underline hover:text-[#2f4a33]">Terms & Conditions</Link>. I understand the cancellation policy and booking requirements.
                </label>
              </div>

              {submitError && (
                <div className="p-5 bg-red-50 text-red-700 rounded-2xl text-sm border border-red-100 italic animate-pulse">
                  {submitError}
                </div>
              )}

              <div className="pt-8 border-t border-zinc-50">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full px-12 py-5 bg-[#3a5a40] text-white font-black text-lg rounded-full shadow-2xl shadow-[#3a5a40]/30
                    hover:bg-[#2f4a33] hover:translate-y-[-3px] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-4
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      Securing your safari...
                    </>
                  ) : (
                    <>
                      SEND INQUIRY
                      <span className="text-xl">&rarr;</span>
                    </>
                  )}
                </button>
                <p className="text-center text-zinc-400 text-xs mt-6 font-medium uppercase tracking-widest">
                  Secure & Confidential Enquiry
                </p>
              </div>
            </div>
          </section>
        )}
      </form>
    </div>
  )
}
