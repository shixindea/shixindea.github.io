## 快速推送 dish 到 gh-pages 分支

### 提交代码

git add .
pnpm gitcz

### 发布 npm

npm publish

### 发布 gh-pages 到 github pages 分支

pnpm build:html

git subtree push --prefix dist origin gh-pages

黑色颜色 统一为 #303133
