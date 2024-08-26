import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
    base: '',
    build: {
        target: 'esnext' //browsers can handle the latest ES features
    },
    plugins: [nodePolyfills()],
});
