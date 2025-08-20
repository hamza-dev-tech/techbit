import { Hero } from "@/components/Hero"
import { QuestionFeed } from "@/components/QuestionFeed"
import { SidebarLeft } from "@/components/SidebarLeft"
import { SidebarRight } from "@/components/SidebarRight"
import { Features } from "@/components/Features"
import { RecentQuestions } from "@/components/RecentQuestions"
import { TopContributors } from "@/components/TopContributors"
import { UnansweredQuestions } from "@/components/UnansweredQuestions"
import { CommunityPulse } from "@/components/CommunityPulse"
import { QuickActionBar } from "@/components/QuickActionBar"
import { TrendingTopicsWidget } from "@/components/TrendingTopicsWidget"
import { QuickTipsHelp } from "@/components/QuickTipsHelp"
import { CTA } from "@/components/CTA"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Layout - Fixed and Centered */}
      <section className="py-3 sm:py-4 lg:py-6 bg-gradient-to-b from-muted/10 via-background to-muted/5">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-4 layout-container" dir="ltr">
            {/* Left Sidebar - Fixed position regardless of RTL */}
            <aside className="hidden lg:block lg:col-span-3 sidebar-left">
              <div className="sticky top-20">
                <SidebarLeft />
              </div>
            </aside>

            {/* Main Content - Always centered */}
            <main className="lg:col-span-6 main-content">
              <div className="w-full">
                <QuestionFeed />
              </div>
            </main>

            {/* Right Sidebar - Fixed position regardless of RTL */}
            <aside className="hidden lg:block lg:col-span-3 sidebar-right">
              <div className="sticky top-20">
                <SidebarRight />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Additional Sections - All centered with proper containers */}
      <div className="space-y-0">
        {/* Community Stats and Engagement */}
        <CommunityPulse />
        <QuickActionBar />
        
        {/* Content Discovery */}
        <UnansweredQuestions />
        <TrendingTopicsWidget />
        
        {/* Help and Community */}
        <QuickTipsHelp />
        
        {/* Existing Sections */}
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
          <Features />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
          <RecentQuestions />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6">
          <TopContributors />
        </div>
        <CTA />
      </div>
    </div>
  )
}
