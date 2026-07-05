@echo off
cd /d "%~dp0"

echo Iniciando o prototipo do gateway...

if not exist node_modules (
  echo Instalando dependencias. Isso pode levar alguns minutos...
  npm install
)

echo Rodando o servidor local...
npm run dev

pause
