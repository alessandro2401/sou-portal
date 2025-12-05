import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Download } from "lucide-react";
import { Streamdown } from "streamdown";
import { useState, useEffect } from "react";

export default function Cronogramas() {
  const [analysisContent, setAnalysisContent] = useState<string>("");

  useEffect(() => {
    fetch("/documents/Analise_Diagramas_Desenvolvimento.md")
      .then(res => res.text())
      .then(text => setAnalysisContent(text))
      .catch(err => console.error("Failed to load analysis", err));
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Cronogramas e Prazos</h1>
          <p className="text-muted-foreground mt-1">
            Acompanhamento detalhado das fases, sprints e marcos de entrega do projeto.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-none">
            <Download className="mr-2 h-4 w-4" />
            Exportar Gantt
          </Button>
        </div>
      </div>

      {/* Gantt Chart Visualization */}
      <Card className="rounded-none border-border shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border bg-muted/10">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Cronograma Mestre (Gantt)</CardTitle>
              <CardDescription>Visão completa de 12 meses de desenvolvimento</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex items-center"><div className="w-3 h-3 bg-blue-500 mr-2"></div>Dev</span>
              <span className="flex items-center"><div className="w-3 h-3 bg-orange-500 mr-2"></div>Integrações</span>
              <span className="flex items-center"><div className="w-3 h-3 bg-purple-500 mr-2"></div>Testes</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <div className="min-w-[800px] p-6">
            <img 
              src="/images/diagrams/Diagrama_Gantt_CRM.png" 
              alt="Cronograma Gantt do Projeto CRM" 
              className="w-full h-auto border border-border shadow-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Timeline Phases */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-none border-border shadow-sm h-full">
          <CardHeader>
            <CardTitle>Fases do Projeto</CardTitle>
            <CardDescription>Status atual e progresso por etapa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { title: "Levantamento & Requisitos", date: "Semanas 1-4", status: "current", desc: "Definição de escopo e aprovação técnica" },
                { title: "Design Arquitetural", date: "Semanas 5-8", status: "upcoming", desc: "Modelagem C4 e Threat Modeling" },
                { title: "Desenvolvimento MVP", date: "Semanas 9-12", status: "upcoming", desc: "Entrega da versão 1.0 funcional" },
                { title: "Integrações & Módulos", date: "Semanas 13-40", status: "upcoming", desc: "Conexão com APIs e expansão de features" },
                { title: "Go-live & Estabilização", date: "Semanas 51-60", status: "upcoming", desc: "Deploy em produção e suporte assistido" },
              ].map((phase, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary group-[.is-active]:text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {phase.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                     phase.status === 'current' ? <Clock className="w-5 h-5 animate-pulse" /> : 
                     <div className="w-3 h-3 bg-white rounded-full" />}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border bg-card shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-foreground">{phase.title}</div>
                      <time className="font-mono text-xs text-muted-foreground">{phase.date}</time>
                    </div>
                    <div className="text-sm text-muted-foreground">{phase.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-none border-border shadow-sm h-full flex flex-col">
          <CardHeader>
            <CardTitle>Análise Detalhada</CardTitle>
            <CardDescription>Explicação técnica dos prazos e dependências</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto max-h-[600px] bg-muted/30 p-6 border-t border-border">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <Streamdown>{analysisContent}</Streamdown>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
