import { useState } from "react";
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Clock, Mail, Phone, Database, Globe, UserCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import logo from "../assets/logo.png";

export const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "info-collection",
      title: "1. Información que recopilamos",
      icon: <FileText className="w-6 h-6" />,
      content: {
        intro: "Recopilamos distintos tipos de información personal y datos técnicos para poder brindarte nuestros servicios de forma eficaz. Esto incluye:",
        items: [
          "Datos de identificación: Información de registro básica, como tu nombre, correo electrónico, número de teléfono y otros datos que proporciones al crear una cuenta en la App o al comunicarte con nosotros.",
          "Datos de la calculadora de carbono: Información que ingresas en la App para calcular tu huella de carbono (por ejemplo, datos sobre tu consumo de energía, transporte, hábitos de consumo), así como resultados de cálculo y preferencias de compensación con bonos de carbono.",
          "Permiso de cámara: Si lo autorizas, podremos acceder a la cámara de tu dispositivo, por ejemplo, para escanear códigos, capturar imágenes relacionadas con funcionalidades de Greenify o permitirte subir fotos (p. ej., foto de perfil o comprobantes). Puedes negar o revocar este permiso en cualquier momento.",
          "Permiso de contactos: Con tu consentimiento expreso, la App podría acceder a tu lista de contactos (por ejemplo, para invitar amigos a unirse a Greenify, compartir resultados o encontrar contactos que ya usan la App).",
          "Datos biométricos (autenticación): Podemos ofrecerte la opción de utilizar la autenticación biométrica disponible en tu dispositivo (como huella dactilar o reconocimiento facial) para iniciar sesión de forma segura en Greenify.",
          "Datos de pago: Si realizas transacciones de compensación de huella de carbono a través de la App, recopilaremos la información necesaria para procesar el pago. Los pagos son gestionados de manera segura por nuestro proveedor de pagos Wompi, que cumple con estándares de seguridad PCI DSS.",
          "Datos de uso y navegación: Información sobre cómo interactúas con la App, las funciones que utilizas, fecha y hora de acceso, tiempo de uso, errores de la aplicación, y demás datos de diagnóstico.",
          "Datos técnicos del dispositivo: Datos como el modelo de tu teléfono, versión del sistema operativo, identificadores únicos del dispositivo o publicidad (IDFA/GAID), idioma, zona horaria, proveedor de servicios móviles, dirección IP, y otros datos técnicos."
        ]
      }
    },
    {
      id: "legal-basis",
      title: "2. Base legal para el tratamiento de datos",
      icon: <UserCheck className="w-6 h-6" />,
      content: {
        intro: "Nos basamos en distintas bases legales reconocidas internacionalmente para procesar tus datos personales de forma lícita:",
        items: [
          "Ejecución de un contrato: Tratamos datos que sean necesarios para prestarte el servicio que nos solicitas a través de la App. Por ejemplo, usamos tus datos de registro y calculadora de carbono para crear tu cuenta, calcular tu huella y ofrecerte funcionalidades de compensación.",
          "Consentimiento: Solicitamos tu consentimiento para ciertos tratamientos no esenciales. Por ejemplo, te pediremos permiso antes de acceder a tu cámara, contactos o para utilizar herramientas de analítica y cookies/tracking con fines de mejora de la experiencia.",
          "Interés legítimo: Podemos tratar algunos datos en función de nuestros intereses comerciales legítimos, siempre que no prevalezcan tus derechos y libertades. Esto incluye el análisis y mejora del rendimiento de la App, la prevención de fraudes, la seguridad de la información.",
          "Cumplimiento de obligaciones legales: En ciertos casos, debemos procesar y conservar tus datos para cumplir con leyes o regulaciones aplicables. Por ejemplo, normativas tributarias, contables y fiscales pueden exigirnos guardar registros de transacciones realizadas en la App."
        ]
      }
    },
    {
      id: "data-usage",
      title: "3. Finalidades del tratamiento",
      icon: <Users className="w-6 h-6" />,
      content: {
        intro: "Usamos la información recopilada estrictamente para las finalidades que se describen a continuación:",
        items: [
          "Proveer el servicio de Greenify: Utilizamos tus datos para permitirte usar la App y sus funcionalidades principales, como calcular tu huella de carbono, mostrarte resultados y opciones de compensación, gestionar tu cuenta de usuario.",
          "Procesar transacciones y compensaciones: La información de pagos y transacciones se emplea para facilitar la compra de bonos de carbono u otras compensaciones que realices a través de la App.",
          "Mejorar la experiencia y funcionalidades: Los datos de uso, navegación y preferencias nos ayudan a comprender cómo interactúas con Greenify para optimizar la interfaz y desarrollar nuevas funciones.",
          "Comunicaciones y notificaciones: Podemos utilizar tus datos de contacto para enviarte comunicados importantes sobre la App, avisos de seguridad, actualizaciones de software, cambios en nuestros términos.",
          "Seguridad y prevención de fraude: Tu información puede ser procesada para proteger la seguridad de la plataforma, de nuestros usuarios y de tus datos.",
          "Cumplimiento legal y requerimientos regulatorios: En caso de ser necesario, utilizaremos y conservaremos la información pertinente para atender requisitos legales aplicables."
        ]
      }
    },
    {
      id: "data-sharing",
      title: "4. Compartición de datos con terceros",
      icon: <Lock className="w-6 h-6" />,
      content: {
        intro: "En Greenify no vendemos, alquilamos ni intercambiamos tus datos personales a terceros bajo ninguna circunstancia. Solo compartimos tu información cuando es necesario:",
        items: [
          "Proveedores de infraestructura y almacenamiento: Utilizamos la nube de Microsoft Azure para hospedar nuestros servidores y bases de datos. Microsoft solo accede a la información en la medida necesaria para brindar su servicio de hosting.",
          "Procesadores de pago: Para gestionar los pagos dentro de la App, trabajamos con Wompi, una pasarela de pagos segura. Wompi actúa como un tercero encargado del tratamiento, cumpliendo con estrictos estándares de seguridad (PCI DSS).",
          "Servicios de analítica y mejora: Empleamos herramientas de análisis de terceros como Google Analytics para recopilar datos estadísticos agregados sobre el uso de la App.",
          "Servicios de autenticación y redes sociales: Si decides utilizar opciones de autenticación de terceros para ingresar a Greenify (como 'Continuar con Google', 'Iniciar sesión con Apple' o 'Login con Facebook').",
          "Proveedores y aliados técnicos: En ocasiones podemos contar con empresas o contratistas que nos brindan soporte en distintas operaciones de la App, siempre bajo obligaciones de confidencialidad.",
          "Requerimientos legales: Podríamos divulgar información personal cuando consideremos de buena fe que dicha divulgación es necesaria para cumplir con una obligación legal o responder a un proceso legal."
        ]
      }
    },
    {
      id: "international-transfers",
      title: "5. Transferencias internacionales",
      icon: <Globe className="w-6 h-6" />,
      content: {
        intro: "ARRIVAL SAS opera desde Colombia, pero algunos de los terceros y servicios que utilizamos se encuentran ubicados en otros países:",
        items: [
          "Tus datos pueden transferirse y almacenarse fuera de tu país de residencia, incluyendo países que pueden tener normas de protección de datos diferentes.",
          "Implementamos las garantías adecuadas conforme a la legislación aplicable para proteger tu información en transferencias internacionales.",
          "Esto puede incluir la firma de cláusulas contractuales estándar aprobadas por la Comisión Europea, certificaciones bajo marcos de protección reconocidos internacionalmente.",
          "Nos aseguramos de que tus derechos viajen con tus datos, y de que cualquier entidad fuera de Colombia que tenga acceso a tu información personal ofrezca un nivel de protección acorde a esta Política."
        ]
      }
    },
    {
      id: "data-retention",
      title: "6. Conservación de los datos",
      icon: <Clock className="w-6 h-6" />,
      content: {
        intro: "Conservamos tus datos personales únicamente durante el tiempo que sea necesario para cumplir con las finalidades para las cuales fueron recopilados:",
        items: [
          "Los datos asociados a tu cuenta y perfil de usuario se mantendrán mientras tengas una cuenta activa en Greenify. Si decides eliminar tu cuenta, procederemos a eliminar o anonimizar dicha información.",
          "Los datos recopilados con tu consentimiento para fines específicos se retendrán mientras no revoques dicho consentimiento o hasta cumplida la finalidad original.",
          "La información de transacciones económicas se almacenará durante los plazos que exijan las leyes financieras, tributarias y comerciales (generalmente 5 años en Colombia).",
          "Los registros de seguridad, logs del servidor y copias de respaldo se conservan por períodos limitados (generalmente pocos meses) a efectos de seguridad y continuidad del servicio.",
          "Una vez que vence el periodo de conservación pertinente, procedemos a la supresión segura de los datos personales."
        ]
      }
    },
    {
      id: "user-rights",
      title: "7. Derechos de los usuarios",
      icon: <Eye className="w-6 h-6" />,
      content: {
        intro: "Como titular de tus datos personales, cuentas con una serie de derechos que puedes ejercer en cualquier momento:",
        items: [
          "Acceder a tus datos: Puedes solicitarnos que te confirmemos si estamos tratando datos personales tuyos y requerir una copia de dicha información.",
          "Rectificación: Tienes derecho a corregir o actualizar datos personales inexactos, desactualizados o incompletos que tengamos sobre ti.",
          "Supresión: También llamado 'derecho al olvido'. Puedes solicitarnos la eliminación de tus datos personales cuando ya no sean necesarios para las finalidades originales.",
          "Oposición al tratamiento: En determinadas situaciones, puedes oponerte a que tratemos tus datos personales (por ejemplo, para fines de marketing directo).",
          "Limitación del tratamiento: Puedes solicitar que 'congelemos' el uso de tus datos personales en ciertas circunstancias.",
          "Portabilidad de datos: Tienes derecho a obtener ciertos datos personales tuyos en un formato estructurado, de uso común y lectura mecánica.",
          "Retirar el consentimiento: Si has otorgado consentimiento para algún tratamiento específico, tienes derecho a revocar ese consentimiento en cualquier momento.",
          "A no ser objeto de decisiones automatizadas: Greenify no lleva a cabo decisiones basadas únicamente en tratamientos automatizados que produzcan efectos jurídicos significativos."
        ]
      }
    },
    {
      id: "security",
      title: "8. Seguridad de la información",
      icon: <Shield className="w-6 h-6" />,
      content: {
        intro: "En ARRIVAL SAS implementamos medidas técnicas, organizativas y administrativas de primer nivel para proteger la información personal:",
        items: [
          "Cifrado: Los datos sensibles que se transmiten entre tu dispositivo y nuestros servidores viajan protegidos mediante protocolos de cifrado (SSL/TLS).",
          "Control de accesos: Limitamos estrictamente el acceso a los datos personales únicamente a aquellos empleados, contratistas y agentes que necesitan conocer dicha información.",
          "Infraestructura segura: Nuestros servicios funcionan sobre plataformas de nube reconocidas (como Azure) que cuentan con certificaciones internacionales de seguridad (ISO 27001, SOC 2).",
          "Pruebas y monitoreo: Mantenemos actualizado nuestro software y realizamos pruebas de seguridad periódicas (incluyendo pruebas de penetración y análisis de código).",
          "Políticas internas y capacitación: Contamos con políticas y procedimientos internos de privacidad y seguridad alineados con las mejores prácticas.",
          "Respuesta a incidentes: En caso de presentarse algún incidente de seguridad que comprometa tus datos, te notificaremos oportunamente conforme a las leyes aplicables."
        ]
      }
    },
    {
      id: "minors-privacy",
      title: "9. Privacidad de menores de edad",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: {
        intro: "La protección de la privacidad de los menores es especialmente importante:",
        items: [
          "Greenify no está dirigida a menores de edad (generalmente considerados menores de 18 años) y no recopilamos intencionalmente información personal de niños, niñas o adolescentes.",
          "Si eres menor de edad, por favor no utilices la App ni nos proporciones información personal.",
          "En caso de detectar que, inadvertidamente, hemos recopilado datos personales de un menor sin el consentimiento parental verificable, tomaremos las medidas necesarias para eliminar dicha información.",
          "Si eres padre, madre o tutor y sospechas que tu hijo/a menor nos ha proporcionado información, contáctanos de inmediato para ayudarnos a resolver la situación."
        ]
      }
    },
    {
      id: "policy-changes",
      title: "10. Cambios en esta política",
      icon: <Database className="w-6 h-6" />,
      content: {
        intro: "Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad de tiempo en tiempo:",
        items: [
          "Si realizamos cambios sustanciales, te lo notificaremos a través de los medios disponibles: podremos colocar un aviso destacado dentro de la App, enviarte un correo electrónico o mostrarte una notificación.",
          "La fecha de 'Última actualización' al inicio de este documento indicará cuándo se revisó por última vez.",
          "Te recomendamos revisar periódicamente esta página para estar al tanto de cómo protegemos tu información.",
          "El uso continuado de Greenify después de la entrada en vigor de cualquier actualización constituye la aceptación de los cambios.",
          "No reduciremos significativamente tus derechos como usuario en lo que respecta a la privacidad sin tu consentimiento expreso."
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
            Política de Privacidad de{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Greenify
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            En Greenify, nos tomamos muy en serio la privacidad de nuestros usuarios y la protección de sus datos personales. 
            Greenify es desarrollada y operada por ARRIVAL SAS, una sociedad constituida en Colombia.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos tu información personal cuando utilizas nuestra aplicación, 
              en cumplimiento de las leyes de protección de datos aplicables, incluyendo la normativa colombiana (derecho de Habeas Data y Ley 1581 de 2012), 
              el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la Ley de Privacidad del Consumidor de California (CCPA), entre otras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Cifrado SSL/TLS</h3>
              <p className="text-sm text-muted-foreground">Máxima seguridad en transmisión de datos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Transparencia Total</h3>
              <p className="text-sm text-muted-foreground">Cumplimiento GDPR, CCPA y Ley 1581 de 2012</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Control Completo</h3>
              <p className="text-sm text-muted-foreground">Tus datos, tus derechos, tus decisiones</p>
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
                11. Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o con el tratamiento de tus datos personales en Greenify, 
                no dudes en contactarnos. Estaremos atentos para resolver tus dudas y ayudarte en lo que necesites en materia de privacidad.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email de Contacto</p>
                      <a href="mailto:tech.team@thearrival.tech" className="text-primary hover:underline">
                        tech.team@thearrival.tech
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp Directo</p>
                      <a href="https://wa.me/573215086797?text=Hola%20ARRIVAL,%20tengo%20preguntas%20sobre%20privacidad%20de%20Greenify" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-primary hover:underline">
                        +57 321 508-6797
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 mt-6">
                  <p className="font-medium mb-2">Responsable del Tratamiento:</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>ARRIVAL SAS</strong> (NIT 901.893.131-6), operador de la app Greenify<br />
                    <strong>Dirección:</strong> Cra. 13 #85-39, Oficina 705, Bogotá D.C., Colombia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Footer */}
          <div className="mt-12 p-6 rounded-lg bg-muted/30 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Esta Política de Privacidad está regida por las leyes de Colombia y cumple con la Ley 1581 de 2012 
              de Protección de Datos Personales, el RGPD europeo y la CCPA de California para usuarios internacionales.
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Agradecemos la confianza que depositas en Greenify.</strong> Estamos comprometidos con proteger tu privacidad 
              y contribuir a un futuro más sostenible de la mano de nuestros usuarios.
            </p>
            <p className="text-sm font-medium text-primary mt-4">
              ¡Gracias por usar Greenify!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};