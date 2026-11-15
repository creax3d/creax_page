import { Icon } from "./Icon";
import { whatsappLink } from "../data/site";

export function FloatingContact() {
  return (
    <a
      className="floating-contact"
      href={whatsappLink("Hola Creax3D, quiero conversar sobre un proyecto.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <Icon name="telegram" size={24} />
      <span className="floating-tip">Escríbenos</span>
    </a>
  );
}
