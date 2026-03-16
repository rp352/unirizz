/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

const SUBJECT_TABS = [
  "All",
  "CSE101",
  "MTH166",
  "PHY110",
  "CSE121",
  "MEC136",
  "INT306",
] as const;

type SubjectCode = (typeof SUBJECT_TABS)[number];

type NoteItem = {
  id: number;
  subject: Exclude<SubjectCode, "All">;
  fileName: string;
  unit: string;
  type: "PDF" | "PPT";
};

const NOTES: NoteItem[] = [
  {
    id: 1,
    subject: "CSE101",
    unit: "Unit 1",
    fileName: "Intro to Programming.pdf",
    type: "PDF",
  },
  {
    id: 2,
    subject: "CSE101",
    unit: "Unit 2",
    fileName: "Arrays & Functions.ppt",
    type: "PPT",
  },
  {
    id: 3,
    subject: "MTH166",
    unit: "Unit 1",
    fileName: "Matrices.pdf",
    type: "PDF",
  },
  {
    id: 4,
    subject: "MTH166",
    unit: "Unit 2",
    fileName: "Integration.pdf",
    type: "PDF",
  },
  {
    id: 5,
    subject: "PHY110",
    unit: "Unit 1",
    fileName: "Wave Motion.pdf",
    type: "PDF",
  },
  {
    id: 6,
    subject: "PHY110",
    unit: "Unit 2",
    fileName: "Thermodynamics.ppt",
    type: "PPT",
  },
];

export default function NotesPage() {
  const [activeSubject, setActiveSubject] = useState<SubjectCode>("All");

  const filteredNotes =
    activeSubject === "All"
      ? NOTES
      : NOTES.filter((note) => note.subject === activeSubject);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Navbar */}
      <header className="border-b border-zinc-800/80 bg-[#050505]/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              aria-label="Back to dashboard"
            >
              <span className="-ml-0.5 text-lg">&larr;</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-[#f97316]">Uni</span>Rizz
              </span>
              <span className="hidden text-lg sm:inline">⚡</span>
            </div>
          </div>
          <button className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-100 shadow-sm transition hover:border-[#f97316] hover:text-[#f97316]">
            Sign In
          </button>
        </nav>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10">
        {/* Header */}
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Notes &amp; Resources
          </h1>
          <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
            High-signal notes for LPU CSE 1st year. Filter by subject and grab
            exactly what you need before class, CAs, or end terms.
          </p>
        </section>

        {/* Subject filter tabs */}
        <section className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto pb-1 pt-1">
          {SUBJECT_TABS.map((subject) => {
            const isActive = activeSubject === subject;
            return (
              <button
                key={subject}
                onClick={() => setActiveSubject(subject)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:text-sm ${
                  isActive
                    ? "border-[#f97316]/80 bg-[#f97316]/15 text-[#f97316]"
                    : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {subject}
              </button>
            );
          })}
        </section>

        {/* Notes grid */}
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs text-zinc-500 sm:text-sm">
              Showing{" "}
              <span className="font-medium text-zinc-200">
                {filteredNotes.length}
              </span>{" "}
              files
              {activeSubject !== "All" && (
                <>
                  {" "}
                  for{" "}
                  <span className="font-medium text-[#f97316]">
                    {activeSubject}
                  </span>
                </>
              )}
              .
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <article
                key={note.id}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center rounded-full bg-[#f97316]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#f97316]">
                      {note.subject}
                    </span>
                    <h2 className="text-sm font-medium text-zinc-100 sm:text-[15px]">
                      {note.fileName}
                    </h2>
                    <p className="text-[11px] text-zinc-500 sm:text-xs">
                      {note.unit} · LPU CSE 1st year
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      note.type === "PDF"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-indigo-500/10 text-indigo-400"
                    }`}
                  >
                    {note.type}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <button className="flex-1 rounded-full bg-[#f97316] px-3 py-1.5 text-xs font-medium text-black shadow-sm transition hover:bg-[#ea580c] sm:text-sm">
                    Download
                  </button>
                  <button className="flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-[#f97316] hover:text-[#f97316] sm:text-sm">
                    View
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Upload area */}
        <section className="mt-4 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-4 sm:p-5">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
              <span className="text-lg">↑</span>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-zinc-100 sm:text-base">
                Drop your own notes
              </p>
              <p className="text-xs text-zinc-500 sm:text-[13px]">
                Drag &amp; drop PDFs or PPTs here, or click to upload. Keep it
                clean, relevant, and exam-focused.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
            <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-[#f97316] hover:text-[#f97316] sm:text-sm">
              <input type="file" className="hidden" multiple />
              Upload files
            </label>
            <p className="text-[10px] text-zinc-500 sm:text-xs">
              Max 25MB · PDF or PPT · LPU CSE 1st year only
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

