import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Cpu } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

/**
 * DESIGN PHILOSOPHY: Futuristic AI Theme
 * - Dark navy backgrounds with cyan/blue accents
 * - Consistent with Home and Servicos pages
 */

export default function Contatos() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
            <button onClick={() => navigate("/servicos")} className="underline-animated text-foreground hover:text-accent transition-colors">
              Serviços
            </button>
            <button onClick={() => navigate("/contatos")} className="underline-animated text-accent font-semibold">
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/tech-gradient-accent-7kdjjGLrnZDvoxiXTNCBDX.webp"
            alt="Tech Gradient Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 slide-in-right">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="badge-modern">📞 Entre em Contato</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Vamos <span className="gradient-text">Conversar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tem dúvidas sobre nossos serviços? Entre em contato conosco e descubra como podemos ajudar sua empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT INFO + FORM
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "contato@iamoderno.com.br",
                desc: "Responderemos em até 24 horas"
              },
              {
                icon: Phone,
                title: "Telefone",
                info: "(11) 98765-4321",
                desc: "Disponível de seg. a sex. 9h-18h"
              },
              {
                icon: MapPin,
                title: "Endereço",
                info: "São Paulo, SP",
                desc: "Visite nosso escritório"
              }
            ].map((contact, idx) => (
              <Card key={idx} className="card-modern text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                    <contact.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{contact.title}</h4>
                    <p className="text-accent font-medium mb-2">{contact.info}</p>
                    <p className="text-sm text-muted-foreground">{contact.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* FORM */}
          <div className="max-w-2xl mx-auto">
            <Card className="card-modern border-gradient p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Nome *</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Telefone</label>
                    <Input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 98765-4321"
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Assunto</label>
                    <Input
                      type="text"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Qual é o assunto?"
                      className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Mensagem *</label>
                  <Textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    rows={6}
                    className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-gradient w-full text-lg py-6 h-auto"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"} <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="py-20 md:py-32 border-t border-border/20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Qual é o tempo de implementação?",
                a: "O tempo varia de acordo com a complexidade do projeto, mas geralmente leva entre 2 a 8 semanas para implementação completa."
              },
              {
                q: "Vocês oferecem suporte pós-implementação?",
                a: "Sim! Oferecemos suporte técnico 24/7 e manutenção preventiva para garantir o melhor desempenho dos sistemas."
              },
              {
                q: "Como é feito o orçamento?",
                a: "Fazemos uma análise detalhada das suas necessidades e apresentamos um orçamento personalizado sem compromisso."
              },
              {
                q: "Quais são as formas de pagamento?",
                a: "Aceitamos transferência bancária, cartão de crédito e parcelamento em até 12 vezes para projetos maiores."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="card-modern p-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-start gap-3">
                    <span className="text-accent font-bold">Q:</span>
                    {faq.q}
                  </h4>
                  <p className="text-muted-foreground flex items-start gap-3">
                    <span className="text-accent font-bold">A:</span>
                    {faq.a}
                  </p>
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663613690555/R9ju3BmQRZpy9kryLpD9yV/hero-ai-neural-Zb485YN26jkUw5VgG9sWoZ.webp"
                alt="Neural Network"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background"></div>
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold">Ainda tem dúvidas?</h2>
              <p className="text-lg text-muted-foreground">
                Agende uma reunião com nossos especialistas para discutir sua necessidade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="btn-gradient text-lg px-8 py-6 h-auto">
                  Agendar Reunião
                </Button>
                <Button onClick={() => navigate("/servicos")} variant="outline" className="text-lg px-8 py-6 h-auto border-accent/50 text-accent hover:bg-accent/10">
                  Ver Serviços
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
