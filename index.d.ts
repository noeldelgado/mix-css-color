declare module "mix-css-color" {
  export type RgbaTuple = [
    red: number,
    green: number,
    blue: number,
    alpha: number
  ];

  export type HslaTuple = [
    hue: number,
    saturation: number,
    lightness: number,
    alpha: number
  ];

  export type MixObject = {
    rgba: RgbaTuple,
    hsla: HslaTuple,
    hex: string,
    hexa: string
  }

  export default function mix(c1: string, c2: string, percentage?: number): MixObject
}
