/**
 * dsh-punk-rock-glass — 浏览器端皮肤 bundle。
 *
 * 朋克摇滚 + 液态玻璃(Glassmorphism) 主题：暗黑工业底、暖金色高光、
 * 半透明磨砂面板（backdrop-filter 模糊 + 细白边框 + 柔和阴影）。
 * 安装后自动应用，并注册进 DSH 原生主题系统。
 *
 * Bundle 格式：window.__ModuleLoader__.load({ id, factory })
 * —— 即 client-modules host 半区在 /plugins/<id>/client.js 服务的形状。
 */
window.__ModuleLoader__.load({
  id: "dsh-punk-rock-glass",
  factory: function (require) {
    var module = { exports: {} };
    var exports = module.exports;

    // ============================================================
    // 朋克摇滚 · 液态玻璃 配色
    // 主色黑 / 深灰，暖黄 #f5a623 高光；玻璃面板半透明 + 细白边框
    // ============================================================
    var P = {
      base:        "#0a0a0c",                       // 主背景黑
      baseGlass:   "rgba(10, 10, 12, 0.72)",        // 页面底（半透明，透出光晕）
      layer1:      "rgba(255, 255, 255, 0.045)",    // 玻璃层 1
      layer2:      "rgba(255, 255, 255, 0.065)",    // 玻璃层 2
      layer3:      "rgba(255, 255, 255, 0.09)",     // 玻璃层 3
      overlay:     "rgba(22, 22, 27, 0.94)",        // 浮层（近不透明，保证可读）
      platform:    "rgba(20, 20, 25, 0.90)",        // 模块平台
      menu:        "rgba(22, 22, 27, 0.92)",        // 菜单 / 下拉
      accent:      "#f5a623",                       // 暖黄高光
      accent2:     "#ffc24b",                       // 琥珀金
      accentHover: "#ffb63a",
      accentDim:   "rgba(245, 166, 35, 0.28)",
      accentDim2:  "rgba(245, 166, 35, 0.16)",
      onAccent:    "#1a1203",                       // 暖黄上的文字（深）
      text:        "#f2f2f4",                       // 主文字
      text2:       "rgba(242, 242, 244, 0.74)",     // 次级文字
      text3:       "rgba(242, 242, 244, 0.56)",     // 三级文字
      text4:       "rgba(242, 242, 244, 0.40)",     // 弱化文字
      border1:     "rgba(255, 255, 255, 0.10)",     // 细白边框 1
      border2:     "rgba(255, 255, 255, 0.16)",     // 细白边框 2
      border3:     "rgba(255, 255, 255, 0.24)",     // 细白边框 3
      border4:     "rgba(245, 166, 35, 0.40)",      // 暖金边框
      danger:      "#e5484d",
      dangerDim:   "rgba(229, 72, 77, 0.18)",
      success:     "#34b27b",
      successDim:  "rgba(52, 178, 123, 0.18)",
      warn:        "#f79009",
      warn2:       "#fdb022",
      warnDim:     "rgba(247, 144, 9, 0.18)",
      hover:       "rgba(255, 255, 255, 0.08)",     // 交互悬停
      active:      "rgba(255, 255, 255, 0.12)",     // 交互按下
      hoverAccent: "rgba(245, 166, 35, 0.22)",      // 暖金悬停
    };

    // ============================================================
    // 主题 token（--dsw-alias-* / --dsw-specific-*）
    // DSH Web 界面通过这些 CSS 变量上色；扁平 map，直接写入 body.style
    // ============================================================
    var TOKENS = {
      // -- surfaces --------------------------------------------------
      "--dsw-alias-bg-base": P.baseGlass,
      "--dsw-alias-bg-layer-1": P.layer1,
      "--dsw-alias-bg-layer-2": P.layer2,
      "--dsw-alias-bg-layer-3": P.layer3,
      "--dsw-alias-bg-overlay": P.overlay,
      "--dsw-alias-bg-module-platform": P.platform,
      "--dsw-alias-bg-multi-select": P.layer2,
      "--dsw-alias-bg-skeleton": P.layer2,

      // -- borders ---------------------------------------------------
      "--dsw-alias-border-l1": P.border1,
      "--dsw-alias-border-l2": P.border2,
      "--dsw-alias-border-l2-darkmode-thin": P.border2,
      "--dsw-alias-border-l3": P.border3,
      "--dsw-alias-border-l4": P.border4,
      "--dsw-alias-border-inverted": P.text,
      "--dsw-alias-border-inverted2": P.text,

      // -- brand ------------------------------------------------------
      "--dsw-alias-brand-primary": P.accent,
      "--dsw-alias-brand-primary-new-colorprimary-new-color": P.accent,
      "--dsw-alias-brand-text": P.text,
      "--dsw-alias-brand-primary-invert": P.onAccent,

      // -- buttons -----------------------------------------------------
      "--dsw-alias-button-primary-fill": P.accent,
      "--dsw-alias-button-primary-hover": P.accentHover,
      "--dsw-alias-button-primary-dimmed": P.accentDim2,
      "--dsw-alias-button-contrast-fill": "#1a1a1f",
      "--dsw-alias-button-elevated-fill": P.layer1,
      "--dsw-alias-button-floating-fill": P.layer1,
      "--dsw-alias-button-floating-hover": P.layer2,
      "--dsw-alias-button-ghost-active-border": P.border3,
      "--dsw-alias-button-ghost-active-fill": P.layer2,
      "--dsw-alias-button-ghost-active-hover": P.layer2,
      "--dsw-alias-button-info-fill": P.accent,
      "--dsw-alias-button-info-hover": P.accentHover,
      "--dsw-alias-button-tool-bar-fill": P.layer2,
      "--dsw-alias-button-tool-bar-fill-invisible": P.layer1,
      "--dsw-alias-button-tool-bar-hover": P.layer3,

      // -- interactions ------------------------------------------------
      "--dsw-alias-interactive-bg-hover": P.hover,
      "--dsw-alias-interactive-bg-active": P.active,
      "--dsw-alias-interactive-bg-hover-solid": P.layer2,
      "--dsw-alias-interactive-bg-hover-accent": P.hoverAccent,
      "--dsw-alias-interactive-bg-hover-danger": P.dangerDim,

      // -- labels ------------------------------------------------------
      "--dsw-alias-label-primary": P.text,
      "--dsw-alias-label-primary-bluish": P.text,
      "--dsw-alias-label-primary-dimmed": P.text3,
      "--dsw-alias-label-primary-foreground": P.text,
      "--dsw-alias-label-primary-inverted": "#1a1a1f",
      "--dsw-alias-label-secondary": P.text2,
      "--dsw-alias-label-tertiary": P.text3,
      "--dsw-alias-label-caption": P.text3,
      "--dsw-alias-label-dimmed": P.text4,

      // -- markdown / code ---------------------------------------------
      "--dsw-alias-markdown-citation": P.accentDim2,
      "--dsw-alias-markdown-code-block": P.layer2,
      "--dsw-alias-markdown-code-block-banner": P.layer1,
      "--dsw-alias-markdown-code-segment-selected": P.accentDim2,
      "--dsw-alias-markdown-code-segment-unselected": P.layer1,
      "--dsw-alias-markdown-inline-code": P.accentDim2,
      "--dsw-alias-markdown-placeholder": P.layer1,
      "--dsw-alias-markdown-tag": P.accentDim2,

      // -- scrollbar ----------------------------------------------------
      "--dsw-alias-scrollbar-bg-l1": P.layer2,
      "--dsw-alias-scrollbar-bg-l2": P.layer3,
      "--dsw-alias-scrollbar-hover-l1": P.layer3,
      "--dsw-alias-scrollbar-hover-l2": P.border3,

      // -- states --------------------------------------------------------
      "--dsw-alias-state-business-primary": "#ffb63a",
      "--dsw-alias-state-business-tertiary": P.accentDim,
      "--dsw-alias-state-error-primary": P.danger,
      "--dsw-alias-state-error-secondary": "#f04438",
      "--dsw-alias-state-success-primary": P.success,
      "--dsw-alias-state-success-secondary": "#32d583",
      "--dsw-alias-state-success-tertiary": P.successDim,
      "--dsw-alias-state-warn-primary": P.warn,
      "--dsw-alias-state-warn-secondary": P.warn2,
      "--dsw-alias-state-warn-tertiary": P.warnDim,
      "--dsw-alias-state-warn-label": P.warn2,

      // -- chrome --------------------------------------------------------
      "--dsw-alias-toast-bg": P.overlay,
      "--dsw-alias-tooltip-bg": P.overlay,
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.30)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.16)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.52)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
      "--dsw-alias-bg-mask-drop": "rgba(20, 20, 25, 0.70)",

      // -- specific（组件级：侧栏 / 气泡 / 输入框） --------------------------
      "--dsw-specific-bubble": P.layer2,
      "--dsw-specific-bubble-highlight": P.accentDim,
      "--dsw-specific-input-major": P.layer2,
      "--dsw-specific-login-input": P.layer2,
      "--dsw-specific-menu": P.menu,
      "--dsw-specific-selector": P.menu,
      "--dsw-specific-sidebar-fill": P.layer1,
      "--dsw-specific-sidebar-nav-item-active": P.accentDim,
      "--dsw-specific-sidebar-nav-item-active-accent": P.accent,
      "--dsw-specific-sidebar-nav-item-hover": P.layer2,
      "--dsw-specific-tip": P.accentDim2,
    };

    // ============================================================
    // 玻璃 + 背景 CSS（不能只用颜色 token 表达的部分）
    // ============================================================
    var CSS_TEXT = [
      // 背景层：暗黑工业底 + 暖金色黄昏光晕
      "html::before{content:'';position:fixed;inset:0;z-index:-2;" +
        "background:radial-gradient(1200px 600px at 82% -8%,rgba(245,166,35,0.18),transparent 60%)," +
        "radial-gradient(900px 520px at -8% 30%,rgba(245,166,35,0.09),transparent 55%)," +
        "radial-gradient(720px 720px at 50% 118%,rgba(245,166,35,0.07),transparent 60%),#0a0a0c}",
      // 细颗粒噪点质感
      "html::after{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;" +
        "background-image:radial-gradient(rgba(255,255,255,0.02) 1px,transparent 1px);background-size:3px 3px}",
      // 玻璃面板：半透明 + backdrop-filter 模糊（针对可识别的容器）
      "[role='dialog'],[class*='_sidebar_'],[class*='_panel_'],[class*='_popover_']," +
        "[class*='_menu_'],[class*='_composer_'],[class*='_input_']{" +
        "backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%)}",
      // 正文磨砂底：助手回答文字区加一层轻磨砂，保证背景光晕下仍清晰
      "[data-chat-flow-kind='assistant-step'] [class*='_markdown_']{" +
        "background:rgba(255,255,255,0.03);border-radius:8px}",
      // 选中文字：暖金高亮
      "::selection{background:rgba(245,166,35,0.35);color:#fff}",
    ].join("");

    var styleTag = null;
    /** 注入皮肤样式表（幂等）。 */
    function ensureStyle() {
      if (styleTag || typeof document === "undefined") return;
      styleTag = document.createElement("style");
      styleTag.dataset.plugin = "dsh-punk-rock-glass";
      styleTag.textContent = CSS_TEXT;
      document.head.appendChild(styleTag);
    }

    /** 把 token 写到 body 内联样式（最高优先级，覆盖原生主题）。 */
    function applyTokens() {
      if (typeof document === "undefined") return;
      var target = document.body || document.documentElement;
      for (var name in TOKENS) {
        target.style.setProperty(name, TOKENS[name]);
      }
    }

    /** 卸载时清理，恢复原生外观。 */
    function teardown() {
      if (typeof document === "undefined") return;
      if (styleTag && styleTag.parentNode) styleTag.parentNode.removeChild(styleTag);
      styleTag = null;
      var target = document.body || document.documentElement;
      for (var name in TOKENS) {
        target.style.removeProperty(name);
      }
    }

    function apply(ctx) {
      ensureStyle();
      applyTokens();

      // 注册进 DSH 原生主题系统（在主题列表里可见；重复注册会抛错，忽略）
      var theme = null;
      var off = null;
      try {
        theme = ctx.get("theme");
        if (theme && theme.register) {
          theme.register({
            id: "punk-rock-glass",
            colorScheme: "dark",
            tokens: TOKENS,
          });
        }
      } catch (err) {
        /* 已在会话内注册过（如 HMR 重激活），忽略 */
      }

      // 原生主题每次变化后重写 token，保持本皮肤占优
      try {
        off = ctx.on("theme/change", applyTokens);
      } catch (err) {
        off = null;
      }

      return teardown;
    }

    var inject = ["theme"];
    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  },
});
