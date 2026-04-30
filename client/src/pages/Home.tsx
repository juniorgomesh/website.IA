import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, Shield, Database, Cpu, Network } from "lucide-react";
import { useLocation } from "wouter";

/**
 * DESIGN PHILOSOPHY: Futuristic AI Theme
 * - Dark navy backgrounds with cyan/blue accents
 * - Smooth gradients and glowing effects
 * - Premium typography with clear hierarchy
 * - Responsive grid layouts with geometric patterns
 */

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-ai text-foreground">
      {/* ============================================
          HEADER / NAVIGATION
          ============================================ */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-border/20">
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Brain className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">IA Moderno</h1>
          </button>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => navigate("/")} className="underline-animated text-accent font-semibold">
              Sobre
            </button>
            <button onClick={() => navigate("/servicos")} className="underline-animated text-foreground hover:text-accent transition-colors">
              Serviços
            </button>
            <a href="#cases" className="underline-animated text-foreground hover:text-accent transition-colors">
              Cases
            </a>
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/hero-ai-neural-Zb485YN26jkUw5VgG9sWoZ.webp"
            alt="Neural Network Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 slide-in-right">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="badge-modern">🚀 Tecnologia do Futuro</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Inteligência Artificial <span className="gradient-text">Avançada</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Soluções inovadoras em IA que transformam infraestruturas, otimizam redes e automatizam processos críticos com precisão e inteligência.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button onClick={() => navigate("/servicos")} className="btn-gradient text-lg px-8 py-6 h-auto">
                Explorar Serviços <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={() => navigate("/contatos")} variant="outline" className="text-lg px-8 py-6 h-auto border-accent/50 text-accent hover:bg-accent/10">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          ============================================ */}
      <section id="about" className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in-left">
              <div>
                <h2 className="text-4xl font-bold mb-4">Quem Somos</h2>
                <div className="w-16 h-1 bg-gradient-accent rounded-full"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos especialistas em <span className="text-accent font-semibold">Inteligência Artificial</span> com foco em soluções tecnologicamente inteligentes para todas as áreas da empresa. Nossa equipe é composta pelos técnicos mais dedicados do mercado.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Inovação Constante</h4>
                    <p className="text-sm text-muted-foreground">Laboratórios focados em desenvolvimento de soluções de ponta</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Alta Performance</h4>
                    <p className="text-sm text-muted-foreground">Sistemas otimizados para máxima eficiência e velocidade</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Segurança Garantida</h4>
                    <p className="text-sm text-muted-foreground">Infraestrutura robusta com proteção de dados em primeiro lugar</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/ai-brain-tech-m7Gcnv7o3CYV3FqnipPKZX.webp"
                alt="AI Brain Technology"
                className="w-full rounded-xl glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section id="services" className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Stack Tecnológica</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utilizamos as melhores ferramentas e tecnologias do mercado para garantir segurança, performance e automação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "pfSense", desc: "Firewall e roteamento avançado" },
              { icon: Cpu, title: "Python", desc: "Automação e processamento de dados" },
              { icon: Network, title: "Zabbix", desc: "Monitoramento inteligente" },
              { icon: Zap, title: "Docker", desc: "Containerização e orquestração" },
              { icon: Shield, title: "Linux", desc: "Infraestrutura robusta" },
              { icon: Brain, title: "IA/ML", desc: "Modelos preditivos avançados" },
            ].map((service, idx) => (
              <Card key={idx} className="card-modern group hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-accent/10 flex items-center justify-center group-hover:bg-gradient-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CASES SECTION
          ============================================ */}
      <section id="cases" className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Cases de Sucesso</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como nossas soluções de IA transformaram infraestruturas reais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Otimização de Redes",
                challenge: "Alta latência em servidores pfSense durante horários de pico",
                solution: "Algoritmo preditivo para balanceamento de carga dinâmico",
                result: "Redução de 40% na latência",
              },
              {
                title: "Monitoramento Preditivo",
                challenge: "Falhas críticas detectadas apenas após o downtime",
                solution: "Integração de IA com SNMP para prever falhas com 2h de antecedência",
                result: "Uptime de 99.99%",
              },
              {
                title: "Automação de Processos",
                challenge: "Processamento manual de grandes volumes de logs",
                solution: "Scripts em Python com Pandas para análise automatizada",
                result: "Economia de 15h semanais",
              },
            ].map((caseItem, idx) => (
              <Card key={idx} className="card-modern border-gradient overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <h4 className="font-semibold text-lg">{caseItem.title}</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Desafio</p>
                      <p className="text-sm text-muted-foreground">{caseItem.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Solução</p>
                      <p className="text-sm text-muted-foreground">{caseItem.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Resultado</p>
                      <p className="text-sm font-semibold text-accent">{caseItem.result}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          STATUS SECTION
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="card-modern p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-accent pulse-glow"></div>
              <h3 className="text-2xl font-bold">Status dos Sistemas</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Processamento Neural", status: "Online" },
                { name: "Banco de Dados", status: "Online" },
                { name: "API de Integração", status: "Online" },
                { name: "Monitoramento Zabbix", status: "Ativo" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                  <span className="font-medium">{item.name}</span>
                  <span className="badge-modern">{item.status}</span>
                </div>
              ))}
            </div>
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/data-flow-pattern-JjVSffpPFBYzkEnX2vKHL3.webp"
                alt="Data Flow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold">Pronto para transformar sua infraestrutura?</h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato conosco e descubra como nossas soluções de IA podem otimizar seus processos
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => navigate("/contatos")} className="btn-gradient text-lg px-8 py-6 h-auto">
                Solicitar Demonstração
              </Button>
              <Button onClick={() => navigate("/contatos")} variant="outline" className="text-lg px-8 py-6 h-auto border-accent/50 text-accent hover:bg-accent/10">
                Fale Conosco
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
                  <Brain className="w-5 h-5 text-background" />
                </div>
                <span className="font-bold text-lg">IA Moderno</span>
              </div>
              <p className="text-sm text-muted-foreground">Soluções inteligentes para o futuro</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/servicos")} className="hover:text-accent transition-colors">Serviços</button></li>
                <li><a href="#" className="hover:text-accent transition-colors">Tecnologia</a></li>
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
