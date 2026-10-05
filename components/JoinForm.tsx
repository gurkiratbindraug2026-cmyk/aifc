"use client";

import { useRef, useState } from "react";

type Status = "idle" | "processing" | "done";

// Front-end-only placeholder: shows the same submit micro-interaction as the
// original page but does not send the application anywhere yet.
export default function JoinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => {
        setStatus("idle");
        formRef.current?.reset();
      }, 3000);
    }, 1500);
  }

  return (
    <form ref={formRef} className="space-y-12" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
            First Name
          </label>
          <input
            className="w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 placeholder:text-surface-variant font-body-md"
            placeholder="Ashoka"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
            Last Name
          </label>
          <input
            className="w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 placeholder:text-surface-variant font-body-md"
            placeholder="Impact"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
          Institutional Email
        </label>
        <input
          className="w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 placeholder:text-surface-variant font-body-md"
          placeholder="name@ashoka.edu.in"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
          Primary Interest
        </label>
        <select className="w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 appearance-none font-body-md cursor-pointer text-on-surface-variant">
          <option>Social Venture Capital</option>
          <option>Sustainable Advisory</option>
          <option>Policy &amp; Research</option>
          <option>Micro-Finance Projects</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-outline">
          Personal Narrative (Brief)
        </label>
        <textarea
          className="w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 placeholder:text-surface-variant resize-none font-body-md"
          placeholder="How do you intend to leverage finance for social good?"
          rows={4}
        />
      </div>
      <div className="pt-4">
        <button
          className={`w-full md:w-auto text-white px-12 py-4 rounded-lg font-label-lg uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg ${
            status === "idle" ? "bg-navy-brand hover:bg-black" : ""
          } ${status === "done" ? "bg-forest-brand" : ""} ${
            status === "processing"
              ? "bg-navy-brand opacity-70 pointer-events-none"
              : ""
          }`}
          type="submit"
        >
          {status === "idle" && (
            <>
              Submit Application
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </>
          )}
          {status === "processing" && (
            <>
              <span className="material-symbols-outlined animate-spin">
                progress_activity
              </span>{" "}
              Processing...
            </>
          )}
          {status === "done" && (
            <>
              <span className="material-symbols-outlined">check_circle</span>{" "}
              Application Received
            </>
          )}
        </button>
      </div>
    </form>
  );
}
