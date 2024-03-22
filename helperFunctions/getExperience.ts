import { ProfessionalExperience } from '@/types';

export async function getProfessionalExperience() {
    const exp: ProfessionalExperience[] = [
        {
            role: "Market Insights Analytics",
            company: "International Air Transport Assocation (IATA)",
            logo: "iata_logo.png",
            diagram1: "iata_diagram1.png",
            diagram2: "iata_diagram2.png",
            skills: "Market Research ⋅ Trend Analysis ⋅ Data Storytelling",
            year: "2023",
            summary_title: "Summary",
            summary_paragraph: "My role on the market insights team at IATA consisted of how we defined our approach to market research and strategy for the Commercial Products & Services group, which included the full spectrum of insights analytics - defining success metrics, uncovering insights, and tying them all back to strategic goals.",
            background_title: "",
            background_subtitle: "",
            background_paragraph: "",
            about_title: "",
            about_paragraph: "",
            project_title: "Key Project",
            project_summary: "One standout project I spearheaded at IATA was transforming the way we approached our strategic partnership program. The goal was to elevate growth and engagement for key stakeholders in our partnership program, specifically targeting 2024 renewals and multi-year contracts.",
            project_subheading1: "Deep Dive into User Research",
            project_desc1: "The process started with a deep dive into user research to understand major pain-points and concerns on how information is shared and exchanged in the industry. The focus was on benchmarking our strategic partner benefits and engagement against industry standards and thoroughly evaluating the current partnership strategy.",
            project_subheading2: "Data-Driven Insights",
            project_desc2: "I explored how to offer opportunities and stronger value for money for stakeholders, diving into in-depth analytics and applying a regression model to dissect the key drivers influencing satisfaction, and how these elements interplayed.",
            project_subheading3: "Influencing Strategy with Data",
            project_desc3: "The project concluded with a session involving IATA's key decision-makers, where a comprehensive guideline was discussed. This guideline proposed enhancements to the strategic partnership program, drawing on an in-depth analysis of both current and potential future use cases. The insights gained from this analysis were instrumental in setting a new benchmark for supporting the aviation industry, leveraging our resources more effectively and efficiently."
        },
        {
            role: "Business Analytics - Global Innovation",
            company: "General Motors",
            logo: "gm_logo.png",
            diagram1: "gm_diagram1.png",
            diagram2: "gm_diagram2.png",
            skills: "Go-to-Market Strategy ⋅ Project Management",
            year: "2022",
            summary_title: "Summary",
            summary_paragraph: "My role in GM's Global Innovation group involved everything from conducting due diligence on V2X data distribution providers to defining the scope of connected vehicle data features and collaborating on the launch of a cloud-based road safety solution.",
            background_title: "",
            background_subtitle: "",
            background_paragraph: "",
            about_title: "",
            about_paragraph: "",
            project_title: "Key Project",
            project_summary: "",
            project_subheading1: "Launch of Safety View Software",
            project_desc1: "A defining project during my time at General Motors was the launch of Safety View, a SaaS-Based Road Safety Solution, in partnership with INRIX. This software aimed to leverage connected vehicle data to support safe street initiatives across the U.S. As business analyst, my primary responsibility was to define and communicate technical requirements of this application to stakeholders, including system specifications and use case walkthroughs prior to product launch.",
            project_subheading2: "Partnership Strategy",
            project_desc2: "In the final stages leading up to the launch of Safety View, a critical objective was to secure U.S DoT SS4A contracts, ultimately achieving over $3.5 million in awards. This achievement was the result of a joint effort with the business development team, highlighting a strategic approach to navigating the complex procurement landscape of RFIs, RFPs, and RFQs. Key to this process was the partnership with INRIX and our collaboration to refine the product's whitepaper. This involved a focus on enhancing the accuracy and efficacy of the Safety View software, ensuring that General Motors' technology was distinctly positioned against competitors. The efforts to manage the procurement process and optimize product documentation played a pivotal role in setting a new benchmark for General Motors in the competitive landscape of road safety solutions.",
            project_subheading3: "",
            project_desc3: ""
        },
        {
            role: "Software Engineering",
            company: "Bird&Be",
            logo: "bird&be_logo.png",
            diagram1: "bird&be_diagram1.png",
            diagram2: "bird&be_diagram2.png",
            skills: "Full-Stack Development ⋅ Data Migration",
            year: "2021",
            summary_title: "Summary",
            summary_paragraph: "As part of an agile team of engineers, I was responsible for both front-end development and back-end logic, managing synchronization for e-commerce orders, and API integrations.",
            background_title: "",
            background_subtitle: "",
            background_paragraph: "",
            about_title: "",
            about_paragraph: "",
            project_title: "Key Project",
            project_summary: "A major highlight of my time at Bird&Be was building tools to enable our customer support team in searching, updating, and deleting orders internally. The transition of our data from BigCommerce to Shopify underscored the importance of server-side synchronization during development, which was key to maintaining effective data management across both platforms.",
            project_subheading1: "Tech Stack Expertise",
            project_desc1: "My work at Bird&Be involved a tech stack including Node.js, Next.js, TypeScript, React.js, PostgreSQL, Docker, Auth0, and the Shopify Developer Platform.",
            project_subheading2: "",
            project_desc2: "",
            project_subheading3: "",
            project_desc3: ""
        },
        {
            role: "Software Development & Co-Founding",
            company: "PhaseRx",
            logo: "phaserx_logo.png",
            diagram1: "phaserx_demo.gif",
            diagram2: "",
            skills: "what not to do from concept to launch",
            year: "2021",
            summary_title: "Summary",
            summary_paragraph: "I was involved in developing an e-prescription dropbox platform, designed for the Canadian healthcare industry. My role encompassed a wide range of responsibilities, from working on our product strategy with industry stakeholders, to co-designing and developing the prototype application.",
            background_title: "",
            background_subtitle: "The Vision of PhaseRx",
            background_paragraph: "Our mission was to transform the Canadian healthcare industry by leveraging cloud computing and providing efficient protocols for e-prescriptions. We aimed to bridge the communication gap between healthcare providers and pharmacists. Our platform was designed to decrease the strain of administrative tasks, streamlining communication in healthcare allowing professionals to focus on patient care.",
            about_title: "",
            about_paragraph: "",
            project_title: "The Startup Experience",
            project_summary: "Co-founding PhaseRx was a passion-driven venture that involved building and scaling an application from the ground up. My experience extended beyond technical development, collaborating closely with product managers and healthcare professionals. Together, we developed user interview methodologies, created customer journey maps and user stories, and transformed these stories into tangible product features. This collaborative process was instrumental in proposing MVP and secondary features, creating a robust proof of concept, rapid prototyping, and refining our product through continuous client feedback. One of the most fulfilling aspects of this journey was putting together a comprehensive go-to-market strategy with the help of accelerator programs, ensuring that our solution not only met the needs of the healthcare industry but also resonated with our target audience.",
            project_subheading1: "",
            project_desc1: "",
            project_subheading2: "",
            project_desc2: "",
            project_subheading3: "",
            project_desc3: ""
        }
    ];

    return exp;
}