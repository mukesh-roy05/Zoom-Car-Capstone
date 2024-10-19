// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "react-icons/gi",
        "react-icons/im",
        "react-icons/io5",
        "react-icons/md",
        "react-icons/cg",
        "react-icons/ai",
      ],
    },
  },
});
