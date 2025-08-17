import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            ARRIVAL
          </a>
          <p className="text-muted-foreground mt-2">
            Donde tu idea se convierte en la próxima gran app. Desarrollo tecnológico de clase mundial desde Bogotá para el mundo.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Servicios</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Desarrollo de Apps
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Consultoría Estratégica
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Diseño UX/UI
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Industrias</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#cases"
              className="opacity-60 hover:opacity-100"
            >
              FinTech
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cases"
              className="opacity-60 hover:opacity-100"
            >
              HealthTech
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cases"
              className="opacity-60 hover:opacity-100"
            >
              EdTech
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Empresa</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              Sobre Nosotros
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Equipo
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#cases"
              className="opacity-60 hover:opacity-100"
            >
              Casos de Éxito
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contacto</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:tech.team@thearrival.tech"
              className="opacity-60 hover:opacity-100"
            >
              Email
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://wa.me/573001234567"
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className="opacity-60 hover:opacity-100"
            >
              Oficina
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 ARRIVAL. Todos los derechos reservados.{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            "El futuro no se espera, se programa." - ARRIVAL Team
          </a>
        </h3>
      </section>
    </footer>
  );
};
