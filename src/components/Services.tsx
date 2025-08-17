import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Search, Wallet, BarChart3, Rocket, Code, Palette, TrendingUp } from "lucide-react";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Desarrollo Full-Stack",
    description:
      "Aplicaciones web y móviles con las últimas tecnologías: React, Node.js, Flutter, y más.",
    icon: <Code className="w-10 h-10 text-black dark:text-white" />,
  },
  {
    title: "DevOps & Cloud",
    description:
      "Infraestructura escalable en AWS, Google Cloud y Azure. CI/CD automatizado y monitoreo 24/7.",
    icon: <Rocket className="w-10 h-10 text-black dark:text-white" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Diseños que enamoran usuarios y convierten visitantes en clientes fieles. Design Systems escalables.",
    icon: <Palette className="w-10 h-10 text-black dark:text-white" />,
  },
  {
    title: "Growth Hacking",
    description:
      "Estrategias de crecimiento digital probadas. Analytics avanzados y optimización de conversión.",
    icon: <TrendingUp className="w-10 h-10 text-black dark:text-white" />,
  },
];

export const Services = () => {
  return (
    <section id="process" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              ARRIVAL: tu socio{" "}
            </span>
            de tecnología
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Para construir el futuro ahora. Cada servicio está diseñado para llevar tu idea desde el concepto hasta un producto digital que conquiste mercados globales.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-black/10 dark:bg-white/10 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
