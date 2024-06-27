rm -rf dist/

git add .

git commit -m "delte:更新前删除"

git push

pnpm build:html

git add .

git commit -m "update:更新组件库文档"

git push