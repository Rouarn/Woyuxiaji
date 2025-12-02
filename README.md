# woyuxaiji.top

我与夏季是一个个人主页

## 目录结构

- `css/` 样式资源
- `img/` 图片资源
- `js/` 脚本资源
  - `init/` 入口初始化脚本
  - `plugins/` jQuery 插件封装
  - `modules/` 业务模块脚本
  - `utils/` 工具方法脚本
  - `vendor/` 第三方库回退（如 jQuery）

## 脚本加载与依赖

- 优先使用 CDN 加载第三方库，并提供本地回退
- 所有自有脚本统一使用 `defer`，入口为 `js/init/bootstrap.js`

## 代码规范

- 使用 ESLint（`eslint:recommended`）与 Prettier 统一风格
- DOM 变量小驼峰命名，状态类统一使用 `is-*` 前缀

## 性能与交互

- 滚动事件使用 `passive` + `requestAnimationFrame`
- 高频选择器统一缓存，减少重复查询与重排
- 主题切换采用 jQuery 插件与容器级事件委托
