<?php

namespace ConnorHowell\FilamentMonacoEditor;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Asset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentMonacoEditorServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-monaco-editor';

    public static string $viewNamespace = 'filament-monaco-editor';

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
            ->hasAssets()
            ->hasViews();
    }

    public function packageRegistered(): void
    {
    }

    public function packageBooted(): void
    {
        // Asset Registration
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName()
        );
    }

    protected function getAssetPackageName(): ?string
    {
        return 'connorhowell/filament-monaco-editor';
    }

    /**
     * @return array<Asset>
     */
    protected function getAssets(): array
    {
        return [
            Asset::make('filament-monaco-fonts', __DIR__ . '/../resources/dist/codicon-LCPAQIGT.ttf')->loadedOnRequest(),
            AlpineComponent::make('filament-monaco-editor', __DIR__ . '/../resources/dist/components/filament-monaco-editor.js')->loadedOnRequest(),
            Css::make('filament-monaco-editor', __DIR__ . '/../resources/dist/components/filament-monaco-editor.css')->loadedOnRequest(),
            Js::make('editor-worker', __DIR__ . '/../resources/dist/editor.worker.js')->loadedOnRequest(),
            Js::make('html-worker', __DIR__ . '/../resources/dist/html.worker.js')->loadedOnRequest(),
            Js::make('ts-worker', __DIR__ . '/../resources/dist/ts.worker.js')->loadedOnRequest(),
            Js::make('css-worker', __DIR__ . '/../resources/dist/css.worker.js')->loadedOnRequest(),
            Js::make('json-worker', __DIR__ . '/../resources/dist/json.worker.js')->loadedOnRequest(),
        ];
    }
}
