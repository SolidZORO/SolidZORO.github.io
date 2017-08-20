#! /bin/bash

# 同步附件到七牛
cd $(dirname "$0")
cd /Users/SolidZORO/Sites/_github/SolidZORO.github.io/_qshell
qshell -m qupload 10 nighte_blog_qupload.json

# 编译 markdown 到 HTML
node /Users/SolidZORO/Sites/_github/nighte/src/app.js

# 提交到 Github
cd /Users/SolidZORO/Sites/_github/SolidZORO.github.io
git pull
git add -A
git commit -m "dp"
git push -f

