#!/usr/bin/env bash

set -e

rm -rf src

npx openapi-generator-cli version-manager set 6.2.1

npx openapi-generator-cli generate -c generator.yaml

prettier src --write --loglevel=silent
