// /data/newsTimeline.js

const newsTimeline = [
    {
      branch: "Main Timeline",
      commits: [
        { message: "Marine Company Website Launched 🚀", content: "We proudly launched our new website, providing better access to our marine services, vessel tracking, and news updates." },
      ],
    },
    {
      branch: "Announcements",
      from: "Main Timeline",
      commits: [
        { message: "New International Port Partnership 🤝", content: "We've signed a strategic partnership with the Port of Rotterdam to enhance global logistics." },
        { message: "Q2 Hiring Open 🔔", content: "We're expanding our workforce. Applications open for marine engineers, navigators, and logistics experts." },
      ],
    },
    {
      branch: "Operations",
      from: "Main Timeline",
      commits: [
        { message: "Maiden Voyage of Vessel Orion 🚢", content: "Our new vessel 'Orion' completed its maiden voyage across the Arabian Sea, setting a new standard for cargo handling efficiency." },
        { message: "Smart Navigation System Installed 📡", content: "We’ve successfully implemented a real-time route optimization system to enhance maritime safety and delivery speed." },
        { message: "International Cargo Route Opened 🌍", tag: "New Route 📦", content: "We’ve added a new shipping route to East Africa to meet growing demand in that region." },
      ],
    },
    {
      branch: "Achievements",
      from: "Main Timeline",
      commits: [
        { message: "ISO 9001 Certification Achieved 🏅", content: "Our quality management systems for vessel operations have been officially certified as per ISO 9001 standards." },
        { message: "Ranked #1 in Coastal Logistics 🎯", tag: "Award 🥇", content: "We are proud to be ranked the top marine logistics company for coastal shipping in India." },
      ],
    },
    {
      mergeInto: "Main Timeline",
      from: ["Operations", "Announcements", "Achievements"],
      commits: [
        { message: "Quarterly Review Report 📢", content: "An overview of all major developments, including port partnerships, technology upgrades, and international expansion." },
        { message: "Orion Performance Report Released 📄", content: "Detailed performance metrics from Vessel Orion's voyages show a 20% increase in fuel efficiency." },
        { message: "Marine Day Celebration 🎊", content: "We celebrated World Marine Day across all our branches with seminars, outreach programs, and port clean-up drives." },
      ],
    },
    {
      tag: {
        name: "v2.0",
        color: "#10b981",
      },
    },
  ];
  
  export default newsTimeline;
  