import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Maximize2, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Diagramas() {
  const diagrams = [
    {
      id: "fluxo",
      title: "Fluxo de Desenvolvimento",
      desc: "Processo completo desde o levantamento até o Go-live.",
      src: "/images/diagrams/Diagrama_Fluxo_Desenvolvimento.png"
    },
    {
      id: "arquitetura",
      title: "Arquitetura Evolutiva",
      desc: "Evolução da stack tecnológica fase a fase.",
      src: "/images/diagrams/Diagrama_Arquitetura_Evolutiva.png"
    },
    {
      id: "integracoes",
      title: "Mapa de Integrações",
      desc: "Conectividade com sistemas externos e APIs.",
      src: "/images/diagrams/Diagrama_Integraciones_Sistema.png"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Arquitetura e Diagramas</h1>
          <p className="text-muted-foreground mt-1">
            Visualizações técnicas da estrutura, fluxo de dados e integrações do sistema.
          </p>
        </div>
      </div>

      <Tabs defaultValue="fluxo" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList className="rounded-none bg-muted p-0 h-auto border border-border">
            {diagrams.map((diag) => (
              <TabsTrigger 
                key={diag.id} 
                value={diag.id}
                className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2"
              >
                {diag.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {diagrams.map((diag) => (
          <TabsContent key={diag.id} value={diag.id} className="mt-0">
            <Card className="rounded-none border-border shadow-sm">
              <CardHeader className="border-b border-border bg-muted/10">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{diag.title}</CardTitle>
                    <CardDescription>{diag.desc}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-none">
                          <Maximize2 className="mr-2 h-4 w-4" />
                          Expandir
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 rounded-none border-none bg-transparent shadow-none flex items-center justify-center">
                        <img 
                          src={diag.src} 
                          alt={diag.title} 
                          className="max-w-full max-h-[90vh] object-contain bg-white rounded-sm shadow-2xl"
                        />
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="rounded-none">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PNG
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 bg-white flex justify-center items-center min-h-[500px]">
                <div className="w-full overflow-auto p-8 flex justify-center">
                  <img 
                    src={diag.src} 
                    alt={diag.title} 
                    className="max-w-full h-auto shadow-sm border border-border"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="rounded-none border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Stack Tecnológico</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Frontend</span>
                <span className="font-medium">React / Vue.js</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Backend</span>
                <span className="font-medium">Node.js / Python</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Database</span>
                <span className="font-medium">PostgreSQL</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Cache</span>
                <span className="font-medium">Redis</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-muted-foreground">Infra</span>
                <span className="font-medium">AWS / Azure</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-none border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Segurança</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Auth</span>
                <span className="font-medium">OAuth 2.0 / JWT</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">WAF</span>
                <span className="font-medium">OWASP Rules</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Encryption</span>
                <span className="font-medium">TLS 1.3 / AES-256</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-muted-foreground">Compliance</span>
                <span className="font-medium">LGPD / GDPR</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-none border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Integrações</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Veículos</span>
                <span className="font-medium">Infocar API</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Vistoria</span>
                <span className="font-medium">Infovist Webhook</span>
              </li>
              <li className="flex justify-between border-b border-border pb-2">
                <span className="text-muted-foreground">Pagamentos</span>
                <span className="font-medium">Stripe / PagSeguro</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-muted-foreground">Chat</span>
                <span className="font-medium">EZchat WebSocket</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
