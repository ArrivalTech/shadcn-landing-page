import { buttonVariants } from "./ui/button";
import logo from "../assets/logo.png";

export const Hero = () => {
  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Logo principal */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="ARRIVAL Logo" className="h-16 md:h-20 w-auto" />
        </div>
        
        <main className="text-5xl md:text-7xl font-bold leading-tight">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
              ARRIVAL
            </span>
          </h1>
          <br />
          <h2 className="text-3xl md:text-4xl font-normal text-gray-600 dark:text-gray-400 mt-4">
            Desarrollo Tecnológico de Clase Mundial
          </h2>
        </main>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Donde tu idea se convierte en la próxima gran app.<br />
          No construimos aplicaciones: lanzamos ecosistemas digitales que transforman industrias.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="https://wa.me/573215086797?text=Hola%20ARRIVAL,%20quiero%20comenzar%20un%20proyecto"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-md transition-colors"
          >
            WhatsApp
          </a>

          <a
            rel="noreferrer noopener"
            href="https://wa.me/573215086797?text=Hola%20ARRIVAL,%20me%20gustaría%20ver%20una%20demo"
            target="_blank"
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })} border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 text-lg font-semibold`}
          >
            Solicitar Demo
          </a>
        </div>

        {/* Minimalist feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-black dark:text-white">40%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Más Rápido</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-black dark:text-white">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Proyectos</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-black dark:text-white">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Países</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-black dark:text-white">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Soporte</div>
          </div>
        </div>

        {/* Technology stack */}
        <div className="pt-12">
          <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-6">
            Tecnologías de Vanguardia
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">React Native</span>
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">Flutter</span>
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">Cloud Native</span>
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">AI/ML</span>
            <span className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium">Blockchain</span>
          </div>
        </div>
      </div>

      {/* Geometric background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200 dark:border-gray-800 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 dark:border-gray-900 rounded-full opacity-10"></div>
      </div>
    </section>
  );
};