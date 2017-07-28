import { Project } from './project.interface';

import {project as markey } from './data/markey/markey.project'
import {project as rustic } from './data/rustic-rabbit/rustic-rabbit.project'
//import {project as ensystex } from './data/ensystex/ensystex.project'
//import {project as colterlec } from './data/colterlec/colterlec.project'
import {project as quarry } from './data/quarry/quarry.project'
//import {project as chapelJazz } from './data/chapel-jazz/chapel-jazz.project'
//import {project as frenchmanStreet } from './data/frenchman-street/frenchman-street.project'
//import {project as spiritState } from './data/spirit-state/spirit-state.project'
//import {project as athletica } from './data/athletica/athletica.project'
//import {project as stryder } from './data/stryder/stryder.project'
//import {project as delicious } from './data/delicious/delicious.project'
import {project as fressh } from './data/fressh/fressh.project'
//import {project as uonAutonomy } from './data/uon-autonomy/uon-autonomy.project'
import {project as trithor } from './data/trithor/trithor.project'
import {project as hopstop } from './data/hopstop/hopstop.project'


export const casestudies:  Project[] = [

]; 

export const stubs:  Project[] = [
    markey,
    rustic,
    fressh,
    quarry,
    trithor,
    hopstop
    //colterlec,
    //frenchmanStreet,
    //spiritState,
    //athletica,
    //stryder,
    //chapelJazz,
    //delicious,
    //ensystex,
    //uonAutonomy
]; 


export const all: Project[] = casestudies.concat(stubs);