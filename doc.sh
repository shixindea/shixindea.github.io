## 构建文档并自动部署

pnpm build:html

mkdir ./docs/packages

scp -r ./packages/* ./docs/packages/

git add .

git commit -m "update:更新组件库文档"

git push