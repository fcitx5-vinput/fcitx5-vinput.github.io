// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://fcitx5-vinput.github.io',
	integrations: [
		starlight({
			title: 'fcitx5-vinput',
			logo: {
				src: './public/favicon.svg',
			},
			description:
				'Voice input for Fcitx5 with local and cloud ASR, LLM rewriting, and cross-distro installation.',
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/fcitx5-vinput/fcitx5-vinput',
				},
			],
			editLink: {
				baseUrl:
					'https://github.com/fcitx5-vinput/fcitx5-vinput.github.io/edit/main/',
			},
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '/hero-mic.svg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'fcitx5-vinput',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'fcitx5-vinput',
						description:
							'Voice input for Fcitx5 with local and cloud ASR, LLM rewriting, and cross-distro installation.',
						applicationCategory: 'UtilitiesApplication',
						operatingSystem: 'Linux',
						url: 'https://fcitx5-vinput.github.io/',
					}),
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: '',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: ['install', 'guide', 'asr', 'scenes', 'settings', 'registry', 'sponsor'],
		}),
	],
});
