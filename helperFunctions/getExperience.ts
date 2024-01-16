import { ProfessionalExperience } from '@/types';

export async function getProfessionalExperience() {
    const exp: ProfessionalExperience[] = [
        {
            role: "Market Insights",
            company: "International Air Transport Assocation (IATA)",
            logo: "iata_logo.png",
            diagram1: "iata_diagram1.png",
            diagram2: "iata_diagram2.png",
            skills: "Market Research ⋅ Trend Analysis ⋅ Data Storytelling",
            year: "2023",
            summary_title: "Summary",
            summary_paragraph: "My role here was all about juggling the full spectrum of insights analytics, defining success metrics, uncovering insights, and tying them all back to strategic goals. I was all about making data speak and ensuring everyone from sales to execs were on the same page.",
            background_title: "Background",
            background_subtitle: "Inside the Market Insights Team at IATA",
            background_paragraph: "The Market Insights team, a recent addition at IATA, is a dynamic group that came together to redefine how we approach market research and strategy for our Commercial Products & Services. Spread across Geneva and Montreal, we were the think tank behind new commercial strategies, working closely with both the Products and Sales teams. Our aim? To centralize IATA's market research, enhance our product offerings, boost revenue with innovative product development, and streamline our research processes for better efficiency.",
            about_title: "About IATA",
            about_paragraph: "The International Air Transport Association (IATA) is the global rallying point for airlines, representing over 80% of air traffic. Their mission is multifaceted – supporting various aspects of aviation, shaping industry policies, and advocating for the economic benefits of aviation on a global scale. IATA is dedicated to helping airlines operate in the safest, most secure, and efficient ways possible. This involves setting industry standards, challenging unfair practices, and providing a wealth of resources and expert services to everyone in the aviation ecosystem.",
            project_title: "Key Project",
            project_summary: "One standout project I spearheaded at IATA was transforming the way we approached our publications and online store. The goal was to elevate growth and engagement and turn our resources into top-notch tools for the aviation industry.",
            project_subheading1: "Deep Dive into User Research",
            project_desc1: "The journey started with a deep dive into user research. I crafted a set of questions designed not just to understand user satisfaction but to get a grip on their digital awareness and how they interacted with our publications and online store. The focus was on comparing our publications with market standards and thoroughly evaluating the purchasing experience.",
            project_subheading2: "Data-Driven Insights",
            project_desc2: "With this user feedback, we explored how to reshape our publications to better aid stakeholders in their daily aviation operations. But it wasn't just about gathering data - I dived into analytics, segmenting our data by stakeholder groups, and applied a regression model to dissect the key factors influencing satisfaction with our publications and online store, and how these elements interplayed.",
            project_subheading3: "Influencing Strategy with Data",
            project_desc3: "The culmination of this project was a presentation to IATA's executives and decision-makers – a strategic roadmap detailing how we could enhance our publications and online store. I laid out current and potential future use cases, guided by the insights gleaned from our analysis. This project wasn't just about improvement; it was about setting a new standard for how we support the aviation world through our resources."
        },
        {
            role: "Business Analyst - Global Innovation",
            company: "General Motors",
            logo: "gm_logo.png",
            diagram1: "gm_diagram1.png",
            diagram2: "gm_diagram2.png",
            skills: "Business Strategy ⋅ Competitive Analysis ⋅ Project Management",
            year: "2022",
            summary_title: "Summary",
            summary_paragraph: "My role in GM's Global Innovation department was all about pushing the boundaries of automotive technology and strategy. Starting in the urban air mobility team, I delved into the business strategy for flying cars, and then shifted gears to focus on V2X (Vehicle-to-Everything) and safety initiatives. My role involved everything from conducting thorough due diligence on aerial mobility OEMs to defining the scope of V2X projects and collaborating on the development of innovative vehicle network features. ",
            background_title: "Background",
            background_subtitle: "Global Innovation at GM",
            background_paragraph: "In GM’s Global Innovation and Growth team, our mission was to disrupt existing markets and carve out new ones. Managing around 20 start-ups of varying sizes and maturity levels, our team tackled ambiguous topics and transformed them into actionable plans. This involved proofing concepts, testing, simulations, and crafting go-to-market strategies. Our initiatives spanned across many industries but pushed for our vision of a world with zero crashes, zero emissions, and zero congestion.",
            about_title: "",
            about_paragraph: "",
            project_title: "Key Project",
            project_summary: "",
            project_subheading1: "Launch of Safety View Software",
            project_desc1: "A pivotal project I worked on at General Motors was the market launch of Safety View, a SaaS-Based Road Safety Solution, in partnership with INRIX. This innovative software aimed to help transportation planners achieve Vision Zero goals in their communities. The key benefits of Safety View included access to vital safety and demographic data, insights for identifying hazardous road segments, tools for evaluating Vision Zero action plans, and streamlined processes for funding applications.",
            project_subheading2: "Partnership Strategy",
            project_desc2: "My role was crucial in conducting a competitive analysis, setting GM's technology apart from our competitors. Leveraging GM's OnStar technology, we enhanced the data processing and analytics capabilities of our software. As we prepared for launch, I managed the procurement of RFIs, RFPs, and RFQs from the U.S. Department of Transportation, and actively sought partnerships under the Safe Streets for All (SS4A) initiative.",
            project_subheading3: "",
            project_desc3: ""
        },
        {
            role: "Software Engineer",
            company: "Bird&Be",
            logo: "bird&be_logo.png",
            diagram1: "bird&be_diagram1.png",
            diagram2: "bird&be_diagram2.png",
            skills: "Frontend Development ⋅ Backend Development ⋅ Data Migration",
            year: "2021",
            summary_title: "Summary",
            summary_paragraph: "I embraced my role here in both front-end and back-end development. My journey here was marked by my never-ending array of projects; collaborating closely with UI designers, managing synchronization and edits to e-commerce orders, contributing to the backend logic, and building entire app features front-to-back.",
            background_title: "Background",
            background_subtitle: "Software Engineering at Bird&Be",
            background_paragraph: "As part of a small, agile team of engineers, I was responsible for a wide array of technical aspects. This included customer data maintenance, front-end and back-end development, API integration for pharmacy automation, and more. In this environment, adaptability was key, and my role often involved quickly learning new technologies and collaborating to push high-quality code into production.",
            about_title: "Learning and Growth",
            about_paragraph: "Shadowing our tech lead, who had extensive senior experience in companies like Pixelee, Looka, and Slalom, I sharpened my skills in building and scaling applications. This experience wasn't just about coding; it was a comprehensive learning journey in using external resources, enhancing my problem-solving techniques, and mastering my abilities in debugging.",
            project_title: "Key Project",
            project_summary: "A major highlight of my time at Bird&Be was developing a feature that enabled our customer support team to search, update, and delete orders internally. This project was particularly challenging due to the simultaneous migration of order data from BigCommerce to Shopify. I had to ensure seamless integration and security, creating a tool for server-side synchronization to manage data effectively across both platforms.",
            project_subheading1: "Tech Stack Expertise",
            project_desc1: "My work at Bird&Be involved a diverse tech stack including Node.js, Next.js, TypeScript, React.js, PostgreSQL, Docker, Auth0, and the Shopify Developer Platform. This experience not only made me a more efficient engineer but also deepened my understanding of creating robust, scalable applications in a dynamic startup environment.",
            project_subheading2: "",
            project_desc2: "",
            project_subheading3: "",
            project_desc3: ""
        },
        {
            role: "Co-Founder",
            company: "PhaseRx",
            logo: "phaserx_logo.png",
            diagram1: "phaserx_demo.gif",
            diagram2: "",
            skills: "what not to do from concept to launch",
            year: "2021",
            summary_title: "Summary",
            summary_paragraph: "As a co-founder of a failed startup, I was deeply involved in developing a transformative e-prescription management software, designed to revolutionize the Canadian healthcare industry. My role encompassed a wide range of responsibilities, from working on our product strategy with industry professionals, to co-designing and developing the prototype.",
            background_title: "",
            background_subtitle: "The Vision of PhaseRx",
            background_paragraph: "At PhaseRx, our mission was to transform the Canadian healthcare industry by leveraging cloud computing and providing efficient protocols for e-prescriptions. We aimed to bridge the communication gap between healthcare providers and pharmacists, ultimately enhancing patient care. Our platform was crafted to eliminate cumbersome administrative tasks and long wait times, streamlining communication in healthcare and allowing professionals to focus on patient care.",
            about_title: "",
            about_paragraph: "",
            project_title: "The Startup Experience",
            project_summary: "Co-founding PhaseRx was more than just a project; it was a passion-driven venture that involved building and scaling an application from the ground up. My experience extended beyond technical development; I collaborated closely with product managers and healthcare professionals. Together, we developed user interview methodologies, created customer journey maps and user stories, and transformed these stories into tangible product features. This collaborative process was instrumental in proposing MVP and secondary features, creating a robust proof of concept, rapid prototyping, and refining our product through continuous client feedback. One of the most fulfilling aspects of this journey was putting together a comprehensive go-to-market strategy with the help of accelerator programs, ensuring that our solution not only met the needs of the healthcare industry but also resonated with our target audience.",
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