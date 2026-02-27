import { notFound } from 'next/navigation';
import { getPostBySlug, getSortedPostsData } from '@/lib/markdown';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-violet-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        <article className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <time>{new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</time>
          </div>

          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>,
              p: ({ children }) => <p className="text-base leading-relaxed mb-4 text-zinc-300">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-300">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-zinc-300">{children}</ol>,
              code: ({ children }) => (
                <code className="bg-zinc-900 px-2 py-1 rounded text-sm text-violet-400">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
