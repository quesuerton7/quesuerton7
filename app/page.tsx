export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f4f9',
      color: '#333',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0070f3' }}>
        ¡Bienvenidos a Qué Suertón 7!
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        Tu plataforma ya está online y desplegada correctamente con Next.js y Vercel.
      </p>
    </main>
  );
}
