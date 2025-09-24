# Comprehensive Homepage Fixes - Tracking Document

## Critical Issues to Fix

### 1. FONTS (DoctorMeade style)
- [x] Changed to Playfair Display (similar to moderno-fb-light) for headings
- [x] Changed to Inter (similar to freight-sans-pro) for body
- [ ] Need to test and adjust sizes to match doctormeade

### 2. SECTION BACKGROUNDS - MAJOR ISSUE
Current Problem: Stark white gaps between sections, no consistent pattern
- [ ] Services section has gray background (bg-gray-light) 
- [ ] Meet Our Doctors has gradient background
- [ ] Need alternating pattern: white -> light gray -> white -> light teal, etc.

### 3. BUTTON HOVER STATES - CRITICAL
Problem: Buttons turn completely white on hover, making text invisible
- [ ] Fix primary buttons (teal buttons turning white)
- [ ] Fix secondary buttons (white buttons with borders)
- [ ] Fix CTA buttons in cards
- [ ] Ensure ALL buttons have proper contrast on hover

### 4. TYPOGRAPHY CONSISTENCY
- [ ] "It can help with" section - title not using proper header style
- [ ] Headers need MORE spacing from subtexts
- [ ] "How we Optimize" section - different header style
- [ ] All sections must use SAME header/subheader classes

### 5. CTA SECTION - WHITE ON WHITE
- [ ] Final CTA section before footer has white text on white background
- [ ] Need teal or gradient background with white text

### 6. FOOTER
- [ ] Verify footer is actually showing (currently exists but may not be visible)

## Fixes Being Applied

### Typography System Update
- Headers: 2.5-3.5rem (much larger)
- Subheaders: 1.125-1.375rem (smaller than headers)
- Proper spacing: 1.5rem margin-bottom on headers

### Section Background Pattern
```
Hero: Image/Video background
About/Benefits: Light gradient (teal to white)
Services: White background
Doctors: Light gray background  
Testimonials: Light gradient
Approach: White background
CTA: Teal gradient background
Footer: Dark gray
```

### Button Hover Fix Pattern
- Primary (teal): Darker teal on hover (NOT white)
- Secondary (white): Teal background on hover with white text
- Accent: Darker green on hover