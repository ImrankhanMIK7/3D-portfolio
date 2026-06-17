declare module "gsap-trial/SplitText" {
  import { GSAP } from "gsap";

  export class SplitText {
    constructor(
      target: string | Element | Array<string | Element>,
      vars?: {
        type?: string;
        wordsClass?: string;
        charsClass?: string;
        linesClass?: string;
        [key: string]: unknown;
      }
    );

    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }

  const plugin: GSAP.Plugin;
  export default plugin;
}
