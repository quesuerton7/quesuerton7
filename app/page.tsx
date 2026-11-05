'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface SorteoItem {
  numero: number;
  estado: 'libre' | 'reservado' | 'pagado';
  usuario_nombre?: string;
  usuario_whatsapp?: string;
}

export default function SorteoPage() {
  const [numeros, setNumeros] = useState<SorteoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNumero, setSelectedNumero] = useState<SorteoItem | null>(null);
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  useEffect(() => {
    fetchNumeros();
  }, []);

  async function fetchNumeros() {
    const { data, error } = await supabase
      .from('sorteo_100')
      .select('*')
      .order('numero', { ascending: true });

    if (error) {
      console.error('Error al cargar números:', error);
    } else {
      setNumeros(data || []);
    }
    setLoading(false);
  }

  const handleSelect = (item: SorteoItem) => {
    if (item.estado !== 'libre') return;
    setSelectedNumero(item);
  };

  const handleReservar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNumero) return;

    const { error } = await supabase
      .from('sorteo_100')
      .update({
        estado: 'reservado',
        usuario_nombre: nombre,
        usuario_whatsapp: whatsapp,
        updated_at: new Date().toISOString(),
      })
      .eq('numero', selectedNumero.numero);

    if (error) {
      alert('Hubo un error al reservar el número.');
    } else {
      alert(`¡Número ${selectedNumero.numero.toString().padStart(2, '0')} reservado con éxito! Pronto te contactaremos.`);
      setSelectedNumero(null);
      setNombre('');
      setWhatsapp('');
      fetchNumeros();
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-2">Qué Suertón 7</h1>
        <p className="text-slate-300 mb-8">Sorteo Relámpago - Elegí tu número favorito ($1.000)</p>

        {loading ? (
          <p className="text-xl">Cargando tablero...</p>
        ) : (
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-3 mb-10">
            {numeros.map((item) => {
              let bg = 'bg-emerald-600 hover:bg-emerald-500 cursor-pointer';
              if (item.estado === 'reservado') bg = 'bg-amber-500 opacity-60 cursor-not-allowed';
              if (item.estado === 'pagado') bg = 'bg-rose-600 opacity-60 cursor-not-allowed';

              return (
                <button
                  key={item.numero}
                  onClick={() => handleSelect(item)}
                  disabled={item.estado !== 'libre'}
                  className={`py-3 rounded-lg font-bold text-lg transition shadow-md ${bg}`}
                >
                  {item.numero.toString().padStart(2, '0')}
                </button>
              );
            })}
          </div>
        )}

        {selectedNumero && (
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 max-w-md mx-auto text-left shadow-2xl">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Reservar el número: #{selectedNumero.numero.toString().padStart(2, '0')}
            </h2>
            <form onSubmit={handleReservar} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-slate-300">Tu Nombre y Apellido:</label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full p-2.5 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-slate-300">Tu WhatsApp:</label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full p-2.5 rounded bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Ej: 1123456789"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedNumero(null)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded text-sm transition"
                >
                  Confirmar Reserva
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
