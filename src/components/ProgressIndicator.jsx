export default function ProgressIndicator({ currentStep, totalSteps = 4, labels = [] }) {
  const defaultLabels = ["Experience", "Details", "Preferences", "Review"]
  const stepLabels = labels.length === totalSteps ? labels : defaultLabels

  return (
    <div className="w-full">
      {/* Step indicators */}
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
        {/* Progress line filled */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-[#3a5a40] -z-10 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep

          return (
            <div key={stepNum} className="flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#3a5a40] border-[#3a5a40] text-white"
                    : isCurrent
                      ? "bg-white border-[#3a5a40] text-[#3a5a40]"
                      : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`text-xs font-medium transition-colors hidden sm:block ${
                  isCompleted || isCurrent ? "text-[#3a5a40]" : "text-gray-400"
                }`}
              >
                {stepLabels[i]}
              </span>
            </div>
          )
        })}
      </div>

      {/* Mobile current step label */}
      <p className="text-center text-sm text-[#3a5a40] font-medium mt-4 sm:hidden">
        Step {currentStep}: {stepLabels[currentStep - 1]}
      </p>
    </div>
  )
}
