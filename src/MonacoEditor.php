<?php

namespace ConnorHowell\FilamentMonacoEditor;

use Filament\Forms\Components\Field;

class MonacoEditor extends Field
{
    protected string $language = 'json';

    protected string $theme = 'vs';

    protected string $view = 'filament-monaco-editor::monaco-editor';

    public function language(string $language): static
    {
        $this->language = $language;

        return $this;
    }

    public function theme(string $theme): static
    {
        $this->theme = $theme;

        return $this;
    }
}
