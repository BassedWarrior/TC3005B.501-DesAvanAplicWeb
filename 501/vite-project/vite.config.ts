import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        "class1/A01027983": "src/class1/A01027983/index.html",
        "class2/A01027983": "src/class2/A01027983/index.html",
        "class3/A01027983": "src/class3/A01027983/index.html",
        "class4/A01027983_and_A01784875":
            "src/class4/A01027983_and_A01784875/index.html",
        "class5/A01027983_and_A01784875":
            "src/class5/A01027983_and_A01784875/index.html",
        "class6/A01027983_and_A01784875":
            "src/class6/A01027983_and_A01784875/index.html",
        "class7/A01027983_and_A01784875":
            "src/class7/A01027983_and_A01784875/index.html",
        "class8/A01027983_and_A01784875":
            "src/class8/A01027983_and_A01784875/index.html",
        "class9/A01027983_and_A01784875":
            "src/class9/A01027983_and_A01784875/index.html",
      }
    }
  }
})
