<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { onMount } from "svelte";
import type { ArchivePanelProps, Group, Post } from "./types";

let {
	tags = $bindable([]),
	categories = $bindable([]),
	sortedPosts = [],
}: ArchivePanelProps = $props();

const params = new URLSearchParams(window.location.search);
tags = params.has("tag") ? params.getAll("tag") : [];
categories = params.has("category") ? params.getAll("category") : [];
const uncategorized = params.get("uncategorized");

let groups = $state<Group[]>([]);

function formatDate(date: Date) {
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${month}-${day}`;
}

function formatTag(tagList: string[]) {
	return tagList.map((t) => `#${t}`).join(" ");
}

onMount(async () => {
	let filteredPosts: Post[] = sortedPosts;

	if (tags.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) =>
				Array.isArray(post.data.tags) &&
				post.data.tags.some((tag) => tags.includes(tag)),
		);
	}

	if (categories.length > 0) {
		filteredPosts = filteredPosts.filter(
			(post) => post.data.category && categories.includes(post.data.category),
		);
	}

	if (uncategorized) {
		filteredPosts = filteredPosts.filter((post) => !post.data.category);
	}

	// 按发布时间倒序排序，确保不受置顶影响
	filteredPosts = filteredPosts
		.slice()
		.sort((a, b) => b.data.published.getTime() - a.data.published.getTime());

	const grouped = filteredPosts.reduce(
		(acc, post) => {
			const year = post.data.published.getFullYear();
			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, Post[]>,
	);

	const groupedPostsArray = Object.keys(grouped).map((yearStr) => ({
		year: Number.parseInt(yearStr, 10),
		posts: grouped[Number.parseInt(yearStr, 10)],
	}));

	groupedPostsArray.sort((a, b) => b.year - a.year);

	groups = groupedPostsArray;
});
</script>

<div class="archive-panel">
	{#each groups as group (group.year)}
		<section class="archive-year">
			<div class="archive-year-head">
				<div class="archive-year-text">
					<span>{group.year}</span>
					<small>
						{group.posts.length}
						{i18n(
							group.posts.length === 1
								? I18nKey.postCount
								: I18nKey.postsCount,
						)}
					</small>
				</div>
			</div>

			<div class="archive-posts">
			{#each group.posts as post (post.id)}
				<a
					href={post.url || `/posts/${post.id}/`}
					aria-label={post.data.title}
					class="archive-post"
				>
					<span class="archive-date">
							{formatDate(post.data.published)}
					</span>
					<span class="archive-dot"></span>
					<span class="archive-title">
							{post.data.title}
					</span>
					{#if post.data.tags.length > 0}
						<span class="archive-tags">{formatTag(post.data.tags)}</span>
					{/if}
				</a>
			{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.archive-panel {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1.35rem;
	}

	.archive-year {
		display: grid;
		grid-template-columns: minmax(6.5rem, 0.18fr) minmax(0, 1fr);
		gap: clamp(1rem, 3vw, 2rem);
	}

	.archive-year-head {
		position: relative;
		padding-top: 0.1rem;
	}

	.archive-year-text {
		position: sticky;
		top: 5.5rem;
	}

	.archive-year-text span {
		display: block;
		color: transparent;
		background: linear-gradient(
			100deg,
			var(--deep-text),
			color-mix(in oklab, var(--primary) 72%, var(--deep-text))
		);
		background-clip: text;
		-webkit-background-clip: text;
		font-size: clamp(1.65rem, 3vw, 2.35rem);
		font-weight: 850;
		line-height: 1;
	}

	.archive-year-text small {
		display: block;
		margin-top: 0.35rem;
		color: color-mix(in oklab, var(--regular-text) 70%, transparent);
		font-size: 0.78rem;
		font-weight: 650;
	}

	.archive-posts {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding-left: 1.1rem;
	}

	.archive-posts::before {
		content: "";
		position: absolute;
		inset-block: 0.55rem 0.55rem;
		left: 0.2rem;
		width: 1px;
		background: linear-gradient(
			180deg,
			oklch(0.76 0.15 var(--hue) / 0.58),
			color-mix(in oklab, var(--line-divider) 90%, transparent)
		);
	}

	.archive-post {
		position: relative;
		display: grid;
		grid-template-columns: 4.25rem 0.9rem minmax(0, 1fr) minmax(8rem, 0.28fr);
		align-items: center;
		gap: 0.55rem;
		min-height: 2.75rem;
		padding: 0.35rem 0.75rem 0.35rem 0;
		border-radius: 0.8rem;
		color: var(--regular-text);
		text-decoration: none;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}

	.archive-post:hover {
		background: color-mix(in oklab, var(--btn-regular-bg) 86%, var(--primary) 8%);
		color: var(--deep-text);
		transform: translateX(2px);
	}

	.archive-date {
		color: color-mix(in oklab, var(--regular-text) 66%, transparent);
		font-size: 0.82rem;
		font-weight: 700;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	.archive-dot {
		position: relative;
		z-index: 1;
		width: 0.52rem;
		height: 0.52rem;
		border: 2px solid color-mix(in oklab, var(--primary) 76%, white 8%);
		border-radius: 999px;
		background: var(--card-bg);
		box-shadow: 0 0 0 4px var(--card-bg);
		transition:
			background 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease;
	}

	.archive-post:hover .archive-dot {
		background: var(--primary);
		box-shadow:
			0 0 0 4px var(--card-bg),
			0 0 16px oklch(0.72 0.16 var(--hue) / 0.45);
		transform: scale(1.14);
	}

	.archive-title {
		min-width: 0;
		overflow: hidden;
		color: var(--deep-text);
		font-size: 0.98rem;
		font-weight: 760;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.archive-post:hover .archive-title {
		color: color-mix(in oklab, var(--primary) 78%, var(--deep-text));
	}

	.archive-tags {
		min-width: 0;
		overflow: hidden;
		color: color-mix(in oklab, var(--regular-text) 46%, transparent);
		font-size: 0.8rem;
		text-align: right;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	:global(:root.dark) .archive-year-text span {
		background: linear-gradient(
			100deg,
			rgba(255, 255, 255, 0.92),
			oklch(0.78 0.14 var(--hue))
		);
		background-clip: text;
		-webkit-background-clip: text;
	}

	:global(:root.dark) .archive-year-text small {
		color: rgba(255, 255, 255, 0.56);
	}

	:global(:root.dark) .archive-post:hover {
		background: oklch(0.62 0.12 var(--hue) / 0.1);
		color: rgba(255, 255, 255, 0.86);
	}

	:global(:root.dark) .archive-dot {
		background: var(--card-bg);
		box-shadow: 0 0 0 4px var(--card-bg);
	}

	:global(:root.dark) .archive-title {
		color: rgba(255, 255, 255, 0.84);
	}

	:global(:root.dark) .archive-post:hover .archive-title {
		color: oklch(0.78 0.14 var(--hue));
	}

	:global(:root.dark) .archive-date {
		color: rgba(255, 255, 255, 0.54);
	}

	:global(:root.dark) .archive-tags {
		color: rgba(255, 255, 255, 0.42);
	}

	@media (max-width: 768px) {
		.archive-year {
			grid-template-columns: 1fr;
			gap: 0.8rem;
		}

		.archive-year-text {
			position: static;
		}

		.archive-post {
			grid-template-columns: 3.8rem 0.9rem minmax(0, 1fr);
			padding-right: 0.2rem;
		}

		.archive-tags {
			display: none;
		}
	}
</style>
