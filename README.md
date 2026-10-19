# dsh-punk-rock-glass · 朋克摇滚液态玻璃主题

给 **DeepSeek Harness (DSH) Web GUI** 换肤的插件：暗黑工业底 + 暖金色黄昏光影 +
**Glassmorphism 液态毛玻璃** 面板，朋克摇滚酷感，安装即自动应用。

## 效果

- **配色**：主色黑 `#0a0a0c` / 深灰，暖黄高光 `#f5a623`、琥珀金 `#ffc24b`
- **液态玻璃**：面板半透明 + `backdrop-filter: blur(16px) saturate(140%)` +
  细白边框 + 柔和阴影，背景光晕透过面板形成磨砂通透感
- **背景**：暗黑工业底 + 暖金色黄昏光晕 + 细颗粒噪点（自包含 CSS，离线可用）
- **自动应用**：安装重启后即生效，并注册进 DSH 原生主题系统（主题列表中可见）

## 安装

```bash
# 从 GitHub 仓库安装（你的仓库地址）
dsh plugin --profile web add github:zzzzz-ghost/dsh-ui-project
```

然后**重启 `dsh web`**（刷新页面不够，需要重启进程）。重启后界面即自动应用本皮肤。

## 卸载

```bash
dsh plugin --profile web remove dsh-punk-rock-glass
```

重启 `dsh web` 后完全恢复原生外观（本插件是纯客户端插件，不改任何 DSH 源码）。

## 文件结构

```
.
├── package.json        # DSH 插件清单（dsh.client 配置 + 依赖注入）
├── cordis.patch.yml    # bundle patch：注册插件入口
├── lib/
│   ├── index.js        # host 端入口（空操作）
│   └── client.js       # 浏览器端：注入皮肤 CSS + 主题 token
├── LICENSE             # MIT
└── README.md
```

## 自定义

- **改配色**：编辑 `lib/client.js` 顶部的 `P` 配色对象（`accent`、`base`、
  `layer1~3` 等），然后重新安装或更新仓库。
- **换成自己的图片背景**：在 `lib/client.js` 的 `CSS_TEXT` 中，把
  `html::before` 的 `background` 渐变替换为一张图片，例如：
  ```css
  background: url('https://你的图片地址') center/cover no-repeat, #0a0a0c;
  ```
  建议图片加暗色遮罩保证文字可读。

## 技术说明

- 皮肤通过 DSH 的 `--dsw-alias-*` / `--dsw-specific-*` 主题 token 上色，
  并把 token 写入 `body` 内联样式以覆盖原生主题。
- 玻璃效果依赖浏览器 `backdrop-filter`（Chromium 76+ / Safari 9+ / Firefox 103+），
  建议使用最新版 Chrome / Edge。
- 兼容 DSH `0.1.0-rc.8` 系列客户端插件协议（与 `dsh-client-ui-skins`、
  `dsh-web-ui` 同构）。

## 许可证

[MIT](./LICENSE) · 插件是第三方代码，安装前请自行核对源码。
