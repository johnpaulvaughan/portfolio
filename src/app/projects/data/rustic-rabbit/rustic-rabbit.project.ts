import { Project } from '../../project.interface';

export const project: Project = {
	"id": 'rustic-rabbit',
	"name": "Rustic Rabbit",
	"template": "full",
	"overview": {
		"client": 'Rustic Rabbit',
		"website": 'http://www.rusticrabbit.com.au/',
		"agency": 'Freelance',
		"role": 'Visual strategy, website.',
		"blurb": "Identity and website for a startup that uses showbags to place products in the hands of consumers.",
		"images": {
			"1": "./assets/projects/rustic-rabbit/grid1.jpg?v=1"
		}
	},
	"detail": {
		"masthead": {
			"blurb": "<p>Rustic Rabbit is a marketing services company specialising in product sampling at Royal Shows. They approached me to create an engaging website with an aesthetic that could encapsulate their philosophy.</p>",
			"image": "./assets/projects/rustic-rabbit/mast.jpg?v=1"
		},
		"intro": {
			"blurb": "<p>Rustic Rabbit were a startup with a logo and big ideas who needed a visual direction and website feel that reflected their innovative approach to marketing.</p><p>I developed a Wordpress website with an emersive feel through subtle animations that helped potential partners understand Rustic Rabbit's story. The aesthetic was so successful we worked together to roll out the branding over a range of collateral including press ads and event backdrops.</p>",
			"image": "./assets/projects/rustic-rabbit/imacs.jpg?v=1"
		},
		"sections": [{
			title: "typography", "blurb": "<p>During the UX process we created several personas to define the user base of the website. The primary users are product manufacturers or resellers who were unaware of Rustic Rabbit's energetic and unique approach to product placement. Secondary users are showground attendees who stumble across the website looking for consumer brands.</p><p>With this in mind we used typography and a tone of voice that maintained consistency through the entire user flow, from a google search as the first point of contact, passing via the website to a showground product placement or purchase. This allowed product owners to get a feel for the vehicle their brands will use to reach consumers.</p>",
			images: [{ type: "split", path: ["./assets/projects/rustic-rabbit/grid2.jpg?v=1", "./assets/projects/rustic-rabbit/grid4.jpg?v=1"] }]
		},
		{
			title: "website",
			"blurb": "<p>The site is built on wordpress with animations powered by greensock. I based the brand aesthetics around a sketched version of a royal show to symbolise the personable relationship Rustic Rabbit brings to brand distribution. This is in contrast to competitors who are often little more than third party transportation companies.</p><p>This personability message is strengthened with the mascot and fairground animations acting as a visual representation of their philosophy - 'breeding new life into product marketing'.</p>",
			images: [{
				type: "full",
				path: "./assets/projects/rustic-rabbit/fullwidth.jpg?v=1"
			}, {
				type: "full",
				path: "./assets/projects/rustic-rabbit/screen.jpg?v=1"
			}]
		}],
		"box": {
			"colour": "#ce1f18",
			"blurb": "A brand that reflects Rustic Rabbit's quirky approach to product sampling.",
			"image": "./assets/projects/rustic-rabbit/grid3.jpg?v=1"
		}
	}
} 