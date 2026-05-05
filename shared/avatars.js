export const DEFAULT_AVATAR_ID = "character-a";

export const AVATARS = "abcdefghijklmnopqr".split("").map((letter, index) => {
  const id = `character-${letter}`;
  return {
    id,
    label: `Agent ${String(index + 1).padStart(2, "0")}`,
    modelPath: `/assets/avatars/kenney-blocky/${id}.glb`,
    previewPath: `/assets/avatars/kenney-blocky/previews/${id}.png`
  };
});

export function isAvatarId(id) {
  return AVATARS.some((avatar) => avatar.id === id);
}

export function getAvatarById(id) {
  return AVATARS.find((avatar) => avatar.id === id) || AVATARS[0];
}
