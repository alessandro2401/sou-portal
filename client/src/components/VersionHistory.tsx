import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, GitCommit, User, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Version {
  id: string;
  version: string;
  date: string;
  author: string;
  changes: string;
  status: "current" | "outdated" | "draft";
}

interface VersionHistoryProps {
  versions: Version[];
  currentVersionId: string;
  onSelectVersion: (version: Version) => void;
}

export function VersionHistory({ versions, currentVersionId, onSelectVersion }: VersionHistoryProps) {
  return (
    <div className="border-l border-border h-full flex flex-col bg-muted/10 w-80 shrink-0">
      <div className="p-4 border-b border-border bg-background">
        <h3 className="font-semibold flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          Histórico de Versões
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Registro de alterações e revisões do documento.
        </p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {versions.map((ver, index) => {
            const isCurrent = ver.id === currentVersionId;
            const isLatest = index === 0;
            
            return (
              <div 
                key={ver.id} 
                className={cn(
                  "relative pl-4 pb-4 border-l-2 last:pb-0 last:border-l-0",
                  isCurrent ? "border-primary" : "border-muted-foreground/20"
                )}
              >
                {/* Timeline dot */}
                <div className={cn(
                  "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center",
                  isCurrent ? "border-primary" : "border-muted-foreground/40"
                )}>
                  {isCurrent && <div className="w-2 h-2 rounded-full bg-primary" />}
                </div>

                <div className={cn(
                  "rounded-sm border p-3 transition-all",
                  isCurrent 
                    ? "bg-background border-primary/50 shadow-sm" 
                    : "bg-muted/30 border-border hover:bg-background hover:border-primary/20"
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={isLatest ? "default" : "outline"} className="rounded-none text-[10px] h-5 px-1.5">
                      v{ver.version}
                    </Badge>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {ver.date}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium mb-1">{ver.changes}</p>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <User className="h-3 w-3" />
                    {ver.author}
                  </div>

                  {!isCurrent && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full h-7 text-xs justify-between group"
                      onClick={() => onSelectVersion(ver)}
                    >
                      Ver esta versão
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  )}
                  
                  {isCurrent && (
                    <div className="text-xs text-primary font-medium flex items-center gap-1 bg-primary/5 p-1.5 rounded-sm">
                      <GitCommit className="h-3 w-3" />
                      Versão selecionada
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
