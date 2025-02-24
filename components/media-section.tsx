import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube } from "lucide-react"

export function MediaSection() {
  return (
    <section id="media" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Public Speaking</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Talks, podcasts, and presentations about AI, ML, and technology
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <Youtube className="w-8 h-8 text-primary" />
              <CardTitle>Conference Talks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">C-MIMI 2019 (Austin, Texas)</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Winning solution of the Pneumothorax Segmentation Challenge
                </p>
                <a
                  href="https://www.youtube.com/watch?v=Wuf0wE3Mrxg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Watch Video
                </a>
              </div>
              <div>
                <h4 className="font-medium">ML for the Youngest</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Beginners talk about different directions of machine learning
                </p>
                <a
                  href="https://www.youtube.com/watch?v=uKjJENmhoSw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Watch Video
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Podcasts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Kitchen Podcast</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mathematics, "Smekalochka," and Artificial Intelligence
                </p>
                <iframe
                  src="https://www.listennotes.com/podcasts/kitchen-podcast/2-ануар-аймолдин-поможет-ли-RJvobQ6wVFZ/embed/"
                  height="180px"
                  width="100%"
                  style={{ width: "1px", minWidth: "100%" }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
              <div>
                <h4 className="font-medium">RCG Podcast</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A casual conversation about data science and machine learning
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

