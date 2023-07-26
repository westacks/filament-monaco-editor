<?php

namespace ConnorHowell\FilamentMonacoEditor;

use Filament\Forms\Components\Field;

class MonacoEditor extends Field
{
    protected string $language = 'json';

    protected string $theme = 'vs';

    protected string $height = '250px';

    protected string $view = 'filament-monaco-editor::monaco-editor';

    public function getLanguage(): string
    {
        return $this->language;
    }

    public function getTheme(): string
    {
        return $this->theme;
    }

    public function getHeight(): string
    {
        return $this->height;
    }

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

    public function height(string $height): static
    {
        $this->height = $height;

        return $this;
    }
}
