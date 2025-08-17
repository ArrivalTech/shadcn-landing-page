import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Cuánto tiempo toma desarrollar una app?",
    answer: "Nuestros MVPs están listos en 6-8 semanas. Somos 40% más rápidos que la media del mercado manteniendo la máxima calidad.",
    value: "item-1",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "React Native, Flutter, Node.js, Python, Cloud Native (AWS, Google Cloud), AI/ML, Blockchain y las últimas tecnologías de vanguardia.",
    value: "item-2",
  },
  {
    question:
      "¿Cómo garantizan la escalabilidad?",
    answer:
      "Arquitectura cloud nativa desde el día uno, auto-scaling, load balancing y CDN global. Preparamos tu app para millones de usuarios.",
    value: "item-3",
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer: "Sí, ofrecemos monitoreo 24/7, mantenimiento, optimizaciones continuas y nuevas features basadas en feedback real de usuarios.",
    value: "item-4",
  },
  {
    question:
      "¿Trabajan con startups y empresas grandes?",
    answer:
      "Sí, trabajamos desde startups pre-semilla hasta empresas Fortune 500. Adaptamos nuestro enfoque según las necesidades específicas de cada cliente.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Tienes más preguntas?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contáctanos
        </a>
      </h3>
    </section>
  );
};
