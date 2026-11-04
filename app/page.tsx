export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between p-4 md:p-12 scroll-smooth selection:bg-blue-600 selection:text-white">
      
      {/* MENÚ SUPERIOR */}
      <nav className="w-full max-w-6xl flex flex-wrap justify-between items-center py-4 border-b border-slate-800/80 gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="Qué Suertón 7 Sorteos" 
            className="w-10 h-10 rounded-full object-cover border border-blue-500/40 shadow-md"
          />
          <h1 className="text-xl font-black tracking-wider text-white">
            QUÉ <span className="text-blue-500">SUERTÓN</span> 7
          </h1>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#beneficios" className="hover:text-blue-400 transition">Beneficios</a>
          <a href="#premios" className="hover:text-blue-400 transition">Premios</a>
          <a href="#como-funciona" className="hover:text-blue-400 transition">Cómo Funciona</a>
          <a href="#planes" className="hover:text-blue-400 transition">Planes</a>
          <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
        </div>

        <a 
          href="#planes" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-xs tracking-wide"
        >
          Suscribirme
        </a>
      </nav>

      <div className="w-full max-w-6xl space-y-24 py-12">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto space-y-6 flex flex-col items-center pt-6">
          <img 
            src="/logo.jpg" 
            alt="Logo Qué Suertón 7" 
            className="w-36 h-36 rounded-full object-cover border-2 border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.25)] mb-2"
          />

          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Pagos 100% Seguros a través de Mercado Pago
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
            Pagá una vez al mes y participá de <span className="text-blue-500">todos los sorteos</span>.
          </h2>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Un club de beneficios y sorteos pensado para darte más chances reales, con premios transparentes y respaldo total.
          </p>
        </section>

        {/* CLUB FUNDADOR */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800 p-8 md:p-10 rounded-3xl max-w-3xl mx-auto text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
            Club Fundador 🚀
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Los primeros <span className="text-amber-400">30 miembros</span> tienen más chances de ganar
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Al arrancar en esta etapa inicial, competís en un grupo reducido. Matemáticamente, tus probabilidades de salir sorteado en los primeros pozos son exponencialmente más altas.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">Ahorro Diario</span>
            <h3 className="text-3xl font-black text-white">Beneficios en Comercios Adheridos 🏷️</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Tu suscripción incluye una credencial digital para ahorrar todo el año en locales de la zona.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-lg">🍔</div>
              <h4 className="font-bold text-lg text-white">Gastronomía</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Descuentos exclusivos en bares, comidas y locales gastronómicos asociados.</p>
              <div className="text-emerald-400 text-xs font-bold pt-1">Hasta 20% OFF</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-lg">⚡</div>
              <h4 className="font-bold text-lg text-white">Tecnología</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Precios preferenciales en accesorios, service y gadgets de computación/celulares.</p>
              <div className="text-emerald-400 text-xs font-bold pt-1">Hasta 15% OFF</div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-lg">👕</div>
              <h4 className="font-bold text-lg text-white">Indumentaria</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Ahorros especiales en marcas de ropa y zapaterías de la red de socios.</p>
              <div className="text-emerald-400 text-xs font-bold pt-1">Hasta 20% OFF</div>
            </div>
          </div>
        </section>

        {/* PREMIOS ESCALONADOS */}
        <section id="premios" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">Crecimiento Transparente</span>
            <h3 className="text-3xl font-black text-white">Premios Escalonados por Suscriptores 🎁</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              A medida que la comunidad crece, la frecuencia y el valor de los pozos suben automáticamente:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block mb-1">Hasta 10 Suscriptores</span>
                <h4 className="text-xl font-extrabold text-white">1 Sorteo Mensual</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Pozo inicial garantizado enfocado en la fase fundadora con altísima probabilidad de cobro.</p>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-400">
                <span>Fase Inicial</span>
                <span className="text-emerald-400 font-bold">Activo Ahora</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block mb-1">Hasta 30 / 60 Suscriptores</span>
                <h4 className="text-xl font-extrabold text-white">2 a 3 Sorteos al Mes</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Se amplía la frecuencia y se suman pozos en efectivo más grandes junto con tecnología.</p>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-400">
                <span>Expansión</span>
                <span className="text-amber-400 font-bold">Creciendo...</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-1">Más de 100 Suscriptores</span>
                <h4 className="text-xl font-extrabold text-white">4 Sorteos al Mes</h4>
                <p className="text-slate-400 text-sm leading-relaxed">¡1 sorteo por semana! El objetivo máximo desbloqueado con pozos millonarios y vehículos.</p>
              </div>
              <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-400">
                <span>Meta Final</span>
                <span className="text-slate-400 font-bold">Objetivo VIP</span>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">Simple y Rápido</span>
            <h3 className="text-3xl font-black text-white">¿Cómo Funciona?</h3>
            <p className="text-slate-400 text-sm">Participar es súper fácil y 100% automático.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-400 text-lg font-bold rounded-full flex items-center justify-center mx-auto">1</div>
              <h4 className="font-bold text-lg text-white">Elegís tu Plan</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Te suscribís de forma segura a través de Mercado Pago con el abono que prefieras.</p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-400 text-lg font-bold rounded-full flex items-center justify-center mx-auto">2</div>
              <h4 className="font-bold text-lg text-white">Participás Automático</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Tus números VIP y credencial de descuentos quedan activos al instante en el sistema.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-400 text-lg font-bold rounded-full flex items-center justify-center mx-auto">3</div>
              <h4 className="font-bold text-lg text-white">¡Cobrás al Instante!</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Si tu número sale ganador, realizamos la transferencia del premio en el acto.</p>
            </div>
          </div>
        </section>

        {/* PLANES DE SUSCRIPCIÓN (TODOS ACTIVOS) */}
        <section id="planes" className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">Inversión Inteligente</span>
            <h3 className="text-3xl font-black text-white">Planes de Suscripción</h3>
            <p className="text-slate-400 text-sm">Asegurá tu lugar y ahorrá eligiendo tu periodo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1 MES */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">1 Mes</h4>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-white">$10.000</span>
                  <span className="text-slate-400 text-sm"> / mes</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Plan estándar flexible</p>
                <ul className="space-y-2.5 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Renovación mensual</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Descuentos en comercios</li>
                </ul>
              </div>
              <a
                href="https://mpago.la/2Yu1yEB" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                Elegir Plan
              </a>
            </div>

            {/* 3 MESES */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">3 Meses</h4>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-white">$9.000</span>
                  <span className="text-slate-400 text-sm"> / mes</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold mb-4">¡Ahorrás $3.000 en total ($27.000 final)!</p>
                <ul className="space-y-2.5 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Pago trimestral</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Descuentos en comercios</li>
                </ul>
              </div>
              <a
                href="https://mpago.la/14FNweN" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                Elegir Plan
              </a>
            </div>

            {/* 6 MESES */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">6 Meses</h4>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-white">$8.300</span>
                  <span className="text-slate-400 text-sm"> / mes</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold mb-4">¡Ahorrás $10.200 en total ($49.800 final)!</p>
                <ul className="space-y-2.5 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Pago semestral</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Descuentos en comercios</li>
                </ul>
              </div>
              <a
                href="https://mpago.la/17fa6xG" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                Elegir Plan
              </a>
            </div>

            {/* 12 MESES */}
            <div className="bg-slate-900 border-2 border-blue-600 p-6 rounded-3xl space-y-6 flex flex-col justify-between relative shadow-xl shadow-blue-600/10">
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Más Elegido
              </span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">12 Meses</h4>
                <div className="mb-2">
                  <span className="text-3xl font-extrabold text-white">$7.000</span>
                  <span className="text-slate-400 text-sm"> / mes</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold mb-4">¡Ahorrás $36.000 en total ($84.000 final)!</p>
                <ul className="space-y-2.5 text-slate-300 text-sm">
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Pago anual preferencial</li>
                  <li className="flex items-center gap-2"><span className="text-blue-400 font-bold">✓</span> Beneficios fundadores VIP</li>
                </ul>
              </div>
              <a
                href="https://mpago.la/348VBj7" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm"
              >
                Elegir Plan Anual
              </a>
            </div>

          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="space-y-6 max-w-3xl mx-auto pt-6">
          <div className="text-center space-y-2">
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">Dudas y Respuestas</span>
            <h3 className="text-3xl font-black text-white">Preguntas Frecuentes</h3>
            <p className="text-slate-400 text-sm">Todo lo que necesitás saber antes de sumarte.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h4 className="font-bold text-white text-base">¿Por qué conviene sumarse ahora al inicio?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Porque al ser los primeros suscriptores, la competencia por los pozos es menor, lo que multiplica tus chances matemáticas de ganar.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h4 className="font-bold text-white text-base">¿Cómo utilizo los descuentos en comercios?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Al estar suscripto recibís tu credencial digital para presentar en cualquiera de los locales adheridos y obtener rebajas al instante.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h4 className="font-bold text-white text-base">¿Puedo cancelar la suscripción cuando quiera?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Sí, totalmente. No hay contratos de permanencia. Cancelás con un solo clic directamente desde tu cuenta de Mercado Pago.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Pie de página */}
      <footer className="w-full max-w-6xl text-center text-xs text-slate-500 py-8 border-t border-slate-900 space-y-2">
        <p>© 2026 Qué Suertón 7. Todos los derechos reservados.</p>
        <p>Pagos procesados de forma 100% segura mediante Mercado Pago.</p>
      </footer>
    </main>
  );
}
