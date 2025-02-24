import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const posts = [
  {
    title: "Getting Started with Machine Learning",
    description: "A beginner's guide to ML concepts and practical applications",
    date: "2024-02-23",
    slug: "getting-started-with-ml",
  },
  {
    title: "Building AI Communities",
    description: "Lessons learned from founding DSML KZ",
    date: "2024-02-20",
    slug: "building-ai-communities",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-secondary/5 transition-colors">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

