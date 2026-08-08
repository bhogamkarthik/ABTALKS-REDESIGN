# ABTalks — 60-Day Coding Challenge Redesign

> **60 Days. Build. Learn. Get Seen.**

A mobile-first redesign of ABTalks, a 60-day coding challenge for Indian college students. The experience is designed to make daily building easier to understand, easier to complete, and more valuable as public proof of learning.

---

## 🚀 Overview

ABTalks challenges students to build something every day for 60 days while maintaining a public learning streak through:

- GitHub commits and repositories
- LinkedIn posts
- Daily project submissions

This redesign focuses on the moments that matter most in the student's journey: understanding the challenge, knowing what to do today, seeing progress, recovering from missed days, and turning completed work into visible proof.

### Design Goals

- **Mobile-first** — optimized for the required 390px viewport
- **Clear** — students should understand what to do next
- **Motivating** — progress and streaks should encourage consistency
- **Action-oriented** — daily proof submission should require minimal friction
- **Career-focused** — completed work should feel like a growing public portfolio

---

## 🎯 The Problem

Students often learn and build privately without creating a consistent public record of their progress.

ABTalks addresses this by connecting daily coding practice with public proof:

1. Build something every day.
2. Commit the work to GitHub.
3. Share the progress on LinkedIn.
4. Maintain the 60-day streak.

The challenge brief also highlights an important context: students primarily use the platform on their phones, often late at night after college.

The redesign therefore treats **clarity, speed, motivation, and low-friction interaction** as first-class product requirements.

---

## 💡 Our Solution

The redesign is centered around three core experiences.

### 1. Landing Page — `/`

The landing page is designed for a student who has never heard of ABTalks.

It explains:

- What the 60-day challenge is
- Why daily building matters
- How GitHub and LinkedIn proof work
- How the journey becomes a portfolio
- What the student should do next

The primary call to action takes the student directly into the challenge experience.

### 2. Student Dashboard — `/dashboard`

The dashboard is the student's daily home.

It prioritizes:

- 🔥 Current streak
- 📅 Current challenge day
- 🎯 Today's mission
- 📈 Challenge progress
- 🗺️ 60-day journey
- 🏆 Achievements
- 💻 GitHub proof
- 💼 LinkedIn proof

The information hierarchy is intentionally built around one question:

> **"What do I need to do today?"**

### 3. Challenge Day — `/day/12`

The challenge-day screen takes the student from task discovery to proof submission.

The intended flow is:

```text
Understand the mission
        ↓
Review requirements
        ↓
Check success criteria
        ↓
Submit GitHub proof
        ↓
Submit LinkedIn proof
        ↓
Complete the day
        ↓
Extend the streak
```

---

## ✨ Key Features

### 🔥 Streak-First Dashboard

The current streak and challenge progress receive strong visual priority so students can immediately understand their momentum.

### 🎯 Today's Mission

The next action is always visible. Students can quickly identify the day's project, difficulty, estimated time, and path to completion.

### 🗺️ 60-Day Journey

A visual journey helps students see completed, current, and upcoming progress instead of treating each day as an isolated task.

### 💻 GitHub + LinkedIn Proof

The Challenge Day experience provides dedicated submission areas for both required forms of proof.

### 🔒 Proof-Based Completion

A day cannot be completed until both GitHub and LinkedIn proof have been provided.

This reinforces the core ABTalks idea that progress should create something verifiable.

### 🏆 Achievements

Milestones give students additional signals of progress as they move through the challenge.

### 🛟 Streak Rescue

A missed day is treated as a recovery moment rather than a reason to abandon the challenge.

The experience encourages the student to return, resume the journey, and keep building.

### 📱 Mobile-First UX

The interface is designed around a **390px mobile viewport**, with attention to:

- Touch-friendly controls
- Readable typography
- Clear CTAs
- Compact information hierarchy
- No unnecessary horizontal scrolling
- Navigation that does not obstruct important content

---

## 💭 Thoughtful UX Idea

### Proof of Work, Not Just Progress

The central product idea behind this redesign is:

> **A streak should represent visible work, not just activity inside the platform.**

Each completed day connects:

```text
Daily Task
    +
GitHub Proof
    +
LinkedIn Proof
    ↓
Public Learning Record
```

Over 60 days, this turns a simple streak into a body of evidence that students can share with recruiters, peers, and their professional network.

Instead of only saying:

> "I learned for 60 days."

A student can show:

> "Here is what I built every day for 60 days."

---

## 🧩 Edge Cases

The redesign considers the real-world states specified in the challenge brief.

### First Day

A new participant should see:

- No existing streak
- A clear first mission
- An empty journey state
- Guidance toward completing the first project

### Missed Day

A missed day should not feel like the end of the journey.

The Streak Rescue experience provides a supportive path back into the challenge.

### Empty Profile

A student without profile information receives a clear prompt to add their details so the learning experience can be personalized.

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **TanStack Router**
- **Tailwind CSS**
- **Lucide Icons**
- **Vite**
- **Mock data**
- **GitHub**
- **Lovable** for initial AI-assisted development

Authentication and a production database are intentionally not included because they are outside the scope of the challenge.

---

## 📱 Required Routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/dashboard` | Student dashboard |
| `/day/12` | Challenge Day 12 |

---

## 🗺️ Route Map

The required Route Map, in the exact order specified by the challenge:

```text
/
/dashboard
/day/12
```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AchievementCard.tsx
│   ├── BottomNavigation.tsx
│   ├── Checklist.tsx
│   ├── EmptyState.tsx
│   ├── Header.tsx
│   ├── JourneyTimeline.tsx
│   ├── MissionCard.tsx
│   ├── ProofCard.tsx
│   ├── StreakCard.tsx
│   └── StreakRescue.tsx
│
├── data/
│   └── mock.ts
│
├── routes/
│   ├── index.tsx
│   ├── dashboard.tsx
│   └── day.$day.tsx
│
├── styles.css
├── router.tsx
└── ...
```

The UI is organized into reusable components so the core challenge experiences remain modular and maintainable.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have:

- Node.js
- npm

installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/bhogamkarthik/ABTALKS-REDESIGN--FINAL.git
```

### 2. Enter the project directory

```bash
cd ABTALKS-REDESIGN--FINAL
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

---

## 🧪 Testing

The primary target viewport is:

```text
390px width
```

Test the required routes:

```text
/
/dashboard
/day/12
```

### Key Checks

- Mobile responsiveness
- Navigation
- Current streak
- Today's mission
- Challenge progress
- Journey timeline
- Achievement states
- GitHub proof submission
- LinkedIn proof submission
- Day completion flow
- First-day state
- Missed-day state
- Empty-profile state
- No horizontal overflow

---

## 🎨 Design Direction

The visual system uses a dark, developer-oriented interface with a bright accent color to create a focused and energetic identity.

The design emphasizes:

- Strong typography
- Clear information hierarchy
- Compact cards
- Progress visualization
- Large touch targets
- Minimal distractions
- Consistent spacing
- Strong calls to action

Rather than feeling like a traditional educational dashboard, the experience is designed to feel like a **personal building and progress workspace**.

---

## 🤖 AI-Assisted Development

AI was used as part of the development workflow to accelerate:

- Initial UI generation
- Component creation
- UX exploration
- Design iteration
- Code refinement

The generated implementation was reviewed, tested, refined, and integrated into the final project.

The source code is maintained in the team's GitHub repository.

---

## 👥 Team

### Team Members

1. **D Harsha Vardhan Reddy**
2. **Bhogam Karthik**

---

## 🔗 Links

### Repository

[ABTalks Redesign — GitHub](https://github.com/bhogamkarthik/ABTALKS-REDESIGN--FINAL)

### Live Demo

[ABTalks Redesign — Live Demo](https://abtalks-redesign-lilac.vercel.app/)

---

## 🏁 Hackathon Submission

This project was created as part of the **ABTalks Redesign Hackathon**.

The redesign is built around one central idea:

> **Consistency should create visible proof.**

Every day a student builds is one more day of learning, one more project, and one more piece of evidence they can show the world.

---

## 📄 License

This project was created for hackathon purposes.
