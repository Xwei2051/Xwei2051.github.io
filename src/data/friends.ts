// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "LINUX DO",
		imgurl: "/assets/friends/linux-do.png",
		desc: "一个讨论技术、工具和想法的地方。",
		siteurl: "https://linux.do/",
		tags: ["论坛", "技术"],
	},
	{
		id: 2,
		title: "Bilibili",
		imgurl: "/assets/friends/bilibili.svg",
		desc: "平时看视频、学东西和放松的常用站点。",
		siteurl: "https://www.bilibili.com/",
		tags: ["视频", "学习"],
	},
	{
		id: 3,
		title: "Z-Library",
		imgurl: "/assets/friends/z-library.png",
		desc: "电子书与资料检索入口。",
		siteurl: "https://zh.z-library.sk/",
		tags: ["书籍", "资料"],
	},
	{
		id: 4,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "代码托管、项目归档和开源学习的地方。",
		siteurl: "https://github.com",
		tags: ["代码", "开源"],
	},
	{
		id: 5,
		title: "Gitee",
		imgurl: "/assets/friends/gitee.svg",
		desc: "国内代码托管与开源协作平台。",
		siteurl: "https://gitee.com/",
		tags: ["代码", "开源"],
	},
	{
		id: 6,
		title: "科研通",
		imgurl: "/assets/friends/ablesci.svg",
		desc: "文献互助与科研资料检索平台。",
		siteurl: "https://www.ablesci.com/",
		tags: ["文献", "科研"],
	},
	{
		id: 7,
		title: "行动派",
		imgurl: "/assets/friends/xingdongpai.svg",
		desc: "Rocky 外刊精读。",
		siteurl: "https://www.xingdongpai666.cn/rocky-comic/",
		tags: ["英语", "学习"],
	},
	{
		id: 8,
		title: "PanSou",
		imgurl: "/assets/friends/pansou.png",
		desc: "网盘资源搜索与聚合入口。",
		siteurl: "https://ps.252035.xyz/",
		tags: ["网盘", "搜索"],
	},
	{
		id: 9,
		title: "Codeberg",
		imgurl: "/assets/friends/codeberg.svg",
		desc: "以自由软件为核心的代码托管与开源协作平台。",
		siteurl: "https://codeberg.org/",
		tags: ["代码", "开源"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
