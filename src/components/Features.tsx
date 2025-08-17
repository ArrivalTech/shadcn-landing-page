import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Consultoría Estratégica",
    description:
      "Validamos el modelo de negocio de tu app con precisión quirúrgica. Análisis de mercado, validación MVP y arquitectura de producto.",
    image: image4,
  },
  {
    title: "Ingeniería de Producto",
    description:
      "Construimos soluciones seguras, rápidas y escalables de clase mundial. Desarrollo Full-Stack, DevOps & Cloud, escalabilidad automática.",
    image: image3,
  },
  {
    title: "Diseño de Experiencia",
    description:
      "Cada interacción está diseñada para enamorar y fidelizar usuarios. UI/UX Design, prototipado interactivo, Design Systems.",
    image: image,
  },
];

const featureList: string[] = [
  "React Native",
  "Node.js",
  "Cloud Native",
  "AI/ML",
  "DevOps",
  "Microservices",
  "Blockchain",
  "Flutter",
  "Vue.js",
];

export const Features = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nuestros{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Servicios
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
