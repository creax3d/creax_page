import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export function NotFound() {
  return (
    <section className="hero">
      <div className="grid-lines" />
      <div className="glow-orb left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 opacity-60" />
      <div className="shell relative z-10 text-center">
        <p className="mono text-white/40">Error 404</p>
        <h1 className="display mt-4 text-[clamp(4rem,15vw,10rem)] leading-none">
          <span className="neon">Página</span> perdida
        </h1>
        <p className="lead mx-auto mt-5 max-w-md">
          Esta página no existe o cambió de lugar. El oso la está buscando, pero puedes volver al inicio.
        </p>
        <img
          src="/brand/isotipo.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto mt-8 w-40 opacity-70 drop-shadow-[0_0_40px_rgba(86,254,254,0.35)]"
        />
        <div className="mt-8 flex justify-center">
          <Link to="/" className="btn btn-solid">
            Volver al inicio
            <Icon name="arrowUpRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
