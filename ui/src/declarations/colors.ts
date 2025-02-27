const root = document.documentElement;

// Obtém o valor da propriedade --saphire
export const saphireColor = getComputedStyle(root).getPropertyValue('--saphire').trim();
export const saphireDark = getComputedStyle(root).getPropertyValue('--saphire-dark').trim();
export const saphireClear = getComputedStyle(root).getPropertyValue('--saphire-clear').trim();
export const saphireFade = getComputedStyle(root).getPropertyValue('--saphire-fade').trim();
export const smoke = getComputedStyle(root).getPropertyValue('--smoke').trim();
export const clear = getComputedStyle(root).getPropertyValue('--clear').trim();
export const textColor = getComputedStyle(root).getPropertyValue('--text-color').trim();
export const white = "#ffffff";
export const black = "#000000";



export const Colors = {

    saphireColor: saphireColor,
    saphireClear: saphireClear,
    saphireFade: saphireFade,
    saphireDark: saphireDark,
    smoke: smoke,
    clear: clear,
    textColor: textColor,
    white: white,
    black: black
}

