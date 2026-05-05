// Backwards-compatible alias. The default map remains exported as ARENA so
// existing tools that read this file keep working, but new code should import
// from ./maps.js for multi-map support.
import { getMap, DEFAULT_MAP_ID } from "./maps.js";

export const ARENA = getMap(DEFAULT_MAP_ID);
