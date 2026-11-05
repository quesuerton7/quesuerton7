"use client";
import { useState } from "react";

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Guardar o enviar datos (por ejemplo, a tu base de datos o API)
    console.log("Datos del cliente:", formData);

    // Reemplazá este URL por tu link de cobro / suscripción de Mercado Pago
    const mercadoPagoUrl = "HTTPS_TU_LINK_DE_MERCADO_PAGO"; 
    window.location.href = mercadoPagoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
      <h3 className="text-xl font-bold text-yellow-400 text-center">
        Completá tus datos para participar
      </h3>
      
      <div>
        <label className="block text-sm text-gray-300 mb-1">Nombre completo</label>
        <input
          type="text"
          required
          placeholder="Ej: Juan Pérez"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Correo electrónico</label>
        <input
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">Número de WhatsApp</label>
        <input
          type="tel"
          required
          placeholder="Ej: 3541XXXXXX"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
          value={formData.whatsapp}
          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
      >
        Continuar al pago
      </button>
    </form>
  );
}
