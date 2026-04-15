import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
// Pages
import Home from "./pages/Home";
import Contratos from "./pages/Contratos";
import Cronogramas from "./pages/Cronogramas";
import Diagramas from "./pages/Diagramas";
import Documentation from "./pages/Documentation";

function Router() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/contratos" component={Contratos} />
          <Route path="/cronogramas" component={Cronogramas} />
          <Route path="/diagramas" component={Diagramas} />
          <Route path="/documentacao" component={Documentation} />
          <Route path="/anexos" component={Contratos} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
