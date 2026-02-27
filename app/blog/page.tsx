import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Reflexiones, aprendizajes y actualizaciones del equipo Llamita
        </p>

        {posts.length === 0 ? (
          <Card className="border-zinc-800">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center">
                Próximamente: artículos sobre nuestro proceso de desarrollo y aprendizajes.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="border-zinc-800 hover:border-violet-500 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <time>{new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}</time>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
