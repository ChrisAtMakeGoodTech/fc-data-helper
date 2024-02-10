# fc-data-helper

## What it does

Reads extracted JSON files and copies them to another directory with edits to make them easier to navigate. It adds data to properties that are reference IDs and also removes properties that just clutter up the file.

## How to use it

1. If you haven't done so, install [Node](https://nodejs.org/en/download/current).
2. Clone or download this repository into a directory on your local machine.
3. In the `config` folder, create a `config.json` file. You can look in `config.sample.json` for help. Filesystem paths can be relative or absolute, but absolute paths are recommended.
4. Set your config's `inPath` to the directory that you exported assets to. This should be the *parent* directory of `MonoBehavior`.
5. Set your config's `outPath` to the directory where you want files to be saved.
6. Open a terminal to the directory where you saved `buildWeb.mjs`.
7. Run `node buildWeb.mjs`.