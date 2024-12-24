# @crosspath/eslint-config

[Shareable config](https://eslint.org/docs/latest/extend/shareable-configs) for ESLint v9+.

ECMA Version set to 2022. It's the latest version that is supported by all major browsers.

Works good with [Prettier](https://prettier.io/).

Config files will be updated
[in this repository](https://github.com/crosspath/eslint-config)
about once a quarter after updating ESLint and its plugins.

## Usage

Add this repo `https://github.com/crosspath/eslint-config.git` to `package.json` and then
create file `eslint.config.js` with these lines:

```js
import common from "@crosspath/eslint-config"
import rules from "@crosspath/eslint-config/rules"

export default [
  {...common, rules}
]
```

Suggested workflow: run ESLint first, then Prettier.

## TODO

- Add plugins for ESLint.
- Add test that runs ESLint on specific file and reads suggestions.

## Versioning policy

Change of major version (`1.*.* -> 2.*.*`) means backwards-incompatible changes in the package code,
that requires changes in your (client) code. Possible reasons for these are backwards-incompatible
changes in ESLint configuration format.

Change of minor version (`*.1.* -> *.2.*`) means backwards-compatible changes in the package code,
that normally should not require changes in client code. Possible reasons for these are
changes, additions and removals of enabled/disabled rules for ESLint or its plugins.

Change of build/patch version (`*.*.1 -> *.*.2`) means backwards-compatible changes in the package
code, that do not require changes in client code. No rule changed here but some other package files
may be updated.

## Development

How to review and update config values?

1. Compare changes in config file `eslint-all.js` to find added and removed rules.
  Deprecated rules are still present here unless removed.
  Compare changes in files `docs/src/rules/*.md` to find added, removed and changed options
  for rules.
  See default values for rules: `docs/src/_data/rules_meta.json`
  Example link:

    https://github.com/eslint/eslint/compare/v9.8.0...main
 
2. Carefully update config files in this repository.
3. Use test project to ensure these config files are OK.
4. Update "version" of this package and minimal version of ESLint in "peerDependencies" in `package.json`.
5. Add Changelog entry.
6. Push changes to the repository and add git tag.

License: MIT.
