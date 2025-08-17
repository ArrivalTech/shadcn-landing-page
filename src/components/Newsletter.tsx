import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Convirtamos tu idea en{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            la próxima gran app
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Agenda una consulta gratuita de 30 minutos y descubre cómo podemos acelerar el desarrollo de tu proyecto.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <a
            href="https://wa.me/573215086797?text=Hola%20ARRIVAL,%20quiero%20agendar%20una%20consulta%20gratuita"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-md transition-colors w-full"
          >
            Contactar por WhatsApp
          </a>
        </form>
        
        <div className="text-center mt-8 space-y-2">
          <p className="text-muted-foreground">Contacto directo:</p>
          <p className="font-semibold">tech.team@thearrival.tech</p>
          <p className="text-muted-foreground">CL 79 # 5 - 81, Bogotá D.C., Colombia</p>
          <p className="text-muted-foreground">Tel: +57 (321) 508-6797</p>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
