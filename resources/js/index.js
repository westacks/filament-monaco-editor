import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

global.MonacoEnvironment = {
    globalAPI: true,
    getWorkerUrl: (moduleId, label) => {
        if (label === 'html' || label === 'handlebars') {
            return '/html.worker.js';
        }

        if (label === 'javascript' || label === 'typescript') {
            return '/ts.worker.js';
        }

        if (label === 'scss' || label === 'less' || label === 'css') {
            return '/css.worker.js';
        }

        if (label === 'json') {
            return '/json.worker.js';
        }

        return '/editor.worker.js';
    },
    getWorker: (moduleId, label) => {
        return new Worker(global.MonacoEnvironment.getWorkerUrl(moduleId, label));
    },
};

export default function filamentMonacoEditor({ state, theme, language }) {
    return {
        state,
        monaco: null,
        init: function () {
            this.monaco = monaco.editor.create(this.$refs.codeBlock, {
                value: state,
                theme: theme,
                automaticLayout: true,
                language: language
            });
        }
    }
}
