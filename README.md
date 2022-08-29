# Github Action: Parse Package Json 

Github action to parse some useful data from the package json file generated by conan when
you provide the ```--json``` flag to a conan command like,

```shell
conan create . --json info.json
```

This generated json file contains lots of useful information which is intended to support 
integration of conan into a variety of CI/CD systems.

**note: the current data parsed is somewhat arbitrary...I only actually needed the root_path**

## Inputs

### json-path

**Required** The path to the json file w.r.t your package (not the conan cache on the runner).

## Ouputs

### recipe_id:
  
Recipe id of the package.

### package_id:

Package id of the created conan package.

### root_path:

Path to the "package" dir in the conan cache.

### version:

Version of the created package

## Example Usage

uses: ianmurfinxyz/parse-package-json@v1
with:
  json-path: 'info.json'
