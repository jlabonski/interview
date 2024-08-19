#!/usr/bin/env bash

set -euo pipefail

url="https://6god8pgyzf.execute-api.us-west-2.amazonaws.com/databases"

curl --silent "${url}" | jq -f interview.jq
#cat ../../data.json | jq -f interview.jq
