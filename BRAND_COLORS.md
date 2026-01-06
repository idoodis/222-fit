# 222 Fit Brand Color System

## Color Palette

### Primary Colors
- **Jet Black** (`#0B0B0B`): Primary background, main site background
- **Warm Gold** (`#B8A36A`): Primary accent, CTAs, icons, hover states
- **Off-White** (`#F5F5F5`): Primary text color

### Secondary Colors
- **Charcoal** (`#1E1E1E`): Card backgrounds, secondary sections
- **Warm Gray** (`#9CA3AF`): Muted text, secondary information
- **Bronze/Olive** (`#6B705C`): Optional accent (available but not heavily used)

## Implementation

### Semantic Color Mapping
The brand colors are mapped to semantic Tailwind variables:

- `background` → Jet Black (#0B0B0B)
- `foreground` → Off-White (#F5F5F5)
- `primary` → Warm Gold (#B8A36A)
- `primary-foreground` → Jet Black (#0B0B0B)
- `card` → Charcoal (#1E1E1E)
- `card-foreground` → Off-White (#F5F5F5)
- `secondary` → Charcoal (#1E1E1E)
- `muted-foreground` → Warm Gray (#9CA3AF)
- `border` → Charcoal (#1E1E1E)

### Usage Guidelines

#### Buttons
- **Primary CTA**: Gold background (`bg-primary`) + Black text (`text-primary-foreground`)
- **Secondary CTA**: Transparent/Charcoal background + Gold border (`border-primary`)
- Hover states use subtle gold glow/shadow

#### Cards
- Charcoal background (`bg-card`)
- Subtle borders (`border-border`)
- No harsh shadows - use soft elevation

#### Text
- Headings: Poppins font (strong, modern)
- Body: Inter font (clean, readable)
- Gold used for: Icons, links on hover, section dividers

#### Sections
- Main sections: Jet Black background
- Alternating sections: Charcoal background (`bg-secondary`)

## Accessibility

All color combinations meet WCAG AA contrast requirements:
- Gold on Black: ✅ High contrast
- Off-White on Black: ✅ High contrast
- Gold on Charcoal: ✅ Sufficient contrast

## Custom Utilities

Custom Tailwind utilities available:
- `.text-brand-gold` - Direct gold text color
- `.bg-brand-gold` - Direct gold background
- `.border-brand-gold` - Direct gold border
- `.bg-brand-charcoal` - Direct charcoal background
- `.text-brand-muted` - Direct warm gray text

## Typography

- **Headings**: Poppins (weights: 400, 500, 600, 700, 800)
- **Body**: Inter (weights: 400, 500, 600)
- Font weights and spacing used instead of extra colors for hierarchy

## Design Philosophy

The color system creates a premium, boutique fitness studio aesthetic:
- Dark, sophisticated backgrounds
- Warm gold accents for luxury feel
- High contrast for readability
- Minimal, clean design
- No aggressive animations - smooth transitions only


