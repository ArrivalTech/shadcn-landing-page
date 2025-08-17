export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "100+",
      description: "Proyectos Exitosos",
    },
    {
      quantity: "40%",
      description: "Más Rápido que la Media",
    },
    {
      quantity: "15+",
      description: "Países Impactados",
    },
    {
      quantity: "50+",
      description: "Clientes Satisfechos",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
