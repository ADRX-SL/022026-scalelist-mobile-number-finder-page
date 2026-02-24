import { ArrowRight, Mail, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Tab = "names" | "mobile";

const EmailFinderIcon = () => (
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
    <Mail className="h-8 w-8 text-primary-foreground" />
  </div>
);

const TrustBar = () => {
  const logos = ["Google", "docusign", "flixier", "ORACLE", "Webflow", "FreshBooks"];
  return (
    <div className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-wide text-muted-foreground/60">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState<Tab>("names");

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          {/* Icon + Title */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <EmailFinderIcon />
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
              Email Finder
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-lg text-lg text-muted-foreground">
            Find professional email addresses of people who<br />
            matter to your business.
          </p>

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab("names")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "names"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-white text-foreground hover:bg-muted"
              }`}
            >
              <Mail className="h-4 w-4" />
              Find emails by names
            </button>
            <span className="text-sm text-muted-foreground">OR</span>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "mobile"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-white text-foreground hover:bg-muted"
              }`}
            >
              <Phone className="h-4 w-4" />
              Find mobile numbers
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Search Form */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/40 p-6 shadow-sm">
            {activeTab === "names" ? (
              <>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-muted-foreground font-medium">@</span>
                  <input
                    type="text"
                    placeholder="company.com"
                    className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="lg" className="rounded-lg px-8 text-base">
                    Find email
                  </Button>
                </div>
                <p className="mt-3 text-left text-sm text-muted-foreground">
                  Enter a name and company domain to find the correct email.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="company.com"
                    className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="lg" className="rounded-lg px-8 text-base">
                    Find number
                  </Button>
                </div>
                <p className="mt-3 text-left text-sm text-muted-foreground">
                  Enter a name and company domain to find their mobile number.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
};

export default Hero;
