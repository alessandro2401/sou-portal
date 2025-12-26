import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Shield, CheckCircle, History, AlertCircle, FileSearch } from "lucide-react";
import { useState } from "react";
import { Streamdown } from "streamdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VersionHistory, Version } from "@/components/VersionHistory";

// Mock version history data
const mockVersions: Record<string, Version[]> = {
  "contrato-consolidado": [
    { id: "v1.2", version: "1.2", date: "05/12/2025", author: "Jurídico SMMB", changes: "Ajuste na cláusula de SLA e penalidades", status: "current" },
    { id: "v1.1", version: "1.1", date: "04/12/2025", author: "Why Consulting", changes: "Revisão técnica dos anexos", status: "outdated" },
    { id: "v1.0", version: "1.0", date: "01/12/2025", author: "Sistema", changes: "Consolidação inicial dos contratos", status: "outdated" }
  ],
  "contrato-original-why": [
    { id: "v1.0", version: "1.0", date: "28/11/2025", author: "Why Consulting", changes: "Envio original para análise", status: "current" }
  ],
  "default": [
    { id: "v1.0", version: "1.0", date: "05/12/2025", author: "Sistema", changes: "Criação do documento", status: "current" }
  ]
};

// Mock data for documents - in a real app this would come from an API or file system scan
const documents = [
  {
    id: "primeiro-contrato-why",
    title: "Primeiro Contrato Assinado com a Why",
    description: "Contrato de Assessment assinado digitalmente via D4Sign - primeiro acordo formal entre Grupo MMB e Why Consulting.",
    date: "12/12/2025",
    status: "Assinado",
    type: "Contrato",
    path: "/primeiro-contrato-why-consulting.pdf"
  },
  {
    id: "contrato-why-v2",
    title: "Contrato Why Consulting v2 + Anexo 1",
    description: "Última versão do contrato enviada pela Why Consulting para análise e aprovação do Grupo MMB.",
    date: "12/12/2025",
    status: "Em Análise",
    type: "Contrato",
    path: "/contrato-why-v2-anexo1.pdf",
    hasAnalysis: true,
    analysisData: {
      totalChanges: 5,
      pendingChanges: 4,
      comments: 1,
      analysts: ["KISLEU FERREIRA", "Adriele Roque"],
      lastUpdate: "22/12/2024"
    }
  },
  {
    id: "historico-relacao",
    title: "Histórico da Relação - Grupo MMB e Why Consulting",
    description: "Relatório completo apresentando a história da parceria, projetos realizados (Assessment e Data Warehouse) e status atual.",
    date: "10/12/2025",
    status: "Oficial",
    type: "Relatório",
    path: "/historico-grupo-mmb-why-consulting.pdf"
  },
  {
    id: "contrato-original-why",
    title: "Contrato Original - Why Consulting (v1)",
    description: "Primeira versão do contrato enviada pela contratada para análise e comparação.",
    date: "01/11/2025",
    status: "Referência",
    type: "Primeira Versão (sem uso)",
    path: "/documents/Contrato_Original_Why_Consulting.md"
  },
  {
    id: "contrato-consolidado",
    title: "Contrato sem uso",
    description: "Documento principal consolidado com todas as cláusulas e proteções jurídicas.",
    date: "15/10/2025",
    status: "Sem Valor",
    type: "Sugestão",
    path: "/documents/Contrato_Consolidado_Final.md"
  },
  {
    id: "anexo-a",
    title: "Anexo A - Especificações Técnicas (SOW)",
    description: "Sugestão criada pelo Grupo MMB. Detalhamento do escopo, módulos e requisitos funcionais. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_A_SOW_Especificacoes.md"
  },
  {
    id: "anexo-b",
    title: "Anexo B - Integrações",
    description: "Sugestão criada pelo Grupo MMB. Especificações de APIs e interoperabilidade com sistemas terceiros. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_B_Integracoes.md"
  },
  {
    id: "anexo-c",
    title: "Anexo C - Segurança e SDLC",
    description: "Sugestão criada pelo Grupo MMB. Requisitos de segurança da informação e ciclo de desenvolvimento seguro. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_C_Seguranca_SDLC.md"
  },
  {
    id: "anexo-d",
    title: "Anexo D - SLA e Créditos",
    description: "Sugestão criada pelo Grupo MMB. Acordo de Nível de Serviço e tabela de penalidades. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_D_Creditos_SLA.md"
  },
  {
    id: "anexo-e",
    title: "Anexo E - Preços e Pagamento",
    description: "Sugestão criada pelo Grupo MMB. Tabela de valores, parcelas e condições comerciais. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_E_Precos_Pagamento.md"
  },
  {
    id: "anexo-f",
    title: "Anexo F - Handover Checklist",
    description: "Sugestão criada pelo Grupo MMB. Lista de verificação para transição e entrega do projeto. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Pendente",
    type: "Anexo",
    path: "/documents/Anexo_F_Handover_Checklist.md"
  },
  {
    id: "anexo-g",
    title: "Anexo G - Não-Concorrência",
    description: "Sugestão criada pelo Grupo MMB. Lista de segmentos e concorrentes restritos. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_G_Segmentos_Concorrentes.md"
  },
  {
    id: "anexo-h",
    title: "Anexo H - Propriedade Intelectual",
    description: "Sugestão criada pelo Grupo MMB. Procedimentos de registro e titularidade no INPI. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Sem Valor",
    type: "Anexo",
    path: "/documents/Anexo_H_PI_Titularidade.md"
  },
  {
    id: "manual-marca",
    title: "Manual de Identidade Visual",
    description: "Documento oficial com diretrizes de marca, logo e aplicações.",
    date: "06/12/2025",
    status: "Oficial",
    type: "PDF",
    path: "/documents/Manual_de_Identidade_Visual.pdf"
  }
];

export default function Contratos() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [docContent, setDocContent] = useState<string>("");
  const [currentVersions, setCurrentVersions] = useState<Version[]>([]);
  const [activeVersionId, setActiveVersionId] = useState<string>("");

  const loadDocument = async (docId: string, path: string) => {
    // Check if it's a PDF file
    if (path.endsWith('.pdf')) {
      // Open PDF in new tab instead of trying to render it
      window.open(path, '_blank');
      return;
    }
    
    try {
      const response = await fetch(path);
      const text = await response.text();
      setDocContent(text);
      
      // Load versions for this doc
      const versions = mockVersions[docId] || mockVersions["default"];
      setCurrentVersions(versions);
      setActiveVersionId(versions[0].id);
      setSelectedDoc(docId);
    } catch (error) {
      console.error("Error loading document:", error);
      setDocContent("Erro ao carregar o documento. Por favor, tente novamente.");
    }
  };

  const handleVersionSelect = (version: Version) => {
    setActiveVersionId(version.id);
    // In a real app, this would fetch the specific version content
    // For demo, we'll just show a toast or update content slightly
    console.log(`Switching to version ${version.version}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Contratos e Documentação</h1>
          <p className="text-muted-foreground mt-1">
            Repositório oficial de documentos legais e técnicos do projeto.
          </p>
        </div>
        <Button className="rounded-none bg-primary hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Baixar Pacote Completo (.zip)
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <Card key={doc.id} className="rounded-none border-border shadow-sm hover:shadow-md transition-all flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <div className={`px-2 py-1 text-xs font-medium border ${
                  doc.type === 'Principal' 
                    ? 'bg-primary/10 text-primary border-primary/20' 
                    : 'bg-muted text-muted-foreground border-border'
                }`}>
                  {doc.type}
                </div>
                <div className="flex items-center text-xs text-green-600 font-medium">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {doc.status}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {doc.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <div className="text-xs text-muted-foreground mb-4 flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                Proteção Jurídica Ativa
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-none border-primary/20 hover:bg-primary/5 hover:text-primary"
                        onClick={() => loadDocument(doc.id, doc.path)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Visualizar
                      </Button>
                    </DialogTrigger>
                  <DialogContent className="max-w-6xl h-[85vh] flex flex-col p-0 rounded-none gap-0">
                    <DialogHeader className="p-6 border-b border-border shrink-0">
                      <div className="flex items-center justify-between">
                        <DialogTitle className="flex items-center gap-2">
                          {doc.title}
                          <Badge variant="outline" className="ml-2 font-normal text-xs">
                            v{currentVersions.find(v => v.id === activeVersionId)?.version || "1.0"}
                          </Badge>
                        </DialogTitle>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="rounded-none h-8">
                            <History className="mr-2 h-3 w-3" />
                            Comparar Versões
                          </Button>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="flex flex-1 overflow-hidden">
                      {/* Document Content */}
                      <div className="flex-1 overflow-y-auto p-8 bg-muted/30">
                        <div className="max-w-3xl mx-auto bg-background border border-border shadow-sm p-8 min-h-full">
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <Streamdown>{docContent}</Streamdown>
                          </div>
                        </div>
                      </div>

                      {/* Version Sidebar */}
                      <VersionHistory 
                        versions={currentVersions}
                        currentVersionId={activeVersionId}
                        onSelectVersion={handleVersionSelect}
                      />
                    </div>

                    <div className="p-4 border-t border-border bg-background flex justify-between items-center shrink-0">
                      <div className="text-xs text-muted-foreground">
                        Última atualização: {currentVersions[0]?.date} por {currentVersions[0]?.author}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="rounded-none">Fechar</Button>
                        <Button className="rounded-none bg-primary">
                          <Download className="mr-2 h-4 w-4" />
                          Baixar Versão Atual
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Botão de Análise de Alterações - apenas para documentos com análise */}
                {doc.hasAnalysis && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full rounded-none border-orange-500/30 bg-orange-50 hover:bg-orange-100 text-orange-700 hover:text-orange-800 dark:bg-orange-950 dark:text-orange-300 dark:hover:bg-orange-900"
                      >
                        <FileSearch className="mr-2 h-4 w-4" />
                        Ver Análise de Alterações
                        <Badge variant="secondary" className="ml-2 bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                          {doc.analysisData.pendingChanges} pendentes
                        </Badge>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 rounded-none gap-0">
                      <DialogHeader className="p-6 border-b border-border shrink-0 bg-orange-50 dark:bg-orange-950">
                        <DialogTitle className="flex items-center gap-2 text-orange-900 dark:text-orange-100">
                          <FileSearch className="h-5 w-5" />
                          Análise de Alterações - {doc.title}
                        </DialogTitle>
                        <div className="flex gap-2 mt-3">
                          <Badge variant="outline" className="text-xs">
                            {doc.analysisData.totalChanges} alterações identificadas
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {doc.analysisData.comments} comentário(s)
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Analistas: {doc.analysisData.analysts.join(", ")}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Última atualização: {doc.analysisData.lastUpdate}
                          </Badge>
                        </div>
                      </DialogHeader>
                      
                      <div className="flex-1 overflow-y-auto p-8 bg-muted/30">
                        <div className="max-w-4xl mx-auto space-y-6">
                          {/* Alteração 1 */}
                          <div className="bg-background border border-border shadow-sm p-6 rounded-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">1. Qualificação do Representante Legal</h3>
                                <p className="text-sm text-muted-foreground mt-1">Cláusula 1.2 - CONTRATADA (WHY CONSULTING LTDA)</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200">Pendente</Badge>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded">
                                <p className="text-sm font-medium text-red-900 dark:text-red-100 mb-2">Sugestão de KISLEU FERREIRA (16/12, 13:56):</p>
                                <p className="text-sm text-red-800 dark:text-red-200">Adicionar: "INDICAR QUALIFICAÇÃO COMPLETA DO REPRESENTANTE LEGAL CONFORME ESTATUTO (APRESENTAR ÚLTIMO CONTRATO SOCIAL REGISTRADO CONSOLIDADO PARA CONFERÊNCIA JURÍDICA)"</p>
                              </div>
                              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-4 rounded">
                                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Comentário de Adriele Roque (22/12, 16:29):</p>
                                <p className="text-sm text-blue-800 dark:text-blue-200">Talvez utilizar o termo "Cliente" ao invés de "CONTRATANTE"</p>
                              </div>
                            </div>
                          </div>

                          {/* Alteração 2 */}
                          <div className="bg-background border border-border shadow-sm p-6 rounded-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">2. Propriedade Intelectual - Código-Fonte</h3>
                                <p className="text-sm text-muted-foreground mt-1">Cláusula 2.1, alínea a) - Desenvolvimento Customizado</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200">Pendente</Badge>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded">
                                <p className="text-sm font-medium text-red-900 dark:text-red-100 mb-2">Sugestão de KISLEU FERREIRA (16/12, 14:05):</p>
                                <p className="text-sm text-red-800 dark:text-red-200 mb-2">Substituir ponto-e-vírgula ";" por:</p>
                                <p className="text-sm text-red-800 dark:text-red-200 font-mono bg-red-100 dark:bg-red-900 p-2 rounded">
                                  "à Contratante, em que todo o código-fonte, banco de dados, arquitetura, documentação e artefatos produzidos serão de propriedade exclusiva do contratante (licença plena, irrevogável e perpétua), renunciando a contratada integralmente os direitos patrimoniais de autor sobre o sistema."
                                </p>
                              </div>
                              <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 p-4 rounded">
                                <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100 mb-1">⚠️ Atenção:</p>
                                <p className="text-sm text-yellow-800 dark:text-yellow-200">Texto marcado em vermelho no documento original - requer revisão jurídica sobre direitos de propriedade intelectual</p>
                              </div>
                            </div>
                          </div>

                          {/* Alteração 3 */}
                          <div className="bg-background border border-border shadow-sm p-6 rounded-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">3. Remoção de Licenciamento SaaS</h3>
                                <p className="text-sm text-muted-foreground mt-1">Cláusula 2.1, alínea b) - Licenciamento de Uso (SaaS)</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200">Pendente</Badge>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded">
                                <p className="text-sm font-medium text-red-900 dark:text-red-100 mb-2">Sugestão de KISLEU FERREIRA:</p>
                                <p className="text-sm text-red-800 dark:text-red-200 mb-2">Remover completamente a alínea b):</p>
                                <p className="text-sm text-red-800 dark:text-red-200 line-through font-mono bg-red-100 dark:bg-red-900 p-2 rounded">
                                  "Licenciamento de Uso (SaaS): Disponibilização de acesso à Plataforma Unique, de propriedade da CONTRATADA."
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Alteração 4 */}
                          <div className="bg-background border border-border shadow-sm p-6 rounded-lg">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-lg">4. Complemento sobre Sócios</h3>
                                <p className="text-sm text-muted-foreground mt-1">Cláusula 2.2 - Módulo Comercial (Aquisição e Vendas)</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200">Pendente</Badge>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-4 rounded">
                                <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-2">Sugestão de KISLEU FERREIRA (16/12, 15:53):</p>
                                <p className="text-sm text-green-800 dark:text-green-200">Adicionar: "SÓCIOS X SÓCIOS Y" na descrição do módulo de gestão de leads e funil de vendas</p>
                              </div>
                            </div>
                          </div>

                          {/* Resumo */}
                          <div className="bg-background border-2 border-primary/20 shadow-md p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5 text-primary" />
                              Resumo das Alterações
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Status</p>
                                <div className="flex gap-2 flex-wrap">
                                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-300">
                                    {doc.analysisData.pendingChanges} Pendentes
                                  </Badge>
                                  <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-300">
                                    0 Aceitas
                                  </Badge>
                                  <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-300">
                                    0 Rejeitadas
                                  </Badge>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Próximos Passos</p>
                                <ul className="text-sm space-y-1 text-muted-foreground">
                                  <li>• Revisar qualificação do representante legal</li>
                                  <li>• Clarificar propriedade intelectual</li>
                                  <li>• Remover referência ao SaaS</li>
                                  <li>• Complementar informações sobre sócios</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border-t border-border bg-background flex justify-between items-center shrink-0">
                        <div className="text-xs text-muted-foreground">
                          Analistas: {doc.analysisData.analysts.join(" e ")} | Última atualização: {doc.analysisData.lastUpdate}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="rounded-none">Fechar</Button>
                          <Button className="rounded-none bg-primary">
                            <Download className="mr-2 h-4 w-4" />
                            Exportar Análise (PDF)
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
