import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Network, ArrowRight, ShieldCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-none border border-border bg-card p-8 md:p-12">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Projeto em Andamento
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            SOU - Sistema de Organização Unificada
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Central unificada de documentação, contratos e acompanhamento técnico do desenvolvimento do CRM da Administradora Mutual.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contratos">
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90">
                <FileText className="mr-2 h-4 w-4" />
                Ver Contrato Consolidado
              </Button>
            </Link>
            <Link href="/cronogramas">
              <Button size="lg" variant="outline" className="rounded-none bg-background">
                <Calendar className="mr-2 h-4 w-4" />
                Acompanhar Cronograma
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-none border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status do Projeto</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Fase 1</div>
            <p className="text-xs text-muted-foreground">Levantamento & Requisitos</p>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documentos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Contratos e Anexos disponíveis</p>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Proteção Jurídica</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Ativa</div>
            <p className="text-xs text-muted-foreground">Contrato consolidado vigente</p>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Marco</CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">MVP v1.0</div>
            <p className="text-xs text-muted-foreground">Previsão: 12 semanas</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/contratos">
          <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer h-full group">
            <CardHeader>
              <div className="mb-4 p-3 bg-primary/5 w-fit rounded-none group-hover:bg-primary/10 transition-colors">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Contratos & Jurídico</CardTitle>
              <CardDescription>
                Acesse o Contrato Mestre Consolidado e todos os termos legais de proteção.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary font-medium">
                Acessar documentos <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/cronogramas">
          <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer h-full group">
            <CardHeader>
              <div className="mb-4 p-3 bg-primary/5 w-fit rounded-none group-hover:bg-primary/10 transition-colors">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Cronogramas & Prazos</CardTitle>
              <CardDescription>
                Visualize o Gantt Chart, marcos de entrega e fases do desenvolvimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary font-medium">
                Ver timeline <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/diagramas">
          <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer h-full group">
            <CardHeader>
              <div className="mb-4 p-3 bg-primary/5 w-fit rounded-none group-hover:bg-primary/10 transition-colors">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Arquitetura & Diagramas</CardTitle>
              <CardDescription>
                Explore a arquitetura do sistema, fluxos de dados e integrações técnicas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary font-medium">
                Ver arquitetura <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Updates */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle>Atualizações Recentes</CardTitle>
          <CardDescription>Histórico de alterações e uploads no portal.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: "Contrato Consolidado Final publicado", date: "Hoje", type: "Jurídico" },
              { title: "Anexos A-H adicionados", date: "Hoje", type: "Técnico" },
              { title: "Diagramas de Arquitetura atualizados", date: "Hoje", type: "Técnico" },
              { title: "Cronograma Gantt v1.0 aprovado", date: "Hoje", type: "Gestão" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.type}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{item.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
