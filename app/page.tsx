import { Button } from "@/components/ui/button"
import { AnimatedDatabek } from "@/components/animated-databek"
import { Github, Linkedin, Mail, Brain, Trophy, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[400px_1fr]">
            <div className="relative aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_photo.png-pkjLRhHAiOTmMKrxYLATtKtoBn3BnI.jpeg"
                alt="Profile photo"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm Anuar Aimoldin
                </h1>
                <p className="max-w-[600px] text-xl text-muted-foreground">
                  ML Engineer, Kaggle Master & Founder of DSML KZ Community
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/sneddy" target="_blank">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/anuar-aimoldin/" target="_blank">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:aimoldin@gmail.com">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">DSML KZ Community Founder</h2>
              <p className="text-lg text-muted-foreground">
                Founded and leading Kazakhstan's largest AI community, fostering knowledge sharing and professional
                growth in AI/ML.
              </p>
              <Link href="https://v0-hugo-template-setup.vercel.app/" target="_blank">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Visit Community Website
                </Button>
              </Link>
            </div>
            <AnimatedDatabek />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="gradient-border">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>ML Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  10+ years of expertise in AI, ML, and Computer Vision. Published in The Lancet (Impact Factor 98.4).
                </p>
              </CardContent>
            </Card>
            <Card className="gradient-border">
              <CardHeader>
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kaggle Competitions Master (#14 out of 200,000 users). SIIM-ACR Pneumothorax Segmentation Winner.
                </p>
              </CardContent>
            </Card>
            <Card className="gradient-border">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built and led top-tier R&D teams, launching AI/ML solutions globally across industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

