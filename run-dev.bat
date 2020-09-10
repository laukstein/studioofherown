@echo off
h:
cd www
cd studioofherown.com
del /q _site\*
for /d %%x in (_site\*) do @rd /s /q ^"%%x^"
chcp 65001
SET JEKYLL_ENV=dev
bundle exec jekyll serve --force_polling --incremental --host dev.astudioofherown.com --port 80
