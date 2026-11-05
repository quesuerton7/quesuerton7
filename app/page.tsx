'use client';

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  CheckCircle, 
  Gift, 
  Ticket, 
  ShieldCheck, 
  LogOut, 
  ExternalLink, 
  Sparkles, 
  AlertCircle,
  Clock,
  Trophy,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('register'); // 'register' | 'login'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    confirmEmail: '',
    password: '',
    whatsapp: '',
    acceptTerms: false,
    acceptPromos: true,
  });

  const [errors, setErrors] = useState<any>({});

  // Mock User Session Data
  const [user, setUser] = useState({
    nombre: 'Andrés Ibarlucea',
    email: 'andresibarlucea@gmail.com',
    whatsapp: '+54 9 3541 703376',
    subscriptionStatus: 'Activa',
    planName: 'Suscripción Mensual VIP',
    nextDrawDate: '15 de Noviembre, 2026',
    luckyNumbers: ['0742', '1893', '7707', '4120', '9051'],
  });

  // Form Validation & Submit
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio';
    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Los correos no coinciden';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      newErrors.whatsapp = 'Ingresá un WhatsApp válido para avisarte si ganás';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los Términos y Condiciones';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setUser((prev) => ({
      ...prev,
      nombre: formData.nombre,
      email: formData.email,
      whatsapp: formData.whatsapp,
    }));
    setIsLoggedIn(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    if (!formData.email) newErrors.email = 'Ingresá tu correo';
    if (!formData.password) newErrors.password = 'Ingresá tu contraseña';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoggedIn(true);
  };

  const handleGoogleAuth = () => {
    setIsLoggedIn(true);
  };

  const handleMercadoPagoRedirect = () => {
    const mpLink = "https://www.mercadopago.com.ar";
    window.open(mpLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col font-sans selection:bg-yellow-400 selection:text-black">
      {/* Header / Navbar */}
      <header className="border-b border-neutral-800 bg-[#121215]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsLoggedIn(false)}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-300 p-[2px] shadow-lg shadow-yellow-500/20">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                QUÉ SUERTÓN 7
              </span>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Comunidad de Ganadores</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="/juego" 
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black rounded-xl text-xs transition shadow-md"
            >
              🎮 Ir al Juego Relámpago (100 Números)
            </a>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-sm font-bold text-white">{user.nombre}</span>
                  <span className="text-xs text-green-400 flex items-center gap-1 justify-end font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                    Suscripción Activa
                  </span>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/60 rounded-xl text-xs font-bold text-neutral-300 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4 text-yellow-400" />
                  <span className="hidden sm:inline">Cerrar Sesión</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center bg-neutral-900/90 p-1 rounded-xl border border-neutral-800">
                <button
                  onClick={() => { setActiveTab('register'); setErrors({}); }}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeTab === 'register' 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md shadow-yellow-500/20' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Crear Cuenta
                </button>
                <button
                  onClick={() => { setActiveTab('login'); setErrors({}); }}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeTab === 'login' 
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md shadow-yellow-500/20' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Iniciar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-400/10 rounded-full blur-[130px] pointer-events-none" />

        {!isLoggedIn ? (
          <div className="w-full max-w-5xl bg-[#141417]/95 backdrop-blur-xl border border-neutral-800 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1b1b22] via-[#121216] to-[#0a0a0d] p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 relative">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-extrabold uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  Sorteos Semanales
                </div>

                <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  ¡Hermanito, bienvenido a la comunidad de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">ganadores!</span>
                </h1>

                <p className="text-neutral-300 text-sm leading-relaxed">
                  Suscribite, asegurá tus números de la suerte y participá de premios increíbles todas las semanas.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-yellow-400 mt-1 shadow-sm">
                      <Ticket className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Números asignados al instante</h4>
                      <p className="text-xs text-neutral-400">Consultá tus números en tu panel apenas te suscribas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-green-400 mt-1 shadow-sm">
                      <Phone className="
