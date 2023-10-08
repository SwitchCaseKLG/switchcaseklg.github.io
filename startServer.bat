@echo off
rmdir /s /q _site
bundle install
bundle exec jekyll serve