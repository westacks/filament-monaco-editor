import * as esbuild from 'esbuild'

const isDev = process.argv.includes('--dev')

async function compile(options) {
    const context = await esbuild.context(options)

    if (isDev) {
        await context.watch()
    } else {
        await context.rebuild()
        await context.dispose()
    }
}

const defaultOptions = {
    define: {
        'process.env.NODE_ENV': isDev ? `'development'` : `'production'`,
    },
    bundle: true,
    mainFields: ['module', 'main'],
    platform: 'neutral',
    sourcemap: isDev ? 'inline' : false,
    sourcesContent: isDev,
    treeShaking: true,
    target: ['es2020'],
    minify: !isDev,
    plugins: [{
        name: 'watchPlugin',
        setup: function (build) {
            build.onStart(() => {
                console.log(`Build started at ${new Date(Date.now()).toLocaleTimeString()}`)
            })

            build.onEnd((result) => {
                if (result.errors.length > 0) {
                    console.log(`Build failed at ${new Date(Date.now()).toLocaleTimeString()}`, result.errors)
                } else {
                    console.log(`Build finished at ${new Date(Date.now()).toLocaleTimeString()}`)
                }
            })
        }
    }],
}

compile({
    ...defaultOptions,
    entryPoints: {
        "components/filament-monaco-editor": "./resources/js/index.js",
        "editor.worker": "./node_modules/monaco-editor/esm/vs/editor/editor.worker.js",
        "html.worker": "./node_modules/monaco-editor/esm/vs/language/html/html.worker.js",
        "ts.worker": "./node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js",
        "css.worker": "./node_modules/monaco-editor/esm/vs/language/css/css.worker.js",
        "json.worker": "./node_modules/monaco-editor/esm/vs/language/json/json.worker.js",
    },
    bundle: true,
    outdir: "./resources/dist",
    loader: {
        ".ttf": "file",
    },
})
