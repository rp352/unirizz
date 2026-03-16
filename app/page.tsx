export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
      {/* Navbar */}
      <header className="border-b border-zinc-800/80 bg-[#050505]/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-[#f97316]">Uni</span>Rizz
            </span>
            <span className="hidden text-lg sm:inline">⚡</span>
          </div>
          <button className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-100 shadow-sm transition hover:border-[#f97316] hover:text-[#f97316]">
            Sign In
          </button>
        </nav>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-10">
        {/* Hero */}
        <section className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
            LPU CSE · 1st Year
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Your semester.{" "}
            <span className="bg-[radial-gradient(circle_at_top,_#f97316,_transparent_60%),_radial-gradient(circle_at_bottom,_#ea580c,_transparent_60%)] bg-clip-text text-transparent">
              On steroids.
            </span>
          </h1>
          <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
            Built for LPU CSE students who actually want to pass. Track your
            classes, CAs, notes and attendance in one clean dashboard.
          </p>
        </section>

        {/* Stats grid */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
            <p className="text-[11px] font-medium text-zinc-400 sm:text-xs">
              Today&apos;s Classes
            </p>
            <p className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl">
              3
            </p>
            <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">
              You&apos;re mid-packed. Stay locked in.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
            <p className="text-[11px] font-medium text-zinc-400 sm:text-xs">
              Upcoming CAs
            </p>
            <p className="mt-2 text-2xl font-semibold text-[#f97316] sm:text-3xl">
              2
            </p>
            <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">
              Don&apos;t ghost your prep this week.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
            <p className="text-[11px] font-medium text-zinc-400 sm:text-xs">
              Notes Available
            </p>
            <p className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl">
              12
            </p>
            <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">
              Curated for LPU CSE 1st sem.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#f97316]/20 via-zinc-900 to-zinc-900 p-3 sm:p-4">
            <p className="text-[11px] font-medium text-zinc-300 sm:text-xs">
              Attendance
            </p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
                68%
              </p>
              <span className="rounded-full bg-zinc-900/80 px-2 py-0.5 text-[10px] font-medium text-[#f97316] sm:text-[11px]">
                Borderline. Fix it.
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-zinc-800">
              <div
                className="h-1.5 rounded-full bg-[#f97316]"
                style={{ width: "68%" }}
              />
            </div>
          </div>
        </section>

        {/* Today timetable */}
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-medium text-zinc-200 sm:text-base">
                Today&apos;s Timetable
              </h2>
              <p className="text-[11px] text-zinc-500 sm:text-xs">
                All your classes for the day, no MyClass drama.
              </p>
            </div>
            <span className="hidden rounded-full border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400 sm:inline">
              LPU · Spring 2026
            </span>
          </div>

          <div className="space-y-3 sm:grid sm:grid-cols-3 sm:gap-3 sm:space-y-0">
            {/* CSE101 */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#f97316]">
                    CSE101
                  </span>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                    10:00 – 11:00 AM
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Programming Fundamentals
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Room AB-203</span>
                <span>Lecture</span>
              </div>
            </div>

            {/* MTH166 */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#f97316]">
                    MTH166
                  </span>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                    11:00 – 12:00 PM
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Engineering Mathematics
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Room BH-110</span>
                <span>Lecture</span>
              </div>
            </div>

            {/* PHY110 */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 sm:p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#f97316]">
                    PHY110
                  </span>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                    2:00 – 3:00 PM
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Engineering Physics
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Room CC-305</span>
                <span>Lecture</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
