

## Problem

The Card 2 illustration (LinkedIn profile + extension popup) in `HowItWorks.tsx` does not match the target screenshot. After multiple iterations of CSS-coded recreations, the result still doesn't look right.

## Root Cause

Attempting to pixel-perfectly recreate a complex, layered UI mockup (browser window + LinkedIn profile + floating extension popup) purely in JSX/Tailwind has resulted in proportions, shadows, and positioning that don't match the reference. Each iteration introduces new discrepancies.

## Approach: Use the Target Screenshot as an Image

Instead of continuing to hand-code the illustration and iterate endlessly, the most reliable way to make it "visually indistinguishable from Screenshot 2" is to use the actual screenshot image directly as the illustration.

### Steps

1. **Copy the target screenshot** (`user-uploads://Screenshot_2026-02-25_at_3.16.12 PM-3.png`) into `src/assets/how-it-works-social.png`

2. **Replace lines 66-158** in `src/components/HowItWorks.tsx` — remove the entire JSX-based illustration and replace it with:
   ```tsx
   <div className="flex items-center justify-center rounded-xl bg-background p-6">
     <img
       src={howItWorksSocialImg}
       alt="Chrome extension showing contact details for a LinkedIn profile"
       className="mx-auto w-full max-w-[400px]"
     />
   </div>
   ```

3. **Add the import** at the top of the file:
   ```tsx
   import howItWorksSocialImg from "@/assets/how-it-works-social.png";
   ```

4. **Remove unused imports** (`Globe`, `Scissors`, `Bookmark`, `Play` from lucide-react) since they're no longer needed in the JSX illustration.

### Result

The illustration will be an exact visual match to the target screenshot — because it IS the screenshot. No more CSS approximation issues.

### What stays the same

- Card 1 (CSV table) — untouched
- Card headings, descriptions, numbering — untouched
- Page layout, spacing, colors — untouched

