const ERROR = "error";
const WARN = "warn";
const OFF = "off";

// Sources:
//   https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-all.js
//   https://eslint.org/docs/latest/use/configure/rules
//   eslint: docs/src/rules/*.md
// Ensure not to enable these rules (or use workarounds):
//   https://github.com/prettier/eslint-config-prettier/blob/main/index.js
export default {
  "accessor-pairs": OFF,
  "arrow-body-style": [ERROR, "as-needed", {requireReturnForObjectLiteral: true}],
  "array-callback-return": [ERROR, {allowImplicit: false, allowVoid: true, checkForEach: true}],
  "block-scoped-var": ERROR,
  "camelcase": [
    ERROR, {
      allow: [],
      ignoreDestructuring: false,
      ignoreGlobals: false,
      ignoreImports: false,
      properties: "always",
    }
  ],
  "capitalized-comments": [
    ERROR,
    "always",
    {ignoreConsecutiveComments: true, ignoreInlineComments: true, ignorePattern: ""}
  ],
  "class-methods-use-this": [WARN, {enforceForClassFields: true, exceptMethods: []}],
  "complexity": [WARN, {max: 20}],
  "consistent-return": [ERROR, {treatUndefinedAsUnspecified: true}],
  "consistent-this": OFF,
  "constructor-super": ERROR,
  "curly": [ERROR, "all"],
  "default-case": OFF,
  "default-case-last": ERROR,
  "default-param-last": ERROR,
  "dot-notation": [ERROR, {allowKeywords: true, allowPattern: "\w_\w"}],
  "eqeqeq": [ERROR, "always", {null: "ignore"}],
  "for-direction": ERROR,
  "func-name-matching": [
    ERROR,
    "always",
    {considerPropertyDescriptor: true, includeCommonJSModuleExports: false}
  ],
  "func-names": [ERROR, "as-needed", {generators: "as-needed"}],
  "func-style": [ERROR, "declaration", {allowArrowFunctions: true}],
  "getter-return": [ERROR, {allowImplicit: false}],
  "grouped-accessor-pairs": [ERROR, "getBeforeSet"],
  "guard-for-in": ERROR,
  "id-denylist": OFF,
  "id-length": [
    ERROR, {
      exceptions: ["e", "i", "x"],
      exceptionPatterns: [],
      max: 30,
      min: 2,
      properties: "always"
    }
  ],
  "id-match": OFF,
  "init-declarations": OFF,
  // Options: {applyDefaultIgnorePatterns, ignorePattern, position}.
  "line-comment-position": OFF,
  "logical-assignment-operators": [ERROR, "always", {enforceForIfStatements: true}],
  "max-classes-per-file": [WARN, {ignoreExpressions: true, max: 1}],
  "max-depth": [ERROR, {max: 6}],
  "max-lines": [WARN, {max: 1000, skipBlankLines: true, skipComments: true}],
  "max-lines-per-function": [
    WARN,
    {IIFEs: false, max: 10, skipBlankLines: true, skipComments: true}
  ],
  "max-nested-callbacks": [WARN, {max: 4}],
  "max-params": [WARN, {max: 4}],
  "max-statements": [WARN, {ignoreTopLevelFunctions: false, max: 10}],
  "multiline-comment-style": [ERROR, "separate-lines", {checkJSDoc: false}],
  "new-cap": [
    ERROR, {
      capIsNew: true,
      capIsNewExceptions: [],
      capIsNewExceptionPattern: "",
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: "",
      properties: true,
    }
  ],
  "no-alert": ERROR,
  "no-array-constructor": ERROR,
  "no-async-promise-executor": ERROR,
  "no-await-in-loop": ERROR,
  "no-bitwise": [WARN, {allow: ["^", "~", "<<", ">>"], int32Hint: false}],
  "no-caller": ERROR,
  "no-case-declarations": ERROR,
  "no-class-assign": ERROR,
  "no-compare-neg-zero": ERROR,
  "no-cond-assign": [ERROR, "always"],
  "no-console": [WARN, {allow: []}],
  "no-const-assign": ERROR,
  "no-constant-binary-expression": ERROR,
  "no-constant-condition": [ERROR, {checkLoops: true}],
  "no-constructor-return": ERROR,
  "no-continue": OFF,
  "no-control-regex": ERROR,
  "no-debugger": ERROR,
  "no-delete-var": ERROR,
  "no-div-regex": ERROR,
  "no-dupe-args": ERROR,
  "no-dupe-class-members": ERROR,
  "no-dupe-else-if": ERROR,
  "no-dupe-keys": ERROR,
  "no-duplicate-case": ERROR,
  "no-duplicate-imports": [
    // I have no opinion on this option, chose default value.
    ERROR, {includeExports: false}
  ],
  "no-else-return": [ERROR, {allowElseIf: false}],
  "no-empty": [ERROR, {allowEmptyCatch: false}],
  "no-empty-character-class": ERROR,
  "no-empty-function": [ERROR, {allow: ["arrowFunctions", "constructors"]}],
  "no-empty-pattern": [ERROR, {allowObjectPatternsAsParameters: false}],
  "no-empty-static-block": ERROR,
  "no-eq-null": OFF,
  "no-eval": [WARN, {allowIndirect: false}],
  "no-ex-assign": ERROR,
  "no-extend-native": [ERROR, {exceptions: []}],
  "no-extra-bind": ERROR,
  "no-extra-boolean-cast": [ERROR, {enforceForLogicalOperands: true}],
  "no-extra-label": ERROR,
  "no-fallthrough": [
    WARN,
    {allowEmptyCase: true, commentPattern: "fall|дальше", reportUnusedFallthroughComment: true}
  ],
  "no-func-assign": ERROR,
  "no-global-assign": [ERROR, {exceptions: []}],
  "no-implicit-coercion": [
    ERROR,
    {allow: [], boolean: true, disallowTemplateShorthand: true, number: true, string: true}
  ],
  "no-implicit-globals": [ERROR, {lexicalBindings: false}],
  "no-implied-eval": ERROR,
  "no-import-assign": ERROR,
  "no-inline-comments": OFF,
  "no-inner-declarations": [ERROR, "both", {blockScopedFunctions: "allow"}],
  "no-invalid-regexp": [ERROR, {allowConstructorFlags: []}],
  "no-invalid-this": [ERROR, {capIsConstructor: true}],
  "no-irregular-whitespace": [
    ERROR, {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipJSXText: false,
    }
  ],
  "no-iterator": ERROR,
  "no-label-var": ERROR,
  "no-labels": [ERROR, {allowLoop: false, allowSwitch: false}],
  "no-lone-blocks": ERROR,
  "no-lonely-if": ERROR,
  "no-loop-func": ERROR,
  "no-loss-of-precision": ERROR,
  "no-magic-numbers": [
    ERROR, {
      ignore: [0],
      detectObjects: true,
      enforceConst: false,
      ignoreArrayIndexes: true,
      ignoreClassFieldInitialValues: true,
      ignoreDefaultValues: true
    }
  ],
  "no-misleading-character-class": ERROR,
  "no-multi-assign": [ERROR, {ignoreNonDeclaration: true}],
  "no-multi-str": ERROR,
  "no-negated-condition": ERROR,
  "no-nested-ternary": ERROR,
  "no-new": ERROR,
  "no-new-func": ERROR,
  "no-new-native-nonconstructor": ERROR,
  "no-new-wrappers": ERROR,
  "no-nonoctal-decimal-escape": ERROR,
  "no-obj-calls": ERROR,
  "no-object-constructor": ERROR,
  "no-octal": ERROR,
  "no-octal-escape": ERROR,
  "no-param-reassign": [
    ERROR,
    {ignorePropertyModificationsFor: [], ignorePropertyModificationsForRegex: [], props: false}
  ],
  "no-plusplus": [ERROR, {allowForLoopAfterthoughts: true}],
  "no-promise-executor-return": [ERROR, {allowVoid: true}],
  "no-proto": ERROR,
  "no-prototype-builtins": ERROR,
  "no-redeclare": [ERROR, {builtinGlobals: true}],
  "no-regex-spaces": OFF,
  "no-restricted-exports": OFF, // Options: {restrictedNamedExports, restrictDefaultExports}.
  "no-restricted-globals": OFF, // Options: list of variable names.
  "no-restricted-imports": OFF, // Options: list of deps, paths, patterns.
  "no-restricted-properties": OFF, // Options: list of {message, object, property}.
  "no-restricted-syntax": OFF, // Options: list of AST selectors.
  "no-return-assign": [ERROR, "always"],
  "no-script-url": ERROR,
  "no-self-assign": [ERROR, {props: true}],
  "no-self-compare": ERROR,
  "no-sequences": [ERROR, {allowInParentheses: false}],
  "no-setter-return": ERROR,
  "no-shadow": [
    ERROR,
    {allow: [], builtinGlobals: true, hoist: "functions", ignoreOnInitialization: false}
  ],
  "no-shadow-restricted-names": ERROR,
  "no-sparse-arrays": ERROR,
  "no-template-curly-in-string": ERROR,
  "no-ternary": OFF,
  "no-this-before-super": ERROR,
  "no-throw-literal": ERROR,
  "no-undef": [
    // I have no opinion on this option, chose default value.
    ERROR, {typeof: false}
  ],
  "no-undef-init": ERROR,
  "no-undefined": ERROR,
  "no-underscore-dangle": [
    ERROR, {
      allow: [],
      allowAfterSuper: false,
      allowAfterThis: false,
      allowAfterThisConstructor: false,
      allowFunctionParams: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: false,
      enforceInClassFields: true,
      enforceInMethodNames: true,
    }
  ],
  "no-unexpected-multiline": ERROR,
  "no-unmodified-loop-condition": WARN,
  "no-unneeded-ternary": [ERROR, {defaultAssignment: false}],
  "no-unreachable": ERROR,
  "no-unreachable-loop": [ERROR, {ignore: []}],
  "no-unsafe-finally": ERROR,
  "no-unsafe-negation": [ERROR, {enforceForOrderingRelations: true}],
  "no-unsafe-optional-chaining": [ERROR, {disallowArithmeticOperators: true}],
  "no-unused-expressions": [
    ERROR, {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
    }
  ],
  "no-unused-labels": ERROR,
  "no-unused-private-class-members": ERROR,
  "no-unused-vars": [
    WARN, {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreClassWithStaticInitBlock: true,
      ignoreRestSiblings: false,
      reportUsedIgnorePattern: false,
      vars: "all",
    }
  ],
  "no-use-before-define": [
    ERROR, {allowNamedImports: true, classes: true, functions: true, variables: true}
  ],
  "no-useless-assignment": ERROR,
  "no-useless-backreference": ERROR,
  "no-useless-call": ERROR,
  "no-useless-catch": ERROR,
  "no-useless-computed-key": [ERROR, {enforceForClassMembers: true}],
  "no-useless-concat": ERROR,
  "no-useless-constructor": ERROR,
  "no-useless-escape": ERROR,
  "no-useless-rename": [
    ERROR,
    {ignoreDestructuring: false, ignoreExport: false, ignoreImport: false}
  ],
  "no-useless-return": ERROR,
  "no-var": ERROR,
  "no-void": OFF, // Options: {allowAsStatement: false}.
  "no-warning-comments": OFF, // Options: {decoration, location, terms}.
  "no-with": ERROR,
  "object-shorthand": [
    ERROR,
    "always",
    {
      avoidExplicitReturnArrows: false,
      avoidQuotes: false,
      ignoreConstructors: false,
      methodsIgnorePattern: "",
    }
  ],
  "one-var": OFF, // Over-complicated list of options! Skip this rule.
  "operator-assignment": [ERROR, "always"],
  "prefer-arrow-callback": [ERROR, {allowNamedFunctions: true, allowUnboundThis: true}],
  "prefer-const": [ERROR, {destructuring: "all", ignoreReadBeforeAssign: true}],
  "prefer-destructuring": [
    ERROR,
    {
      AssignmentExpression: {array: false, object: false},
      VariableDeclarator: {array: true, object: true},
    },
    {enforceForRenamedProperties: false}
  ],
  "prefer-exponentiation-operator": ERROR,
  "prefer-named-capture-group": ERROR,
  "prefer-numeric-literals": ERROR,
  "prefer-object-has-own": ERROR,
  "prefer-object-spread": ERROR,
  "prefer-promise-reject-errors": [ERROR, {allowEmptyReject: false}],
  "prefer-regex-literals": [ERROR, {disallowRedundantWrapping: true}],
  "prefer-rest-params": ERROR,
  "prefer-spread": ERROR,
  "prefer-template": ERROR,
  "radix": [ERROR, "always"],
  "require-atomic-updates": [ERROR, {allowProperties: false}],
  "require-await": ERROR,
  "require-unicode-regexp": ERROR,
  "require-yield": ERROR,
  "sort-imports": [
    ERROR, {
      allowSeparatedGroups: true,
      ignoreCase: true,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    }
  ],
  "sort-keys": [
    ERROR,
    "asc",
    {allowLineSeparatedGroups: true, caseSensitive: true, minKeys: 4, natural: true}
  ],
  "sort-vars": OFF,
  "strict": [ERROR, "global"],
  "symbol-description": ERROR,
  "unicode-bom": [ERROR, "never"],
  "use-isnan": [ERROR, {enforceForIndexOf: true, enforceForSwitchCase: true}],
  "valid-typeof": [ERROR, {requireStringLiterals: false}],
  "vars-on-top": OFF,
  "yoda": [WARN, "never", {exceptRange: true, onlyEquality: false}],
}
