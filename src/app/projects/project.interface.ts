export interface Project {
    id: string;
    name: string;
    template: string;
    overview: Overview;
    detail: Detail;
}

export interface Overview {
    blurb: string,
    images?: any,
    client: string,
    agency: string,
    role: string,
    website?: string
}

export interface Detail {
    masthead: {
        blurb: string,
        image: string
    },
    intro: {
        blurb: string,
        image: string
    },
    sections: [
        {
            title: string,
            blurb: string,
            images: [{
                type: string,
                path: any,
                pad?:boolean
            }]
        }
    ]
    box: {
        colour: string,
        blurb: string,
        image: string
    }
}