// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	author?: string;
	source?: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"一个真正的高度，不在于最终获得了多少掌声，而在于他是否曾把生命中最好的岁月交给一件值得相信和坚持的事，并在无人理解，看不见结果的时候，仍然选择继续向前，所谓成就，不过是时间对长期坚持的一次回应，所以不要轻视任何沉默的坚持，你今日独自走过的路，或许正是未来的你能够站得更高得原因。",
		date: "2026-07-24T12:04:00+08:00",
		mood: "整理",
		tags: ["金句"],
	},
	{
		id: 2,
		content:
			"尴尬是一种可贵的能力。因为，反躬自问是一切爱愿和思想的初萌。要是你忽然发现你处在了尴尬的地位，这不值得惊慌，也最好不要逃避，莫如由着它日日夜夜惊扰你的良知，质问你的信仰，激活你的思想；进退维谷之日可能是别有洞天之时，这差不多能算规律。",
		date: "2026-07-25T12:04:00+08:00",
		author: "史铁生",
		source: "《病隙碎笔》",
		mood: "整理",
		tags: ["金句"],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
