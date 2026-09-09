import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-site max-w-2xl text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl">Esta página no existe</h1>
        <p className="mt-3 text-muted">
          Puede que el enlace esté mal escrito o que la página haya cambiado de lugar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Ir al inicio
          </Link>
          <Link href="/servicios/" className="btn-outline">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
