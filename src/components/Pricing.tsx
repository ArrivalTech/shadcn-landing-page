import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "FinTech Revolution",
    popular: 0,
    price: 10,
    description:
      "Plataforma de pagos que procesa +$10M USD mensual",
    buttonText: "Ver Caso de Estudio",
    benefitList: [
      "React Native",
      "Node.js",
      "Blockchain",
      "Procesamiento en tiempo real",
      "Seguridad bancaria",
    ],
  },
  {
    title: "EduTech Global",
    popular: 1,
    price: 500,
    description:
      "App educativa con +500K usuarios activos",
    buttonText: "Ver Caso de Estudio",
    benefitList: [
      "Flutter",
      "AI/ML",
      "Cloud Native",
      "Gamificación",
      "Analytics avanzados",
    ],
  },
  {
    title: "HealthTech Innovation",
    popular: 0,
    price: 1000,
    description:
      "Telemedicina que conecta doctores y pacientes",
    buttonText: "Ver Caso de Estudio",
    benefitList: [
      "Vue.js",
      "Python",
      "Microservices",
      "Cumplimiento HIPAA",
      "Integración con hospitales",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="cases"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Apps que conquistan
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          millones de usuarios{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Cada proyecto es una historia de éxito. Desde startups que levantaron inversión hasta aplicaciones que transformaron industrias completas.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Más exitoso
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}K+</span>
                <span className="text-muted-foreground"> usuarios</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
