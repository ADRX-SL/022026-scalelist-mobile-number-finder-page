import { User } from "lucide-react";

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

            {/* Illustration: Chrome extension popup */}
            <div className="flex items-center justify-center rounded-xl bg-background p-6">
              <div className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
                  <div className="flex gap-1">
                    <span className="text-muted-foreground">←</span>
                    <span className="text-muted-foreground">→</span>
                  </div>
                  <div className="flex-1 rounded-full bg-white px-3 py-1 text-xs text-muted-foreground">
                    Search Google or type a URL
                  </div>
                </div>
                {/* Extension popup content */}
                <div className="p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Daniel Scott</p>
                      <p className="text-xs text-muted-foreground">Support Advisor at Zapier</p>
                      <p className="text-xs text-muted-foreground">Los Angeles, California</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>📧</span>
                      <span>danielscott@zapier.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>📱</span>
                      <span>+41 78 617 74 86</span>
                    </div>
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
