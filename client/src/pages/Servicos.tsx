import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Database, Zap, Shield, Cpu, Network, TrendingUp, Lock, Gauge } from "lucide-react";
import { useLocation } from "wouter";

/**
 * DESIGN PHILOSOPHY: Futuristic AI Theme
 * - Dark navy backgrounds with cyan/blue accents
 * - Consistent with Home page design
 */

export default function Servicos() {
  const [, navigate] = useLocation();

  const servicos = [
    {
      icon: Database,
      title: "Otimização de Redes",
      description: "Implementação de algoritmos preditivos para balanceamento de carga dinâmico e redução de latência.",
      features: ["Análise de tráfego", "Balanceamento inteligente", "Redução de latência", "Monitoramento em tempo real"],
      resultado: "Redução de 40% na latência"
    },
    {
      icon: Zap,
      title: "Monitoramento Preditivo",
      description: "Integração de IA com SNMP para prever falhas de hardware com horas de antecedência.",
      features: ["Previsão de falhas", "Alertas automáticos", "Análise preditiva", "Dashboard inteligente"],
      resultado: "Uptime de 99.99%"
    },
    {
      icon: Cpu,
      title: "Automação de Processos",
      description: "Scripts em Python com Pandas para análise automatizada de logs e ameaças de segurança.",
      features: ["Processamento de logs", "Análise de ameaças", "Automação de tarefas", "Relatórios automáticos"],
      resultado: "Economia de 15h semanais"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Implementação de firewall inteligente com pfSense e detecção de anomalias em tempo real.",
      features: ["Firewall inteligente", "Detecção de anomalias", "Proteção de dados", "Compliance"],
      resultado: "100% de proteção contra ameaças"
    },
    {
      icon: Network,
      title: "Infraestrutura em Container",
      description: "Orquestração de aplicações com Docker e Kubernetes para máxima escalabilidade.",
      features: ["Containerização", "Orquestração", "Auto-scaling", "Disaster recovery"],
      resultado: "Escalabilidade infinita"
    },
    {
      icon: TrendingUp,
      title: "Análise de Dados",
      description: "Processamento e análise de grandes volumes de dados com machine learning avançado.",
      features: ["Big Data", "Machine Learning", "Visualização", "Insights automáticos"],
      resultado: "Decisões baseadas em dados"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-ai text-foreground">
      {/* ============================================
          HEADER / NAVIGATION
          ============================================ */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border/20">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Cpu className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">IA Moderno</h1>
          </button>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => navigate("/")} className="underline-animated text-foreground hover:text-accent transition-colors">
              Sobre
            </button>
            <button onClick={() => navigate("/servicos")} className="underline-animated text-accent font-semibold">
              Serviços
            </button>
            <button onClick={() => navigate("/contatos")} className="underline-animated text-foreground hover:text-accent transition-colors">
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/data-flow-pattern-JjVSffpPFBYzkEnX2vKHL3.webp"
            alt="Data Flow Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 slide-in-right">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="badge-modern">🔧 Soluções Completas</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Nossos <span className="gradient-text">Serviços</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções inovadoras em IA e automação que transformam sua infraestrutura e otimizam processos críticos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, idx) => (
              <Card key={idx} className="card-modern border-gradient overflow-hidden group flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative space-y-6 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <servico.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold">{servico.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{servico.description}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider">Funcionalidades</p>
                    <ul className="space-y-2">
                      {servico.features.map((feature, fidx) => (
                        <li key={fidx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-accent">{servico.resultado}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TECH STACK SECTION
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Tecnologias Utilizadas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utilizamos as melhores ferramentas e tecnologias do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "pfSense", desc: "Firewall e roteamento avançado", icon: Shield },
              { name: "Python", desc: "Automação e processamento", icon: Cpu },
              { name: "Zabbix", desc: "Monitoramento inteligente", icon: Gauge },
              { name: "Docker", desc: "Containerização", icon: Database },
              { name: "Linux", desc: "Infraestrutura robusta", icon: Lock },
              { name: "Ubiquiti", desc: "Redes wireless", icon: Network }
            ].map((tech, idx) => (
              <Card key={idx} className="card-modern text-center p-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/tech-gradient-accent-7kdjjGLrnZDvoxiXTNCBDX.webp"
                alt="Tech Gradient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold">Interessado em nossos serviços?</h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato conosco para uma demonstração personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={() => navigate("/contatos")} className="btn-gradient text-lg px-8 py-6 h-auto">
                  Fale Conosco <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button onClick={() => navigate("/")} variant="outline" className="text-lg px-8 py-6 h-auto border-accent/50 text-accent hover:bg-accent/10">
                  Voltar ao Início
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="border-t border-border/20 py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold text-lg">IA Moderno</span>
              </div>
              <p className="text-sm text-muted-foreground">Soluções inteligentes para o futuro</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/servicos")} className="hover:text-accent transition-colors">Serviços</button></li>
                <li><button onClick={() => navigate("/")} className="hover:text-accent transition-colors">Sobre</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/")} className="hover:text-accent transition-colors">Sobre</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><button onClick={() => navigate("/contatos")} className="hover:text-accent transition-colors">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2026 IA Moderno. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
