#!/bin/bash
cd /content-tests 

Xvfb ${XVFB_DISPLAY} ${XVFB_ARGS} & 

yarn run test:docker "$@"
