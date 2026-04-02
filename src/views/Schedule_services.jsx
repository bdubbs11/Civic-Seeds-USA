import React, { useEffect, useRef } from "react";

function ScheduleServices() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-script";

    const initCalendly = () => {
      if (window.Calendly && calendlyRef.current) {
        // 🔥 FIX: clear previous embeds before initializing
        calendlyRef.current.innerHTML = "";

        window.Calendly.initInlineWidget({
          url: "https://calendly.com/deitra-civicseedsusa",
          parentElement: calendlyRef.current,
        });
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      initCalendly();
    }

    const handleMessage = (e) => {
      if (e.origin !== "https://calendly.com") return;

      if (e.data.event?.includes("calendly") && calendlyRef.current) {
        const height = e.data.payload?.height;

        if (height) {
          const clampedHeight = Math.min(Math.max(height, 700), 1100);
          calendlyRef.current.style.height = `${clampedHeight}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full px-4 pt-6 pb-10 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <header className="my-5 text-left md:ml-15 ">
          <h1 className="mb-2 text-3xl md:text-4xl 2xl:text-5xl font-bold text-navy font-cantata">
            Schedule Services
          </h1>
          <p className="max-w-2xl text-gray-700 md:text-lg">
            Choose a time for coaching, a consultation, workshops, or speaking requests.
          </p>
        </header>

        {/* Calendly */}
        <div
          ref={calendlyRef}
          className="w-full mt-4"
          style={{
            minWidth: "320px",
            height: "900px",
          }}
        />
      </div>
    </div>
  );
}

export default ScheduleServices;