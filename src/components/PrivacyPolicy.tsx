import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Política de{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Privacidad
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground text-center mb-12">
          En ARRIVAL, protegemos tu privacidad y datos personales con los más altos estándares de seguridad.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Recopilamos información que nos proporcionas directamente, incluyendo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información de la empresa y proyecto</li>
                <li>Comunicaciones a través de WhatsApp y email</li>
                <li>Información técnica sobre tu proyecto</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Cómo Usamos tu Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar servicios de desarrollo tecnológico</li>
                <li>Comunicarnos contigo sobre tu proyecto</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales y contractuales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Protección de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encriptación de datos en tránsito y en reposo</li>
                <li>Acceso restringido solo a personal autorizado</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Cumplimiento con estándares internacionales de seguridad</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compartir Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>No vendemos, alquilamos o compartimos tu información personal con terceros, excepto:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar (bajo estrictos acuerdos de confidencialidad)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos o incompletos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Portabilidad de datos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies y Tecnologías Similares</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Utilizamos cookies y tecnologías similares para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Analizar el uso del sitio</li>
                <li>Personalizar tu experiencia</li>
              </ul>
              <p>Puedes controlar las cookies a través de la configuración de tu navegador.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Retención de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Conservamos tu información personal solo durante el tiempo necesario para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cumplir con los propósitos para los que fue recopilada</li>
                <li>Satisfacer requisitos legales, contables o de informes</li>
                <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Transferencias Internacionales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Como empresa con alcance global, podemos transferir tu información a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Servidores ubicados en diferentes países</li>
                <li>Socios comerciales internacionales</li>
                <li>Proveedores de servicios en la nube</li>
              </ul>
              <p>Todas las transferencias se realizan con las debidas salvaguardas legales.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Menores de Edad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente información de menores de 18 años. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos mediante:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publicación en nuestro sitio web</li>
                <li>Notificación por email</li>
                <li>Comunicación directa</li>
              </ul>
              <p className="font-semibold">Última actualización: Enero 2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, contáctanos:</p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                <p><strong>Email:</strong> privacy@thearrival.tech</p>
                <p><strong>WhatsApp:</strong> +57 321 5086797</p>
                <p><strong>Dirección:</strong> CL 79 # 5 - 81, Bogotá D.C., Colombia</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM (COT)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="#footer"
            className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-md transition-colors"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    </section>
  );
};