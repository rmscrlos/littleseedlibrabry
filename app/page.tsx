export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-soft font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background sm:items-start">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
            <svg className="h-8 w-8 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M50 20 C50 20 35 35 35 50 C35 55 40 60 50 60 C60 60 65 55 65 50 C65 35 50 20 50 20" />
              <path d="M50 60 L50 80" />
              <path d="M40 75 Q50 85 60 75" />
            </svg>
          </div>
          <span className="text-2xl font-semibold text-primary">Little Seed Library</span>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground">
            Growing Together, One Seed at a Time
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted">
            Welcome to our community seed library. Share seeds, grow together,
            and nurture our local garden community.
          </p>
        </div>

        <div className="w-full rounded-xl bg-background-warm p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Color Theme Preview</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-primary"></div>
              <span className="text-sm text-muted">Primary #3D6B4B</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-primary-light"></div>
              <span className="text-sm text-muted">Primary Light #4A7D5A</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-primary-dark"></div>
              <span className="text-sm text-muted">Primary Dark #2F5339</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-background border border-border"></div>
              <span className="text-sm text-muted">Background #FFFFFF</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-background-soft border border-border"></div>
              <span className="text-sm text-muted">Soft #F9F8F4</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-16 rounded-lg bg-background-warm border border-border"></div>
              <span className="text-sm text-muted">Warm #F5F0E6</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-white transition-colors hover:bg-primary-dark md:w-45"
            href="#"
          >
            Browse Seeds
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-border px-5 text-foreground transition-colors hover:bg-background-soft md:w-45"
            href="#"
          >
            Donate Seeds
          </a>
        </div>
      </main>
    </div>
  );
}
