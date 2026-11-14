import {
  CloudSun,
  Droplets,
  HeartHandshake,
  Stethoscope,
  Wheat,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { ProgrammeId } from "../types/programme.types";

export const programmeIcons: Record<ProgrammeId, LucideIcon> = {
  food: Wheat,
  children: HeartHandshake,
  health: Stethoscope,
  wash: Droplets,
  climate: CloudSun,
};
