"use client";
import React, { useState } from 'react';

export default function RegistroPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    confirmEmail: '',
    whatsapp: '',
    password: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && formData.email !== formData.confirmEmail) {
      alert("¡Pará un poco hermano! Los correos no coinciden. Revisalos bien.");
      return;
    }
    // Acá se conectará con la base de datos Supabase
    alert("¡Registrado con éxito! Te avisamos cualquier cosa.");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 flex flex-col justify-between selection:bg-yellow-500 selection:text-black">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-yellow-500 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-yellow-500/20">
              7
            </div>
            <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              QUÉ SUERTÓN 7
            </span>
          </div>
          <a href="/" className="text-sm font-semibold text-neutral-400 hover:text-yellow-400 transition-colors">
            ← Volver al inicio
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 my-8">
        <div className="w-full max-w-md bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Toggle Buttons */}
          <div className="flex bg-neutral-950 p-1 rounded-xl mb-8 border border-neutral-800">
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                !isLogin
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-md shadow-yellow-500/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Crear Cuenta
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                isLogin
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black shadow-md shadow-yellow-500/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black text-white tracking-tight">
              {isLogin ? '¡Hola de nuevo, hermano!' : '¡Bienvenido, hermano!'}
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              {isLogin
                ? 'Ingresá tus datos para ver tus números de la suerte.'
                : 'Sumate a la comunidad. Cargá tus datos para ubicarte al toque si ganás.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  ¿Cómo te llamás?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Marcelo Delgado"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 transition-colors"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Tu mail preferido
              </label>
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Repetilo por las dudas, maestro
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 transition-colors"
                  value={formData.confirmEmail}
                  onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                />
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Tu WhatsApp <span className="text-yellow-500 font-normal">(¡fundamental para avisarte!)</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 351 123 4567"
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 transition-colors"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                {isLogin ? 'Tu contraseña' : 'Inventate una clave bien segura'}
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500 transition-colors"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-500 text-black font-extrabold text-sm rounded-xl transition-all transform active:scale-95 shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2"
            >
              <span>{isLogin ? 'Ingresar a mi cuenta' : 'Continuar'}</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
