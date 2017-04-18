#!/usr/bin/env bash
webpack -d
cp -a public/. dist/
webpack-dev-server --content-base public/ --inline --hot --port 4000