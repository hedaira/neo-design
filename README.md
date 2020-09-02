Update version to https://www.npmjs.com/package/neo-design
### `npm init`
### `git commit`
### `npm version [1.0.0]`
### `npm publish`

Добавление новых компонент:
### 1. Создать папку с новым компонентом в /components/
### 2. Создать страницу storybook в /stories/ 
### 3. В папке с новым компонентом создать файл стилей /components/**/styles/index.less
### 4. Добавить файл стилей нового компонента в основной файл /components/neoDesign.less

`@import './../components/button/styles/index';`

### 5. Добавить export нового компонента в /components/index.tsx



## Запуск на cloud2

#### 0. `version`
      node v14.7.0
      npm v6.14.7
      nvm v0.25.0
#### 1. `npm install`
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh install`
#### 2. `copy gulp file from local project`
      Скопировать папки: lib, dist
#### 3. `run storybook`
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh start`
#### 3.1 `if "npm ERR! phantomjs-prebuilt@2.1.16 install: node install.js"`
      В mRemoteNG`[root@cloud2 neo-design]# npm install phantomjs-prebuilt@2.1.16 --ignore-scripts`     
#### 4. `stop storybook` 
      В mRemoteNG`[root@cloud2 neo-design]# ./neodesign.sh stop`


