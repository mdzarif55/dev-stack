# DevStack

> Build your ideal development stack by exploring and selecting the technologies that fit your project.

DevStack is a modern and responsive web application that allows developers to explore different technologies and build a personalized development stack.

## Features

- **Explore Technologies**  
  Browse technologies with their category, description, difficulty level, rating, icon, and badge.

- **Build Your Own Stack**  
  Add technologies to your stack, remove individual technologies, or clear the entire stack with one click.

- **Responsive & Interactive UI**  
  Fully responsive design with mobile navigation, interactive technology cards, and toast notifications for user actions.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Hot Toast
- JSON

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/mdzarif55/dev-stack.git
```

Navigate to the project directory:

```bash
cd dev-stack
```

Install the dependencies:

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal. By default:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── Stack.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
├── index.css
└── techTypes.tsx

public/
└── data.json
```

## How It Works

1. Explore the available technologies.
2. Select a technology using **Add to Stack**.
3. The selected technology is added to **Your Stack**.
4. The selected card becomes disabled.
5. Remove individual technologies from **Your Stack**.
6. Use **Remove All** to clear the stack.

## Author

**Md. Muhtasim Zarif**

Frontend Developer

---

If you find this project useful, consider giving it a ⭐ on GitHub.

<p align="center">
  Made with ❤️ using React, TypeScript, Vite & Tailwind CSS
</p>