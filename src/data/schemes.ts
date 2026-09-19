export interface SchemeData {
  id: string;
  name: string;
  slug: string;
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
    id: "mudra",
    name: "MUDRA Loan",
    slug: "mudra-loan",
    subtitle: "Micro Units Development & Refinance Agency",
    range: "₹50K – ₹10L",
    subsidy: "No Subsidy",
    interest: "8–12% p.a.",
    processing: "Quick Process",
    collateral: "Not Required",
    bestFor: "Small businesses and shops needing working capital",
    success: 91,
    badge: "Most Popular",
    color: "from-orange-500 to-red-500",
    overview: "Pradhan Mantri MUDRA Yojana (PMMY) is a scheme set up by the Government of India for providing loans up to 10 lakh to the non-corporate, non-farm small/micro enterprises.",
    eligibility: [
      "Any Indian Citizen who has a business plan for a non-farm sector income generating activity.",
      "Business should be engaged in manufacturing, processing, trading or service sector.",
      "Need credit up to ₹10 lakh."
    ],
    benefits: [
      "No collateral or third-party guarantee required.",
      "Low interest rates.",
      "Covers a wide range of business activities.",
      "Available in three categories: Shishu, Kishore, and Tarun."
    ],
    documents: [
      "Proof of Identity (Voter ID, Aadhaar, PAN etc.)",
      "Proof of Residence",
      "Business License / Registration Certificate",
      "Project Report & Bank Statement"
    ],
    process: [
      { step: "Application", description: "Submit the filled MUDRA loan application to the bank." },
      { step: "Verification", description: "Bank verifies documents and business premises." },
      { step: "Sanction", description: "Loan is sanctioned based on project feasibility." },
      { step: "Disbursement", description: "Funds are released directly to the supplier or business account." }
    ]
  },
  {
    id: "startup-india",
    name: "Startup India Seed Fund",
    slug: "startup-india-seed-fund",
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
      "Should not have received more than ₹10 lakh of monetary support under any other Central or State scheme."
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
    id: "stand-up-india",
    name: "Stand-Up India",
    slug: "stand-up-india",
    subtitle: "Financial support for SC/ST and Women Entrepreneurs",
    range: "₹10L – ₹1Cr",
    subsidy: "Interest Subvention",
    interest: "Base Rate + 3%",
    processing: "Standard Process",
    collateral: "CGTMSE Covered",
    bestFor: "Women, SC/ST entrepreneurs setting up a greenfield enterprise",
    success: 85,
    badge: "Inclusive Growth",
    color: "from-green-500 to-emerald-500",
    overview: "Stand-Up India Scheme facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one SC or ST borrower and at least one woman borrower per bank branch.",
    eligibility: [
      "SC/ST and/or women entrepreneurs, above 18 years of age.",
      "Loans are available for greenfield enterprises only.",
      "In case of non-individual enterprises, 51% of the shareholding must be held by either SC/ST or Women entrepreneur."
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
      "Property Documents (if any collateral is offered)",
      "Identity and Address Proofs"
    ],
    process: [
      { step: "Portal Registration", description: "Register on the Stand-Up India portal." },
      { step: "Handholding", description: "Connect with lead district manager or handholding agency if required." },
      { step: "Bank Assessment", description: "Bank assesses the project report and creditworthiness." },
      { step: "Disbursement", description: "Sanctioning and phased disbursement of the loan amount." }
    ]
  },
  {
    id: "pmegp",
    name: "PMEGP",
    slug: "pmegp",
    subtitle: "PM Employment Generation Programme",
    range: "₹10L – ₹50L",
    subsidy: "15–35% Subsidy",
    interest: "Bank Rate",
    processing: "Standard Process",
    collateral: "Not Required",
    bestFor: "Manufacturing & service sector enterprises",
    success: 80,
    badge: "High Subsidy",
    color: "from-purple-500 to-indigo-500",
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
  }
];

export function getSchemeBySlug(slug: string): SchemeData | undefined {
  return schemesData.find(s => s.slug === slug);
}
