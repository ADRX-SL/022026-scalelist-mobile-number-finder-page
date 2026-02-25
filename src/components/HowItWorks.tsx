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
              <div className="relative mx-auto w-full max-w-sm">
                {/* LinkedIn-style profile card (background) */}
                <div className="overflow-hidden rounded-xl border border-border bg-white shadow-md">
                  {/* Browser dots */}
                  <div className="flex items-center gap-1.5 border-b border-border bg-muted/30 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <div className="ml-2 flex-1 rounded bg-muted/50 px-2 py-0.5" />
                  </div>
                  {/* Profile header area */}
                  <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-4 pb-10" />
                  <div className="-mt-8 px-4 pb-4">
                    <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-muted shadow">
                      <User className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-bold text-foreground">Andrea Riley <span className="font-normal text-muted-foreground">· 1st</span></p>
                    <p className="text-xs text-muted-foreground">Sales Director at n8N</p>
                    <p className="text-xs text-muted-foreground">📍 San Francisco Bay Area</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-white">Message</span>
                    </div>
                    <p className="mt-2 text-[10px] text-muted-foreground">82 mutual connections · 2 recent posts on LinkedIn</p>
                  </div>
                </div>

                {/* Extension popup overlay */}
                <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-xl border border-border bg-white shadow-xl">
                  <div className="flex items-center justify-end gap-1.5 px-3 pt-2">
                    <Globe className="h-3 w-3 text-muted-foreground" />
                    <Scissors className="h-3 w-3 text-muted-foreground" />
                    <Bookmark className="h-3 w-3 text-muted-foreground" />
                    <span className="ml-1 rounded bg-green-100 px-1.5 py-0.5 text-[9px] font-bold text-green-600">FREE</span>
                  </div>
                  <div className="px-3 pb-3 pt-2">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Andrea Riley</p>
                        <p className="text-[10px] text-muted-foreground">Sales Director at n8N</p>
                        <p className="text-[10px] text-muted-foreground">San Francisco Bay Area</p>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded border border-border px-2 py-1 text-[10px] text-muted-foreground">⚙ Push to Hubspot ▾</span>
                      <span className="flex items-center gap-1 rounded-full border border-primary bg-white px-2 py-1 text-[10px] font-semibold text-primary">
                        <Play className="h-2.5 w-2.5 fill-primary" /> Add to list
                      </span>
                    </div>
                    <p className="mb-1 text-[10px] text-muted-foreground">Contact details ▾</p>
                    <p className="text-[10px] font-semibold text-primary">andrea@n8n.com</p>
                    <p className="text-[10px] font-semibold text-foreground">+1 78 617 74 86</p>
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
