# mdsquash

Merges multiple MD files into one readme

## Install
```sh
npm install -g mdsquash
```

## Usage

```sh
Usage: mdsquash [options]

Options:
  -t, --template       Readme.nbs file (defaults to current dir, then to no template)
  -o, --out <type>     Where to output Readme.md file (defaults to current dir/README.md) (default: "README.md")
  -i, --input <items>  comma separated list of md file paths to be merged in order
  -h, --help           display help for command

```

## Example Use

```sh
mdsquash -i /some/mdfile.md,/another/mdfile.md
```

This example expects two MD files as the input.
## Example Readme.nbs

```md

# Test

## Something

{{doc1}}


## Foo

{{doc2}}

```


## Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v1.0.4](https://github.com/Phara0h/mdsquash/compare/v1.0.3...v1.0.4) [3 August 2020]

- Updated changelog template [`bafffcb`](https://github.com/Phara0h/mdsquash/commit/bafffcbdc9bd364e0dc3e2c6957e918c72ceaa6c)

#### [v1.0.3](https://github.com/Phara0h/mdsquash/compare/v1.0.3-0...v1.0.3) [3 August 2020]

- Removed LICENSE from README.md [`ad2be34`](https://github.com/Phara0h/mdsquash/commit/ad2be34a39ce3eaabfc470378d63ccc4ac833b6b)

#### [v1.0.3-0](https://github.com/Phara0h/mdsquash/compare/v1.0.2...v1.0.3-0) [3 August 2020]

- Update package.json [`f00fae2`](https://github.com/Phara0h/mdsquash/commit/f00fae2af4df5262c57159e28eb300f9e5f62cd9)
- Testing version command [`543a382`](https://github.com/Phara0h/mdsquash/commit/543a382ce80f9f383c551d70581f4fd6da28855c)

#### [v1.0.2](https://github.com/Phara0h/mdsquash/compare/v1.0.1...v1.0.2) [3 August 2020]

- Updated package.json version command [`3f2e46d`](https://github.com/Phara0h/mdsquash/commit/3f2e46dd3c3afbb4ef38a3148f116679b1c26463)

#### v1.0.1

- Added auto-changelog depend [`5a2c9e1`](https://github.com/Phara0h/mdsquash/commit/5a2c9e1c1587a738dc499c0a26f3f5518a867771)
- Removed Debug Logs, Added Changelogs and Uses mdsquash its self [`b9f4c03`](https://github.com/Phara0h/mdsquash/commit/b9f4c0329914414afca7bfae770574776e0e6f4a)
- init [`c219f35`](https://github.com/Phara0h/mdsquash/commit/c219f359295e72df9766d6896722845abdd88e13)
- Initial commit [`15cc4c9`](https://github.com/Phara0h/mdsquash/commit/15cc4c9eb5017eb5d79dd89b2ef113673d271ff7)

