export const gamesData = [
	{
		name: 'Cyberpunk 2077',
		year: 2020,
		image: '/images/games/cyberpunk-2077.webp',
		rating: 86,
	},
	{
		name: 'Dying Light 2',
		year: 2022,
		image: '/images/games/dying-light-2.webp',
		rating: 77,
	},
	{
		name: 'Elden Ring',
		year: 2022,
		image: '/images/games/elden-ring.webp',
		rating: 94,
	},
	{
		name: 'Forza Horizon 5',
		year: 2022,
		image: '/images/games/forza-horizon-5.webp',
		rating: 79,
	},
	{
		name: 'Gotham Knights',
		year: 2022,
		image: '/images/games/gotham-knights.webp',
		rating: -1,
	},
	{
		name: 'Hogwarts Legacy',
		year: 2022,
		image: '/images/games/hogwarts-legacy.webp',
		rating: -1,
	},
	{
		name: 'Horizon Forbidden West',
		year: 2022,
		image: '/images/games/horizon-forbidden-west.webp',
		rating: 88,
	},
	{
		name: 'Psychonauts 2',
		year: 2021,
		image: '/images/games/psychonauts-2.webp',
		rating: 89,
	},
	{
		name: 'Saints Row',
		year: 2022,
		image: '/images/games/saints-row.webp',
		rating: -1,
	},
	{
		name: 'Sonic Frontiers',
		year: 2022,
		image: '/images/games/sonic-frontiers.webp',
		rating: -1,
	},
	{
		name: 'Stray',
		year: 2022,
		image: '/images/games/stray.webp',
		rating: 83,
	},
	{
		name: 'Witcher 3 Wild Hunt',
		year: 2015,
		image: '/images/games/witcher-3-wild-hunt.webp',
		rating: 93,
	},
] as Array<GameType>

export type GameType = {
	name: string
	year: number
	image: string
	rating: number
}