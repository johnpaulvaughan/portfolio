import { Project } from '../../project.interface';

export const project: Project = {
    "id": 'quarry',
    "name": "Quarry Mining",
    "template": "full",
    "overview": {
        "client": 'Quarry Mining',
        "website": 'https://www.quarrymining.com/',
        "agency": 'Thurnham Teece',
        "role": 'Visual strategy, website, collateral.',
        "blurb": "Identity, website and sales collateral for an established mining support company.",
        "images": {
            "1": "./assets/projects/quarry/grid1.jpg?v=1"
        }
    },
    "detail": {
        "masthead": {
            "blurb": "<p>Quarry Mining has been providing a wide range of quality products, service and support to the construction and mining industry for 30 years. They approached Thurnham Teece to create an identity they could be proud of.</p>",
            "image": "./assets/projects/quarry/mast.jpg?v=1"
        },
        "intro": {
            "blurb": "<p>Quarry Mining already had a logo commissioned and needed a strategy for rolling out a complete visual identity. Using attributes from their existing logo, I created a brand aesthetic and website that places Quarry's award winning products as the hero.</p><p>By using a monochromatic colour scheme with a single highlight colour, the limited palette helps to keep focus on the products while allowing a consistent look across all of their collateral.</p>",
            "image": "./assets/projects/quarry/multiples.jpg?v=1"
        },
        sections: [{
            title: "branding",
            blurb: "<p>A vibrant red combined with metal tones are used to create a brand aesthetic that is instantly recognisable. A red/black stripe, inspired by Escher lithographs as a play on the perception of angles, is utilised throughout all Quarry collateral as a visual hook that symbolises Quarry Mining's engineering expertise.",
            images: [{
                type: "wide",
                path: "./assets/projects/quarry/palette.jpg?v=1"
            },
            {
                type: "wide",
                path: "./assets/projects/quarry/quarry-brochure-front-cover.jpg?v=1"
            },
            {
                type: "split",
                path: ["./assets/projects/quarry/b2.jpg?v=1", "./assets/projects/quarry/b1.jpg?v=1"]
            }, {
                type: "full",
                path: "./assets/projects/quarry/flyers.jpg?v=1"
            }
            ]
        },
        {
            title: "website",
            blurb: "<p>When redesigning the Quarry website, analysis of user behaviour demonstrated how the site is used to assess confidence in their products by potential customers. I developed a wordpress site with a user flow that was credential focuse, utilising a prominent menu and crosslinked key messages to encourage exploration.</p>",
            images: [{
                type: "full",
                path: "./assets/projects/quarry/imac.jpg?v=1"
            },
            {
                type: "full",
                path: "./assets/projects/quarry/screen.jpg?v=1",
                pad:false
            }]
        }],
        "box": {
            "colour": "#ED1B24",
            "blurb": "A brand aesthetic that highlights Quarry Mining's product excellence",
            "image": "./assets/projects/quarry/ipadpro2.jpg?v=1"
        }
    }











} 