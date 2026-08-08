# PROMPTS.md

# ABTalks Redesign — AI-Assisted Development

This file documents the prompts used during the development of the ABTalks 60-Day Coding Challenge redesign.

The project was developed through an iterative AI-assisted workflow. Different tools were used for initial generation, interface exploration, implementation, refinement, debugging, and code cleanup.

## AI Tools Used

- **Bolt.new** — initial project and interface exploration.
- **Lovable** — primary UI generation and iterative visual implementation.
- **Cursor** — direct code editing, debugging, refactoring, and targeted UI changes.
- **GPT** — UX planning, implementation guidance, prompt refinement, debugging, and documentation.

The final implementation was reviewed, modified, tested, and refined rather than being used directly without changes.

---

## Initial Product Prompt

Create a complete mobile-first redesign of ABTalks, a 60-day coding challenge for Indian college students.

The experience should be designed primarily for a 390px mobile viewport because students are expected to use the platform on their phones, often after college.

The product has three required experiences:

- `/` — landing page for students who have never heard of ABTalks
- `/dashboard` — student home/dashboard
- `/day/12` — complete experience for a single challenge day

The challenge works around a simple daily loop:

Student receives a task → builds something → commits the work to GitHub → shares it on LinkedIn → submits both proofs → completes the day → continues the streak.

The redesign should feel like a focused developer workspace rather than a traditional education platform.

Use mocked data only. Do not build authentication, production database functionality, recruiter dashboards, or admin functionality.

Prioritize:

- Mobile-first usability
- Strong information hierarchy
- Motivation
- Clear daily actions
- Progress visibility
- Proof of work
- Low-friction interaction
- Realistic student states

---

## Visual Direction

Use a dark developer-oriented interface.

The overall visual language should be:

- Dark background
- Slightly lighter elevated surfaces
- Bright green primary accent
- Orange/flame accent for streak-related information
- Muted secondary text
- Subtle borders
- Rounded cards
- Strong typography
- Compact information badges
- Large mobile-friendly buttons
- Minimal visual clutter

The interface should feel modern and technical without becoming overly futuristic.

Avoid:

- Excessive gradients
- Heavy glassmorphism
- Large decorative illustrations
- Excessive shadows
- Too many colors
- Excessive animation
- Generic SaaS dashboard styling

The visual hierarchy should come from typography, spacing, contrast, cards, and accent colors.

---

## Design System

Create a consistent design system across all three routes.

Use:

- Dark page background
- Elevated card surfaces
- Consistent border color
- Consistent rounded corners
- Bright green primary action color
- Orange accent for streak/flame information
- Muted gray secondary text
- White/high-contrast headings
- Compact labels and badges

Primary actions should use the green accent.

Streak-related information should use the orange/flame accent.

Secondary information should use muted gray.

Cards should have subtle borders instead of heavy shadows.

Keep the design compact because the primary viewport is 390px wide.

---

## Typography

Use a strong modern sans-serif for interface text.

Use a distinctive display/heading treatment for major numbers and important headlines.

Headings should be:

- Bold
- Tight
- High contrast
- Short where possible

Body text should be:

- Smaller
- Comfortable to read
- Muted compared with headings
- Line-height appropriate for mobile

Use uppercase tracking selectively for labels such as:

- TODAY'S MISSION
- YOUR 60 DAYS
- DAY 12
- ACHIEVEMENTS

Do not make every piece of text uppercase.

---

## Landing Page

Create the landing page for `/`.

The first screen should immediately communicate:

60 DAYS.
BUILD. LEARN.
GET SEEN.

Use a strong hero heading with the final phrase highlighted using the primary green accent.

Below the heading, explain the concept in one short paragraph:

Turn 60 days of coding into a public record of your growth.

Place a primary CTA:

Start Your 60-Day Journey

Use a secondary action:

See how it works

The primary CTA should be visually dominant.

The secondary action should be quieter.

---

## Landing Page — 60-Day Visualization

Create a 60-day progress grid inside a card.

The grid should contain 60 small square cells.

Use three visual states:

- Completed/shipped days — green
- Current day — orange/flame
- Future days — elevated dark surface

The grid should be compact and fit naturally inside a 390px mobile layout.

Below it, include a small legend:

Shipped
Today
Ahead

The card should also communicate the current challenge day, for example:

🔥 Day 12

Use the green accent for completed progress and orange for the current day.

---

## Landing Page — Value Proposition

Add a section with the message:

Build proof,
not just projects.

Explain that students often learn privately without creating a visible record of their progress.

Explain that ABTalks turns daily coding practice into:

- GitHub proof
- LinkedIn posts
- Projects
- A visible learning streak

Use two compact cards:

GitHub
Real commits.
Code, not certificates.

LinkedIn
Public progress.
People see you build.

Use GitHub and LinkedIn icons.

Keep the cards side-by-side on mobile where they fit comfortably.

---

## Landing Page — How It Works

Create a simple vertical section explaining the challenge in three or four steps.

Each step should use:

- Step number
- Short title
- Short description

Use compact cards with consistent spacing.

Avoid long explanations.

The user should understand the challenge without needing to read a large block of text.

---

## Landing Page — 60-Day Journey

Create a vertical timeline showing meaningful milestones throughout the challenge.

Use a left-side vertical border.

Each milestone should include:

- Day number
- Milestone title
- Short explanation

The active/current milestone should use the green accent.

Future milestones should use muted/elevated styling.

End the section with a small card communicating:

One small build a day. Sixty days later it's a portfolio.

---

## Landing Page — Portfolio Section

Create a section explaining that the student's work becomes a portfolio.

Use a strong heading such as:

Your work becomes
your portfolio.

Explain that each completed day can become part of a public history of projects, GitHub activity, and LinkedIn posts.

Show compact success rows such as:

12 projects shipped
11 GitHub proofs
11 LinkedIn posts

Use circular green check icons.

---

## Landing Page — Final CTA

Create a final CTA card.

Use:

- Dark elevated card
- Subtle green border
- Small decorative dot/grid pattern
- Centered icon
- Strong heading
- Short supporting text
- Primary CTA

Use the message:

Ready to build for 60 days?

Supporting text:

Pick a track tonight. Ship something tomorrow.

Finish with a simple footer:

ABTalks · 60 Days. Build. Learn. Get Seen.

---

## Dashboard

Create `/dashboard` as the main student home screen.

The dashboard should feel personal and immediately useful.

Start with:

Good evening, Karthik 👋

or, when the profile name is missing:

Welcome, Builder 👋

Below the greeting, show the student's track as a compact neutral badge.

Example:

Frontend Development

Keep the greeting near the top of the page.

---

## Dashboard — State Switcher

For the prototype, support mock states for:

- Active
- Missed day
- Day 1
- No profile

Use compact pill-shaped controls.

The active state should use the green accent.

Inactive states should use muted borders and text.

This is a prototype/demo mechanism and should not dominate the actual product experience.

---

## Dashboard — Streak Card

Create a prominent streak card.

The card should communicate:

- Current streak
- Current challenge day
- Completed days
- Total days
- Progress

Make the streak the strongest number.

Use the orange/flame accent for the streak.

Example:

🔥 12 day streak

Also show:

Day 12 / 60

and a progress indicator.

The card should feel motivating without looking like a gaming leaderboard.

---

## Dashboard — Today's Mission

Create a mission card for today's challenge.

The card should contain:

- Day number
- Mission title
- Short description
- Difficulty
- Estimated time
- CTA to open the challenge

Use a green or orange accent selectively.

The mission card should answer:

What do I need to build today?

Do not make students search for today's task.

---

## Dashboard — Journey

Create a "Your journey" section.

Show a compact representation of the student's progress through the 60-day challenge.

Completed days should use green.

The current day should be highlighted.

Upcoming days should use elevated dark cells.

Include a "View day" action.

The journey should visually communicate progress without taking excessive vertical space.

---

## Dashboard — Achievements

Create an "Achievements" section.

Use a two-column card grid.

Each achievement card should include:

- Icon
- Achievement name
- Short description
- Unlocked state

Unlocked achievements should use brighter colors and stronger contrast.

Locked achievements should use muted styling.

For Day 1, display a meaningful empty state instead of fake achievements.

Example:

No badges yet

Complete your first mission to unlock the First Project badge.

---

## Dashboard — Proof of Work

Create a "Your proof" section.

Use a single elevated card.

Inside the card, create three compact statistics:

Projects
GitHub proofs
LinkedIn posts

Use a three-column layout.

Use muted elevated backgrounds inside the card.

Display GitHub and LinkedIn as small platform indicators below the statistics.

Add a short explanation:

Every day you complete becomes part of your public portfolio.

---

## Dashboard — Bottom Navigation

Create a fixed mobile bottom navigation.

It should be subtle and compact.

Use icons with labels.

Include the most important destinations only.

The active destination should use the green accent.

Make sure the navigation doesn't cover content.

Add sufficient bottom padding to page content when navigation is present.

---

## Challenge Day

Create `/day/12`.

This is the detailed experience for a single challenge day.

The header should contain:

- Back button
- Day number
- Total days

Example:

Day 12 / 60

The page should immediately introduce:

Today's Mission

Use a small flame/green badge.

---

## Challenge Day — Mission Header

Create a strong mission heading.

Example:

Build a Responsive Weather App

Below the title, show compact metadata badges:

Difficulty
Intermediate

Estimated time
60 min

Use icons for metadata.

Then provide a concise task description.

The description should explain what the student is expected to build without unnecessary text.

---

## Challenge Day — Requirements

Create a section:

What you need to build

Use an interactive checklist.

Each row should contain:

- Checkbox
- Requirement
- Completed state

At the top right show:

2/4

The count should update as the user checks items.

Use green for completed requirements.

Make the complete row easy to tap.

---

## Challenge Day — Success Criteria

Create a section:

Success criteria

Use an elevated card containing a vertical list of criteria.

Each criterion should have a small green check-circle icon.

Keep the text short.

The success criteria should help the student understand what "done" means.

---

## Challenge Day — GitHub Proof

Create a GitHub proof card.

Use the GitHub icon.

Title:

GitHub proof

Supporting text should explain that the student needs to provide the repository or commit link.

Include:

- URL input
- Submit button
- Submitted state

The input should have a realistic placeholder.

After submission, visually change the card to indicate success.

---

## Challenge Day — LinkedIn Proof

Create a LinkedIn proof card.

Use the LinkedIn icon.

Title:

LinkedIn proof

Ask the student to provide the URL of their LinkedIn post.

Include:

- URL input
- Submit button
- Submitted state

Use the same visual structure as the GitHub card.

---

## Challenge Completion

Create a primary button:

Complete Day 12

The button must remain disabled until:

GitHub proof exists
AND
LinkedIn proof exists

If either is missing, show:

Add both your GitHub and LinkedIn links to unlock.

Once both links are available, enable the primary green button.

---

## Completion Screen

After completing the day, replace the challenge content with a completion state.

Show:

🎉 DAY 12 COMPLETE

Then:

Your work is now part of your 60-day journey.

Show two success rows:

GitHub proof submitted
LinkedIn proof submitted

Each row should contain a green circular check icon.

Then show a compact streak card:

Streak extended
🔥 12

Add:

Come back tomorrow for Day 13.

Finish with:

Back to dashboard

Use a strong but restrained success experience.

---

## Day 1 Edge Case

When the student is on Day 1:

Set:

streak = 0
completedDays = 0
currentDay = 1

Do not show fake historical progress.

The streak card should clearly communicate:

🔥 0 day streak

The journey should show no completed days.

Achievements should show an empty state.

The mission should still be prominent.

The interface should feel encouraging rather than empty.

---

## Missed Day Edge Case

When the student has missed a day:

Set the streak to 0 or the appropriate recovery state.

Show a supportive recovery card.

Do not use harsh language such as:

You failed
Challenge lost
Streak destroyed

Instead communicate:

One missed day doesn't end the journey.

Provide a clear action to resume.

---

## Empty Profile Edge Case

When profile information is missing:

Use:

Welcome, Builder 👋

instead of leaving the greeting blank.

Show a compact profile completion card:

Complete your profile

Add your name and college so your proof of work is credited to you.

Use a secondary button:

Add your details

Do not prevent the student from using the challenge.

---

## Cards

Use cards as the primary grouping mechanism.

Cards should have:

- Dark elevated background
- Subtle border
- Consistent rounded corners
- Consistent padding
- Clear internal hierarchy

Avoid excessive nested cards.

A card should exist because it groups related information.

---

## Buttons

Primary buttons:

- Green background
- High-contrast text
- Rounded corners
- Strong font weight
- Comfortable mobile height

Secondary buttons:

- Dark/elevated surface
- Border
- Muted or white text

Ghost actions:

- Minimal background
- Text-focused
- Green when important

Disabled buttons:

- Muted background
- Reduced contrast
- Clearly unavailable

---

## Badges

Use compact pill-shaped or rounded badges.

Examples:

60-day coding challenge
Frontend Development
Today's Mission
Intermediate
60 min

Use the green accent for important contextual labels.

Use the orange/flame accent for streak or "today" information.

Use neutral styling for less important metadata.

---

## Icons

Use Lucide-style outline icons consistently.

Examples:

- Flame for streak
- Github for GitHub proof
- Linkedin for LinkedIn proof
- Rocket for starting the journey
- Trophy for completion
- CheckCircle for completed criteria
- Clock for estimated time
- Signal/activity icon for difficulty
- ArrowRight for CTAs
- Compass for empty achievements
- UserPlus for profile completion

Keep icons small and consistent.

Avoid mixing unrelated icon styles.

---

## Spacing

Use a consistent spacing system.

Keep sections separated clearly but avoid excessive empty space.

On mobile, prioritize vertical rhythm:

Heading
→ Supporting text
→ Card/action
→ Section spacing

Keep related information close together.

Separate unrelated sections with larger spacing.

---

## Mobile Layout

The primary target is:

390px width.

All screens should be designed from mobile first.

Check carefully for:

- Horizontal overflow
- Text wrapping
- Button width
- Input width
- Card padding
- Navigation overlap
- Long headings
- Grid sizing
- Touch target size

Do not design desktop first and simply shrink it.

---

## Responsive Behavior

The design should still work at larger widths, but desktop is secondary.

On wider screens:

- Keep the content readable
- Avoid extremely wide text blocks
- Preserve the mobile information hierarchy
- Center the main content where appropriate
- Do not stretch cards unnecessarily

The 390px experience remains the priority.

---

## Interaction Details

Use subtle transitions.

Buttons should have small hover/press feedback where appropriate.

Checklist interactions should immediately update.

Proof cards should immediately show submitted state.

Completion should transition into the success screen.

Avoid excessive animation.

The interface should feel fast.

---

## Mock Data

Create realistic mock data separately from components.

Include:

Student:

- Name
- Track
- Current day
- Streak
- Completed days
- Total days

Challenge:

- Day
- Title
- Description
- Difficulty
- Estimated time
- Requirements
- Success criteria

Achievements:

- ID
- Name
- Description
- Icon
- Unlock status

Proof statistics:

- Projects
- GitHub proofs
- LinkedIn posts

Journey milestones:

- Day
- Label
- Description

---

## Component Structure

Keep the implementation modular.

Use reusable components such as:

Header
BottomNavigation
StreakCard
MissionCard
AchievementCard
JourneyTimeline
Checklist
ProofCard
EmptyState
StreakRescue

Do not duplicate the same UI structure unnecessarily.

Keep component responsibilities clear.

---

## Routing

Implement these exact routes:

/
 /dashboard
 /day/12

The challenge-day route should use a dynamic day parameter so other challenge days can be represented later.

The required submission Route Map is:

/
/dashboard
/day/12

---

## Final UX Review

Review the landing page as a student who has never heard of ABTalks.

The student should understand the product quickly.

Review the dashboard as a student checking the app late at night.

The student should immediately know:

- What day am I on?
- What's my streak?
- What do I build today?
- How do I complete it?

Review the challenge-day page as a student who wants to finish today's task.

The student should be able to move naturally through:

Read → Build → Check → Submit → Complete.

---

## Final Visual Review

Compare all three screens.

Make sure they share:

- Same dark background
- Same green primary accent
- Same orange streak accent
- Same card language
- Same border treatment
- Same corner radius
- Same typography
- Same icon style
- Same button hierarchy
- Same spacing system

The landing page should feel like the entry point.

The dashboard should feel like the daily home.

The challenge-day page should feel like the execution screen.

---

## Final Code Review

Before finalizing the project:

- Remove unused imports.
- Remove unused variables.
- Remove unnecessary state.
- Keep mock data centralized.
- Check route behavior.
- Check mobile overflow.
- Check button states.
- Check proof submission states.
- Check empty states.
- Check Day 1 state.
- Check missed-day state.
- Check completion state.
- Check responsive behavior.

Do not add authentication or a production database.

Keep the implementation appropriate for a hackathon prototype.

---

## Final Product Principle

The entire product should reinforce one simple loop:

Show up
↓
Build
↓
Prove
↓
Complete
↓
Come back tomorrow

The streak should represent actual work.

The final experience should make it easy for a student to say:

"I didn't just spend 60 days learning.

I can show what I built."
