# Central Dentist - Style Guide

## Hero Headers (STANDARDIZED)

### PageHero Component
All non-homepage pages use the standardized `PageHero` component:

```astro
import PageHero from '../components/shared/PageHero.astro';

<PageHero
  title="Page Title"
  subtitle="Optional subtitle text"
  backgroundImage="/images/services/abstract-white-texture.jpg"
  variant="standard"  // or "compact"
  breadcrumbs={[
    { label: 'Parent Page', href: '/parent' },
    { label: 'Current Page', href: '#' }
  ]}
/>
```

### Hero Variants:
- **`standard`** (350px/450px height) - Service pages, About, Team, Reviews
- **`compact`** (250px/300px height) - Bio pages, Blog posts

### Hero Rules:
- ✅ LEFT-aligned text (never centered)
- ✅ Always include breadcrumbs
- ✅ Teal gradient overlay on background image
- ✅ White text on teal background
- ❌ Never use `showButtons` prop (deprecated)
- ❌ Never center the hero text

## Typography Classes (USE THESE!)

We have a comprehensive typography system defined in `src/styles/typography.css`. **Please use these classes consistently across all pages.**

### Section Headers (Main page sections)
```html
<!-- For main section titles -->
<h2 class="text-section-header text-header-primary">
  Section Title
</h2>

<!-- For section subtitles/descriptions -->
<p class="text-section-subheader">
  Description text that goes under the header
</p>
```

### Card Headers (Component titles)
```html
<!-- For card/component titles -->
<h3 class="text-card-header">Title</h3>

<!-- For card subtitles -->
<p class="text-card-subheader">Subtitle</p>
```

### Body Text
```html
<!-- Large body text (introductions) -->
<p class="text-body-large">...</p>

<!-- Regular body text -->
<p class="text-body-regular">...</p>

<!-- Small body text (captions, labels) -->
<p class="text-body-small">...</p>
```

### Color Utilities for Headers
```html
<!-- Primary teal dark (#006786) -->
<h2 class="text-header-primary">...</h2>

<!-- Secondary teal (#0099ba) -->
<h3 class="text-header-secondary">...</h3>

<!-- Accent olive (#a6b443) -->
<h3 class="text-header-accent">...</h3>
```

## Button Styles

### Primary CTA (Schedule/Book)
```html
<a class="px-8 py-3 bg-gradient-to-r from-[#a6b443] to-[#c7cd85] text-white rounded-full font-semibold transition-all duration-300 hover:from-[#8fa339] hover:to-[#a6b443] hover:shadow-lg"
   style="font-family: 'Playfair Display', serif;">
  Schedule Consultation
</a>
```

### Secondary CTA (Call)
```html
<a class="px-8 py-3 bg-white border-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
   style="font-family: 'Playfair Display', serif; color: #0099ba; border-color: white;"
   onmouseover="this.style.backgroundColor='#006786'; this.style.color='white';"
   onmouseout="this.style.backgroundColor='white'; this.style.color='#0099ba';">
  Call (214) 368-0900
</a>
```

## Section Structure

### Standard Section
```astro
<section class="py-16 md:py-20 bg-white"> <!-- or bg-gray-50 for alternating -->
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-3xl mx-auto"> <!-- or max-w-6xl for wider content -->
      <BlurFade delay={100}>  <!-- NO client:visible - BlurFade is Astro component -->
        <!-- Content -->
      </BlurFade>
    </div>
  </div>
</section>
```

### CTA Section (Blue Gradient)
```astro
<section class="py-16 md:py-20" style="background: linear-gradient(to bottom right, #0099ba, #006786);">
  <div class="container mx-auto px-4 md:px-6">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-section-header text-white">
        Title Here
      </h2>
      <p class="text-section-subheader text-white/90">
        Description here
      </p>
      <!-- Buttons in correct order: Schedule first, Call second -->
    </div>
  </div>
</section>
```

## Colors

### Primary Colors
- **Teal Dark**: `#006786` (headers, primary elements)
- **Teal**: `#0099ba` (accents, links)
- **Lime**: `#a6b443` (primary button gradient start)
- **Lime Light**: `#c7cd85` (primary button gradient end)
- **Olive**: `#8fa339` (hover states)

### Text Colors
- **Gray Dark**: `#2d3748` (main text)
- **Gray Medium**: `#4a5568` (secondary text)
- **Gray Light**: `#f7fafc` (backgrounds)

## Font Families
- **Headings**: `'Playfair Display', serif`
- **Body**: `'Inter', sans-serif` (or `'Geist', sans-serif` in some places)

## Common Patterns

### Alternating Section Backgrounds
```
1. White (bg-white)
2. Gray (bg-gray-50)
3. White (bg-white)
4. Gradient (blue CTA section)
```

### BlurFade Animation Delays
- First element: `delay={100}`
- Second element: `delay={200}`
- Third element: `delay={300}`
- Etc.

### Button Order
**ALWAYS** place buttons in this order:
1. Schedule/Book Appointment (green gradient)
2. Call Number (white with teal border)

## DO's and DON'Ts

### DO ✅
- Use the predefined typography classes
- Keep consistent spacing (py-16 md:py-20)
- Use BlurFade for scroll animations
- Apply text-header-primary for main headers
- Center section headers with text-center

### DON'T ❌
- Create inline font sizes like `text-3xl md:text-4xl`
- Mix different heading styles on the same page
- Use raw Tailwind text sizes - use typography classes
- Forget to add Playfair Display to headings
- Place Call button before Schedule button

## Examples of Proper Usage

### Page Header
```html
<h1 class="text-section-header text-header-primary text-center">
  About Central Dentist
</h1>
<p class="text-section-subheader text-center">
  Your holistic dental care provider in Dallas
</p>
```

### Team Member Card
```html
<div class="card">
  <h3 class="text-card-header">Dr. Jill Ombrello</h3>
  <p class="text-card-subheader">Founder & Lead Dentist</p>
  <p class="text-body-regular">Bio text here...</p>
</div>
```

### Service Section
```html
<section class="py-16 md:py-20 bg-white">
  <div class="container mx-auto px-4 md:px-6">
    <h2 class="text-section-header text-header-primary text-center">
      Our Services
    </h2>
    <p class="text-section-subheader text-center">
      Comprehensive holistic dental care
    </p>
    <!-- Service cards -->
  </div>
</section>
```

---

**Remember**: Consistency is key! Always check this guide when adding new sections or pages.