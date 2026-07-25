export interface ExcerptItem {
	id: number;
	content: string;
	date: string;
	author?: string;
	source?: string;
	note?: string;
	tags?: string[];
}

const excerptsData: ExcerptItem[] = [
	{
		id: 1,
		content:
			"一个真正的高度，不在于最终获得了多少掌声，而在于他是否曾把生命中最好的岁月交给一件值得相信和坚持的事，并在无人理解、看不见结果的时候，仍然选择继续向前。",
		date: "2026-07-24T12:04:00+08:00",
		note: "适合放在阶段性复盘里提醒自己：别太急，长期主义要经得起冷启动。",
		tags: ["金句", "长期主义"],
	},
	{
		id: 2,
		content: "The limits of my language mean the limits of my world.",
		date: "2026-07-25T14:20:00+08:00",
		author: "Ludwig Wittgenstein",
		source: "Tractatus Logico-Philosophicus",
		note: "英语学习不只是背单词，也是在扩展自己能理解、能表达的世界。",
		tags: ["英语", "表达"],
	},
	{
		id: 3,
		content: "不要把偶然的热情，当成长期的能力。真正能改变人的，是稳定地重复。",
		date: "2026-07-25T14:30:00+08:00",
		note: "跑步、英语、代码都一样，先让系统跑起来，再谈速度。",
		tags: ["学习", "自律"],
	},
];

export const getExcerptsList = (limit?: number) => {
	const sortedData = [...excerptsData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

export const getExcerptTags = () => {
	const tags = new Set<string>();
	for (const item of excerptsData) {
		for (const tag of item.tags || []) {
			tags.add(tag);
		}
	}
	return Array.from(tags).sort();
};

export const getExcerptStats = () => ({
	total: excerptsData.length,
	tags: getExcerptTags().length,
	authors: new Set(
		excerptsData
			.map((item) => item.author)
			.filter((author): author is string => Boolean(author)),
	).size,
});
