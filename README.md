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
