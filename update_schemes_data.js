const fs = require('fs');

const data = `export interface SchemeData {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  authority: string;
  category: "Loan" | "Grant" | "Subsidy" | "Equity" | "Debt" | "Certificate";
  tagline: string;
  avatar: string;
  
  // Details page fields
  subtitle: string;
  range: string;
  subsidy: string;
  interest: string;
  processing: string;
  collateral: string;
  bestFor: string;
  success: number;
  badge: string;
  color: string;
  overview: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  process: { step: string; description: string }[];
}

export const schemesData: SchemeData[] = [
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme",
    shortName: "PMEGP",
    slug: "pmegp",
    authority: "Government Scheme (KVIC / MoMSME)",
    category: "Subsidy",
    tagline: "Up to 35% margin money subsidy for setting up new micro enterprises",
    avatar: "PM",
    subtitle: "PM Employment Generation Programme",
    range: "Up to ₹50L",
    subsidy: "15–35% Subsidy",
    interest: "Bank Rate",
    processing: "Standard Process",
    collateral: "Not Required",
    bestFor: "Manufacturing & service sector enterprises",
    success: 80,
    badge: "High Subsidy",
    color: "from-orange-500 to-red-500",
    overview: "PMEGP is a credit-linked subsidy programme implemented by KVIC under the Ministry of MSME to generate self-employment opportunities through establishment of micro-enterprises.",
    eligibility: [
      "Any individual above 18 years of age.",
      "At least VIII standard pass for projects costing above ₹10 lakh in manufacturing and ₹5 lakh in service sector.",
      "Self Help Groups, Institutions registered under Societies Registration Act."
    ],
    benefits: [
      "Margin Money subsidy up to 35% of the project cost.",
      "Promotes rural and urban entrepreneurship.",
      "Bank finances up to 90-95% of the project cost.",
      "Skill development via EDP training."
    ],
    documents: [
      "Aadhaar Card & PAN",
      "Detailed Project Report (DPR)",
      "Education / Skill Certificate",
      "Special Category Certificate (if claiming higher subsidy)"
    ],
    process: [
      { step: "Online Application", description: "Submit the application on the kviconline.gov.in portal." },
      { step: "Task Force Committee", description: "Application is forwarded to the bank after DLTFC interview." },
      { step: "Bank Sanction", description: "Bank approves the loan and releases the first installment." },
      { step: "EDP Training & Subsidy", description: "Applicant undergoes EDP training, after which subsidy is locked in." }
    ]
  },
  {
    id: "sisfs",
    name: "Startup India Seed Fund Scheme",
    shortName: "SISFS",
    slug: "startup-india-seed-fund",
    authority: "Government Scheme (DPIIT)",
    category: "Grant",
    tagline: "Early-stage grants and convertible support for DPIIT-recognised startups",
    avatar: "SI",
    subtitle: "Startup India Seed Fund Scheme (SISFS)",
    range: "₹20L – ₹50L",
    subsidy: "Up to ₹20L Grant",
    interest: "Equity / Debt",
    processing: "Detailed Review",
    collateral: "Not Required",
    bestFor: "Tech startups and innovative businesses",
    success: 75,
    badge: "For Startups",
    color: "from-blue-500 to-cyan-500",
    overview: "SISFS aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
    eligibility: [
      "DPIIT-recognized startup incorporated within the past 2 years.",
      "Must have a business idea to develop a product or service with market fit.",
      "Should not have received more than ₹10 lakh of monetary support under any other scheme."
    ],
    benefits: [
      "Up to ₹20 Lakhs as grant for validation of Proof of Concept.",
      "Up to ₹50 Lakhs of investment for market entry or commercialization.",
      "Zero collateral requirement.",
      "Helps bridge the gap between initial ideation and VC funding."
    ],
    documents: [
      "DPIIT Recognition Certificate",
      "Pitch Deck / Business Plan",
      "Incorporation Certificate",
      "Founders KYC Documents"
    ],
    process: [
      { step: "Registration", description: "Apply on the official Startup India portal." },
      { step: "Incubator Selection", description: "Select up to 3 incubators as per your sector preference." },
      { step: "Evaluation", description: "Incubator evaluates the pitch and business viability." },
      { step: "Approval & Funding", description: "Funds are released in tranches based on milestones." }
    ]
  },
  {
    id: "cgtmse",
    name: "Credit Guarantee Fund Trust for Micro and Small Enterprises",
    shortName: "CGTMSE",
    slug: "cgtmse",
    authority: "Government Scheme (MoMSME / SIDBI)",
    category: "Loan",
    tagline: "Collateral-free working capital and term loans backed by guarantee cover",
    avatar: "CG",
    subtitle: "Credit Guarantee for Micro & Small Enterprises",
    range: "Up to ₹5Cr",
    subsidy: "Guarantee Cover",
    interest: "Bank Rate",
    processing: "Standard Process",
    collateral: "Not Required",
    bestFor: "MSMEs needing large collateral-free loans",
    success: 85,
    badge: "Top Rated",
    color: "from-emerald-500 to-teal-500",
    overview: "CGTMSE provides credit guarantee to financial institutions to encourage them to provide collateral-free loans to Micro and Small Enterprises.",
    eligibility: [
      "New and existing Micro and Small Enterprises (Manufacturing and Services).",
      "Retail trade is also eligible for guarantee cover.",
      "Educational institutions, agriculture, and self-help groups are generally excluded."
    ],
    benefits: [
      "Collateral-free loans up to ₹5 Crore.",
      "Guarantee cover up to 75% to 85% of the sanctioned amount.",
      "Enhances creditworthiness for new businesses.",
      "Supports term loans and working capital facilities."
    ],
    documents: [
      "Udyam Registration",
      "Business Plan / Project Report",
      "Financial Projections & Past Audited Balance Sheets",
      "Standard KYC of Promoters"
    ],
    process: [
      { step: "Loan Application", description: "Apply for a business loan at an eligible bank/NBFC." },
      { step: "Bank Assessment", description: "Bank assesses viability and sanctions the collateral-free loan." },
      { step: "Guarantee Approval", description: "Bank applies to CGTMSE portal for guarantee cover." },
      { step: "Disbursement", description: "Upon guarantee approval and fee payment, loan is disbursed." }
    ]
  },
  {
    id: "mudra",
    name: "Pradhan Mantri MUDRA Yojana",
    shortName: "MUDRA",
    slug: "mudra-loan",
    authority: "Government Scheme (MUDRA / MoF)",
    category: "Loan",
    tagline: "Micro credit for shops, traders, manufacturers and service providers",
    avatar: "MU",
    subtitle: "Micro Units Development & Refinance Agency",
    range: "Up to ₹10L",
    subsidy: "No Subsidy",
    interest: "8–12% p.a.",
    processing: "Quick Process",
    collateral: "Not Required",
    bestFor: "Small businesses and shops needing working capital",
    success: 91,
    badge: "Most Popular",
    color: "from-yellow-500 to-orange-500",
    overview: "Pradhan Mantri MUDRA Yojana (PMMY) is a scheme set up for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises.",
    eligibility: [
      "Any Indian Citizen who has a business plan for a non-farm sector income generating activity.",
      "Business should be engaged in manufacturing, processing, trading or service sector.",
      "Need credit up to ₹10 lakh."
    ],
    benefits: [
      "No collateral or third-party guarantee required.",
      "Low interest rates.",
      "Covers a wide range of business activities.",
      "Available in three categories: Shishu (₹50k), Kishore (₹5L), and Tarun (₹10L)."
    ],
    documents: [
      "Proof of Identity & Residence",
      "Business License / Registration Certificate",
      "Project Report & Bank Statement",
      "Category Certificate (if applicable)"
    ],
    process: [
      { step: "Application", description: "Submit the filled MUDRA loan application to the bank." },
      { step: "Verification", description: "Bank verifies documents and business premises." },
      { step: "Sanction", description: "Loan is sanctioned based on project feasibility." },
      { step: "Disbursement", description: "Funds are released directly to the business account." }
    ]
  },
  {
    id: "stand-up-india",
    name: "Stand-Up India",
    shortName: "Stand-Up India",
    slug: "stand-up-india",
    authority: "Government Scheme (DFS / SIDBI)",
    category: "Loan",
    tagline: "Greenfield project finance for women and SC/ST entrepreneurs",
    avatar: "ST",
    subtitle: "Support for SC/ST and Women Entrepreneurs",
    range: "₹10L – ₹1Cr",
    subsidy: "Interest Subvention",
    interest: "Base Rate + 3%",
    processing: "Standard Process",
    collateral: "CGTMSE Covered",
    bestFor: "Women, SC/ST entrepreneurs setting up a greenfield enterprise",
    success: 85,
    badge: "Inclusive Growth",
    color: "from-purple-500 to-fuchsia-500",
    overview: "Stand-Up India Scheme facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch.",
    eligibility: [
      "SC/ST and/or women entrepreneurs, above 18 years of age.",
      "Loans are available for greenfield enterprises only.",
      "In case of non-individual enterprises, 51% of the shareholding must be held by SC/ST or Women entrepreneur."
    ],
    benefits: [
      "Access to large scale funding (₹10L to ₹1Cr).",
      "Composite loan inclusive of term loan and working capital.",
      "Credit guarantee cover through CGTMSE.",
      "Dedicated handholding support."
    ],
    documents: [
      "Caste Certificate (for SC/ST)",
      "Project Report",
      "Property Documents (if offering collateral)",
      "Identity and Address Proofs"
    ],
    process: [
      { step: "Portal Registration", description: "Register on the Stand-Up India portal." },
      { step: "Handholding", description: "Connect with lead district manager or handholding agency." },
      { step: "Bank Assessment", description: "Bank assesses the project report and creditworthiness." },
      { step: "Disbursement", description: "Sanctioning and phased disbursement of the loan amount." }
    ]
  },
  {
    id: "cgss",
    name: "Credit Guarantee Scheme for Startups",
    shortName: "CGSS",
    slug: "cgss",
    authority: "Government Scheme (DPIIT)",
    category: "Debt",
    tagline: "Guarantee-backed venture debt for recognised startups",
    avatar: "CG",
    subtitle: "Credit Guarantee Scheme for Startups",
    range: "Up to ₹10Cr",
    subsidy: "Guarantee Cover",
    interest: "Market Rate",
    processing: "Detailed Review",
    collateral: "Not Required",
    bestFor: "DPIIT recognised startups raising venture debt",
    success: 70,
    badge: "Venture Debt",
    color: "from-teal-500 to-emerald-500",
    overview: "CGSS provides credit guarantees to Member Institutions to finance eligible DPIIT recognized startups, reducing the risk for lenders providing venture debt.",
    eligibility: [
      "Must be a DPIIT-recognized startup.",
      "Startup should have reached the stage of stable revenue stream.",
      "Must not be in default to any lending institution."
    ],
    benefits: [
      "Enables collateral-free debt funding for startups.",
      "Guarantee cover up to 80% of the credit facility.",
      "Maximum guarantee cover up to ₹10 Crore per startup.",
      "Helps startups raise debt without diluting equity."
    ],
    documents: [
      "DPIIT Recognition Certificate",
      "Audited Financials & Revenue Projections",
      "Board Resolution",
      "Business Pitch Deck"
    ],
    process: [
      { step: "Debt Pitch", description: "Startup approaches a Member Institution (Bank/AIF) for venture debt." },
      { step: "Due Diligence", description: "Lender performs financial and business due diligence." },
      { step: "Guarantee Application", description: "Lender applies to NCGTC for the CGSS guarantee cover." },
      { step: "Sanction", description: "Loan is disbursed with the government guarantee backing." }
    ]
  },
  {
    id: "ahidf",
    name: "Animal Husbandry Infrastructure Development Fund",
    shortName: "AHIDF",
    slug: "ahidf",
    authority: "Government Scheme (DAHD)",
    category: "Subsidy",
    tagline: "Interest subvention and credit guarantee for livestock infrastructure",
    avatar: "AH",
    subtitle: "Animal Husbandry Infrastructure Development Fund",
    range: "No Upper Limit",
    subsidy: "3% Interest Subvention",
    interest: "Subsidized",
    processing: "Standard Process",
    collateral: "Standard",
    bestFor: "Dairy, meat processing, and animal feed plants",
    success: 82,
    badge: "Agri-Business",
    color: "from-green-500 to-emerald-500",
    overview: "AHIDF aims to incentivize investments by individual entrepreneurs, private companies, MSMEs, and FPOs in dairy processing, value addition infrastructure, meat processing, and animal feed plants.",
    eligibility: [
      "Farmer Producer Organizations (FPOs), MSMEs, Section 8 Companies, Private Companies.",
      "Individual entrepreneurs setting up eligible infrastructure.",
      "Must have a viable project report for animal husbandry infra."
    ],
    benefits: [
      "3% interest subvention on the loan.",
      "Up to 90% loan from scheduled banks.",
      "Credit guarantee up to 25% of the credit facility for MSMEs.",
      "Boosts domestic production and exports."
    ],
    documents: [
      "Detailed Project Report (DPR)",
      "Land Documents (Ownership/Lease)",
      "Statutory Clearances (FSSAI, Pollution Control, etc.)",
      "Promoter KYC and Financials"
    ],
    process: [
      { step: "Udyami Mitra Portal", description: "Apply online through the AHIDF / Udyami Mitra portal." },
      { step: "Approval", description: "Project is approved by the DAHD screening committee." },
      { step: "Bank Sanction", description: "Bank sanctions the term loan for the project." },
      { step: "Subsidy Claim", description: "Interest subvention is claimed directly by the lending bank." }
    ]
  },
  {
    id: "udyam",
    name: "Udyam Registration",
    shortName: "Udyam",
    slug: "udyam-registration",
    authority: "Government Registration (MoMSME)",
    category: "Certificate",
    tagline: "The base registration required for almost every MSME benefit",
    avatar: "UD",
    subtitle: "Official MSME Classification Certificate",
    range: "N/A",
    subsidy: "Registration",
    interest: "N/A",
    processing: "Instant",
    collateral: "N/A",
    bestFor: "Every micro, small, and medium enterprise in India",
    success: 99,
    badge: "Essential",
    color: "from-red-500 to-pink-500",
    overview: "Udyam Registration is a general business registration certificate issued by the Ministry of MSME that recognizes you as a micro, small, or medium enterprise, making you eligible for various government schemes.",
    eligibility: [
      "Any manufacturing or service sector business.",
      "Must have a valid Aadhaar number linked to the proprietor/director.",
      "Must have a valid PAN and GSTIN (if applicable)."
    ],
    benefits: [
      "Mandatory for availing MSME loans and subsidies (like MUDRA, PMEGP).",
      "Protection against delayed payments under MSME Act.",
      "Concession in electricity bills and trademark registration fees.",
      "Exemption from EMD in government tenders."
    ],
    documents: [
      "Aadhaar Card of the Applicant",
      "PAN Card of the Business / Applicant",
      "Bank Account Details (IFSC & Account Number)",
      "Business Address Proof"
    ],
    process: [
      { step: "Online Form", description: "Fill the free application on the official Udyam portal." },
      { step: "Aadhaar OTP", description: "Verify application using Aadhaar linked mobile OTP." },
      { step: "PAN Verification", description: "System auto-fetches investment/turnover details via PAN." },
      { step: "Certificate Issuance", description: "Instantly download your Udyam Registration Certificate." }
    ]
  },
  {
    id: "dpiit",
    name: "DPIIT Recognition",
    shortName: "DPIIT Recognition",
    slug: "dpiit-recognition",
    authority: "Government Recognition (DPIIT)",
    category: "Certificate",
    tagline: "Startup recognition for tax, IPR and funding scheme access",
    avatar: "DP",
    subtitle: "Department for Promotion of Industry and Internal Trade",
    range: "N/A",
    subsidy: "Registration",
    interest: "N/A",
    processing: "2-3 Days",
    collateral: "N/A",
    bestFor: "Innovative tech-driven or scalable startups",
    success: 95,
    badge: "For Startups",
    color: "from-blue-600 to-indigo-600",
    overview: "DPIIT Recognition certifies a company as an official 'Startup' in India, unlocking tax holidays, fast-track patent processing, and access to funding like SISFS.",
    eligibility: [
      "Company age less than 10 years from incorporation.",
      "Type: Pvt Ltd, LLP, or Registered Partnership Firm.",
      "Annual turnover never exceeded ₹100 Crores in any financial year.",
      "Working towards innovation, development, or improvement of products/services with high potential for employment/wealth creation."
    ],
    benefits: [
      "Income tax exemption for 3 consecutive years (Section 80IAC).",
      "80% rebate in patent filing fees; 50% in trademark filing.",
      "Access to Startup India Seed Fund and Fund of Funds.",
      "Easy winding up of company within 90 days under IBC."
    ],
    documents: [
      "Certificate of Incorporation / Registration",
      "Brief Pitch Deck / Website Link",
      "Details of Directors / Partners",
      "Note on Innovation / Scalability"
    ],
    process: [
      { step: "Startup India Portal", description: "Create an account on the Startup India portal." },
      { step: "Profile Completion", description: "Fill out the startup profile and upload incorporation docs." },
      { step: "Innovation Questionnaire", description: "Answer questions explaining how your startup is innovative and scalable." },
      { step: "Approval", description: "DPIIT reviews the application and issues the certificate within 48-72 hours." }
    ]
  },
  {
    id: "zed",
    name: "ZED Certification",
    shortName: "ZED Certification",
    slug: "zed-certification",
    authority: "Government Scheme (MoMSME / QCI)",
    category: "Certificate",
    tagline: "Quality and sustainability certification with heavy fee subsidy",
    avatar: "ZE",
    subtitle: "Zero Defect Zero Effect",
    range: "N/A",
    subsidy: "Up to 80% Fee Subsidy",
    interest: "N/A",
    processing: "Varies",
    collateral: "N/A",
    bestFor: "Manufacturing MSMEs improving quality",
    success: 90,
    badge: "Quality",
    color: "from-cyan-500 to-blue-500",
    overview: "ZED Certification encourages MSMEs to manufacture goods with 'Zero Defect' (high quality) and 'Zero Effect' (low environmental impact) through financial assistance for certification.",
    eligibility: [
      "All manufacturing MSMEs registered with Udyam.",
      "Willingness to adopt quality tools and energy-efficient manufacturing processes."
    ],
    benefits: [
      "Up to 80% subsidy on certification cost (Micro: 80%, Small: 60%, Medium: 50%).",
      "Financial assistance up to ₹3 Lakhs for moving towards Zero Effect solutions.",
      "Preference in government tenders and procurements.",
      "Interest rate concessions from select banks for ZED certified units."
    ],
    documents: [
      "Udyam Registration",
      "Factory Licenses & Pollution Clearances",
      "Quality Manuals and process documentation"
    ],
    process: [
      { step: "Pledge", description: "Take the ZED Pledge online to commit to quality and environment." },
      { step: "Basic/Bronze/Silver/Gold", description: "Apply for the desired certification level based on readiness." },
      { step: "Assessment", description: "Desktop and/or site assessment by a QCI-approved agency." },
      { step: "Certification", description: "Award of ZED Certificate and disbursement of subsidy." }
    ]
  },
  {
    id: "msme-cdp",
    name: "Micro and Small Enterprises Cluster Development",
    shortName: "MSME-CDP",
    slug: "msme-cdp",
    authority: "Government Scheme (MoMSME)",
    category: "Grant",
    tagline: "Shared infrastructure and common facility support for enterprise clusters",
    avatar: "MS",
    subtitle: "Cluster Development Programme",
    range: "Up to ₹20Cr",
    subsidy: "Up to 70% Grant",
    interest: "N/A",
    processing: "Long Term",
    collateral: "N/A",
    bestFor: "Groups of MSMEs in a specific geographic cluster",
    success: 60,
    badge: "Infrastructure",
    color: "from-purple-600 to-pink-600",
    overview: "MSME-CDP aims to enhance the productivity and competitiveness of Micro and Small Enterprises by extending financial assistance for setting up Common Facility Centers (CFCs) and Infrastructure Development.",
    eligibility: [
      "A cluster of at least 20 MSMEs producing similar products.",
      "Must form a Special Purpose Vehicle (SPV) as a Section 8 Company or Cooperative Society.",
      "Availability of land for the CFC."
    ],
    benefits: [
      "Grant of up to 70% of the project cost (up to 80% for special categories/women/SC/ST).",
      "Maximum project cost eligible for CFC is ₹20 Crore.",
      "Infrastructure development grant up to ₹15 Crore for new industrial estates.",
      "Access to shared expensive machinery and testing labs."
    ],
    documents: [
      "Diagnostic Study Report (DSR)",
      "Detailed Project Report (DPR)",
      "SPV Registration Documents",
      "Land Ownership Documents"
    ],
    process: [
      { step: "DSR Approval", description: "Submit Diagnostic Study Report to MSME-DI for approval." },
      { step: "SPV Formation", description: "Enterprises form an SPV and acquire land." },
      { step: "DPR Submission", description: "Submit Detailed Project Report to the State Government." },
      { step: "Final Approval", description: "National Level Steering Committee approves the grant." }
    ]
  },
  {
    id: "agri-infra",
    name: "Agriculture Infrastructure Fund",
    shortName: "Agri Infra Fund",
    slug: "agri-infra-fund",
    authority: "Government Scheme (Ministry of Agriculture)",
    category: "Subsidy",
    tagline: "Interest subvention for warehouses, cold chains and agri infrastructure",
    avatar: "AG",
    subtitle: "Post-Harvest Management Infrastructure",
    range: "Up to ₹2Cr per project",
    subsidy: "3% Interest Subvention",
    interest: "Capped at 9%",
    processing: "Standard Process",
    collateral: "CGTMSE up to ₹2Cr",
    bestFor: "Farmers, FPOs, Agri-entrepreneurs",
    success: 85,
    badge: "Agriculture",
    color: "from-orange-400 to-yellow-500",
    overview: "AIF is a medium-long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.",
    eligibility: [
      "Farmers, Agri-entrepreneurs, Startups, FPOs, PACS, Marketing Cooperative Societies.",
      "Projects like cold storage, warehouses, silos, pack houses, assaying units, etc."
    ],
    benefits: [
      "3% interest subvention for loans up to ₹2 Crore, available for 7 years.",
      "Credit guarantee coverage under CGTMSE for loans up to ₹2 Crore.",
      "Interest rate capped at 9% for loans up to ₹2 Crore.",
      "Can be converged with other subsidy schemes like MIDH or PMFME."
    ],
    documents: [
      "Bank Loan Application",
      "Detailed Project Report (DPR)",
      "Land Documents",
      "Promoter KYC"
    ],
    process: [
      { step: "Online Portal", description: "Register and apply on the AIF portal." },
      { step: "Bank Assessment", description: "Application is forwarded to the selected bank for loan appraisal." },
      { step: "Sanction", description: "Bank sanctions the term loan." },
      { step: "Subvention Claim", description: "Interest subvention is automatically credited to the loan account." }
    ]
  }
];

export function getSchemeBySlug(slug: string): SchemeData | undefined {
  return schemesData.find(s => s.slug === slug);
}
`;

fs.writeFileSync('src/data/schemes.ts', data);
