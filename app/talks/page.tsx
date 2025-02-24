import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const talks = [
  {
    title: "Winning solution of the Pneumothorax Segmentation Challenge",
    event: "C-MIMI 2019 (Austin, Texas)",
    videoId: "Wuf0wE3Mrxg",
    thumbnail: "/placeholder.svg?height=200&width=360",
  },
  {
    title: "ML for the Youngest",
    event: "Beginners talk about different directions of machine learning",
    videoId: "uKjJENmhoSw",
    thumbnail: "/placeholder.svg?height=200&width=360",
  },
  {
    title: "Career in Data Science",
    event: "Russian language talk about DS career paths",
    videoId: "O4fODysqKwI",
    thumbnail: "/placeholder.svg?height=200&width=360",
  },
]

const podcasts = [
  {
    title: "Kitchen Podcast",
    description: 'Mathematics, "Smekalochka," and Artificial Intelligence',
    embedUrl: "https://www.listennotes.com/podcasts/kitchen-podcast/2-ануар-аймолдин-поможет-ли-RJvobQ6wVFZ/embed/",
  },
  {
    title: "RCG Podcast",
    description: "A casual conversation about data science and machine learning",
    embedUrl: "https://zvuk.com/embed/episode?id=85052036",
  },
]

export default function TalksPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-12">Talks & Podcasts</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-8">Conference Talks</h2>
          <div className="grid gap-8">
            {talks.map((talk) => (
              <Card key={talk.videoId} className="overflow-hidden">
                <div className="grid md:grid-cols-[360px_1fr] gap-6">
                  <Link
                    href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                    target="_blank"
                    className="relative aspect-video bg-muted"
                  >
                    <Image src={talk.thumbnail || "/placeholder.svg"} alt={talk.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors" />
                  </Link>
                  <div className="p-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl mb-2">{talk.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{talk.event}</p>
                      <Link
                        href={`https://www.youtube.com/watch?v=${talk.videoId}`}
                        target="_blank"
                        className="mt-4 inline-block text-primary hover:underline"
                      >
                        Watch on YouTube
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Podcast Appearances</h2>
          <div className="grid gap-8">
            {podcasts.map((podcast, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{podcast.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{podcast.description}</p>
                  <div className="w-full">
                    <iframe
                      src={podcast.embedUrl}
                      height="180"
                      width="100%"
                      style={{ width: "1px", minWidth: "100%" }}
                      frameBorder="0"
                      scrolling="no"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

