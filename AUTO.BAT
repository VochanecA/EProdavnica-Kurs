@echo off
:TOP
cd "C:/Users/SERVER/Documents/GitHub/EProdavnica-Kurs"
git stage .
git commit -m "Auto Commit"
git push origin master
goto :TOP