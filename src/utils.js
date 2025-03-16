export const getImageUrl = (folder, path) => {
    return new URL(`/assets/${folder}/${path}`, import.meta.url).href;
};