# Job Listing App (React + TypeScript)

A simple job listing application built with React, TypeScript, Conditional rendering and component-based architecture.

---

## Features

- Display list of jobs
- Job cards with clean UI
- Toggle job details (Show / Hide)
- Conditional rendering
- Component-based structure
- Props handling between components
- Basic state management with useState

---

## Tech Stack

- React
- TypeScript
- CSS (vanilla)

---

## Project Structure

```
src/
│
├── components/
│   ├── JobList.tsx
│   ├── JobCard.tsx
│   ├── JobCard.css
│
├── data/
│   ├── jobs.ts
│
├── App.tsx
└── main.tsx
```

---

## How to Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

---

## How It Works

### Job Data
Stored in `src/data/jobs.ts` as a static array of objects.

### JobList Component
- Maps through jobs
- Handles conditional rendering
- Passes props to JobCard

### JobCard Component
- Receives job data via props
- Toggles job details using state
- Displays job UI card

---

## Key Concepts Learned

- React Components
- Props
- useState hook
- Conditional rendering
- List rendering (map)
- Basic UI structuring

---

## Future Improvements

- Add search & filtering
- Add API integration
- Add job bookmarking
- Add animations
- Improve UI with Tailwind CSS

---

## Author Comment

Built as a learning project for mastering React fundamentals.
