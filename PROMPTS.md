# PROMPTS.md

# ABTalks Redesign — AI Development Prompts

This file contains the prompts used during the development of the ABTalks redesign. The prompts were used throughout the design, implementation, testing, and refinement of the project.

---

Create a mobile-first redesign of ABTalks for a 390px viewport. The platform is a 60-day coding challenge where students build something every day and submit GitHub and LinkedIn proof. Focus on making the experience simple, motivating, and easy to use from a phone.

---

Make the dashboard more focused on today's task.

---

I am building the student dashboard for the ABTalks 60-day coding challenge. The student should immediately understand their current streak, current challenge day, today's mission, overall progress, achievements, and proof of work.

The dashboard should feel like a daily building workspace rather than a traditional learning management system.

Prioritize the information in this order:

Current status → Today's mission → Journey → Achievements → Proof of work.

Keep the most important information near the top because the expected user is a college student checking the platform quickly on their phone.

Use reusable React components and realistic mock data.

---

Make the streak number larger and give it more visual importance.

---

Create a visual 60-day journey that shows completed days, the current day, and upcoming days. It should fit comfortably on a mobile screen and make the current day easy to identify.

---

The landing page should explain ABTalks to someone who has never heard of it. The visitor should understand what the challenge is, how it works, and why completing it is valuable.

Use the idea:

"60 Days. Build. Learn. Get Seen."

The page should communicate that students don't just consume tutorials. They build projects, commit their work to GitHub, share their progress on LinkedIn, and gradually create a public record of their learning.

Include a strong primary CTA, a secondary action for learning how the challenge works, a visual representation of the 60-day journey, an explanation of the challenge process, milestones, and a final CTA.

Keep the copy short and student-friendly. Avoid exaggerated claims about jobs or placements.

---

Reduce the amount of text in the hero section.

---

Make the primary CTA full width on mobile.

---

Create a challenge-day page for Day 12.

The student should be able to understand today's mission, see the difficulty and estimated time, review what needs to be built, check the success criteria, submit GitHub proof, submit LinkedIn proof, and finally complete the day.

The page should follow a clear progression:

Mission → Requirements → Success criteria → Proof → Completion.

Use cards where they help with grouping information, but avoid turning every small piece of content into a separate card.

---

Add an interactive checklist for the challenge requirements and show the number of completed requirements.

---

The GitHub and LinkedIn submission areas should use the same reusable component pattern while displaying their respective icons and labels.

---

Don't allow the Complete Day button until both GitHub and LinkedIn links have been submitted.

---

If the user has not submitted both links, explain why the completion button is disabled.

---

Create a completion state after the student finishes the challenge day. Show that both proofs were submitted, show that the streak has been extended, and provide a way back to the dashboard.

Keep the completion screen simple and rewarding. Don't use excessive animation.

---

Create a Day 1 dashboard state where the student has no completed days and no streak.

The state should feel like a beginning rather than an error. Show today's first mission clearly and explain that completing it will start the student's journey.

The journey and achievements sections should have useful empty states rather than simply disappearing.

---

Create a missed-day state.

The student has lost their active streak because they missed a day. Instead of presenting the situation as a failure, create a supportive recovery section that encourages the student to continue.

The goal is to prevent a single missed day from making the student abandon the entire 60-day challenge.

---

If the profile name is empty, don't show an awkward blank greeting. Use a generic greeting such as "Welcome, Builder 👋".

---

Add an empty profile state that encourages the student to add their details without blocking access to the challenge.

---

Review the entire interface specifically at 390px width. Check for horizontal overflow, clipped text, buttons that are too small, uncomfortable inputs, excessive spacing, and bottom navigation overlapping content.

---

Make the bottom navigation simple and mobile-friendly. It should have clear active states and shouldn't compete visually with the primary content.

---

Use a dark developer-focused visual style with a bright accent color, strong typography, subtle borders, elevated cards, and consistent spacing.

Avoid excessive gradients and unnecessary decoration.

---

Make the achievement cards fit two per row on mobile.

---

Make locked achievements visually quieter than unlocked achievements.

---

Keep the streak card visually stronger than the achievements section.

---

The product should communicate one important idea throughout the experience:

The streak should represent actual work.

Every completed day connects the student's task with GitHub proof and LinkedIn proof, creating a public record of their learning.

The interface should communicate this idea naturally instead of repeatedly explaining it.

---

Review all interactive elements for mobile usability. Buttons and inputs should have comfortable touch targets, focus states should be visible, and disabled states should clearly communicate why an action cannot be performed.

---

Refactor repeated UI into reusable components where appropriate. Keep components focused and avoid unnecessary abstraction.

Use mock data for the student, challenge, achievements, journey milestones, and proof statistics.

---

Remove unused imports and unnecessary state.

---

Check the required routes:

/
/dashboard
/day/12

Make sure all three routes load correctly.

---

Review the complete student journey as a first-time user:

Landing page → Dashboard → Today's mission → Challenge day → Requirements → Proof submission → Complete day → Dashboard.

Identify anything that could confuse the student and simplify it.

---

Make the next action obvious on every screen.

---

Perform a final visual consistency pass across the landing page, dashboard, and challenge-day page. Check typography, spacing, card styles, button styles, icon sizes, borders, and responsive behavior.

The three screens should feel like one product rather than three independently designed pages.

---

Before finalizing, test the interface at 390px and make sure there is no horizontal scrolling or content being hidden behind the bottom navigation.

---

Keep the implementation lightweight. This is a hackathon prototype, so don't introduce authentication, a production database, or unnecessary backend infrastructure.

---

The final experience should feel like a student is following a simple loop:

Show up → Build → Prove → Complete → Come back tomorrow.
