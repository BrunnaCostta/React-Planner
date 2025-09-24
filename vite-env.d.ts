/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // adicione outras variáveis que você usar
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
