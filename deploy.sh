#!/bin/bash
gcloud config set project plancks-cloud
gcloud beta functions deploy pc-function-wimi-v1 --trigger-http --memory=128MB --entry-point=handle
