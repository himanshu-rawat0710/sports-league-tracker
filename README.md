# 🏆 Sports League Tracker

A high-performance, single-page application (SPA) built with **Next.js** to browse, filter, and view badges for global sports leagues using TheSportsDB API.

**[🔗 View Live Demo](https://sports-league-tracker.vercel.app/)** | **[📂 GitHub Repository](https://github.com/himanshu-rawat0710/sports-league-tracker)**

---

## 🚀 Getting Started

To get the project running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/himanshu-rawat0710/sports-league-tracker.git](https://github.com/himanshu-rawat0710/sports-league-tracker.git)
    cd sports-league-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **View the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Tech Stack

* **Framework**: Next.js 15+ (App Router)
* **State Management & Data Fetching**: TanStack Query (React Query)
* **Styling**: Tailwind CSS v4
* **Icons**: Lucide React
* **Language**: TypeScript

---

## 💡 Key Design Decisions

### **1. Performance: SSR + Client Hydration**
The application uses a hybrid rendering approach. The initial list of leagues is prefetched on the server to ensure a near-instant First Contentful Paint (FCP) and better SEO. This data is then "hydrated" into the client-side cache so users experience zero loading states on the first view.

### **2. Efficient Caching**
To satisfy the requirement of "avoiding repeat calls", we implemented a robust caching strategy using TanStack Query:
* **Global Leagues**: Cached for 5 minutes (`staleTime`) to ensure data freshness while reducing API hits.
* **Season Badges**: Cached indefinitely (`staleTime: Infinity`) once fetched, as league logos rarely change.

### **3. Optimized Image Loading**
League badges are only fetched when a user explicitly clicks to expand a card. This prevents "network waterfalls" where hundreds of images would otherwise be requested on the initial page load. We utilize the `next/image` component for automatic resizing and lazy loading.

### **4. Accessible & Responsive UI**
The UI follows a mobile-first approach, using a CSS Grid that adjusts from 1 to 3 columns based on screen size. We implemented a semantic design system with support for **Dark Mode** and high-contrast text to ensure accessibility.

---

## 📂 Project Structure

* `/src/app`: Next.js App Router pages and layouts.
* `/src/components`: UI components (Cards, FilterBar) and atomic UI elements (Button, Input).
* `/src/hooks`: Custom React Query hooks for clean data fetching logic.
* `/src/services`: Raw API fetch logic for All Leagues and Season Badge endpoints.
* `/src/types`: TypeScript interfaces reflecting the API responses.

---

## 🤖 AI Tools Disclosure

In accordance with the assignment requirements, a description of AI assistance is provided in the `AI_TOOLS.md` file located in the root directory.