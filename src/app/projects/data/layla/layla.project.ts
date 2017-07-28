import { Project } from '../../project.interface';

export const project: Project = {
    "id": 'layla',
    "name": "Layla",
    "template": "full",
    "overview": {
        "client": 'Layla',
        "website": 'http://www.markeygroup.com.au',
        "agency": 'Self Initiated',
        "role": 'App, website, visual identity.',
        "blurb": "Ideation and development of a music streaming service.",
        "images": {
            "1": "./assets/projects/markey/grid1.jpg?v=1"
        }
    },
    "detail": {
        "masthead": {
            "blurb": "<pLayla is a music streaming and discovery service that curates metadata driven dynamic playlists.</p><p>After recognising an opportunity to improve on existing music service offerings, I began developing a cloud platform and app that integrates multiple music services using machine learning.</p>",
            "image": "./assets/projects/layla/mast.jpg?v=1"
        },
        "intro": {
            "blurb": "<p>Markey Insurance were established in 1972, refreshing their brand on several occasions over the subsequent years. They wanted to respect aspects of that evolution yet modernise their identity to better represent their value of putting the customer first.</p><p>I created a visual strategy and website that centred around a user-centric colour scheme. There is no single primary colour in the Markey brand - the overarching idea is to utilise the most appropriate colour from their palette, encouraging staff to consider their relationship with the customer by placing relationships at the forefront of decision making.</p>",
            "image": "./assets/projects/markey/intro.jpg?v=1"
        },
        "sections": [{
            "title": "logo design",
            "blurb": "<p>Over the years Markey Insurance had diversified into other areas of finance such as risk management. Customer insights supported that it was time to drop 'insurance' from the logo.</p><p>I removed the stylised 'M' and text effects, making a clean and memorable logomark that doesn't try to confuse the eye. The 'full stop' creates a visual hook that connotes a detail orientated company, while also creating recognition across social and other associated brands within the Markey family. </p>",
            "images": [{
                "type": "wide",
                "path": "./assets/projects/markey/logo1.jpg?v=1"
            },
            {
                "type": "split",
                "path": ["./assets/projects/markey/logo2.jpg?v=1","./assets/projects/markey/logo3.jpg?v=1"]
            }
            ]
        }, {
            "title": "colour palette",
            "blurb": "<p>We developed a friendly, complementary set of vibrant colour combinations that is appropriate for Markey's diverse array of personal and corporate clients.</p>",
            images: [{
                "type": "wide",
                "path": "./assets/projects/markey/palette.jpg?v=1"
            },
            {
                "type": "full",
                "path": "./assets/projects/markey/brochures.jpg?v=1"
            }
            ]
        },
        {
            "title": "website",
            "blurb": "<p>During the initial research phase of the UX process we discovered that the core usage of the website was to book new insurance. Users often knew the exact type of insurance they required and wanted to reach that segment quickly. I designed the site to have a simplified user flow where content is accessed quickly. We then highlight cross promotion of other services that are often complementary but overlooked.</p><p>Built on wordpress, the Markey website is a complex combination of several subbrand websites integrated into the one streamlined login. I created several plugins and liased with third party plugin developers, creating bespoke solutions to manage their custom integration with NAB, the appearance of subbrand menus, and context sensitive sibling pages.</p>",
            images: [
                { type: "wide", path: "./assets/projects/markey/imac.jpg?v=1" },
                { type: "full", path: "./assets/projects/markey/screen.jpg?v=1" },
                { type: "full", path: "./assets/projects/markey/mobiles.jpg?v=1", pad:false }
            ]
        }],
        "box": {
            "colour": "#ed008c",
            "blurb": "A brand that reflects Markey's commitment to making the insurance industry simple for their clients.",
            "image": "./assets/projects/markey/grid1.jpg?v=1"
        }
    }
}