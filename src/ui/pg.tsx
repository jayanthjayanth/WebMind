import Link from "next/link"
import { SearchAgent } from "@/components/search-agent"
import { Features } from "@/components/features"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-slate-950">
      {/* Hero Section */}
      <header className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.15),transparent_70%)]"></div>
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]"></div>
        </div>

        <h1 className="mb-4 bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-7xl">
          Web Search Agent
        </h1>
        <p className="mb-8 max-w-[700px] text-lg text-slate-400">
          A powerful AI-driven research assistant built with LangGraph that searches the web and compiles structured
          reports from your queries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#search"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/40"
          >
            Try It Now
          </Link>
          <Link
            href="https://github.com/your-username/web-search-agent"
            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 px-8 text-sm font-medium text-slate-300 backdrop-blur-sm transition-colors hover:bg-slate-800/70 hover:text-white"
          >
            View on GitHub
          </Link>
        </div>
      </header>

      {/* Search Interface */}
      <section id="search" className="container mx-auto px-4 py-16">
        <SearchAgent />
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <Features />
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <TechStack />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

