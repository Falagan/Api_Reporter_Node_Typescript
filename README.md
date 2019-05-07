# 1 -  Soporte TS y autoarranque con nodemon.

## 1.1 - Soporte para typescript.

- Debemos instalar el paquete de npm ts-node y el paquete typescript.
   >https://github.com/dalenguyen/rest-api-node-typescript
   >https://www.npmjs.com/package/ts-node

- Configuramos el script de arranque en el package.json:   
   >"dev": "ts-node lib/server.ts",
   o con nodemon : "start": "nodemon ts-node ./lib/server.ts",

## 1.2 - Nodemon para el autoarranque de node con cada cambio
   > npm install nodemon
   y configurar el script de arranque "start": "nodemon ts-node ./lib/server.ts",


# 2 - Documentación del Código

## 2.1 Documentación de la Api con Swagger

### 2.1.1 OAS

Instalación del paquete oas, que permite comentar el código y generar por consola
un json de open api specification que será copiado al archivo oas.json, el cual
utilizará swagger ui express para actualizar la documentación del api.

> https://www.npmjs.com/package/oas

> oas generate . Comando que genera el oas.json en consola.


### 2.1.2 Swagger Ui Express

Paquete que incluye swagger para node y express con la opción para lanzar
un interfaz gráfico con la documentación de la api creada con OAS.

> https://www.npmjs.com/package/swagger-ui-express

Después debemos añadir a las rutas del proyecto el código necesario
para ver la doc en la routa api-docs. (Consultar código proyecto).

Cuando levantamos el proyecto ya tenemos disponible la doc.


# 3 - Test

## 3.1 Mocha, Chai y Nyc

Instalar el paquete de chai, mocha y mocha http para generar nuestros test
con soporte en typescript.

> npm install chai mocha chai-http

Configuramos el script para lanzar los test:

> "test": "nyc mocha --require ts-node/register lib/test/*.ts",

Instalar el paquete nyc, que una vez lanzados los test genera
un archivo tipo lcov para poder generar un reporte del porcentaje de código.
cubierto con test, que será importado por Sonarqube para incorporar estos datos al análisis de calidad del código.

> npm i nyc

Añadimos la configuración de nyc al package.json

> "nyc": {
   "check-coverage": false,
   "all": true,
   "extension": [
     ".ts"
   ],
   "include": [
     "lib/**/*.ts"
   ],
   "exclude": [
     "lib/**/**.spec.ts"
   ],
   "reporter": [
     "lcov",
     "text-summary"
   ],
   "report-dir": "test/coverage"
 },


# 3 - Control de Calidad -Sonarqube

Instalamos el servidor de sonarqube y levantamos el mismo ejecutando el
archivo StartSonar situado en la carpeta bin del servidor sonarqube.

> https://www.sonarqube.org/downloads/

Instalamos en el mismo directorio que el server de sonarqube el
sonar scanner.

> https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner#AnalyzingwithSonarQubeScanner-Installation

Instalamos el paquete de npm sonar-scanner para lanzar el sonar scanner desde el proyecto.

> npm install -D sonar-scanner

Una vez instalados ambos configuramos en la raíz de nuestro proyecto el fichero de configuración del sonnar scanner para este proyecto.

> sonar-project.properties:

sonar.projectKey=API_REPORTER_NODE_TYPESCRIPT
sonar.projectName=API_REPORTER_NODE_TYPESCRIPT
sonar.projectVersion=1.0
sonar.sourceEncoding=UTF-8
sonar.sources=lib
sonar.projectBaseDir = C:/Users/informatica07/git-dev-vs/Api_Reporter_Node_Typescript
sonar.exclusions=**/node_modules/**,*.spec.ts
sonar.tests=lib/test
sonar.test.inclusions=lib/test/*.spec.ts
sonar.ts.tslintconfigpath=tslint.json
sonar.typescript.lcov.reportPaths=test/coverage/lcov.info

Configuramos un script para lanzar sonar:

> "sonar": "sonar-scanner"

Esto genera un dashboard en localhost:9000 donde podremos consultar toda la
inspección de calidad del código.

package.json en este momento:

{
 "name": "nodejsts",
 "version": "1.0.0",
 "description": "Api for Reporter in Node and typescript",
 "nyc": {
   "check-coverage": false,
   "all": true,
   "extension": [
     ".ts"
   ],
   "include": [
     "lib/**/*.ts"
   ],
   "exclude": [
     "lib/**/**.spec.ts"
   ],
   "reporter": [
     "lcov",
     "text-summary"
   ],
   "report-dir": "test/coverage"
 },
 "nodemonConfig": {
   "watch": [
     "server"
   ],
   "ext": "ts",
   "ignore": [
     "*.test.ts"
   ],
   "delay": "3",
   "execMap": {
     "ts": "ts-node"
   }
 },
 "main": "lib/server.ts",
 "scripts": {
   "build": "tsc",
   "dev": "ts-node lib/server.ts",
   "start": "nodemon ./lib/server.ts",
   "prod": "npm run build && npm run start",
   "test": "nyc mocha --require ts-node/register lib/test/*.ts",
   "sonar": "sonar-scanner",
   "updateSwagger": "oas generate --pretty >%userprofile%/desktop/info.json"
 },
 "author": "",
 "license": "ISC",
 "dependencies": {
   "@types/express": "^4.16.1",
   "body-parser": "^1.18.3",
   "chai-http": "^4.3.0",
   "express": "^4.16.4",
   "mongoose": "^5.4.9",
   "oas": "^0.8.13",
   "swagger-ui-express": "^4.0.2",
   "ts-node": "^8.0.2",
   "typescript-rest": "^1.8.1"
 },
 "devDependencies": {
   "@types/chai": "^4.1.7",
   "@types/mocha": "^5.2.6",
   "bcrypt": "^3.0.6",
   "chai": "^4.2.0",
   "mocha": "^6.1.4",
   "nyc": "^14.1.0",
   "sonar-scanner": "^3.1.0",
   "tslint": "^5.16.0",
   "tslint-sonarts": "^1.9.0",
   "typescript": "^3.4.5"
 }
}



# 4 - Integración continua con travis-c o Jenkins


