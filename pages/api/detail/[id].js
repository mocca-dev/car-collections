export default function handler(req, res) {
  const { id } = req.query;

  const me = {
    name: 'Audi RS5 2022',
    owner: 'Shmee150',
    picURL: '',
    status: {
      followers: '4K',
      following: '1.1K',
      cars: '4',
    },
    description: `Gracias al diseño progresivo con un aspecto frontal definido con
    precisión y una trasera característica, el carácter deportivo del
    Audi A4 Sedan se manifiesta más que nunca: un interior premium y
    funcional, tecnologías innovadoras en los ámbitos de la
    digitalización, el infoentretenimiento y los sistemas de asistencia
    al conductor, y una gama de potentes motores completan el paquete.
    Gracias al diseño progresivo con un aspecto frontal definido con
    precisión y una trasera característica, el carácter deportivo del
    Audi A4 Sedan se manifiesta más que nunca: un interior premium y
    funcional, tecnologías innovadoras en los ámbitos de la
    digitalización, el infoentretenimiento y los sistemas de asistencia
    al conductor, y una gama de potentes motores completan el paquete.
    gama de potentes motores completan el paquete. Gracias al diseño
    progresivo con un aspecto frontal definido con precisión y una
    trasera característica, el carácter deportivo del Audi A4 Sedan se
    manifiesta más que nunca: un interior premium y funcional,
    tecnologías innovadoras en los ámbitos de la digitalización, el
    infoentretenimiento y los sistemas de asistencia al conductor, y una
    gama de potentes motores completan el paquete. gama de potentes
    motores completan el paquete. Gracias al diseño progresivo con un
    aspecto frontal definido con precisión y una trasera característica,
    el carácter deportivo del Audi A4 Sedan se manifiesta más que nunca:
    un interior premium y funcional, tecnologías innovadoras en los
    ámbitos de la digitalización, el infoentretenimiento y los sistemas
    de asistencia al conductor, y una gama de potentes motores completan
    el paquete. motores completan el paquete. Gracias al diseño
    progresivo con un aspecto frontal definido con precisión y una
    trasera característica, el carácter deportivo del Audi A4 Sedan se
    manifiesta más que nunca: un interior premium y funcional,
    tecnologías innovadoras en los ámbitos de la digitalización, el
    infoentretenimiento y los sistemas de asistencia al conductor, y una
    gama de potentes motores completan el paquete. gama de potentes
    motores completan el paquete. Gracias al diseño progresivo con un
    aspecto frontal definido con precisión y una trasera característica,
    el carácter deportivo del Audi A4 Sedan se manifiesta más que nunca:
    un interior premium y funcional, tecnologías innovadoras en
    AAAAAAAAAAAAos ámbitos de la digitalización, el infoentretenimiento
    y los sistemas de asistencia al conductor, y una gama de potentes
    motores completan el paquete.`,
  };

  res.status(200).json(me);
}
