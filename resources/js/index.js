import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';

self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
            return '/js/westacks/filament-monaco-editor/json-worker.js';
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return '/js/westacks/filament-monaco-editor/css-worker.js';
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return '/js/westacks/filament-monaco-editor/html-worker.js';
        }
        if (label === 'typescript' || label === 'javascript') {
            return '/js/westacks/filament-monaco-editor/ts-worker.js';
        }
        return '/js/westacks/filament-monaco-editor/editor-worker.js';
    }
};

export default function filamentMonacoEditor({ state, theme, language }) {
    return {
        state,
        init: function () {
            let editor = monaco.editor.create(this.$refs.element, {
                value: state.initialValue,
                theme: theme,
                automaticLayout: true,
                language: language
            });

            editor.getModel().onDidChangeContent(() => (this.state = editor.getValue()))
        }
    }
}
