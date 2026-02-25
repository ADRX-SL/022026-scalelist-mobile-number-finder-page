

## Problem

After multiple iterations of hand-coding the Card 2 illustration in CSS/JSX, the result still doesn't match the target. Each attempt introduces new discrepancies.

## Root Cause

The previous target screenshot files are no longer accessible (`user-uploads://Screenshot_2026-02-25_at_3.16.12 PM-3.png` etc. return "file does not exist"). Without the target image, I cannot copy it as an asset.

## What I Need

The user must **re-upload the target screenshot** (the correct Card 2 design). Once provided, the plan is:

### Steps

1. **Copy the re-uploaded target image** into `src/assets/how-it-works-social.png`

2. **Replace lines 1-165** in `src/components/HowItWorks.tsx` — remove the lucide-react imports and entire hand-coded JSX illustration, replace Card 2's illustration with:
   ```tsx
   <div className="flex items-center justify-center rounded-xl bg-background p-6">
     <img
       src={howItWorksSocialImg}
       alt="Chrome extension showing contact details for a LinkedIn profile"
       className="mx-auto w-full max-w-[400px]"
     />
   </div>
   ```

3. **Add import**: `import howItWorksSocialImg from "@/assets/how-it-works-social.png";`

4. **Remove unused imports**: `Globe`, `Scissors`, `Bookmark`, `Play` from lucide-react

### Result

The illustration will be pixel-perfect because it IS the target image. No more CSS approximation.

### What stays the same

- Card 1 (CSV table) — untouched
- Card headings, descriptions, numbering — untouched
- Page layout, spacing, colors — untouched

