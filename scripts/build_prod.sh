#!/usr/bin/env bash
webpack -d --optimize-minimize
cp -a public/. dist/