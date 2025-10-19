Выучи React JS с Этим Одним Проектом!
https://www.youtube.com/watch?v=S4HOy6yTclU&list=WL

https://ru.react.dev/learn
https://react.dev/learn
https://react.new

https://www.youtube.com/watch?v=kz23xxukY5s&list=WL&index=24   React JS c Нуля – ПОЛНЫЙ Курс для начинающих (2025)
https://codesandbox.io/p/sandbox/upbeat-monad-668hrq
https://668hrq.csb.app/

https://www.youtube.com/watch?v=S4HOy6yTclU&list=WL&index=22
React Crypto App
https://w57g68.csb.app/
https://codesandbox.io/p/sandbox/charming-sun-w57g68

https://ant.design/
https://ant.design/components/overview/
link: https://cdnjs.cloudflare.com/ajax/libs/antd/5.23.3/antd.min.js
npm install antd --save
npm run dev


https://coinstats.app/      andrey.okhotnikov24@gmail.com
https://openapi.coinstats.app/     311/uyijKOGN7FCwfvIOUGH1h+I42RwS1b3I9eBbA3c=


https://react-chartjs-2.js.org/
https://cdnjs.com/libraries/react-chartjs-2
link: https://cdnjs.cloudflare.com/ajax/libs/react-chartjs-2/5.3.0/chart.d.ts
         npm i react-chartjs-2  
or 
         npm install --save chart.js react-chartjs-2
npm run dev


===================================================================

https://www.geekster.in/articles/axios-in-react/
https://jsonplaceholder.typicode.com/posts

------------------------Создание NodeJS сервера-------------------
rm node_modules 
cd frontend
crypto-app-frontend\frontend> npm i
node -v   //check if node works
//Create a File in root: server.js
cd ..
 + server.js

crypto-app-frontend>npm init -y
npm i express

-----see server.js

cd frontend
crypto-app-frontend\frontend>npm run build

---folder dist was created 
---chandge in server.js: app.use(express.static('frontend/dist'))
cd ..
crypto-app-frontend>node server.js


http://localhost:80

=========================================================================
on github create a new repository: crypto-app
---------------------------------add git------------------
add in root: .gitignore     node-modeles

git --version

git init
    git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/andreyokhotnikov24/crypto-app.git
git push -u origin main


---add hp-pages---
npm add gh-pages

see in file package.json:
"dependencies": {
    "gh-pages": "^6.3.0",

-----------------
  "scripts": {
.....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
----------------
 "homepage": "https://andreyokhotnikov24.github.io/crypto-app/",

--------------------------
see in file vite.config.ts:
export default defineConfig({
  .......
  base: '/crypto-app/'
})

git add .
git commit -m 'GH-pages'
