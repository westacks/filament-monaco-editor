import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

window.MonacoEnvironment = {
    globalAPI: true,
    getWorkerUrl: (moduleId, label) => {
        if (label === 'html' || label === 'handlebars') {
            return '/js/connorhowell/filament-monaco-editor/html-worker.js';
        }

        if (label === 'javascript' || label === 'typescript') {
            return '/js/connorhowell/filament-monaco-editor/ts-worker.js';
        }

        if (label === 'scss' || label === 'less' || label === 'css') {
            return '/js/connorhowell/filament-monaco-editor/css-worker.js';
        }

        if (label === 'json') {
            return '/js/connorhowell/filament-monaco-editor/json-worker.js';
        }

        return '/js/connorhowell/filament-monaco-editor/editor-worker.js';
    },
    getWorker: (moduleId, label) => {
        return new Worker(window.MonacoEnvironment.getWorkerUrl(moduleId, label));
    },
};

export default function filamentMonacoEditor({ state, theme, language }) {
    return {
        state,
        monaco: null,
        init: function () {
            this.monaco = monaco.editor.create(this.$refs.element, {
                value: state,
                theme: theme,
                automaticLayout: true,
                language: language
            });
        }
    }
}
