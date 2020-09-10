@echo off
del /q _site\*
for /d %%x in (_site\*) do @rd /s /q ^"%%x^"
del /q .sass-cache\*
for /d %%x in (.sass-cache\*) do @rd /s /q ^"%%x^"
chcp 65001
# JEKYLL_ENV=production causes errors https://github.com/lightster/hub/issues/5
SET JEKYLL_ENV=prod
bundle exec jekyll serve --force_polling --incremental --host prod.astudioofherown.com --port 80
