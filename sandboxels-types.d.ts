// Function parameter checking + element definition

declare function createPixel(element: Array<string> | string, x: number, y: number): void
declare function deletePixel(x: number, y: number): void
declare function getPixel(x: number, y: number): object | null
declare function changePixel(pixel: object, element: string, changetemp?: boolean): void
declare function isEmpty(x: number, y: number, ignoreBounds?: boolean, oob?: boolean): boolean
declare function outOfBounds(x: number, y: number): boolean
declare function logMessage(text: string): void
declare function tryMove(pixel: object, nx: number, leaveBehind?: boolean, force?: boolean): boolean
declare function swapPixels(pixel1: object, pixel2: object): void
declare function releaseElement(pixel: object, element: string, count?: number, replaceLiquid?: boolean): object | void
declare function movePixel(pixel: object, x: number, y: number, leaveBehind?: boolean): void
declare function promptText(text: string, handler: Function, title?: string): void
declare function promptConfirm(text: string, handler: (value: string | undefined) => void, title?: string, danger?: boolean): void
declare function promptInput(text: string, handler: (value: string | undefined) => void, title?: string, defaultInput?: string): void
declare function promptChoose(text: string, choices: Array<string>, handler: (value: string | undefined) => void, title?: string): void
declare function promptDir(text: string, handler: (value: string | undefined) => void, title?: string): void
declare function runEveryTick(callback: () => void): void
declare function runAfterLoad(callback: () => void): void
declare function runAfterAutogen(callback: () => void): void
declare function runPerPixel(callback: () => void): void
declare function runAfterReset(callback: () => void): void
declare function dependOn(modName: string, callback: () => void, forceLoad?: boolean): void
declare function clearLog(): void
declare function doDefaults(pixel: object): void
declare function doBurning(pixel: object): void
declare function doHeat(pixel: object): void
declare function doElectricity(pixel: object): void
declare function doStaining(pixel: object): void
declare function pixelColorPick(pixel: object, customColor?: null | string | string[]): void
declare function tryCreate(element: string | string[], x: number, y: number, replace?: boolean): void
declare function tryDelete(x: number, y: number): object | null
declare function modIsEnabled(modName: string): boolean

interface ElementReaction {
    elem1?: string | null | string[]
    elem2?: string | null | string[]
    color1?: string
    color2?: string
    chance?: number
    temp1?: number
    temp2?: number
    attr1?: { [key: string]: any }
    attr2?: { [key: string]: any }
    tempMin?: number
    tempMax?: number
    oneway?: boolean
    charged?: boolean
    burning1?: boolean
    burning2?: boolean
    y?: [number, number]
    setting?: string
}

interface Elem {
    id?: number
    name?: string
    alias?: string | string[]
    category?: string
    desc?: string
    extraInfo?: string
    related?: string | string[]
    hidden?: boolean
    darkText?: boolean
    canPlace?: boolean
    nocheer?: boolean
    forceAutoGen?: boolean
    color?: string | string[]
    colorObject?: { r: number; g: number; b: number }[]
    colorOn?: string | string[]
    customColor?: boolean
    singleColor?: boolean
    forceSaveColor?: boolean
    colorPattern?: string[]
    colorKey?: { [key: string]: string }
    alpha?: number
    glow?: boolean
    firedColors?: { [element: string]: string[] }
    behavior?: string[] | ((pixel: object) => void)
    behaviorOn?: string[] | ((pixel: object) => void)
    tick?: (pixel: object) => void
    onClicked?: (pixel: object) => void
    tick1?: (pixel: object) => void
    tick2?: (pixel: object) => void
    tool?: (pixel: object) => void
    onMouseUp?: () => void
    onMouseDown?: () => void
    onSelect?: () => void
    onUnselect?: () => void
    onPlace?: (pixel: object) => void
    onDelete?: (pixel: object) => void
    onChange?: (pixel: object) => void
    onMix?: (pixel: object) => void
    onBreak?: (pixel: object) => void
    perTick?: () => void
    hoverStat?: (pixel: object) => void
    renderer?: (pixel: object, ctx: CanvasRenderingContext2D) => void
    reactions?: { [key: string]: ElementReaction }
    temp?: number
    tempLow?: number
    stateLow?: string
    stateLowName?: string
    stateLowColor?: string
    stateLowColorMultiplier?: string
    tempHigh?: number
    stateHigh?: string
    stateHighName?: string
    stateHighColor?: string
    stateHighColorMultiplier?: string
    extraTempLow?: { [temperature: number]: string }
    extraTempHigh?: { [temperature: number]: string }
    state?: "solid" | "liquid" | "gas"
    density?: number
    insulate?: boolean
    viscosity?: number
    conduct?: number
    ignoreConduct?: string[]
    superconductAt?: number
    stain?: number
    stainSelf?: boolean
    charge?: number
    movable?: boolean
    hardness?: number
    foodNeed?: number
    properties?: { [key: string]: any }
    maxSize?: number
    baby?: string
    egg?: string
    eggColor?: string
    seed?: string | boolean
    noMix?: boolean
    ignoreAir?: boolean
    excludeRandom?: boolean
    cooldown?: number
    isFood?: boolean
    isGas?: boolean
    ignore?: string[]
    canContain?: boolean
    burn?: number
    burning?: boolean
    burnTime?: number
    burnInto?: string
    extinguish?: boolean
    fireColor?: string
    fireElement?: string
    rotatable?: boolean
    flippableX?: boolean
    flippableY?: boolean
    breakInto?: string
    breakIntoColor?: string
}

declare var elements: {
    [key: string]: Element
}
