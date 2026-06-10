// src/data/courses.js
// Faculty images are now Vite-bundled via the faculties asset index.
import {
  angloEdwin,
  amacNacho,
  alvaroFerdinand,
  bairanRyan,
  barbaErwin,
  basiMaureen,
  bediadesiree,
  bernardoJay,
  bucaoIrving,
  castillanoIvan,
  danglaCruz,
  datuJordan,
  delaCruzSofia,
  dinerosDaniel,
  doctoleroArnel,
  doctorMario,
  jameroRichard,
  marceloMerelyn,
  naridoVincent,
  ordovezDennis,
  peraltaDerick,
  perezEldon,
  pielagoMithos,
  riveraSherwin,
  sanJuanRhyca,
  sandovalAllan,
  tanuecozJoseph,
  tobiasAriel,
  ubaldoJorge,
  villadolidRowena,
} from "../assets/faculties/index.js";

export const courses = [
  {
    name: "Automotive Technology",
    head: "DATU, JORDAN A.",
    degree: "Bachelor of Industrial Technology Major in Automotive Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program focuses on automotive systems, diagnostics, repair, and maintenance. Students gain hands-on experience in engine systems, electrical systems, suspension, braking systems, and modern automotive technologies including hybrid and electric vehicle systems. Graduates are equipped to meet industry demands in automotive service centers, manufacturing facilities, and technical support roles.",
    careers: [
      "Automotive Service Advisor / Manager",
      "Diagnostic Technician / Specialist",
      "Fleet Maintenance Engineer",
      "Automotive Systems Design Associate",
      "Technical Trainer or Consultant"
    ],
    curriculum: [
      "Internal Combustion Engines (Gas and Diesel)",
      "Automotive Electrical and Electronic Systems",
      "Engine Performance and Computerized Diagnostics",
      "Suspension, Steering, and Braking Systems",
      "Hybrid and Electric Vehicle Technology",
      "Automotive Transmission and Driveline Systems"
    ],
    skillsAcquired: [
      "Advanced Engine Diagnostics and Troubleshooting",
      "Automotive Electrical System Installation and Repair",
      "Wheel Alignment and Brake System Servicing",
      "Alternative Fuel and EV System Maintenance",
      "Workshop Management and Safety Compliance"
    ],
    faculty: [
      { name: "DATU, JORDAN A.",          img: datuJordan },
      { name: "ANGLO, EDWIN.",             img: angloEdwin },
      { name: "CASTILLANO, IVAN F.",       img: castillanoIvan },
      { name: "RIVERA, SHERWIN KEITH T.",  img: riveraSherwin }
    ]
  },
  {
    name: "Mechanical Technology",
    head: "PEREZ, ELDON P.",
    degree: "Bachelor of Industrial Technology Major in Mechanical Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This comprehensive program covers machine operations, fabrication processes, and mechanical systems design. Students are trained in precision tools, CNC equipment handling, welding, metal fabrication, and industrial mechanical processes. The curriculum emphasizes safety standards, blueprint reading, and real-world application of mechanical principles for manufacturing and maintenance industries.",
    careers: [
      "CNC Machinist / Programmer",
      "Mechanical Plant Maintenance Supervisor",
      "Tool and Die Maker",
      "CAD/CAM Design Technician",
      "Metal Fabrication Supervisor"
    ],
    curriculum: [
      "Precision Machining and Machine Shop Theory",
      "Computer Numerical Control (CNC) Operations",
      "Advanced Welding and Fabrication Technology",
      "Mechanical Drawing and CAD Modeling",
      "Hydraulics and Pneumatics Systems",
      "Industrial Plant Maintenance"
    ],
    skillsAcquired: [
      "Precision Milling, Lathe, and Machining Operations",
      "CNC Machine Setup and G-code Programming",
      "Shielded Metal Arc (SMAW) and Gas Metal Arc (GMAW) Welding",
      "Mechanical System Safety and Operations Auditing",
      "Industrial Assembly and Blueprint Interpretation"
    ],
    faculty: [
      { name: "PEREZ, ELDON P.",     img: perezEldon },
      { name: "BARBA, ERWIN C.",     img: barbaErwin },
      { name: "DINEROS, DANIEL D.",  img: dinerosDaniel },
      { name: "ORDOVEZ, DENNIS P.",  img: ordovezDennis }
    ]
  },
  {
    name: "Electrical Technology",
    head: "DANGLA CRUZ, ROLF IRWIN C.",
    degree: "Bachelor of Industrial Technology Major in Electrical Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program focuses on electrical installation, wiring systems, power distribution, and industrial electrical applications. Students learn safety standards, troubleshooting techniques, electrical design principles, and maintenance of electrical systems for buildings and industrial facilities. Practical training covers transformer installation, circuit protection, grounding systems, and compliance with Philippine electrical codes.",
    careers: [
      "Industrial Electrician",
      "Electrical Maintenance Planner",
      "Power Distribution Technician",
      "Building Systems Electrical Supervisor",
      "Substation Operations Assistant"
    ],
    curriculum: [
      "Basic and Commercial Electrical Wiring",
      "Industrial Motor Control and Programmable Controllers",
      "Electrical Systems Design and Estimation",
      "Power Distribution and Transformers",
      "Philippine Electrical Code (PEC) Regulations",
      "Electrical Safety and Protection Systems"
    ],
    skillsAcquired: [
      "Commercial and Industrial Electrical Wiring Installation",
      "Motor Controller and Relay Logic Implementation",
      "Electrical Plan Interpretation and Load Estimation",
      "Transformer Testing and Grounding Systems Installation",
      "High-Voltage Safety and Emergency Fault Diagnosis"
    ],
    faculty: [
      { name: "DANGLA CRUZ, ROLF IRWIN C.",                     img: danglaCruz },
      { name: "BARBA, ERWIN C.",                                 img: barbaErwin },
      { name: "TOBIAS, ARIEL E.",                                img: tobiasAriel },
      { name: "ALVARO, Ferdinand P. CRUZ, ROLF IRWIN C.",        img: alvaroFerdinand }
    ]
  },
  {
    name: "Electronics Technology",
    head: "SANDOVAL, ALLAN A.",
    degree: "Bachelor of Industrial Technology Major in Electronics Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program deals with electronic circuits, semiconductor devices, and modern electronic systems. Students explore communication systems, microcontroller programming, digital electronics, signal processing, and IoT applications. The curriculum combines theoretical knowledge with practical laboratory work using industry-standard testing equipment and development platforms.",
    careers: [
      "Electronics Research & Design Associate",
      "Embedded Systems Programmer",
      "Telecommunications Maintenance Engineer",
      "IoT Solutions Integrator",
      "Consumer Electronics Service Manager"
    ],
    curriculum: [
      "Solid State Electronics and Circuits",
      "Digital Electronics and Logic Gates",
      "Microcontroller Programming and Interfacing",
      "Signals, Systems, and Telecommunications",
      "Industrial Automation and Sensor Technology",
      "Internet of Things (IoT) Systems Development"
    ],
    skillsAcquired: [
      "Electronic Circuit Design, Simulation, and Assembly",
      "C/C++ Programming for Arduino and Microcontrollers",
      "Oscilloscope and Signal Analyzer Diagnostics",
      "IoT Sensor Integration and Cloud Connectivity",
      "PCB Layout Design and Precision Soldering"
    ],
    faculty: [
      { name: "SANDOVAL, ALLAN A.",     img: sandovalAllan },
      { name: "BERNARDO, JAY C.",       img: bernardoJay },
      { name: "JAMERO, RICHARD K.",     img: jameroRichard },
      { name: "NARIDO, VINCENT A.",     img: naridoVincent },
      { name: "BAIRAN, RYAN ALEXIE L.", img: bairanRyan }
    ]
  },
  {
    name: "Drafting Technology",
    head: "PEREZ, ELDON P.",
    degree: "Bachelor of Industrial Technology Major in Drafting Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program focuses on technical drawing, computer-aided design (CAD), and architectural design principles. Students learn AutoCAD, 3D modeling, blueprint interpretation, and engineering documentation standards. The curriculum prepares graduates for careers in architectural firms, engineering companies, construction industries, and design consultancies.",
    careers: [
      "CAD/BIM Modeler",
      "Architectural Draftsperson",
      "Mechanical Technical Illustrator",
      "Construction Blueprint Analyst",
      "3D Rendering Artist"
    ],
    curriculum: [
      "Technical Drawing Fundamentals",
      "Computer-Aided Design (AutoCAD 2D)",
      "3D Parametric Modeling (SolidWorks/Fusion360)",
      "Building Information Modeling (BIM - Revit)",
      "Structural and Mechanical Drafting",
      "Engineering Documentation and Standards"
    ],
    skillsAcquired: [
      "Advanced 2D Drafting and 3D Modeling",
      "Architectural and Structural Detailing",
      "Blueprint Interpretation and Quantity Estimation",
      "BIM Implementation and Collaboration",
      "Visual Rendering and Engineering File Archiving"
    ],
    faculty: [
      { name: "PEREZ, ELDON P.",   img: perezEldon },
      { name: "UBALDO, JORGE S.",  img: ubaldoJorge }
    ]
  },
  {
    name: "Computer Technology",
    head: "TANUECO, JOSEPH ANGELO C.",
    degree: "Bachelor of Industrial Technology Major in Computer Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program covers programming languages, networking, database management, and software development. Students are trained in modern technologies including web development, mobile applications, network administration, and cybersecurity fundamentals. Graduates are prepared for careers in IT companies, software development firms, and technology support industries.",
    careers: [
      "Full-Stack Web Developer",
      "Network Systems Administrator",
      "IT Support and Cybersecurity Analyst",
      "Database Administrator / Modeler",
      "Embedded Systems / Mobile Programmer"
    ],
    curriculum: [
      "Object-Oriented Programming (Java/Python/C#)",
      "Web Technologies (HTML, CSS, JavaScript, React)",
      "Database Management Systems and SQL",
      "Computer Networking (Routing, Switching, Protocols)",
      "Cybersecurity Fundamentals and Ethics",
      "Software Engineering and Systems Analysis"
    ],
    skillsAcquired: [
      "Full-Stack Web and Database Application Development",
      "LAN/WAN Configuration, Routing, and Security Management",
      "Database Modeling, Implementation, and Query Optimization",
      "Systems Troubleshooting and Operating Systems Management",
      "Core Threat Prevention and System Hardening"
    ],
    faculty: [
      { name: "TANUECO, JOSEPH ANGELO C.", img: tanuecozJoseph },
      { name: "BUCAO, IRVING E.",           img: bucaoIrving },
      { name: "PIELAGO, MITHOS ARTH M.",    img: pielagoMithos }
    ]
  },
  {
    name: "Industrial Chemistry",
    head: "PERALTA, DERICK O.",
    degree: "Bachelor of Science in Industrial Chemistry",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program provides comprehensive training in chemical processes, laboratory techniques, and industrial chemical applications. Students master analytical procedures, chemical safety protocols, quality control testing, laboratory equipment operation, and practical applications of chemistry in industrial settings. The curriculum emphasizes safety standards and environmental compliance.",
    careers: [
      "Quality Control (QC) Laboratory Chemist",
      "Chemical Process Safety Officer",
      "Product Formulation Analyst",
      "Environmental Quality Assessor",
      "Research & Development (R&D) Assistant"
    ],
    curriculum: [
      "General and Inorganic Chemistry",
      "Organic Chemistry and Synthesis",
      "Analytical Chemistry and Instrumental Methods",
      "Industrial Process Engineering",
      "Chemical Safety and Waste Management",
      "Quality Assurance and Control Methods"
    ],
    skillsAcquired: [
      "Quantitative and Qualitative Chemical Analysis",
      "Operation of Analytical Instruments (Spectrometers, Chromatographs)",
      "Synthesis and Purification of Organic Compounds",
      "Lab Safety Management and Hazard Identification",
      "Environmental Compliance Monitoring and Control"
    ],
    faculty: [
      { name: "PERALTA, DERICK O.", img: peraltaDerick },
      { name: "ANGLO, EDWIN.",       img: angloEdwin }
    ]
  },
  {
    name: "Apparel and Fashion Technology",
    head: "BEDIA, DESIREE JOYCE L.",
    degree: "Bachelor of Industrial Technology Major in Apparel & Fashion Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program focuses on apparel design, pattern making, garment construction, and fashion production. Students develop comprehensive skills in clothing design, textile analysis, sewing techniques, quality control, and modern fashion industry practices. Graduates are prepared for careers in fashion design companies, textile mills, retail brands, and garment manufacturing facilities.",
    careers: [
      "Fashion Designer / Product Developer",
      "Garment Pattern Draftsperson",
      "Apparel Production Supervisor",
      "Fashion Merchandiser",
      "Textile Quality Auditor"
    ],
    curriculum: [
      "Fashion Design and Illustration Basics",
      "Flat Pattern Drafting and Grading",
      "Industrial Sewing and Garment Assembly",
      "Textile Science and Fabric Selection",
      "Apparel Quality Control and Inspection",
      "Garment Production Management"
    ],
    skillsAcquired: [
      "Creative Fashion Sketching and Materialization",
      "Precise Pattern Drafting and Size Grading",
      "Operation of Industrial Sewing and Finishing Machines",
      "Fabric Performance Testing and Diagnostics",
      "Apparel Production Planning and Cost Estimation"
    ],
    faculty: [
      { name: "BEDIA, DESIREE JOYCE L.", img: bediadesiree },
      { name: "Dela Cruz, Sofia.",        img: delaCruzSofia },
      { name: "VILLADOLID, ROWENA M.",    img: villadolidRowena }
    ]
  },
  {
    name: "HVAC-R",
    head: "ORDOVEZ, DENNIS P.",
    degree: "Bachelor of Industrial Technology Major in HVAC-R Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program specializes in heating, ventilation, air conditioning, and refrigeration systems. Students learn installation, maintenance, troubleshooting, and repair of HVAC-R equipment used in residential, commercial, and industrial settings. The curriculum includes refrigerant handling, system design, and compliance with environmental and safety regulations.",
    careers: [
      "HVAC-R System Design Associate",
      "Commercial HVAC Installation Supervisor",
      "Refrigeration Maintenance Planner",
      "Environmental Climate System Auditor",
      "Technical Service Representative"
    ],
    curriculum: [
      "Principles of Refrigeration and Thermodynamics",
      "Air Conditioning Systems Design",
      "Electrical Circuits in HVAC-R Systems",
      "Refrigerant Recovery, Recycling, and Safety",
      "Commercial and Industrial Cooling Systems",
      "HVAC Troubleshooting and Preventative Maintenance"
    ],
    skillsAcquired: [
      "Installation of Domestic and Commercial Cooling Units",
      "Refrigeration Charging, Recovery, and System Leak Detection",
      "Electrical Wiring and Diagnostic Troubleshooting in HVAC Circuits",
      "Air Flow Balancing and Heat Load Calculations",
      "Eco-Friendly Refrigerant Handling and Regulations Compliance"
    ],
    faculty: [
      { name: "ORDOVEZ, DENNIS P.",  img: ordovezDennis },
      { name: "DINEROS, DANIEL D.",  img: dinerosDaniel }
    ]
  },
  {
    name: "Food Trades",
    head: "SAN JUAN, RHYCA MAE C.",
    degree: "Bachelor of Industrial Technology Major in Food Technology",
    duration: "4 Years (including 500 hours Supervised Industrial Training)",
    description:
      "This program focuses on culinary skills, food preparation techniques, food safety, and kitchen management. Students gain hands-on experience in cooking, food service operations, menu planning, and sanitation standards. The curriculum prepares graduates for careers in food service establishments, hotels, restaurants, and catering companies.",
    careers: [
      "Culinary Chef / Kitchen Supervisor",
      "Food Safety / Hygiene Auditor",
      "Catering Operations Manager",
      "Product Development Assistant",
      "Restaurant Assistant Manager"
    ],
    curriculum: [
      "Basic Culinary Arts and Baking Techniques",
      "Commercial Food Production and Service",
      "Food Safety, Sanitation, and HACCP Standards",
      "Menu Planning, Costing, and Inventory Control",
      "International and Regional Cuisines",
      "Restaurant and Kitchen Management"
    ],
    skillsAcquired: [
      "Advanced Culinary Preparation and Cooking Skills",
      "Commercial Kitchen Organization and Operations Management",
      "Strict Compliance with Food Safety and HACCP Guidelines",
      "Menu Design and Ingredient Cost Estimation",
      "Professional Catering and Dining Service Coordination"
    ],
    faculty: [
      { name: "SAN JUAN, RHYCA MAE C.",      img: sanJuanRhyca },
      { name: "DOCTOR III, MARIO MANUEL B.", img: doctorMario },
      { name: "MARCELO, MERELYN A.",         img: marceloMerelyn },
      { name: "BASIA, MAUREEN D.",           img: basiMaureen }
    ]
  },
  {
    name: "General Education",
    head: "PERALTA, DERICK O.",
    degree: "General Education Foundations Department",
    duration: "Integrated across Core Programs",
    description:
      "This foundational program provides essential knowledge in communication, mathematics, sciences, and humanities. Students develop critical thinking, professional communication skills, and scientific literacy to support technical and professional growth. The curriculum emphasizes practical application of general knowledge to technical and vocational contexts.",
    careers: [
      "Professional Communications Associate",
      "Technical Writing Consultant",
      "Academic Support Facilitator",
      "Public Relations Coordinator",
      "Ethics Compliance Liaison"
    ],
    curriculum: [
      "Purposive Communication and Technical Writing",
      "Mathematics in the Modern World",
      "Science, Technology, and Society",
      "Ethics and Civic Welfare Training",
      "Art Appreciation and Readings in Philippine History",
      "Contemporary World Issues"
    ],
    skillsAcquired: [
      "Professional Oral and Written Communication",
      "Critical Inquiry, Logic, and Problem Solving",
      "Applied Mathematics and Data Analysis Basics",
      "Sociological and Ethical Decision Making",
      "Intercultural Understanding and Civic Leadership"
    ],
    faculty: [
      { name: "PERALTA, DERICK O.",   img: peraltaDerick },
      { name: "ANGLO, EDWIN.",         img: angloEdwin },
      { name: "Dela Cruz, Sofia.",     img: delaCruzSofia },
      { name: "AMAC, NACHO B.",        img: amacNacho },
      { name: "DOCTOLERO, ARNEL A.",   img: doctoleroArnel }
    ]
  }
];