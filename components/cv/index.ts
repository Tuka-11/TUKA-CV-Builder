import type { ComponentType } from "react";
import type { CVData, TemplateId } from "@/lib/types";
import Nova from "./Nova";
import Eclipse from "./Eclipse";
import Grove from "./Grove";
import Arc from "./Arc";
import Pulse from "./Pulse";

export const TEMPLATES: { id: TemplateId; name: string; C: ComponentType<{ d: CVData }> }[] = [
  { id: "nova", name: "Nova", C: Nova },
  { id: "eclipse", name: "Eclipse", C: Eclipse },
  { id: "grove", name: "Grove", C: Grove },
  { id: "arc", name: "Arc", C: Arc },
  { id: "pulse", name: "Pulse", C: Pulse },
];
