import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  GitBranch, 
  Layers, 
  Palette, 
  Code, 
  CheckCircle2, 
  ExternalLink,
  Calendar,
  Users,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export default function Documentation() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-none border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
        <div className="relative z-10 max-w-4xl">
          <Badge className="mb-4 rounded-none">Documentação Técnica</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Documentação Completa do Projeto SOU
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Registro detalhado de todo o desenvolvimento do Sistema de Organização Unificada, desde a concepção até a implementação da identidade visual e integração com o ecossistema Grupo MMB.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Última atualização: Dezembro 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Manus AI + Administradora Mutual</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer group">
          <CardHeader>
            <GitBranch className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-base">Histórico</CardTitle>
            <CardDescription className="text-xs">8 fases de desenvolvimento</CardDescription>
          </CardHeader>
        </Card>
        <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer group">
          <CardHeader>
            <Layers className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-base">Arquitetura</CardTitle>
            <CardDescription className="text-xs">Stack técnico completo</CardDescription>
          </CardHeader>
        </Card>
        <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer group">
          <CardHeader>
            <Palette className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-base">Identidade Visual</CardTitle>
            <CardDescription className="text-xs">Logo v3 + Manual de Marca</CardDescription>
          </CardHeader>
        </Card>
        <Card className="rounded-none border-border shadow-sm hover:shadow-md transition-all cursor-pointer group">
          <CardHeader>
            <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle className="text-base">Status</CardTitle>
            <CardDescription className="text-xs">✅ Produção ativa</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      {/* Visão Geral do Projeto */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Visão Geral do Projeto
          </CardTitle>
          <CardDescription>
            Contexto e objetivos do Sistema de Organização Unificada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">O que é o SOU?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O <strong>SOU - Sistema de Organização Unificada</strong> é um portal profissional desenvolvido para centralizar a gestão de contratos, 
              cronogramas e documentação técnica do projeto de desenvolvimento do CRM da Administradora Mutual. O sistema evoluiu de um simples 
              portal de documentos para uma plataforma completa com identidade visual própria, totalmente integrada ao ecossistema institucional 
              do Grupo MMB.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Objetivos Principais</h3>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Organização</p>
                  <p className="text-xs text-muted-foreground">Estrutura lógica para gestão de documentos</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Unificação</p>
                  <p className="text-xs text-muted-foreground">Centralização de múltiplos processos</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Inteligência</p>
                  <p className="text-xs text-muted-foreground">Gestão eficiente e automatizada</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linha do Tempo */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            Linha do Tempo de Desenvolvimento
          </CardTitle>
          <CardDescription>
            8 fases principais desde a concepção até a produção
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                phase: "Fase 1",
                title: "Concepção e Estrutura Inicial",
                checkpoint: "86c5b206",
                items: [
                  "Portal com design Neo-Brutalism Corporativo",
                  "Páginas: Dashboard, Contratos, Cronogramas, Diagramas",
                  "Sistema de visualização de documentos",
                  "Integração de anexos técnicos A-H"
                ]
              },
              {
                phase: "Fase 2",
                title: "Expansão Documental",
                checkpoint: "80b1363d",
                items: [
                  "Contrato Original Why Consulting adicionado",
                  "Sistema de controle de versão implementado",
                  "Painel de histórico de revisões",
                  "Rastreabilidade completa de alterações"
                ]
              },
              {
                phase: "Fase 3",
                title: "Rebranding - Criação da Identidade SOU",
                checkpoint: "908ea62d",
                items: [
                  "Renomeação para 'SOU - Sistema de Organização Unificada'",
                  "Definição do conceito de marca",
                  "Atualização de metadados e títulos"
                ]
              },
              {
                phase: "Fase 4",
                title: "Design do Logotipo v1",
                checkpoint: "cb0f6518",
                items: [
                  "Logotipo SVG minimalista",
                  "Componente Logo.tsx reutilizável",
                  "Integração ao layout principal"
                ]
              },
              {
                phase: "Fase 5",
                title: "Evolução do Logotipo v2 'Núcleo Inteligente'",
                checkpoint: "34e67ea2",
                items: [
                  "Conceito de quadrados concêntricos",
                  "Estrutura: Azul > Preto > Azul > Branco",
                  "Manual da Marca SOU criado",
                  "Favicon atualizado"
                ]
              },
              {
                phase: "Fase 6",
                title: "Integração ao Portal",
                checkpoint: "74f1ae8a",
                items: [
                  "Manual da Marca disponível no portal",
                  "Sistema completo pronto para produção"
                ]
              },
              {
                phase: "Fase 7",
                title: "Refinamento Final - Logo v3",
                checkpoint: "f18adcba",
                items: [
                  "Alinhamento com arquivo oficial do cliente",
                  "Manual oficial PDF integrado",
                  "Conformidade total com identidade aprovada"
                ]
              },
              {
                phase: "Fase 8",
                title: "Portal de Marca Institucional",
                checkpoint: "Produção",
                items: [
                  "Portal marca.administradoramutual.com.br criado",
                  "6 variações do logo (H/V × Colorida/Branca/Negativa)",
                  "Integração ao ecossistema Grupo MMB",
                  "Layout responsivo com sidebar vertical"
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="relative pl-8 pb-6 border-l-2 border-border last:border-0 last:pb-0">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="rounded-none">{phase.phase}</Badge>
                    <Badge variant="secondary" className="rounded-none text-xs">{phase.checkpoint}</Badge>
                  </div>
                  <h3 className="font-semibold text-base">{phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Arquitetura Técnica */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Arquitetura Técnica
          </CardTitle>
          <CardDescription>
            Stack tecnológico e estrutura dos projetos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Code className="h-4 w-4" />
              SOU Portal (sou.administradoramutual.com.br)
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-none">React 19</Badge>
                  <Badge variant="secondary" className="rounded-none">Vite 7</Badge>
                  <Badge variant="secondary" className="rounded-none">Tailwind CSS 4</Badge>
                  <Badge variant="secondary" className="rounded-none">Wouter</Badge>
                  <Badge variant="secondary" className="rounded-none">shadcn/ui</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Páginas Principais</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dashboard (Home)</li>
                  <li>• Contratos e Anexos</li>
                  <li>• Cronogramas (Gantt Charts)</li>
                  <li>• Diagramas de Arquitetura</li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Code className="h-4 w-4" />
              Portal de Marca (marca.administradoramutual.com.br)
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium">Tecnologias</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-none">React 19</Badge>
                  <Badge variant="secondary" className="rounded-none">Tailwind CSS 4</Badge>
                  <Badge variant="secondary" className="rounded-none">Design System MMB</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Funcionalidades</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Navegação lateral com 12 marcas</li>
                  <li>• Manual da Marca SOU completo</li>
                  <li>• 6 variações do logo</li>
                  <li>• Guias de aplicação</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Identidade Visual */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Identidade Visual SOU
          </CardTitle>
          <CardDescription>
            Conceito "Inteligência Unificada" e elementos visuais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Conceito do Logo</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              O logotipo foi desenvolvido com base no conceito de <strong>"Inteligência Unificada"</strong>, representando a centralização 
              inteligente de processos e contratos através de uma estrutura de quadrados concêntricos.
            </p>
            <div className="grid gap-3 md:grid-cols-4">
              <div className="p-3 border border-border rounded-none bg-primary/5">
                <div className="h-8 w-8 bg-primary rounded-sm mb-2"></div>
                <p className="text-xs font-medium">Camada Externa</p>
                <p className="text-xs text-muted-foreground">Azul #0066CC</p>
              </div>
              <div className="p-3 border border-border rounded-none bg-card">
                <div className="h-8 w-8 bg-black rounded-sm mb-2"></div>
                <p className="text-xs font-medium">Camada 2</p>
                <p className="text-xs text-muted-foreground">Preto #000000</p>
              </div>
              <div className="p-3 border border-border rounded-none bg-primary/5">
                <div className="h-8 w-8 bg-primary rounded-sm mb-2"></div>
                <p className="text-xs font-medium">Camada 3</p>
                <p className="text-xs text-muted-foreground">Azul #0066CC</p>
              </div>
              <div className="p-3 border border-border rounded-none bg-card">
                <div className="h-8 w-8 bg-white border border-border rounded-sm mb-2"></div>
                <p className="text-xs font-medium">Núcleo</p>
                <p className="text-xs text-muted-foreground">Branco #FFFFFF</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3">Tipografia</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border border-border rounded-none">
                <div>
                  <p className="font-bold text-lg">Poppins Bold (700)</p>
                  <p className="text-xs text-muted-foreground">Títulos principais H1, H2</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-none">
                <div>
                  <p className="font-semibold">Poppins SemiBold (600)</p>
                  <p className="text-xs text-muted-foreground">Subtítulos H3, H4</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-none">
                <div>
                  <p className="font-normal">Poppins Regular (400)</p>
                  <p className="text-xs text-muted-foreground">Corpo de texto</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Domínios e Status */}
      <Card className="rounded-none border-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Domínios e Ambientes
          </CardTitle>
          <CardDescription>
            Portais em produção e ambientes de desenvolvimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border border-border rounded-none hover:bg-accent/50 transition-colors">
              <div>
                <p className="font-medium">sou.administradoramutual.com.br</p>
                <p className="text-sm text-muted-foreground">Portal SOU Principal</p>
              </div>
              <Badge className="rounded-none bg-green-600">✅ Ativo</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-none hover:bg-accent/50 transition-colors">
              <div>
                <p className="font-medium">marca.administradoramutual.com.br</p>
                <p className="text-sm text-muted-foreground">Portal de Marca Institucional</p>
              </div>
              <Badge className="rounded-none bg-green-600">✅ Ativo</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="rounded-none border-border shadow-sm bg-primary/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Documentação Completa Disponível</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Para acessar o histórico detalhado em formato Markdown, visite a seção de documentos técnicos ou 
            entre em contato com a equipe de desenvolvimento.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="rounded-none" asChild>
              <a href="/documentacao_completa.md" target="_blank" rel="noopener noreferrer">
                Download Documentação Completa
              </a>
            </Button>
            <Link href="/contratos">
              <Button variant="outline" className="rounded-none">
                Ver Contratos
              </Button>
            </Link>
            <Button variant="outline" className="rounded-none" asChild>
              <a href="https://marca.administradoramutual.com.br" target="_blank" rel="noopener noreferrer">
                Portal de Marca <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
