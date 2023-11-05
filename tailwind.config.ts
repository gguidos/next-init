
import { Config } from 'tailwindcss'
import { shadcnPlugin } from './src/lib/shadcn-plugin'
import { shadcnPreset } from './src/lib/shadcn-preset'

const config = {
  presets: [shadcnPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    ],
} satisfies Config

export default config