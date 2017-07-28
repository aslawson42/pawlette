# pawlette
A prototype for an art gallery website.

## hot reloading server

`npm run serve-hot` and navigate to `localhost:3000`.

This server hot reloads while maintaining react state.

## storybook

Storybook can be used to test individual components **that do not rely on other
components** - if you're trying to test an entire page, just use the hot reload
server. if you're trying to test the menu bar, just use storybook.

`npm run storybook` and navigate to `localhost:9001`.
