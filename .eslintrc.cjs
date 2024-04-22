module.exports = {
  // ... 其他的 ESLint 配置 ...
  extends: [
    // ... 其他的扩展配置 ...
    'prettier', // 使用 Prettier 的 ESLint 规则
  ],
  plugins: ['prettier'], // 注册 Prettier 插件
  rules: {
    // ... 其他的规则 ...
    'prettier/prettier': 'error', // 使用 Prettier 作为 ESLint 规则
  },
}
