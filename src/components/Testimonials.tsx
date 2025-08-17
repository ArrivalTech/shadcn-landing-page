import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Mendoza",
    userName: "CEO • FinTech LATAM",
    comment: "Llegamos a Arrival con un concepto poco definido y en 3 meses teníamos un MVP funcional que nos permitió levantar inversión. Su capacidad técnica es impecable, pero lo que realmente los diferencia es su visión de negocio.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ana García",
    userName: "CTO • EdTech Revolution",
    comment:
      "Arrival no solo desarrolla apps: construye futuros digitales. Su enfoque 360° y velocidad de ejecución nos permitió escalar globalmente en tiempo récord.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Miguel Torres",
    userName: "Founder • HealthTech Colombia",
    comment:
      "La diferencia entre imaginar y ejecutar. Eso es Arrival. Transformaron nuestra idea en un producto que hoy impacta miles de vidas en toda Latinoamérica.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofia Ramírez",
    userName: "CPO • RetailTech",
    comment:
      "El equipo de Arrival entiende que el tiempo es dinero. Nos entregaron un producto de calidad mundial en la mitad del tiempo que esperábamos.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Diego Herrera",
    userName: "CTO • Marketplace LATAM",
    comment:
      "Arquitectura sólida, código limpio y un equipo que realmente entiende de escalabilidad. Nuestra plataforma maneja millones de transacciones sin problemas.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Camila Vásquez",
    userName: "CEO • SaaS B2B",
    comment:
      "Más que un proveedor, Arrival se convirtió en nuestro socio estratégico. Su visión de producto y ejecución técnica son excepcionales.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Lo que dicen nuestros
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          clientes exitosos{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Cada testimonio representa una transformación: de idea a startup exitosa, de concepto a aplicación que impacta miles de vidas.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
