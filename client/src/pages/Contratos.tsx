import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Streamdown } from "streamdown";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Mock data for documents - in a real app this would come from an API or file system scan
const documents = [
  {
    id: "contrato-original-why",
    title: "Contrato Original - Why Consulting (v1)",
    description: "Primeira versão do contrato enviada pela contratada para análise e comparação.",
    date: "Original",
    status: "Referência",
    type: "Original",
    path: "/documents/Contrato_Original_Why_Consulting.md"
  },
  {
    id: "contrato-consolidado",
    title: "Contrato Mestre de Desenvolvimento",
    description: "Documento principal consolidado com todas as cláusulas e proteções jurídicas.",
    date: "05/12/2025",
    status: "Vigente",
    type: "Principal",
    path: "/documents/Contrato_Consolidado_Final.md"
  },
  {
    id: "anexo-a",
    title: "Anexo A - Especificações Técnicas (SOW)",
    description: "Detalhamento do escopo, módulos e requisitos funcionais.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_A_SOW_Especificacoes.md"
  },
  {
    id: "anexo-b",
    title: "Anexo B - Integrações",
    description: "Especificações de APIs e interoperabilidade com sistemas terceiros.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_B_Integracoes.md"
  },
  {
    id: "anexo-c",
    title: "Anexo C - Segurança e SDLC",
    description: "Requisitos de segurança da informação e ciclo de desenvolvimento seguro.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_C_Seguranca_SDLC.md"
  },
  {
    id: "anexo-d",
    title: "Anexo D - SLA e Créditos",
    description: "Acordo de Nível de Serviço e tabela de penalidades.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_D_Creditos_SLA.md"
  },
  {
    id: "anexo-e",
    title: "Anexo E - Preços e Pagamento",
    description: "Tabela de valores, parcelas e condições comerciais.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_E_Precos_Pagamento.md"
  },
  {
    id: "anexo-f",
    title: "Anexo F - Handover Checklist",
    description: "Lista de verificação para transição e entrega do projeto.",
    date: "05/12/2025",
    status: "Pendente",
    type: "Anexo",
    path: "/documents/Anexo_F_Handover_Checklist.md"
  },
  {
    id: "anexo-g",
    title: "Anexo G - Não-Concorrência",
    description: "Lista de segmentos e concorrentes restritos.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_G_Segmentos_Concorrentes.md"
  },
  {
    id: "anexo-h",
    title: "Anexo H - Propriedade Intelectual",
    description: "Procedimentos de registro e titularidade no INPI.",
    date: "05/12/2025",
    status: "Aprovado",
    type: "Anexo",
    path: "/documents/Anexo_H_PI_Titularidade.md"
  }
];

export default function Contratos() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [docContent, setDocContent] = useState<string>("");

  const loadDocument = async (path: string) => {
    try {
      const response = await fetch(path);
      const text = await response.text();
      setDocContent(text);
    } catch (error) {
      console.error("Error loading document:", error);
      setDocContent("Erro ao carregar o documento. Por favor, tente novamente.");
    }
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
                      onClick={() => loadDocument(doc.path)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Visualizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 rounded-none">
                    <DialogHeader className="p-6 border-b border-border">
                      <DialogTitle>{doc.title}</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto p-6 bg-muted/30">
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <Streamdown>{docContent}</Streamdown>
                      </div>
                    </div>
                    <div className="p-4 border-t border-border bg-background flex justify-end gap-2">
                      <Button variant="outline" className="rounded-none">Fechar</Button>
                      <Button className="rounded-none bg-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF
                      </Button>
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
