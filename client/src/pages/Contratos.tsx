import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Shield, CheckCircle, History } from "lucide-react";
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
    path: "/contrato-why-v2-anexo1.pdf"
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
    status: "Vigente",
    type: "Sugestão",
    path: "/documents/Contrato_Consolidado_Final.md"
  },
  {
    id: "anexo-a",
    title: "Anexo A - Especificações Técnicas (SOW)",
    description: "Sugestão criada pelo Grupo MMB. Detalhamento do escopo, módulos e requisitos funcionais. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_A_SOW_Especificacoes.md"
  },
  {
    id: "anexo-b",
    title: "Anexo B - Integrações",
    description: "Sugestão criada pelo Grupo MMB. Especificações de APIs e interoperabilidade com sistemas terceiros. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_B_Integracoes.md"
  },
  {
    id: "anexo-c",
    title: "Anexo C - Segurança e SDLC",
    description: "Sugestão criada pelo Grupo MMB. Requisitos de segurança da informação e ciclo de desenvolvimento seguro. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_C_Seguranca_SDLC.md"
  },
  {
    id: "anexo-d",
    title: "Anexo D - SLA e Créditos",
    description: "Sugestão criada pelo Grupo MMB. Acordo de Nível de Serviço e tabela de penalidades. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_D_Creditos_SLA.md"
  },
  {
    id: "anexo-e",
    title: "Anexo E - Preços e Pagamento",
    description: "Sugestão criada pelo Grupo MMB. Tabela de valores, parcelas e condições comerciais. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
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
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_G_Segmentos_Concorrentes.md"
  },
  {
    id: "anexo-h",
    title: "Anexo H - Propriedade Intelectual",
    description: "Sugestão criada pelo Grupo MMB. Procedimentos de registro e titularidade no INPI. Documento não enviado pela Why Consulting.",
    date: "05/12/2025",
    status: "Aprovado",
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
