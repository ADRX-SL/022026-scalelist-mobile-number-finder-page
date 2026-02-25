

## Analysis

Comparing Screenshot 1 (current output) vs Screenshot 2 (target), the key differences are:

1. **Overall scale is too small** — the profile card, extension popup, photos, text, and buttons are all undersized
2. **Profile card width**: Currently `w-[240px]`, needs to be ~`w-[280px]`
3. **Profile photo**: Currently `h-16 w-16`, needs to be ~`h-20 w-20` with a thicker border
4. **Cover photo height**: Currently `h-20`, needs to be taller (~`h-24`)
5. **Extension popup**: Currently `w-[200px]`, needs to be ~`w-[240px]`
6. **Extension popup profile photo**: Currently `h-8 w-8`, needs to be ~`h-10 w-10`
7. **Text sizes**: All text is one step too small (e.g., `text-[10px]` should be `text-xs`, `text-xs` should be `text-sm`)
8. **Buttons**: "Message" button and "Add to list" button need to be larger with more padding
9. **"Push to Hubspot"**: Needs to be a rounded-full pill with border, larger text
10. **"Add to list"**: Needs larger text, more padding, rounded-full with primary border
11. **Browser dots**: Need to be slightly larger
12. **Container width**: Currently `width: 320`, needs ~`380-400` to fit the larger elements
13. **Connections text**: Should read on one line: "82 mutual connections · 2 recent posts on Linkedin"
14. **Location icon**: Should use ◉ style (circle) instead of 📍 pin emoji

## Plan

Edit `src/components/HowItWorks.tsx` lines 67-157 (the Card 2 illustration section):

- Increase container width from 320 to 400, minHeight from 380 to 460
- Increase profile card from `w-[240px]` to `w-[280px]`
- Increase cover photo from `h-20` to `h-28` with larger bokeh circles
- Increase profile photo from `h-16 w-16` to `h-20 w-20` with `border-[3px] border-primary`
- Increase name text from `text-sm` to `text-base`
- Increase subtitle text from `text-[11px]` to `text-xs`
- Replace 📍 with ◉ location icon
- Increase "Message" button padding and text size
- Increase extension popup from `w-[200px]` to `w-[240px]`
- Increase extension popup profile photo from `h-8 w-8` to `h-10 w-10`
- Increase extension popup name from `text-xs` to `text-sm font-bold`
- Increase subtitle text in popup from `text-[10px]` to `text-xs`
- Increase "Push to Hubspot" and "Add to list" buttons — larger text (`text-xs`), more padding, rounded-full for both
- Increase "Contact details" and contact info text from `text-[10px]` to `text-sm`
- Increase icon sizes in popup header from `h-3 w-3` to `h-4 w-4`
- Increase FREE badge text size
- Increase connections text from `text-[9px]` to `text-[11px]`

No other changes to the page.

