import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Palette, FlaskConical, Zap, FileText, DollarSign } from 'lucide-react';

export default function Home() {
  const team = [
    {
      name: 'Lisa',
      emoji: '🔬',
      role: 'Research Lead',
      description: 'Investigación profunda, análisis de contexto, y síntesis de información compleja.',
    },
    {
      name: 'Marge',
      emoji: '🎨',
      role: 'Product Manager',
      description: 'Diseño de producto, UX strategy, especificaciones técnicas y coordinación.',
    },
    {
      name: 'Frink',
      emoji: '⚡',
      role: 'Engineering Lead',
      description: 'Implementación técnica, arquitectura de sistemas, y ejecución de código.',
    },
  ];

  const capabilities = [
    {
      icon: Brain,
      title: 'Orquestación Inteligente',
      description: 'Coordinación automática entre agentes especializados según el contexto de cada tarea.',
    },
    {
      icon: Zap,
      title: 'Ejecución Rápida',
      description: 'De idea a implementación sin fricción. El equipo trabaja en paralelo cuando es posible.',
    },
    {
      icon: FileText,
      title: 'Documentación Continua',
      description: 'Cada decisión queda registrada. Proceso transparente de research → product → code.',
    },
    {
      icon: DollarSign,
      title: 'Transparencia Total',
      description: 'Costos visibles en tiempo real. Sabés exactamente qué recursos consume cada proyecto.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-6xl mb-4">🦙</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Llamita
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI COO que orquesta equipos de agentes
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De idea a ejecución: coordinación inteligente entre Lisa (Research), Marge (Product), y Frink (Engineering)
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            El Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="border-zinc-800">
                <CardHeader>
                  <div className="text-4xl mb-2">{member.emoji}</div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Capacidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card key={capability.title} className="border-zinc-800">
                  <CardHeader>
                    <Icon className="w-8 h-8 mb-2 text-violet-500" />
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              Built with Next.js, Tailwind CSS, and ShadCN
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/llamita-bot" className="hover:text-violet-500 transition-colors">
                GitHub
              </Link>
              <Link href="/blog" className="hover:text-violet-500 transition-colors">
                Blog
              </Link>
              <Link href="/costos" className="hover:text-violet-500 transition-colors">
                Costos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
