// Function parameter checking + element definition
// https://github.com/Cube14yt/sandboxels-types
// Check the README file for info on how to use this file



interface Pixel {
    x: number;
    y: number;
    element: string;

    invalidElement?: string;

    color?: string;
    alpha?: number;

    temp: number;
    start: number;

    burning?: boolean;
    burnStart?: number;

    charge?: number;

    flipX?: boolean;
    flipY?: boolean;
    r?: number;

    [key: string]: any;
}

declare function createPixel(element: Array<string> | string, x: number, y: number): void
declare function deletePixel(x: number, y: number): void
declare function getPixel(x: number, y: number): Pixel | null
declare function changePixel(pixel: Pixel, element: string, changetemp?: boolean): void
declare function clonePixel(pixel: Pixel, x: number, y: number): void
declare function isEmpty(x: number, y: number, ignoreBounds?: boolean, oob?: boolean): boolean
declare function outOfBounds(x: number, y: number): boolean
declare function logMessage(text: string): void
declare function tryMove(pixel: Pixel, nx: number, ny: number, leaveBehind?: string, force?: boolean): boolean
declare function swapPixels(pixel1: object, pixel2: object): void
declare function releaseElement(pixel: Pixel, element: string, count?: number, replaceLiquid?: boolean): object | void
declare function movePixel(pixel: Pixel, x: number, y: number, leaveBehind?: boolean): void
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
declare function renderEachPixel(callback: () => void): void
declare function renderPostPixel(callback: () => void): void
declare function renderPrePixel(callback: () => void): void
declare function dependOn(modName: string, callback: () => void, forceLoad?: boolean): void
declare function clearLog(): void
declare function doDefaults(pixel: Pixel): void
declare function doBurning(pixel: Pixel): void
declare function doHeat(pixel: Pixel): void
declare function doElectricity(pixel: Pixel, step: number): void
declare function doStaining(pixel: Pixel): void
declare function doAirDensity(pixel: Pixel): void
declare function pixelColorPick(pixel: Pixel, customColor?: null | string | string[]): string
declare function tryCreate(element: string | string[], x: number, y: number, replace?: boolean): void
declare function tryDelete(x: number, y: number): object | null
declare function modIsEnabled(modName: string): boolean
declare function tpsPrompt(): void
declare function explodeAt(x: number, y: number, radius: number, fire: string): void
declare function mostSimilarElement(s: any): string | null
declare function RGBtoHex(rgb: [number, number, number]): string
declare function hexToRGB(hex: string): [number, number, number]
declare function RGBtoHSL(rgb: [number, number, number]): [number, number, number]
declare function HSLtoRGB(hsl: [number, number, number]): [number, number, number]
declare function eListAdd(listName: string, itemList: string): void
declare function drawDefault(ctx: CanvasRenderingContext2D, pixel: Pixel): void
declare function shuffleArray(array: Array<any>): void
declare function pixelTempCheck(pixel: Pixel): void
declare function choose(array: Array<any>): any
declare function getNeighbors(pixel: Pixel): Array<Pixel, null>
declare function circleCoords(x: number, y: number, radius: number): object[]
declare function addElement(key: string, obj: Elem): void
declare function addCanvasLayer(name: string): void 
declare function drawPlus(ctx: CanvasRenderingContext2DSettings, color: string, x: number, y: number, scale?: number, opacity?: number): void 
declare function drawSquare(ctx: CanvasRenderingContext2DSettings, color: string, x: number, y: number, scale?: number, opacity?: number): void 
declare function focusGame(): void
declare function mean(arr: number[]):number
declare function onAddElement(callback: () => void): void
declare function outOfSight(x: number, y: number): boolean
declare function onBorder(x: number, y: number): boolean
declare function onBorderX(x: number): boolean
declare function onBorderY(y: number): boolean
declare function pixelTick(pixel: Pixel, custom?: unknown): void
declare function reactPixels(pixel1: Pixel, pixel2: Pixel): void
declare function rectCoords(x1: number, y1: number, x2: number, y2: number): object[]
declare function resetPrompt(confitmed?: boolean): void
declare function resetInterval(newtps?: number): void
declare function stainPixel(newPixel: Pixel, color: string | string[], intensity?: number): void
declare function setTPS(newtps: number): void
declare function selectElement(element: string): void
declare function showModManager(): void
declare function showSaves(): void
declare function toggleShift(): void
declare function tick(): void
declare function togglePause(): void
declare function validateMoves(callback: () => void): void

interface ElementReaction {
    elem1?: string | null | Array<string, null>
    elem2?: string | null | Array<string, null>
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
    charge1?: number
    charge2?: number
    stain1?: string
    stain2?: string
    func?: ((pixel1: Pixel, pixel2: Pixel) => void) 
}

type PixelBehavior = (pixel: Pixel) => void;
type PixelBehaviorWithElement = (pixel: Pixel, element: string) => void;
type PixelPairBehavior = (pixel1: Pixel, pixel2: Pixel) => void;
type PixelHitBehavior = (pixel: Pixel, onHit?: (p: Pixel, target?: Pixel) => void) => void;
type PixelCrawlerBehavior = (pixel: Pixel, onHit?: (...args: any[]) => void, afterMove?: (...args: any[]) => void) => void;
type PixelAbsorbBehavior = (pixel: Pixel, limit?: number, rate?: number) => void;

// Behavior can be a pattern grid or a function
type Behavior = string[] | PixelBehavior | PixelBehaviorWithElement | PixelPairBehavior | PixelHitBehavior | PixelCrawlerBehavior | PixelAbsorbBehavior;

// The big behaviors object
declare var behaviors: Record<string, Behavior>;

type RendererPresets = (pixel: Pixel, ctx: CanvasRenderingContext2D) => void

declare var renderPresets: Record<string, RendererPresets>

declare var enabledMods: string[]

declare var defaultCooldown: number

declare var eLists: Record<string, string[]>

declare var pixelTicks: number

declare var isMobile: boolean

interface Views {
    [key: string]: any
}

declare var viewInfo: Record<string, Views>

declare var elements: Record<string, Elem>

declare var pixelMap: Pixel[][]

declare var squareCoords: number[][]
declare var adjacentCoords: number[][]
declare var squareCoordsShuffle: number[][]
declare var adjacentCoordsShuffle: number[][]
declare var interactCoords: number[][]
declare var biCoords: number[][]

declare var settings: {
    [key: string]: any
}

declare var keybinds: {
    [key: string]: () => any
}

declare var shiftDown: number

declare var tps: number

declare var view: number

declare var autoElements: {
		"molten": { // Solid -> Liquid
			rgb: [ [2,1.25,0.5], [2,1,0.5], [2,0.75,0] ],
			behavior: behaviors.MOLTEN,
			type: "high",
			viscosity: 10000,
			hidden: true,
			state: "liquid",
			tempDiff: -100
		},
		"frozen": { // Liquid -> Solid
			rgb: [ [1.2,1.2,1.3] ],
			behavior: behaviors.WALL,
			type: "low",
			hidden: true,
			state: "solid"
		},
		"condense": { // Gas -> Liquid
			rgb: [ [0.5,0.5,0.5] ],
			behavior: behaviors.LIQUID,
			type: "low",
			hidden: true,
			state: "liquid"
		},
		"vaporize": { // Liquid -> Gas
			rgb: [ [1.5,1.5,1.5] ],
			behavior: behaviors.GAS,
			type: "high",
			hidden: true,
			state: "gas"
		}
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
    behavior?: Behavior
    behaviorOn?: Behavior
    tick?: ((pixel: Pixel) => void)
    onClicked?: (pixel: Pixel) => void
    tick1?: (pixel: Pixel) => void
    tick2?: (pixel: Pixel) => void
    tool?: (pixel: Pixel) => void
    onMouseUp?: () => void
    onMouseDown?: () => void
    onSelect?: () => void
    onUnselect?: () => void
    onPlace?: (pixel: Pixel) => void
    onDelete?: (pixel: Pixel) => void
    onChange?: (pixel: Pixel) => void
    onMix?: (pixel: Pixel) => void
    onBreak?: (pixel: Pixel) => void
    perTick?: () => void
    hoverStat?: (pixel: Pixel) => void
    renderer?: (pixel: Pixel, ctx: CanvasRenderingContext2D) => void
    reactions?: { [key: string]: ElementReaction }
    temp?: number
    tempLow?: number
    stateLow?: string | Array<string, null>
    stateLowName?: string
    stateLowColor?: string
    stateLowColorMultiplier?: number[] | number
    tempHigh?: number
    stateHigh?: string | string[]
    stateHighName?: string
    stateHighColor?: string
    stateHighColorMultiplier?: number[] | number
    extraTempLow?: { [temperature: number]: string | string[] }
    extraTempHigh?: { [temperature: number]: string | string[] }
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
    burnInto?: string | string[]
    extinguish?: boolean
    fireColor?: string
    fireElement?: string
    rotatable?: boolean
    flippableX?: boolean
    flippableY?: boolean
    breakInto?: string | string[]
    breakIntoColor?: string | string[]

    [key: string]: any;
}

