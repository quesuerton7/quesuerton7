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

export default function Home() {
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
      alert(`¡Número ${selectedNumero.numero.toString().padStart(2, '0')} reservado con éxito! Pronto te contactaremos para confirmar el pago.`);
      setSelectedNumero(null);
      setNombre('');
      setWhatsapp('');
      fetchNumeros();
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-16">
      {/* HEADER / BANNER */}
      <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border-b border-purple-800/40 py-12 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 mb-3 drop-shadow-md">
          Qué Suertón 7
        </h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          ¡Participá de nuestros sorteos relámpago! Elegí tu número de la suerte, reservalo y ganá al instante.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 mt-10 space-y-12">
        {/* SECCIÓN JUEGO RELÁMPAGO (GRILLA DE 100 NÚMEROS) */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur">
          <div className="text-center mb-8">
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Sorteo Activo
            </span>
            <h2 className="text-3xl font-bold text-white">Tablero de 100 Números (00 al 99)</h2>
            <p className="text-slate-400 text-sm mt-1">Valor por número: <strong className="text-emerald-400">$1.000</strong></p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-yellow-400 border-t-transparent"></div>
              <p className="text-slate-400 mt-3 text-sm">Cargando números disponibles...</p>
            </div>
          ) : (
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2.5 max-w-3xl mx-auto mb-8">
              {numeros.map((item) => {
                let statusClasses = 'bg-slate-800 hover:bg-emerald-600 text-emerald-400 hover:text-white border-slate-700 hover:border-emerald-500 cursor-pointer';
                if (item.estado === 'reservado') statusClasses = 'bg-amber-500/20 text-amber-400 border-amber-500/40 cursor-not-allowed';
                if (item.estado === 'pagado') statusClasses = 'bg-rose-500/20 text-rose-400 border-rose-500/40 cursor-not-allowed';

                return (
                  <button
                    key={item.numero}
                    onClick={() => handleSelect(item)}
                    disabled={item.estado !== 'libre'}
                    className={`py-2.5 rounded-lg font-mono font-bold text-base sm:text-lg border transition duration-150 ${statusClasses}`}
                  >
                    {item.numero.toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          )}

          {/* LEYENDA ESTADOS */}
          <div className="flex justify-center items-center gap-6 text-xs text-slate-400 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></span> Libre
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500"></span> Reservado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/40 border border-rose-500"></span> Pagado
            </div>
          </div>
        </section>

        {/* MODAL / FORMULARIO DE RESERVA */}
        {selectedNumero && (
          <div className="fixed inset-
