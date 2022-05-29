import {eDataSerializer} from "./e-data.serializer";
import {swnSerializer} from "./swn.serializer";
import {cadSerializer} from "./cad.serializer";

export function serializeService() {
  return {
    swnSerializer,
    cadSerializer,
    eDataSerializer,
  }
}
