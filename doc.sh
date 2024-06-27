rm -rf dist/


pnpm build:html

git add .

git commit -m "update:更新组件库文档"

git push