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

export default function JuegoSorteoPage() {
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

  const handleReservarYComprar = async (e: React.FormEvent) => {
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
      // LINK DE MERCADO PAGO POR $1.000 (Reemplazá el link de abajo con tu link real de Mercado Pago)
      const linkMercadoPago = 'https://link.mercadopago.com.ar/tu-link-de-pago';
      
      alert(`¡Número #${selectedNumero.numero.toString().padStart(2, '0')} reservado con éxito! Serás redirigido para abonar los $1.000.`);
      
      // Redirige automáticamente a Mercado Pago
      window.location.href = linkMercadoPago;
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans pb-16">
      <header className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 border-b border-purple-800/40 py-10 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 mb-2">
          Juego Relámpago - Qué Suertón 7
        </h1>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          Elegí tu número de la suerte (00 al 99). Cada número tiene un valor de <strong className="text-emerald-400">$1.000</strong>.
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-yellow-400 border-t-transparent"></div>
              <p className="text-slate-400 mt-3 text-sm">Cargando tablero...</p>
            </div>
          ) : (
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 max-w-2xl mx-auto mb-6">
              {numeros.map((item) => {
                let statusClasses = 'bg-slate-800 hover:bg-emerald-600 text-emerald-400 hover:text-white border-slate-700 hover:border-emerald-500 cursor-pointer';
                if (item.estado === 'reservado') statusClasses = 'bg-amber-500/20 text-amber-400 border-amber-500/40 cursor-not-allowed';
                if (item.estado === 'pagado') statusClasses = 'bg-rose-500/20 text-rose-400 border-rose-500/40 cursor-not-allowed';

                return (
                  <button
                    key={item.numero}
                    onClick={() => handleSelect(item)}
                    disabled={item.estado !== 'libre'}
                    className={`py-2 rounded-lg font-mono font-bold text-sm sm:text-base border transition duration-150 ${statusClasses}`}
                  >
                    {item.numero.toString().padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex justify-center items-center gap-6 text-xs text-slate-400 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></span> Libre</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 border border-amber-500"></span> Reservado</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/40 border border-rose-500"></span> Pagado</div>
          </div>
        </section>

        {selectedNumero && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full shadow-2xl">
              <h3 className="text-xl font-bold text-yellow-400 mb-1">
                Número Seleccionado: #{selectedNumero.numero.toString().padStart(2, '0')}
              </h3>
              <p className="text-xs text-slate-400 mb-4">Ingresá tus datos para proceder al pago de $1.000 con Mercado Pago.</p>

              <form onSubmit={handleReservarYComprar} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nombre y Apellido</label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-yellow-400"
                    placeholder="Ej: María Gómez"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp de contacto</label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-yellow-400"
                    placeholder="Ej: 1198765432"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedNumero(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs transition"
                  >
                    Pagar $1.000 con Mercado Pago
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
