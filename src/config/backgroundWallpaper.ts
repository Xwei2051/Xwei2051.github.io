import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: "/assets/wallpaper/xwei-rain-desktop.webp",
		mobile: "/assets/wallpaper/xwei-rain-mobile.webp",
	},
	position: "center",
	carousel: {
		enable: false,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 1, // 壁纸不透明度，0-1
		blur: 0, // 背景模糊半径（px）
		cardOpacity: 0.9, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
