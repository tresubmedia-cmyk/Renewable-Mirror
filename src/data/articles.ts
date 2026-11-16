import type { Interview, NewsArticle } from "../types/content";

export const articles: NewsArticle[] = [
  {
    id: 1,
    slug: "india-renewable-energy-growth",
    title: "India’s clean energy transition enters a decisive new chapter",
    excerpt: "New investments, stronger infrastructure and ambitious capacity targets are reshaping the renewable energy landscape.",
    category: "Industry",
    date: "November 13, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    author: "Renewable Mirror Desk",
    readTime: "5 min read",
    content: [
      "India’s renewable energy sector continues to evolve as developers, policymakers and technology providers work to accelerate the clean energy transition.",
      "The next phase will depend on reliable transmission infrastructure, energy storage, predictable policy frameworks and access to long-term capital.",
      "For industry stakeholders, the opportunity is not limited to generation capacity. Manufacturing, grid modernisation and digital operations will also play an important role."
    ]
  },
  {
    id: 2,
    slug: "solar-manufacturing-next-wave",
    title: "Solar manufacturing looks towards its next wave of innovation",
    excerpt: "Technology upgrades and supply-chain resilience are becoming central to the next generation of solar manufacturing.",
    category: "Solar",
    date: "November 12, 2026",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85",
    author: "Editorial Team",
    readTime: "4 min read",
    content: [
      "Solar manufacturing is entering a period of rapid technology development, with efficiency, quality and scale shaping investment decisions.",
      "Manufacturers are evaluating new cell architectures, automation and supply-chain strategies to strengthen competitiveness."
    ]
  },
  {
    id: 3,
    slug: "wind-energy-projects",
    title: "Wind energy projects put focus on smarter operations",
    excerpt: "Digital monitoring and predictive maintenance are helping operators improve the performance of wind assets.",
    category: "Wind",
    date: "November 11, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=85",
    author: "Renewable Mirror Desk",
    readTime: "6 min read",
    content: [
      "Wind operators are increasingly using connected systems to understand asset performance and plan maintenance more effectively.",
      "Better forecasting and data-led operations can support availability, safety and long-term project economics."
    ]
  },
  {
    id: 4,
    slug: "battery-storage-grid",
    title: "Energy storage moves closer to the centre of grid planning",
    excerpt: "Storage solutions are emerging as a key enabler for integrating variable renewable power into electricity systems.",
    category: "Energy Storage",
    date: "November 10, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-9711f6cc8e1f?auto=format&fit=crop&w=1000&q=85",
    author: "Editorial Team",
    readTime: "3 min read",
    content: [
      "As renewable generation grows, energy storage can help balance supply and demand across different time periods.",
      "Project design, market structures and grid connection processes will influence how quickly storage can scale."
    ]
  }
];

export const interviews: Interview[] = [
  {
    name: "Industry Leadership",
    role: "Executive Conversation",
    company: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    slug: "industry-leadership"
  },
  {
    name: "Energy Innovators",
    role: "Technology Perspective",
    company: "Clean Technology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    slug: "energy-innovators"
  },
  {
    name: "Future of Power",
    role: "Market Outlook",
    company: "Power & Infrastructure",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
    slug: "future-of-power"
  }
];