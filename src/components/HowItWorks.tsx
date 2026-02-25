import { User, Globe, Scissors, Bookmark, Play } from "lucide-react";

const HowItWorks = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Get the right mobile number for any prospect, wherever they are.
        </h2>

        {/* Two Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Find mobile numbers from CSV */}
          <div className="rounded-2xl bg-card p-8">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Find mobile numbers from CSV
              </h3>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Upload a CSV with <span className="font-semibold text-foreground">names and companies</span> to get verified mobile numbers.
            </p>

            {/* Illustration: Data table */}
            <div className="mx-auto w-full overflow-x-auto rounded-xl bg-background p-4">
              <table className="mx-auto w-full text-xs text-foreground">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-2 pr-3 font-medium">LinkedIn URL</th>
                    <th className="pb-2 pr-3 font-medium">Job Title</th>
                    <th className="pb-2 pr-3 font-medium">Company</th>
                    <th className="pb-2 pr-3 font-medium">Email</th>
                    <th className="pb-2 font-medium">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-3">Maya Kincaid</td><td className="py-2 pr-3">CEO</td><td className="py-2 pr-3">Aivanta</td><td className="py-2 pr-3">maya@aivanta.ai</td><td className="py-2">+14125587342</td></tr>
                  <tr><td className="py-2 pr-3">Lucas Moreno</td><td className="py-2 pr-3">Managing Partner</td><td className="py-2 pr-3">RevForge Labs</td><td className="py-2 pr-3">lucas@revforge.com</td><td className="py-2">+13109764215</td></tr>
                  <tr><td className="py-2 pr-3">Matteo Ricci</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Verbyte</td><td className="py-2 pr-3">matteo@verbyte.io</td><td className="py-2">+16468952317</td></tr>
                  <tr><td className="py-2 pr-3">Rohan Patel</td><td className="py-2 pr-3">Co-Founder and CEO</td><td className="py-2 pr-3">Lumyx</td><td className="py-2 pr-3">rohan@lumyx.ai</td><td className="py-2">+12068973455</td></tr>
                  <tr><td className="py-2 pr-3">Jonas Keller</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Nordstack</td><td className="py-2 pr-3">jonas@nordstack.com</td><td className="py-2">+15123894601</td></tr>
                  <tr><td className="py-2 pr-3">Elina Petrova</td><td className="py-2 pr-3">Founder & CEO</td><td className="py-2 pr-3">Fluxera Finance</td><td className="py-2 pr-3">elina@fluxera.ai</td><td className="py-2">+13478129564</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Find mobile numbers from social */}
          <div className="rounded-2xl bg-card p-8">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Find mobile numbers from social
              </h3>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Use our Chrome extension to get mobile numbers from social media and websites in one click.
            </p>

            {/* Illustration: LinkedIn profile with extension overlay */}
            <div className="flex items-center justify-center rounded-xl bg-background p-6">
              <div className="relative mx-auto" style={{ width: 400, minHeight: 460 }}>
                {/* LinkedIn-style profile card (background) */}
                <div className="w-[280px] overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 bg-muted/40 px-3 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(var(--primary) / 0.5)' }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(var(--primary) / 0.4)' }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(var(--primary) / 0.3)' }} />
                    <div className="ml-1 flex flex-1 items-center">
                      <div className="h-2 flex-1 rounded-full bg-muted" />
                    </div>
                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4l6 6m0-6l-6 6M14 4l6 6m0-6l-6 6M4 14l6 6m0-6l-6 6" /></svg>
                  </div>

                  {/* Cover photo - blurred blue bokeh effect */}
                  <div className="relative h-28 overflow-hidden">
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(210 60% 80%) 30%, hsl(200 70% 85%) 50%, hsl(var(--primary) / 0.2) 100%)',
                    }}>
                      {/* Bokeh circles */}
                      <div className="absolute left-4 top-4 h-8 w-8 rounded-full" style={{ background: 'hsl(0 0% 100% / 0.35)' }} />
                      <div className="absolute left-16 top-8 h-10 w-10 rounded-full" style={{ background: 'hsl(0 0% 100% / 0.25)' }} />
                      <div className="absolute right-10 top-3 h-7 w-7 rounded-full" style={{ background: 'hsl(0 0% 100% / 0.3)' }} />
                      <div className="absolute right-4 bottom-3 h-5 w-5 rounded-full" style={{ background: 'hsl(0 0% 100% / 0.2)' }} />
                    </div>
                  </div>

                  {/* Profile section */}
                  <div className="-mt-10 px-5 pb-5">
                    {/* Profile photo - circular with blue border */}
                    <div className="mb-2 h-20 w-20 rounded-full border-[3px] border-primary bg-muted shadow-md overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" alt="Andrea Riley" className="h-full w-full object-cover" />
                    </div>
                    <p className="text-base font-bold text-foreground">Andrea Riley <span className="font-normal text-muted-foreground text-sm">1st</span></p>
                    <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <span>◉</span> San Francisco Bay Ar...
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground">Message</span>
                      <span className="h-8 w-8 rounded-full border-2 border-primary/40 bg-primary/10" />
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <span className="h-3.5 w-3.5 rounded-full bg-primary/30" />
                      <span className="h-3.5 w-3.5 rounded-full bg-primary/15" />
                      <p className="ml-0.5 text-[11px] text-muted-foreground">82 mutual connections · 2 recent posts on Linkedin</p>
                    </div>
                  </div>
                </div>

                {/* Extension popup overlay - positioned top-right, overlapping */}
                <div className="absolute right-0 top-10 w-[240px] overflow-hidden rounded-xl border border-border bg-white shadow-xl">
                  {/* Top bar with icons */}
                  <div className="flex items-center justify-end gap-2 px-4 pt-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <Scissors className="h-4 w-4 text-muted-foreground" />
                    <Bookmark className="h-4 w-4 text-muted-foreground" />
                    <span className="ml-1 rounded px-2 py-0.5 text-[10px] font-bold" style={{ background: 'hsl(142 70% 90%)', color: 'hsl(142 70% 35%)' }}>FREE</span>
                  </div>

                  {/* Profile info */}
                  <div className="px-4 pb-4 pt-2.5">
                    <div className="mb-2.5 flex items-center gap-2.5">
                      <div className="h-10 w-10 overflow-hidden rounded-full bg-muted shadow-sm">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face" alt="Andrea Riley" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Andrea Riley</p>
                        <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
                        <p className="text-xs text-muted-foreground">San Francisco Bay Area</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs text-muted-foreground">
                        ⚙ Push to Hubspot <span className="text-[10px]">▾</span>
                      </span>
                      <span className="flex items-center gap-1 rounded-full border border-primary px-3 py-2 text-xs font-semibold text-primary">
                        <Play className="h-2.5 w-2.5 fill-primary" /> Add to list
                      </span>
                    </div>

                    {/* Contact details */}
                    <p className="mb-1.5 text-sm font-medium text-foreground">Contact details <span className="text-[10px]">▾</span></p>
                    <p className="text-sm font-semibold text-primary">andrea@n8n.com</p>
                    <p className="text-sm font-semibold text-foreground">+1 78 617 74 86</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
