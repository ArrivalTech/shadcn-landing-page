import { useState } from "react";
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Clock, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import logo from "../assets/logo.png";

export const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "info-collection",
      title: "Información que Recopilamos",
      icon: <FileText className="w-6 h-6" />,
      content: {
        intro: "En ARRIVAL, recopilamos únicamente la información necesaria para brindarte el mejor servicio de desarrollo tecnológico:",
        items: [
          "Información de contacto personal (nombre completo, email corporativo, número de teléfono)",
          "Detalles de tu empresa (nombre, sector, tamaño, ubicación)",
          "Información del proyecto (descripción, objetivos, presupuesto estimado, timeline)",
          "Comunicaciones y archivos compartidos a través de WhatsApp, email o videollamadas",
          "Datos técnicos del proyecto (especificaciones, wireframes, documentación)",
          "Información de facturación y pagos (solo cuando inicias un proyecto con nosotros)"
        ]
      }
    },
    {
      id: "data-usage",
      title: "Cómo Utilizamos tus Datos",
      icon: <Users className="w-6 h-6" />,
      content: {
        intro: "Tus datos son utilizados exclusivamente para:",
        items: [
          "Proporcionar consultoría estratégica y desarrollo de aplicaciones de clase mundial",
          "Comunicarnos contigo sobre el progreso de tu proyecto y actualizaciones importantes",
          "Generar propuestas personalizadas y cotizaciones precisas",
          "Coordinar reuniones, demos y presentaciones de avances",
          "Procesar pagos y generar facturas (solo para clientes activos)",
          "Mejorar continuamente nuestros servicios basados en feedback real",
          "Cumplir con obligaciones legales y fiscales en Colombia"
        ]
      }
    },
    {
      id: "data-protection",
      title: "Protección y Seguridad",
      icon: <Shield className="w-6 h-6" />,
      content: {
        intro: "Implementamos medidas de seguridad de nivel empresarial:",
        items: [
          "Encriptación AES-256 para todos los datos en tránsito y en reposo",
          "Servidores seguros en AWS con certificaciones SOC 2 y ISO 27001",
          "Acceso restringido solo a miembros autorizados del equipo ARRIVAL",
          "Autenticación de dos factores (2FA) para todos los sistemas internos",
          "Auditorías de seguridad trimestrales realizadas por terceros certificados",
          "Backups automáticos diarios con encriptación end-to-end",
          "Monitoreo 24/7 de actividad sospechosa y intentos de acceso no autorizado"
        ]
      }
    },
    {
      id: "data-sharing",
      title: "Compartir Información",
      icon: <Lock className="w-6 h-6" />,
      content: {
        intro: "ARRIVAL NUNCA vende, alquila o comparte tu información. Solo compartimos datos en casos específicos:",
        items: [
          "Con tu consentimiento explícito y por escrito",
          "Con proveedores de servicios esenciales (hosting, email) bajo estrictos NDAs",
          "Para cumplir con órdenes judiciales o requerimientos legales válidos",
          "En caso de fusión o adquisición (con notificación previa de 30 días)",
          "Para proteger los derechos, propiedad o seguridad de ARRIVAL o terceros"
        ]
      }
    },
    {
      id: "your-rights",
      title: "Tus Derechos Fundamentales",
      icon: <Eye className="w-6 h-6" />,
      content: {
        intro: "Como titular de datos, tienes derechos irrenunciables:",
        items: [
          "Derecho de acceso: Solicitar una copia completa de todos tus datos",
          "Derecho de rectificación: Corregir información incorrecta o desactualizada",
          "Derecho de supresión: Solicitar la eliminación completa de tus datos",
          "Derecho de oposición: Oponerte al procesamiento de tus datos personales",
          "Derecho de portabilidad: Recibir tus datos en formato estructurado",
          "Derecho de limitación: Restringir el procesamiento en circunstancias específicas",
          "Derecho a no ser objeto de decisiones automatizadas"
        ]
      }
    },
    {
      id: "data-retention",
      title: "Retención de Datos",
      icon: <Clock className="w-6 h-6" />,
      content: {
        intro: "Conservamos tus datos solo el tiempo necesario:",
        items: [
          "Datos de prospecto: 2 años desde el último contacto",
          "Datos de cliente activo: Durante la duración del proyecto + 5 años",
          "Información de facturación: 10 años (requerimiento fiscal colombiano)",
          "Comunicaciones del proyecto: 3 años después de la finalización",
          "Datos técnicos del proyecto: 5 años (para soporte y mantenimiento)",
          "Eliminación automática: Sistema automatizado elimina datos vencidos"
        ]
      }
    }
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="hover:bg-accent"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <img src={logo} alt="ARRIVAL Logo" className="h-8 w-auto" />
          </div>
          <div className="text-sm text-muted-foreground">
            Última actualización: Enero 2025
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/10">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Política de{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Privacidad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            En ARRIVAL, tu privacidad no es negociable. Protegemos tus datos con 
            estándares de seguridad de nivel bancario y transparencia total.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Encriptación AES-256</h3>
              <p className="text-sm text-muted-foreground">Máxima seguridad para todos tus datos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Transparencia Total</h3>
              <p className="text-sm text-muted-foreground">Sabes exactamente qué hacemos con tu información</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Control Completo</h3>
              <p className="text-sm text-muted-foreground">Tus datos, tus reglas, tus decisiones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleSection(section.id)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {section.icon}
                      </div>
                      {section.title}
                    </div>
                    <div className={`transform transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`}>
                      <ArrowLeft className="w-5 h-5 rotate-90" />
                    </div>
                  </CardTitle>
                </CardHeader>
                
                {activeSection === section.id && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content.intro}
                      </p>
                      <ul className="space-y-3">
                        {section.content.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                ¿Preguntas sobre tu Privacidad?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de privacidad está disponible para resolver cualquier duda sobre el manejo de tus datos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email de Privacidad</p>
                    <a href="mailto:tech.team@thearrival.tech" className="text-primary hover:underline">
                      tech.team@thearrival.tech
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">WhatsApp Directo</p>
                    <a href="https://wa.me/573215086797?text=Hola%20ARRIVAL,%20tengo%20preguntas%20sobre%20privacidad" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-primary hover:underline">
                      +57 321 508-6797
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Footer */}
          <div className="mt-12 p-6 rounded-lg bg-muted/30 text-center">
            <p className="text-sm text-muted-foreground">
              Esta Política de Privacidad está regida por las leyes de Colombia y cumple con la Ley 1581 de 2012 
              de Protección de Datos Personales y el RGPD europeo para clientes internacionales.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              ARRIVAL SAS • NIT: 901.234.567-8 • Bogotá D.C., Colombia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};