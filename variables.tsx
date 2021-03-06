export const data = {
    name: "Nicolás Parra Ramos",
    university: "Universidad Nacional de Colombia",
    cerificate: "Ingeniero de sistemas y computación",
    phone: '(+57) 3213326683',
    email: 'niparrara@gmail.com',
    repository: 'https://github.com/NicolasPrr',
    linkedin: 'https://www.linkedin.com/in/nicol%C3%A1s-parra-ramos-366910140/',
    src: 'https://media-exp1.licdn.com/dms/image/C4E03AQGcJtX6lCFXaw/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=dyAhFDskRm3rvrrfIShOjXWBZU2sAHvKNbR4icqS700',
    about: `Tengo experiencia en desarrollo de paginas web  desde el 2017 y aplicaciones nativas desde el 2019.`
}

export interface TLanguage {
    name: string,
    frameworks: string[],
    experience: string,
}
export interface TIdiom {
    name: string,
    level: string,
}
export const idiomList: TIdiom[] = [
    { name: 'Inglés', level: 'B1' }
]
export type ProjectItem = {
    title: string,
    description: string,
    dates: string,
    src: string[],
    libraries?: string[],
    url?: string,
    repo?: string,
    youtube?: string,
}
export const projectData: ProjectItem[] = [
    {
        title: 'Proyecto de vigilancia cientifica HORUS',
        description: `Horus recopila información desde distintas fuentes como Scopus y ResearchGate \
            la información de los docentes de la Universidad Nacional de Colombia, publicaciones, temas trabajados y las relaciones entre \
            ellos se pueden visualizar  gracias a esta herramienta.`,
        dates: 'Febrero 2020 - Octubre 2020 ',
        src: [

            'https://drive.google.com/uc?id=1z0rBa3jwDYQ9JuIvzkaN2Ft3FZGRzldb',
            'https://drive.google.com/uc?id=1AT2jfAoZ59fsm9gsxzPAtcRTLRxS4eS_',
            'https://drive.google.com/uc?id=10TaKl426VaX132tJyAw3AXzWid0H0e5D',
            'https://drive.google.com/uc?id=1LP5b478TljnHOXLscKWOIg9lq0_Y-r5r',
            'https://drive.google.com/uc?id=1Oh0gJWpVIrGwEj_J6jrrY9fbjaHtLoAa',
        ],
        url: 'https://horus.unal.edu.co',
        // youtube: 'https://horus.unal.edu.co',
        libraries: ['React', 'Ant design', 'FlexBox', 'BizCharts', 'Styled components', 'Redux']

    },
    {
        title: 'Proyecto Telemedicina UN',
        description: `
        Sistema de información del hospital  universitario para el seguimiento de pacientes que requieren cuidados intensivos en regiones que no cuentan
        con personal médico capacitado para el manejo de las UCI, además el sistema permite a través de chat y videollamada (WebRTC) al personal médico de Bogota 
        dar asesoría a los demás profesionales de la salud no capacitados.
        El sistema cuenta con una serie de roles como administrador, médico telecentro, médico telenodo, administrador de hospital y EPS.`,
        dates: 'Agosto 2020 - Octubre 2020 ',
        src: [
            'https://drive.google.com/uc?id=1KRyJjVdIgkEOqVXCKPgAQm5ggMlJ9f9R',
            'https://drive.google.com/uc?id=1osHD6jXzGxHz14aROVQjUZbABv7v7UxF',
            'https://drive.google.com/uc?id=1Ux_xo8YMg01CE3Ipt_RSJvHV80CgkwT4',
        ],
        libraries: ['React TS', 'Ant design', 'FlexBox', 'ant charts', 'Styled components', 'Redux', 'WebRTC', 'Nestjs', 'MongoDB']

    },
    {
        title: 'Sistema de reportes',
        description: `
            El sistema de reportes desarrollada para la empresa Gusing permite llevar un control con formularios dinamicos para la creacion de reportes
            de emvase de distintos productos, el sistema tiene un manejo de roles y usuarios, tambien cuenta con la posibilidad de 
            sacar backup dinamicos desde la interfaz grafica.
        `,
        dates: 'Enero 2019 - septiembre 2019',
        src: [
            'https://drive.google.com/uc?id=1Y3NpM83vo7W4jdleyZy8jxhEagww08CH',
            'https://drive.google.com/uc?id=10D3Wc3KOlNiizLMzqDNAtMRZGBEbXSMN',
            'https://drive.google.com/uc?id=15h2add2CfHq6_pGUyIOISXirZvSWOrWh',
            'https://drive.google.com/uc?id=1Oi0hCA4Sub2W4cXjz-ZXfyPRmgebjtCq',
        ],
        libraries: ['React', 'bulma', 'FlexBox', 'PostgreSQL', 'Ruby On Rails']

    },
    {
        title: 'SIA Dashboard',
        description: `
        El objetivo de la aplicación es poder calcular de manera dinámica los promedios usados en la universidad tales como el PAPA, PA y PAPPI, la página 
        tiene la capacidad de hacer el resumen de la historia académica de cada estudiante de la universidad siempre y cuando el estudiante de los datos,
        la pagina guarda la información en el navegador para asegurar la persistencia de los datos.
        `,
        dates: 'Marzo 2019 - Febrero 2020',
        src: [
            'https://drive.google.com/uc?id=11F97F0AzPun8R2pkH2xrjlnAkT_oCVyz',
            'https://drive.google.com/uc?id=1knKUr2QoLPGLHL5xo2e_5mC7DLqGrbum',
            'https://drive.google.com/uc?id=1IKdRhKZYtbfPZXG4CTuyqb-n5lamDuka',
            'https://drive.google.com/uc?id=1Q4uxxHht4f-KG5lZakuG7h6OdOAnRT4m',
        ],
        youtube: 'https://www.youtube.com/watch?v=wTrKv_X4d0A',
        url: 'https://nicolasprr.github.io/DashBoardSIA/',
        repo: 'https://github.com/NicolasPrr/DashBoardSIA',
        libraries: ['React', 'Ant design', 'Redux', 'BizCharts']


    },
]

export type iconTypes = 'university' | 'job' | 'finish' | 'airplane' | 'prize' | 'certificate'

export interface ItemTime {
    type: iconTypes
    text: string,
}
export const timeList: ItemTime[] = [
    {
        type: "university",
        text: `2014/08 - Inicio pregrado Universidad Nacional`
    },
    {
        type: "prize",
        text: `2017/10 - IronHacks Purdue`

    },
    {
        type: "job",
        text: `2019/01 - Inicio proyecto de sistema de reportes`
    },
    {
        type: "finish",
        text: `2019/09 - Finalizacion del proyecto del sistema de reportes`
    },
    {
        type: "job",
        text: `2020/02 - Estudiante auxiliar para la plataforma HORUS`

    },
    {
        type: "finish",
        text: `2020/08 - Finalizacion del contrato de la plataforma HORUS`

    },
    {
        type: "job",
        text: `2020/08 - Contratacion estudiante auxiliar Para teleUCI`

    },
    {
        type: "finish",
        text: `2020/10 - Finalizacion del contrato  de la plataforma teleUCI`

    },
    {
        type: "certificate",
        text: `2020/10 - Finalizacion estudios de pregrado`
    },
]
export const languageList: TLanguage[] = [
    {
        name: 'Ruby',
        experience: '6 meses',
        frameworks: ['Ruby On Rails', 'Laravel'],

    },
    {
        name: 'Javascript',
        frameworks: ['React.js', 'React Native', 'Express'],
        experience: '2 anos',
    },
    {
        name: 'Typescript',
        frameworks: ['Nest.js', 'React'],
        experience: '6 meses',
    },
    {
        name: 'Databases',
        frameworks: ['MySQL', 'MongoDB'],
        experience: '2 años',
    },
    {
        name: 'Python',
        frameworks: ['Tensorflow', 'Keras'],
        experience: '2 años',
    },
    {
        name: 'VBA',
        frameworks: ['Macros excel'],
        experience: '1 año ',
    },
]