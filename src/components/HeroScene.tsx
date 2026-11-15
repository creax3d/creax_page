import { useRef } from "react";

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.style.setProperty("--px", String(((e.clientX - rect.left) / rect.width - 0.5) * 2));
    el.style.setProperty("--py", String(((e.clientY - rect.top) / rect.height - 0.5) * 2));
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  };

  return (
    <div
      className="hero-scene"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-hidden="true"
    >
      <div className="scene-glow" />
      <div className="orbit" />
      <div className="orbit orbit-2" />

      <span className="hero-badge">
        <span className="pulse" />
        Creax3D Studio
      </span>

      <div className="hs-chip hs-chip-1">
        <span className="dot" />
        Diseño 3D
      </div>
      <div className="hs-chip hs-chip-2">
        <span className="dot" />
        UI / UX
      </div>
      <div className="hs-chip hs-chip-3">
        <span className="dot" />
        React + Cloudflare
      </div>

      {/* Monitor */}
      <div className="device hs-monitor">
        <div className="monitor-frame">
          <div className="hs-screen">
            <div className="ui-titlebar">
              <span className="ui-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="ui-url">creax.studio / panel</span>
              <span className="ui-live">
                <i />
                en vivo
              </span>
            </div>
            <div className="ui-content">
              <aside className="ui-side">
                <span className="ui-brand" />
                <i className="active" />
                <i />
                <i />
                <i />
                <span className="ui-side-foot" />
              </aside>
              <div className="ui-main">
                <div className="ui-head">
                  <div>
                    <b>Panel del proyecto</b>
                    <em>Resumen general</em>
                  </div>
                  <span className="ui-avatar">Y</span>
                </div>
                <div className="ui-cards">
                  <div className="ui-card">
                    <em>Ingresos</em>
                    <b>$12.4k</b>
                    <span className="ui-up">+18%</span>
                  </div>
                  <div className="ui-card">
                    <em>Clientes</em>
                    <b>148</b>
                    <span className="ui-up">+12</span>
                  </div>
                  <div className="ui-card">
                    <em>Proyectos</em>
                    <b>09</b>
                    <span className="ui-up">activos</span>
                  </div>
                </div>
                <div className="ui-chart">
                  <i style={{ height: "28%" }} />
                  <i style={{ height: "52%" }} />
                  <i style={{ height: "42%" }} />
                  <i style={{ height: "72%" }} />
                  <i style={{ height: "58%" }} />
                  <i style={{ height: "88%" }} />
                  <i style={{ height: "68%" }} />
                  <i style={{ height: "96%" }} />
                  <span className="ui-chart-tag">Crecimiento</span>
                </div>
                <div className="ui-rows">
                  <span>
                    <i />
                    Landing Nébula
                  </span>
                  <span>
                    <i />
                    App Órbita
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="monitor-neck" />
        <div className="monitor-base" />
      </div>

      {/* Tablet */}
      <div className="device hs-tablet">
        <div className="tablet-frame">
          <div className="hs-screen tablet-screen">
            <div className="tab-head">
              <span className="ui-brand" />
              <span className="ui-avatar">M</span>
            </div>
            <div className="tab-title">
              <b>Analítica</b>
              <em>Últimos 30 días</em>
            </div>
            <div className="tab-stat">
              <em>Visitas</em>
              <b>24.8k</b>
              <span className="ui-up">+32%</span>
            </div>
            <div className="tab-chart">
              <i style={{ height: "38%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "80%" }} />
              <i style={{ height: "66%" }} />
              <i style={{ height: "94%" }} />
            </div>
            <div className="tab-cards">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="device hs-phone">
        <div className="phone-frame">
          <div className="hs-screen phone-screen">
            <span className="phone-notch" />
            <div className="phone-top">
              <span className="ui-brand" />
              <span className="ui-avatar">Y</span>
            </div>
            <em className="phone-hi">Hola,</em>
            <b className="phone-title">Tu proyecto</b>
            <div className="phone-hero">
              <em>Progreso</em>
              <b>76%</b>
              <span className="phone-bar">
                <i />
              </span>
            </div>
            <div className="phone-list">
              <span>
                <i className="done" />
                Diseño
                <em>Listo</em>
              </span>
              <span>
                <i />
                Desarrollo
                <em>En curso</em>
              </span>
              <span>
                <i />
                Deploy
                <em>Semana 4</em>
              </span>
            </div>
            <div className="phone-cta" />
          </div>
        </div>
      </div>
    </div>
  );
}
