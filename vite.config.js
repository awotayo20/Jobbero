import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      jsc: {
        transform: {
          react: {
            throwIfNamespace: false,
          },
        },
      },
    }),
  ],
})
