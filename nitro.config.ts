export default defineNitroConfig({
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        module: 'preserve',
        noEmit: true,
        moduleDetection: 'force',
        isolatedModules: true,
        skipLibCheck: true,
      },
    },
  },
  compatibilityDate: '2024-11-22',
})
