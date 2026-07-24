// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
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
		tags: ["金句", "记录"],
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
