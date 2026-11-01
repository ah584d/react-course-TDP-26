interface ImportMetaEnv {
  readonly VITE_COURSE_TARGET?: string
  readonly VITE_COURSE_STANDALONE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Allow importing CSS files
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

// Allow importing CSS modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}