import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const experiences = [
  {
    title: "Senior Machine Learning Engineer",
    company: "Careem",
    location: "Dubai, UAE",
    period: "2023 - Present",
    companyUrl: "https://www.careem.com",
    description: [
      {
        title: "Matching and ETA Systems:",
        points: [
          "Launched priority-based dispatching reducing delivery time by 2% and courier time by 2.5%",
          "Designed real-time GPS spoofing detection, reducing affected orders by 93%",
          "Improved ETA accuracy by 10% through stage splitter system",
        ],
      },
      {
        title: "Courier Operating Model Transformation:",
        points: [
          "Built end-to-end planning system for zone definition and shift optimization",
          "Achieved $1.5M annual savings through improved marketplace balance",
        ],
      },
    ],
  },
  {
    title: "Senior AI Engineer",
    company: "Checklens GmbH",
    location: "Salzburg, Austria",
    period: "2021 - 2022",
    companyUrl: "https://checklens.ai/",
    description: [
      {
        title: "AI Checkout Automation:",
        points: [
          "Led Checkscan development for IKEA and Netto, improving profitability by 0.5%",
          "Trained models for real-time product recognition (15,000+ items)",
          "Automated video ingestion and annotation pipeline",
        ],
      },
    ],
  },
  {
    title: "Senior AI Researcher",
    company: "Harrison.ai",
    location: "Sydney, Australia",
    period: "2020 - 2021",
    companyUrl: "https://harrison.ai/",
    description: [
      {
        title: "Annalise CXR Solution:",
        points: [
          "Built training pipeline for detecting 120+ chest X-ray pathologies",
          "Improved diagnostic accuracy by 45% in 250+ Australian radiology clinics",
          "Reduced radiologist workload by 20% through automated reporting",
        ],
      },
    ],
  },
  {
    title: "Head of Artificial Intelligence",
    company: "BTS Digital",
    location: "Astana, Kazakhstan",
    period: "2018 - 2020",
    companyUrl: "https://btsdigital.kz/eng",
    description: [
      {
        title: "Leadership & Innovation:",
        points: [
          "Established ML/AI function and scaled team from 0 to 15 members",
          "Launched Digital ID with 2M+ monthly verifications",
          "Developed ASR service for government call center automation",
          "Created Ainews platform with smart recommendations",
        ],
      },
      {
        title: "Community Building:",
        points: [
          "Organized Kazakhstan's first AI course and research seminars",
          "Developed local AI talent pipeline",
          "Defined vision and strategic project roadmap",
        ],
      },
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    <Link href={exp.companyUrl} target="_blank" className="text-primary hover:underline">
                      {exp.company}
                    </Link>
                    {` (${exp.location})`}
                  </CardDescription>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {exp.description.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-medium mb-2">{section.title}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {section.points.map((point, pidx) => (
                      <li key={pidx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

