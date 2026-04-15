import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await login(email, password);
      if (!result.success) {
        setError(result.error ?? "Erro ao realizar login.");
      }
    } catch {
      setError("Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0056B3 0px, #0056B3 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #0056B3 0px, #0056B3 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="w-full max-w-md relative">
        {/* Card principal */}
        <div className="bg-card border-2 border-border shadow-[8px_8px_0px_0px_#0056B3]">
          {/* Header */}
          <div className="bg-primary p-6 flex flex-col items-center gap-3">
            <Logo className="h-16 w-16" />
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary-foreground tracking-tight">
                SOU
              </h1>
              <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest">
                Sistema de Organização Unificada
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">
                Acesso Restrito
              </h2>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Este portal é de acesso exclusivo para usuários autorizados.
              Insira suas credenciais para continuar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campo E-mail */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold uppercase tracking-wide"
                >
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-2 border-border focus:border-primary rounded-none h-11"
                    required
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Campo Senha */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold uppercase tracking-wide"
                >
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 border-2 border-border focus:border-primary rounded-none h-11"
                    required
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mensagem de erro */}
              {error && (
                <div className="bg-destructive/10 border-2 border-destructive p-3 text-sm text-destructive font-medium">
                  {error}
                </div>
              )}

              {/* Botão de login */}
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide rounded-none border-2 border-primary shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Verificando..." : "Entrar no Portal"}
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 border-t border-border pt-4">
            <p className="text-xs text-muted-foreground text-center">
              Administradora Mutual &mdash; Acesso exclusivo para usuários
              autorizados.
            </p>
          </div>
        </div>

        {/* Sombra decorativa */}
        <div className="absolute -bottom-2 -right-2 w-full h-full bg-foreground/5 -z-10 border-2 border-border" />
      </div>
    </div>
  );
}
