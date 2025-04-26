# Project Documentation

## 1. Project Overview

This project is a personalized travel planning application built with React and TypeScript. It allows users to plan their journeys by selecting destinations, trip duration, and travel companions through an onboarding flow. After onboarding, users can view a detailed dashboard displaying trip details, flights, accommodations, activities, and day plans. The app supports light and dark themes for a better user experience.

## 2. Tech Stack

- **React**: Frontend UI library
- **TypeScript**: Typed JavaScript for better developer experience
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **framer-motion**: Animation library for React
- **lucide-react**: Icon library used throughout the app

## 3. Project Structure

- `src/`
  - `components/`: Reusable UI components such as cards, buttons, inputs, navigation, etc.
  - `context/`: React Context providers for theme and trip state management
  - `pages/`: Main pages including `Onboarding` and `Dashboard`
  - `assets/`: Static assets like images
  - `App.tsx`: Main app component that sets up providers and routing logic
  - `main.tsx`: React app entry point
- Configuration files:
  - `package.json`: Project metadata, dependencies, and scripts
  - `tsconfig.json`: TypeScript configuration
  - `vite.config.ts`: Vite build and dev server configuration
  - `tailwind.config.js`: Tailwind CSS configuration
  - `eslint.config.js`: ESLint configuration

## 4. Main Features

- **Onboarding Flow**

  - Collects user input for destination, trip duration, and travel companions
  - Uses form components like input fields, dropdowns, and selectable options
  - Stores onboarding completion status in localStorage

- **Dashboard**

  - Displays upcoming trip details, flight information, accommodations, and activities
  - Activities are organized by day plans with the ability to select and view details
  - Includes a bottom navigation bar for easy access to different sections

- **Theme Switching**
  - Users can toggle between light and dark themes
  - Theme state is managed via React Context and applied using Tailwind CSS classes

## 5. How to Run

- Install dependencies:
  ```
  npm install
  ```
- Start development server:
  ```
  npm run dev
  ```
- Build for production:
  ```
  npm run build
  ```
- Preview production build:
  ```
  npm run preview
  ```
- Run linter:
  ```
  npm run lint
  ```

## 6. Additional Notes

- State management is handled using React Context API for theme and trip data.
- Styling is done with Tailwind CSS, enabling rapid UI development with utility classes.
- Animations and transitions are implemented using framer-motion for smooth user interactions.
- Icons are provided by lucide-react for consistent and customizable visuals.

---

This documentation provides an overview of the project, its structure, features, and instructions to run and develop the app.
