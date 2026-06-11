const projects = [
  {
    title: "Wealth Management B2B Portal",
    category: "Financial Advisory Platform",
    description:
      "Spearheaded the end-to-end React.js frontend for a B2B financial advisory platform serving 100+ wealth managers — featuring real-time portfolio dashboards, live transaction histories, and multi-million-dollar asset management interfaces.",
    highlights: [
      "Orchestrated integration of 15+ REST APIs for live financial data feeds, client management workflows, and secure transaction processing — achieving sub-200ms response times through optimized data fetching, caching, and Redux Toolkit state management.",
      "Designed a 5-tier Role-Based Access Control (RBAC) system with authentication and authorization flows, enforcing granular permission boundaries and ensuring data privacy compliance across all user roles.",
      "Reduced reporting module data-fetch latency by 30% through SQL query optimization, component-level memoization, and Webpack bundle splitting — directly improving page load performance for power users.",
    ],
    metrics: [
      { value: "100+", label: "Wealth managers served" },
      { value: "15+", label: "REST APIs integrated" },
      { value: "<200ms", label: "API response time" },
      { value: "30%", label: "Data-fetch latency reduced" },
    ],
    tech: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "REST APIs", "RBAC", "Webpack", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Scholarship Application Portal",
    category: "Education Platform",
    description:
      "Launched a fully responsive, multi-step scholarship application portal processing 500+ submissions, with dynamic form rendering, real-time field validation, and Redux-powered global state management.",
    highlights: [
      "Constructed REST APIs for form submissions, PDF/image file uploads, and applicant status tracking, with SQL data persistence via JPA/Hibernate ORM and Jest unit tests covering critical application modules.",
      "Implemented dual-layer input validation (client-side and server-side) with cross-browser compatibility, reducing submission errors by 45% and significantly improving data integrity across the platform.",
      "Designed a multi-step UI with progress indicators and real-time feedback that reduced estimated form abandonment by 30%; delivered a role-based admin panel for efficient application review and management.",
    ],
    metrics: [
      { value: "500+", label: "Applications processed" },
      { value: "45%", label: "Submission errors reduced" },
      { value: "30%", label: "Form abandonment reduced" },
      { value: "2-layer", label: "Input validation" },
    ],
    tech: ["React.js", "Redux", "TypeScript", "Tailwind CSS", "REST APIs", "JPA/Hibernate", "SQL", "Jest"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default projects;
