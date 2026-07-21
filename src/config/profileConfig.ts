import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/xwei2051-avatar-square.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Xwei2051",
	bio: "物联网工程在读，把学习、项目和生活节奏整理成长期档案。",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1017012692",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Xwei2051",
		},
	],
};
