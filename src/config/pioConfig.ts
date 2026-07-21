import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: false, // 启用看板娘
	models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: false, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "欢迎来到 Xwei2051。", // 欢迎词
		touch: [
			"这里还在慢慢装修。",
			"今天也要写点东西吗？",
			"别忘了保存你的灵感。",
			"欢迎回来。",
		], // 触摸提示
		home: "回到首页。", // 首页提示
		skin: ["换个样子看看？", "这个风格也不错。"], // 换装提示
		close: "下次见。", // 关闭提示
		link: "https://github.com/Xwei2051", // 关于链接
	},
};
