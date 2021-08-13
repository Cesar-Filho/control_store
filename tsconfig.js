export default {
  compilerOptions: {
    target: 'es2017',
    module: 'commonjs',
    lib: ['es6'],
    allowJs: true,
    outDir: './dist',
    rootDir: './src',
    removeComments: true,
    typeRoots: ['./node_modules/@types', './src/@types'],
    esModuleInterop: true,
    resolveJsonModule: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    noUnusedLocals: true,
    baseUrl: '.'
  }
}
