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
