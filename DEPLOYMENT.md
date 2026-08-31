# Career Insight AI 部署说明

## 静态构建

本项目已经配置为静态导出。运行 `pnpm build` 后，部署目录为 `out`。

1. 在腾讯云 CloudBase 创建环境，并完成账号实名认证。
2. 进入「网站托管」并选择「Git 仓库部署」。
3. 连接 GitHub，选择 `Career Insight AI` 对应仓库与生产分支（建议为 `main`）。
4. 设定构建命令：`pnpm install --frozen-lockfile && pnpm build`。
5. 设定发布目录：`out`。
6. 保存并部署。此后每次 push 到 `main`，平台会自动构建并更新线上站点。

## 自定义域名与中国大陆访问

平台生成的临时域名可用于演示。若要以自己的域名服务中国大陆用户，请先完成该域名的 ICP 备案，再在 CloudBase 控制台绑定域名和 HTTPS 证书。

## Cloudflare Pages + DeepSeek

公开仓库只保存变量名称，绝不能提交真实值。进入 Cloudflare Pages 项目的 **Settings → Variables and Secrets**，为 Production 添加：

- `DEEPSEEK_API_KEY`：选择 **Encrypt**，填写 DeepSeek API Key。
- `CAREER_INSIGHT_ACCESS_CODE`：选择 **Encrypt**，自行设置访客体验码。
- `DEEPSEEK_MODEL`：普通文本，可选；默认使用 `deepseek-v4-flash`。

保存后重新部署最近一次生产版本。浏览器只请求本站的 `/api/analyze`，不会收到 DeepSeek API Key。

Cloudflare 保留 `main` 分支的 Git 自动部署；以后每次推送代码都会自动更新网站。若长期面向中国大陆正式运营，仍建议准备自有域名并评估备案与境内托管要求。
