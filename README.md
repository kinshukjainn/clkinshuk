#  Cloudkinshuk : Kinshuk Jain Portfolio

Hi Everyone , I’m **Kinshuk Jain**, and welcome to my **portfolio website’s repository** — built with a **modern cloud-native frontend stack**, following **scalable architecture, clean design, and optimized deployment practices**.


**Website:** [https://cloudkinshuk.in](https://cloudkinshuk.in)



## 🚀 About This Project

This is my **personal developer portfolio** showcasing my work in **AWS Cloud, Software Development, and Web Engineering**.
It’s built with **React + TypeScript + TailwindCSS**, and follows **modern frontend engineering principles** — modular, component-driven, and optimized for performance.

Deployed entirely on **AWS Cloud** with a **CI/CD pipeline through AWS Amplify** and **custom domain management via AWS Route 53**.

---

##  Technologies Used

| Category                             | Technology / Library                                                                            | Purpose                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Frontend Framework**               | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)                  | Component-based UI & type safety                      |
| **Styling**                          | [TailwindCSS 4.1](https://tailwindcss.com/)                                                     | Utility-first modern CSS styling                      |
| **Animations**                       | [Framer Motion](https://www.framer.com/motion/)                                                 | Smooth motion effects & transitions                   |
| **Icons**                            | [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/) | Lightweight scalable icons                            |
| **Routing**                          | [React Router v7](https://reactrouter.com/)                                                     | Client-side routing & navigation                      |
| **Auth & User Management**           | [Clerk](https://clerk.com/)                                                                     | Authentication, user sessions, and profile management |
| **Data Fetching / State Management** | [TanStack React Query](https://tanstack.com/query/latest)                                       | Optimized server state management                     |
| **HTTP Client**                      | [Axios](https://axios-http.com/)                                                                | API calls and data fetching                           |
| **Build Tool**                       | [Vite](https://vitejs.dev/)                                                                     | Lightning-fast build system                           |
| **Linting**                          | [ESLint](https://eslint.org/) + [TypeScript ESLint](https://typescript-eslint.io/)              | Code quality & static analysis                        |
| **Animations & Motion Design**       | [Framer Motion](https://www.framer.com/motion/)                                                 | UI animations for modern UX                           |

---

##  Cloud Infrastructure

| Service          | Usage                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| **AWS Amplify**  | CI/CD, Hosting, and Continuous Deployment                                |
| **AWS Route 53** | Domain & DNS Management for `cloudkinshuk.in` and `blog.cloudkinshuk.in` |
| **Hostinger**    | Domain purchase and DNS redirection to AWS infrastructure                |

---

## Folder Structure

```
kinshukportfolio/
├── dist/                       # Production build output (auto-generated)
├── node_modules/               # Installed dependencies (auto-generated)
├── public/                     # Publicly served static assets
│   ├── favlogo.png
│   ├── titlelogo.svg
│   └── vite.svg
├── src/                        # Main source code
│   ├── assets/                 # App assets (images, SVGs, etc.)
│   │   └── react.svg
│   ├── components/             # Reusable React components
│   │   ├── Blogs.tsx
│   │   ├── Customauth.tsx
│   │   ├── Devtools.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Newsignin.tsx
│   │   └── Protectedroute.tsx
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global CSS file
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # TypeScript environment types
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
├── bun.lock                    # Bun package lock file
├── eslint.config.js            # ESLint configuration
├── index.html                  # Main HTML file for Vite
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
├── tsconfig.app.json           # TypeScript config for app
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.node.json          # TypeScript config for Node/Vite
└── vite.config.ts              # Vite configuration file
```

---

##  Development Setup

### Prerequisites

* Node.js ≥ 18
* npm or yarn
* AWS Amplify CLI (optional for deployment)

### Installation

```bash
git clone https://github.com/kinshukjainn/clkinshuk.git
cd kinshukkportfolio
npm install
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
---

##  Deployment

This project is automatically deployed via **AWS Amplify**, connected to the GitHub repository.
Whenever new commits are pushed to the main branch, Amplify rebuilds and deploys the latest version.

* **Continuous Deployment:** Enabled
* **Custom Domain:** Managed via **AWS Route 53**
* **HTTPS:** Enabled via AWS-managed SSL certificates

---

##  Contact : 

If you’re interested in collaborating, discussing cloud solutions, or just sharing ideas — reach out!

**Email:** [Mail id](mailto:kinshuk25jan04@gmail.com)
**LinkedIn:** [Kinshuk Jain](https://linkedin.com/in/kinshukjainn)
**GitHub:** [kinshuk jain](https://github.com/kinshukjainn)
**Blog page:** [Blogs of cloudkinshuk](https://blogs.cloudkinshuk.in)

---

