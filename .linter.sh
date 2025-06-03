#!/bin/bash
cd /home/kavia/workspace/code-generation/taskease-38739-a563b035/task_ease_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

