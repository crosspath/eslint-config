# Changelog

## v0.4.1

Reorder rules and rule options by alphabet.

Change rule option `"sort-keys".minKeys` from 4 to 2.

Change rule option `"sort-imports".ignoreCase` from true to false, now it matches rule option
`"sort-keys".caseSensitive = true`.

## v0.4.0

Update config files to ESLint 9.39.5.

Set ECMA Version to 2025.

Change linter options:
* `noInlineConfig` to false (to allow disabling rules in code)
* `reportUnusedDisableDirectives` to "warn" (default value is "warn")

Change rules (as bug fixes for current ESLint version):
* `max-statements` (split options)
* `no-console` (remove empty option "allow")
* `no-param-reassign` (remove empty options "ignorePropertyModificationsFor" and
  "ignorePropertyModificationsForRegex")
* `no-use-before-define` (rename "allowNamedImports" to "allowNamedExports")

## v0.3.0

Update config files to ESLint 9.17.0.

## v0.2.0

Update config files to ESLint 9.13.0.

## v0.1.0

Update config files to ESLint 9.8.0.

## v0.0.2

Update example link for comparison of changes in ESLint.

## v0.0.1

First release.

Added rules from ESLint core.
Exclude deprecated rules and the rules which interfere with Prettier.
