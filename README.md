# 🌟 Investa – Fintech Portfolio Dashboard

**Status: Completed Example Dashboard Project**

Investa is a high-fidelity, responsive fintech application designed as an example of real-time portfolio tracking and financial data visualization. It demonstrates professional-grade UI architecture, robust data-handling logic, and a "Mobile-First" design philosophy.

---

## 🚀 Getting Started

Follow these steps to clone and run the project on your local machine.

### Prerequisites

You need to have **Node.js** and **npm** installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Roya9022/financial-dashboard.git](https://github.com/Roya9022/financial-dashboard.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd financial-dashboard
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    yarn dev
    ```
5.  Open your browser to: **http://localhost:5173**

---

## 🛠️ Technologies Used

This project is built using a professional, enterprise-grade stack:

- **Framework:** **React 18** (Vite)
- **Language:** **TypeScript** (Strict Mode)
- **State & Data Fetching:** **TanStack Query** (React Query)
- **Styling:** **Tailwind CSS**
- **Charts:** **Recharts** (Custom Area and Linear Gradients)
- **Icons:** **Lucide React**

---

## 🏗️ Core Features & Technical Highlights

This dashboard serves as a technical showcase for the following implementations:

### Key Features

- **Adaptive Navigation Architecture:** A seamless transition between a Desktop Sidebar and a Mobile-Native Bottom Navigation Bar.
- **Intelligent Caching:** Implementation of **TanStack Query** with custom stale-time and revalidation logic for optimized background data management.
- **Complex Data Table:** A generic, reusable table component with custom sorting logic for **ISO 8601 Dates** and formatted financial strings.
- **Visual Continuity (Skeletons):** Custom-built **Skeleton Loaders** that mirror the DOM structure to minimize Cumulative Layout Shift (CLS) during data loading.
- **Theme Engine:** Fully integrated **Dark/Light Mode** support using Tailwind CSS and persistent state.
- **Interactive Data Visualization:** Responsive Area Charts with custom tooltips and timeframe filtering (Month/Week).


