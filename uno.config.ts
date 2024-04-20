import presetAnimations from "unocss-preset-animations";
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";
import { fontFamily } from "@unocss/preset-mini/theme";
import { customPreset, shadcnPreset } from "./presets";

// https://unocss.dev
export default defineConfig({
  configDeps: ["./presets/custom-preset.ts", "./presets/shadcn-preset.ts"],
  content: {
    filesystem: ["./node_modules/bits-ui/dist/**/*.{html,js,svelte,ts}"],
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/]
    }
  },
  theme: {
    fontFamily: {
      inter: ["Inter", fontFamily.sans]
    }
  },
  rules: [],
  shortcuts: [
    {
      "container-base": "max-w-7xl mx-a",
      cta: "fw-medium px py-0.6em text-1.125rem",
      "grid-card": "bg-#F2F2F2 flex-s-center py-16 rd-2xl"
    },
    [/^area-(.*)$/, ([, v]) => `[grid-area:_${v}]`, { layer: "default" }],
    [
      /^gta-(.*)$/,
      ([, v]) =>
        `[grid-template-areas:_${v
          ?.replace(/-/g, "_")
          .replace(/\|/g, " ")
          .split(" ")
          .map(v => '"' + v + '"')
          .join("_")}]`,
      { layer: "default" }
    ]
  ],
  variants: [],
  preflights: [
    {
      getCSS() {
        return `
            button {
              padding: 0.25em 0.625em;
            }
            `;
      }
    }
  ],

  presets: [
    customPreset,
    shadcnPreset,
    presetUno(),
    presetAnimations(),
    presetIcons({ scale: 1.2 }),
    presetWebFonts({
      fonts: {
        inter: "Inter:400;500;"
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
