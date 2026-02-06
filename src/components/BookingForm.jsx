import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ProgressIndicator from "./ProgressIndicator"
import { FormInput, FormSelect, FormTextarea } from "./FormField"
import { experiences, getExperienceBySlug } from "../data/experiences"
import { sendBookingData } from "../services/emailService"

const GUEST_OPTIONS = [
  { value: "", label: "Select number" },
  ...Array.from({ length: 10 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
  { value: "11+", label: "11+" },
]

const COUNTRY_OPTIONS = [
  { value: "", label: "Select country" },
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "NL", label: "Netherlands" },
  { value: "ZA", label: "South Africa" },
  { value: "KE", label: "Kenya" },
  { value: "UG", label: "Uganda" },
  { value: "Other", label: "Other" },
]

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "2000-5000", label: "USD $2,000 - $5,000" },
  { value: "5000-10000", label: "USD $5,000 - $10,000" },
  { value: "10000-15000", label: "USD $10,000 - $15,000" },
  { value: "15000-25000", label: "USD $15,000 - $25,000" },
  { value: "25000+", label: "Higher than USD $25,000" },
]

const ACCOMMODATION_OPTIONS = [
  { value: "", label: "Select preference" },
  { value: "luxury", label: "Luxury (5-star lodges & camps)" },
  { value: "midrange", label: "Mid-range (Comfortable lodges)" },
  { value: "budget", label: "Budget-friendly" },
  { value: "mixed", label: "Mix of options" },
]

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  return /^[\d\s\-+()]{8,20}$/.test(phone.replace(/\s/g, ""))
}

export default function BookingForm() {
  const [searchParams] = useSearchParams()
  const experienceFromUrl = searchParams.get("experience") || ""

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const [form, setForm] = useState({
    // Step 1
    experience: "",
    travelDates: "",
    numberOfTravelers: "",
    // Step 2
    fullName: "",
    email: "",
    phone: "",
    country: "",
    // Step 3
    budget: "",
    accommodation: "",
    notes: "",
  })

  const [errors, setErrors] = useState({})

  // Auto-fill experience from URL
  useEffect(() => {
    if (experienceFromUrl) {
      const exp = getExperienceBySlug(experienceFromUrl)
      if (exp) {
        setForm((prev) => ({ ...prev, experience: experienceFromUrl }))
      }
    }
  }, [experienceFromUrl])

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
    if (submitError) setSubmitError("")
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!form.experience) newErrors.experience = "Please select an experience"
      if (!form.travelDates.trim()) newErrors.travelDates = "Travel dates are required"
      if (!form.numberOfTravelers) newErrors.numberOfTravelers = "Please select number of travelers"
    }

    if (step === 2) {
      if (!form.fullName.trim()) newErrors.fullName = "Full name is required"
      else if (form.fullName.trim().length < 2) newErrors.fullName = "Please enter your full name"
      if (!form.email.trim()) newErrors.email = "Email is required"
      else if (!validateEmail(form.email)) newErrors.email = "Please enter a valid email"
      if (!form.phone.trim()) newErrors.phone = "Phone number is required"
      else if (!validatePhone(form.phone)) newErrors.phone = "Please enter a valid phone number"
      if (!form.country) newErrors.country = "Please select your country"
    }

    if (step === 3) {
      if (!form.budget) newErrors.budget = "Please select a budget range"
      if (!form.accommodation) newErrors.accommodation = "Please select accommodation preference"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const selectedExperience = experiences.find((e) => e.slug === form.experience)
      const emailData = {
        ...form,
        experienceTitle: selectedExperience?.title || form.experience,
        budgetLabel: BUDGET_OPTIONS.find((b) => b.value === form.budget)?.label || form.budget,
        accommodationLabel: ACCOMMODATION_OPTIONS.find((a) => a.value === form.accommodation)?.label || form.accommodation,
        countryLabel: COUNTRY_OPTIONS.find((c) => c.value === form.country)?.label || form.country,
      }

      await sendBookingData(emailData)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error("Failed to send booking:", error)
      setSubmitError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedExperience = experiences.find((e) => e.slug === form.experience)

  // Success screen
  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-[#3a5a40]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#3a5a40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">Thank You!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We've received your booking inquiry for{" "}
          <span className="font-medium text-gray-900">{selectedExperience?.title || "your safari"}</span>.
          One of our safari specialists will contact you within 24 hours.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-8 py-3 bg-[#3a5a40] text-white font-medium hover:bg-[#2f4a33] transition-colors rounded-lg"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
      {/* Progress indicator */}
      <div className="mb-10">
        <ProgressIndicator currentStep={currentStep} totalSteps={4} />
      </div>

      {/* Step 1: Experience Basics */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-3 mb-2">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Choose Your Experience
            </span>
          </div>

          <FormSelect
            id="experience"
            name="experience"
            label="Safari Experience"
            required
            value={form.experience}
            onChange={(e) => updateField("experience", e.target.value)}
            error={errors.experience}
          >
            <option value="">Select an experience</option>
            {experiences.map((exp) => (
              <option key={exp.slug} value={exp.slug}>
                {exp.title} ({exp.duration})
              </option>
            ))}
            <option value="custom">Custom / Tailor-made Safari</option>
          </FormSelect>

          {selectedExperience && (
            <div className="bg-zinc-50 rounded-lg p-4 flex gap-4">
              <img
                src={selectedExperience.heroImage}
                alt={selectedExperience.title}
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
              <div>
                <p className="font-medium text-gray-900">{selectedExperience.title}</p>
                <p className="text-sm text-gray-500">
                  {selectedExperience.duration} • From ${selectedExperience.startingPrice.toLocaleString()}
                </p>
              </div>
            </div>
          )}

          <FormInput
            id="travelDates"
            name="travelDates"
            label="Preferred Travel Dates"
            required
            value={form.travelDates}
            onChange={(e) => updateField("travelDates", e.target.value)}
            error={errors.travelDates}
            placeholder="e.g. June 15 - June 22, 2025"
          />

          <FormSelect
            id="numberOfTravelers"
            name="numberOfTravelers"
            label="Number of Travelers"
            required
            value={form.numberOfTravelers}
            onChange={(e) => updateField("numberOfTravelers", e.target.value)}
            error={errors.numberOfTravelers}
          >
            {GUEST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </FormSelect>
        </div>
      )}

      {/* Step 2: Personal Details */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-3 mb-2">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Your Details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              id="fullName"
              name="fullName"
              label="Full Name"
              required
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              error={errors.fullName}
              placeholder="e.g. Jane Smith"
              autoComplete="name"
            />
            <FormInput
              id="email"
              name="email"
              label="Email Address"
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              error={errors.email}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              id="phone"
              name="phone"
              label="Phone / WhatsApp"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              error={errors.phone}
              placeholder="e.g. +1 555 123 4567"
              autoComplete="tel"
            />
            <FormSelect
              id="country"
              name="country"
              label="Country"
              required
              value={form.country}
              onChange={(e) => updateField("country", e.target.value)}
              error={errors.country}
            >
              {COUNTRY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </FormSelect>
          </div>
        </div>
      )}

      {/* Step 3: Preferences */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-3 mb-2">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Your Preferences
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              id="budget"
              name="budget"
              label="Budget Range (per person)"
              required
              value={form.budget}
              onChange={(e) => updateField("budget", e.target.value)}
              error={errors.budget}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </FormSelect>

            <FormSelect
              id="accommodation"
              name="accommodation"
              label="Accommodation Preference"
              required
              value={form.accommodation}
              onChange={(e) => updateField("accommodation", e.target.value)}
              error={errors.accommodation}
            >
              {ACCOMMODATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </FormSelect>
          </div>

          <FormTextarea
            id="notes"
            name="notes"
            label="Additional Notes or Requests"
            value={form.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder="Tell us about any special interests, dietary requirements, celebrations, or questions..."
            rows={4}
          />
        </div>
      )}

      {/* Step 4: Review */}
      {currentStep === 4 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center gap-3 mb-2">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Review Your Inquiry
            </span>
          </div>

          <div className="space-y-4">
            {/* Experience */}
            <div className="bg-zinc-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900">Experience</h4>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-[#3a5a40] text-sm font-medium hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-gray-700">{selectedExperience?.title || "Custom Safari"}</p>
              <p className="text-sm text-gray-500 mt-1">
                {form.travelDates} • {form.numberOfTravelers} traveler(s)
              </p>
            </div>

            {/* Personal */}
            <div className="bg-zinc-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900">Your Details</h4>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-[#3a5a40] text-sm font-medium hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-gray-700">{form.fullName}</p>
              <p className="text-sm text-gray-500 mt-1">{form.email}</p>
              <p className="text-sm text-gray-500">{form.phone}</p>
              <p className="text-sm text-gray-500">
                {COUNTRY_OPTIONS.find((c) => c.value === form.country)?.label}
              </p>
            </div>

            {/* Preferences */}
            <div className="bg-zinc-50 rounded-lg p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-medium text-gray-900">Preferences</h4>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="text-[#3a5a40] text-sm font-medium hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-sm text-gray-600">
                <span className="text-gray-800">Budget:</span>{" "}
                {BUDGET_OPTIONS.find((b) => b.value === form.budget)?.label}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="text-gray-800">Accommodation:</span>{" "}
                {ACCOMMODATION_OPTIONS.find((a) => a.value === form.accommodation)?.label}
              </p>
              {form.notes && (
                <p className="text-sm text-gray-600 mt-2">
                  <span className="text-gray-800">Notes:</span> {form.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error message */}
      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm mt-6">
          {submitError}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            disabled={isSubmitting}
            className="px-6 py-3 text-gray-600 font-medium hover:text-gray-800 transition-colors disabled:opacity-50"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {currentStep < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-[1.02] transition-all duration-300"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        )}
      </div>
    </div>
  )
}
