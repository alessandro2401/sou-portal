import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      {...props}
    >
      {/* Camada 1: Fundo Azul Institucional (Quadrado Externo) */}
      <rect
        width="200"
        height="200"
        fill="#0066CC"
      />
      
      {/* Camada 2: Quadrado Preto Central (Contraste) */}
      {/* Centralizado: (200-100)/2 = 50 */}
      <rect
        x="50"
        y="50"
        width="100"
        height="100"
        fill="#000000"
      />
      
      {/* Camada 3: Quadrado Azul Interno (Retorno à Marca) */}
      {/* Centralizado: (200-50)/2 = 75 */}
      <rect
        x="75"
        y="75"
        width="50"
        height="50"
        fill="#0066CC"
      />
      
      {/* Camada 4: Núcleo Branco (Ponto de Luz/Inteligência) */}
      {/* Centralizado: (200-20)/2 = 90 */}
      <rect
        x="90"
        y="90"
        width="20"
        height="20"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LogoText({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <Logo className="h-8 w-8" />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-none tracking-tight text-foreground">
          SOU
        </span>
        <span className="text-[0.65rem] font-medium text-muted-foreground uppercase tracking-widest">
          
        </span>
      </div>
    </div>
  );
}
