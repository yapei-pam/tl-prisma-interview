# Overview [:house:](../../README.md#Challenge) {#Overview}

This library will contains the Button component style accordingly to the Theme 2.

<br />

# Acceptance criteria

- The theme has to be created by respecting the [specifications](../../README.md#Themes)
- The style for the Button component has to be created by respecting the [specifications](../../README.md#Styles)
- The Button styled accordingly to the Theme 2 has to be exported to be used by the client library

<br />

# Mandatory

- Propose a clean code solution that respects principles (SOLID, KISS, DRY, etc)
- Typescript has to be used
- Explain your architecture in the **Architecture** section below

<br />

# Optionals

- Test your solution

<br />

# Architecture

Explain your choices and anything you would have to do but did not have time

# Comments

- Updated build command to include option `--jsx React.createElement ` for microbundle fix on the known issue of TypeScript is unable to resolve Fragments when the jsxFactory option is set (see https://github.com/developit/microbundle/pull/623 for PR)