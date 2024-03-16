# Monaco Editor integration for Filament Panels & Forms

[![Latest Version on Packagist](https://img.shields.io/packagist/v/westacks/filament-monaco-editor.svg?style=flat-square)](https://packagist.org/packages/westacks/filament-monaco-editor)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/westacks/filament-monaco-editor/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/westacks/filament-monaco-editor/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/westacks/filament-monaco-editor/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/westacks/filament-monaco-editor/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/westacks/filament-monaco-editor.svg?style=flat-square)](https://packagist.org/packages/westacks/filament-monaco-editor)



Monaco Editor integration for Filament Panels & Forms.

## Installation

You can install the package via composer:

```bash
composer require westacks/filament-monaco-editor
```

## Usage

```php
use WeStacks\FilamentMonacoEditor\MonacoEditor;

MonacoEditor::make('content')
    ->language('json')
    ->language('vs|vs-dark')
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Connor Howell](https://github.com/ConnorHowell)
- [Dmytro Morozov](https://github.com/punyflash)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
