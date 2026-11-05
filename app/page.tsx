export default function FAQ() {
  const faqs = [
    {
      q: "¿Cómo hago para participar en los sorteos?",
      a: "Es una papa: elegís tu plan o tu número de la suerte, abonás de forma super segura con Mercado Pago y ya quedás anotado automáticamente en el sistema."
    },
    {
      q: "¿Cuándo y cómo se realizan los sorteos?",
      a: "Los sorteos los hacemos en vivo en las fechas que avisamos por nuestras redes. Nos guiamos siempre por la Lotería de la Provincia o Nacional para que sea 100% transparente."
    },
    {
      q: "¿Cómo me avisan si soy el ganador?",
      a: "Apenas sale tu número, te pegamos un llamadito o te escribimos directo al WhatsApp que dejaste registrado para coordinar la entrega del premio o la transferencia al instante."
    }
  ];

  return (
    <section className="py-12 bg-gray-900 text-white max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Preguntas Frecuentes</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-800 pb-4">
            <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
            <p className="text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
