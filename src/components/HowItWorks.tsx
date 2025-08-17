import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, Zap, Rocket, Globe } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "🎨 Diseño que enamora",
    description:
      "Interfaces adictivas que conquistan usuarios desde el primer clic",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "⚡ Arquitectura robusta",
    description:
      "Escalabilidad mundial preparada para millones de usuarios",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "🚀 Agilidad de negocio",
    description:
      "MVPs funcionales en semanas, no meses",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "🌍 Visión global",
    description:
      "Estrategias para conquistar mercados internacionales",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Lo que nos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          diferencia{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Metodologías ágiles probadas, herramientas de vanguardia y un equipo con experiencia internacional
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
