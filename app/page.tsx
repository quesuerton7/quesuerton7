'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  // Ejemplo de números para la rifa
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const handlePayment = () => {
    if (!selectedNumber) {
      alert('Por favor, seleccioná un número antes de continuar.');
      return;
    }
    // AQUÍ VA TU LINK DE MERCADO PAGO O PREFERENCIA DE PAGO
    // Podés reemplazar la URL por tu link de cobro de Mercado Pago
    window.open(`https://www.mercadopago.com.ar`, '_blank');
  };

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '2rem 1rem'
    }}>
      {/* Encabezado principal */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#fbbf24', margin: '0 0 0.5rem 0' }}>
          ¡Qué Suertón 7! 🎰
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', margin: 0 }}>
          Elegí tu número de la suerte, pagá con Mercado Pago y participá.
        </p>
      </header>

      {/* Grilla de Selección de Números */}
      <section style={{
        backgroundColor: '#1e293b',
        borderRadius: '1rem',
        padding: '1.5rem',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center', color: '#38bdf8' }}>
          Selecciona tu número
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
          gap: '0.5rem',
          maxHeight: '300px',
          overflowY: 'auto',
          padding: '0.5rem'
        }}>
          {numbers.map((num) => (
            <button
              key={num}
              onClick={() => setSelectedNumber(num)}
              style={{
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: selectedNumber === num ? '#fbbf24' : '#334155',
                color: selectedNumber === num ? '#0f172a' : '#f8fafc',
                transition: 'all 0.2s ease'
              }}
            >
              {num < 10 ? `0${num}` : num}
            </button>
          ))}
        </div>
      </section>

      {/* Resumen y Botón de Mercado Pago */}
      {selectedNumber && (
        <div style={{
          backgroundColor: '#1e293b',
          borderRadius: '1rem',
          padding: '1.5rem',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
          border: '2px solid #fbbf24'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Elegiste el número: <strong style={{ color: '#fbbf24', fontSize: '1.5rem' }}>{selectedNumber}</strong>
          </p>
          <button
            onClick={handlePayment}
            style={{
              backgroundColor: '#009ee3', // Color oficial de Mercado Pago
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              padding: '0.8rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            Pagar con Mercado Pago 💳
          </button>
        </div>
      )}
    </main>
  );
}
