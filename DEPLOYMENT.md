# Career Insight AI 部署说明

## 推荐：腾讯云 CloudBase Git 仓库部署

本项目已经配置为静态导出。运行 `pnpm build` 后，部署目录为 `out`。

1. 在腾讯云 CloudBase 创建环境，并完成账号实名认证。
2. 进入「网站托管」并选择「Git 仓库部署」。
3. 连接 GitHub，选择 `Career Insight AI` 对应仓库与生产分支（建议为 `main`）。
4. 设定构建命令：`pnpm install --frozen-lockfile && pnpm build`。
5. 设定发布目录：`out`。
6. 保存并部署。此后每次 push 到 `main`，平台会自动构建并更新线上站点。

## 自定义域名与中国大陆访问

平台生成的临时域名可用于演示。若要以自己的域名服务中国大陆用户，请先完成该域名的 ICP 备案，再在 CloudBase 控制台绑定域名和 HTTPS 证书。

## Cloudflare Pages 说明

Cloudflare Pages 的 Git 集成也支持 push 自动部署，但不建议作为本项目面向中国大陆用户的正式发布渠道。请不要用 `pages.dev` 临时域名作为国内用户访问入口。
