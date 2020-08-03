const startups = {
    MICHROMA: {
        name: "MICHROMA",
        url: "https://michroma.co/",
        color: "rose"
    },
    FEEDVAX: {
        name: "FEEDVAX",
        url: "https://www.feedvax.com/",
        color: "warning"
    },
    MICROGENESIS: {
        name: "MICROGÉNESIS",
        url: null,
        color: "success"
    },
    TOMORROW_FOODS: {
        name: "TOMORROW FOODS",
        url: "https://tomorrowfoods.com.ar/",
        color: "info"
    },
    GRIDX: {
        name: "GRIDX",
        url: "https://gridexponential.com/",
        color: "rose"
    },
    STAMM: {
        name: "STÄMM",
        url: "http://www.stamm.bio/",
        color: "warning"
    },
    BEEFLOW: {
        name: "BEEFLOW",
        url: "https://www.beeflow.com/",
        color: "success"
    },
    BITGENIA: {
        name: "BITGENIA",
        url: "https://www.bitgenia.com/",
        color: "info"
    },
    ALYTIX: {
        name: "ALYTIX",
        url: "http://alytixbiotech.com/",
        color: "rose"
    },
    APLIFE: {
        name: "APLIFE",
        url: "https://www.aplifebiotech.com/",
        color: "warning"
    },
    ZEV_BIOTECH: {
        name: "ZEV BIOTECH",
        url: "http://zevbiotech.com/",
        color: "success"
    },
    CASPR: {
        name: "CASPR",
        url: "https://caspr.bio/",
        color: "info"
    },
    ALGAEBIO: {
        name: "ALGAEBIO+",
        url: "http://algaebiomas.com/",
        color: "rose"
    },
    CELL_FARM: {
        name: "CELL FARM",
        url: "https://cellfarmfoodtech.com/",
        color: "warning"
    },
    MZP: {
        name: "MZP",
        url: "http://www.mzptec.com/",
        color: "success"
    },
    FECUNDIS: {
        name: "FECUNDIS",
        url: "https://www.terrafecundis.com/",
        color: "info"
    },
    SYOCIN: {
        name: "SYOCIN",
        url: "http://syocin.com/",
        color: "rose"
    },
    HIAMET: {
        name: "HIAMET",
        url: "https://www.hiamet.com/",
        color: "warning"
    },
    EINSTED: {
        name: "EINSTED",
        url: null,
        color: "success"
    },
    CRYOSMETICS: {
        name: "CRYOSMETICS",
        url: "https://www.cryosmetics.com/",
        color: "info"
    },
    ENTERIA: {
        name: "ENTERIA",
        url: null,
        color: "rose"
    }
}

const media = {
    bioemprendiendo: {
        name: "bioemprendiendo",
        image: "https://pbs.twimg.com/profile_images/1191401273616039937/1WxJPgVA.jpg"
    },
    innovacion: {
        name: "WOW Innovación - Telefé",
        image: "data:image/png;base64,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"
    },
    salmon: {
        name: "Salmon Expert",
        image: "https://d178ivhysawugh.cloudfront.net/media/l/920x561/1519467146/logo-sv-web.jpg"
    },
    radioAndina: {
        name: "Radio Andina",
        image: "data:image/png;base64,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"
    },
    uniCuyo: {
        name: "UC Cuyo",
        image: "https://www.uccuyo.edu.ar/images/fixed/san-juan.png"
    },
    laNacion: {
        name: "La Nación",
        image: "https://media-exp1.licdn.com/dms/image/C4E0BAQF65eofEn7W_A/company-logo_200_200/0?e=2159024400&v=beta&t=Kz1n3spP2gTA6KdeIhp3PkUCRXJ-WRz1xGT-nMX2GYM"
    },
    clarin: {
        name: "Clarín",
        image: "https://www.clarin.com/static/CLAClarin/images/Clarin-sahreing-fbk.jpg"
    },
    medium: {
        name: "Medium",
        image: "https://cdn-images-1.medium.com/max/1200/1*6_fgYnisCa9V21mymySIvA.png"
    },
    foodNavigator: {
        name: "Food Navigator",
        image: "https://pbs.twimg.com/profile_images/997052533037248512/f8Bss2mO.jpg"
    },
    synbiobeta: {
        name: "Synbiobeta",
        image: "https://media-exp1.licdn.com/dms/image/C4E0BAQHvlTY4wW_ADA/company-logo_200_200/0?e=2159024400&v=beta&t=PDH9FAcLPsgimBSADhdQqdvgWvq63f31gOD68gty4b0"
    },
    pymes: {
        name: "Revista Pymes",
        image: "data:image/png;base64,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"
    },
    theSpoon: {
        name: "The Spoon",
        image: "https://i2.wp.com/thespoon.tech/wp-content/uploads/2019/11/TheSpoon_tech.png?fit=1024%2C1024&ssl=1"
    },
    contxto: {
        name: "Contxto",
        image: "https://www.contxto.com/wp-content/uploads/2019/04/272X90-03.png"
    },
    bcr: {
        name: "BCR News",
        image: "https://media-exp1.licdn.com/dms/image/C4D0BAQEJ29VAUiLTHQ/company-logo_200_200/0?e=2159024400&v=beta&t=YPIgznzm6kcjqDyEugPGFBgSjrpkoUZoY45ToTVlSfM"
    },
    aperturaNegocios: {
        name: "Apertura Negocios",
        image: "https://www.cronista.com/arte/v2/verticales/ap_negocios_header.svg"
    },
    agrofy: {
        name: "Agrefy News",
        image: "https://pbs.twimg.com/profile_images/1235569225588240384/Q8T_y6zA_400x400.jpg"
    },
    argentina: {
        name: "Argentina.gob.ar",
        image: "https://media-exp1.licdn.com/dms/image/C4E0BAQFqOs_7VD1XOg/company-logo_200_200/0?e=2159024400&v=beta&t=zPzO5a4DgKNk8QCANnCir2_IvbVHM7RLdeskbng1gxU"
    }
}

const press = [
    {
        id: 1,
        people: ["Ricardo Cassini", "Mauricio Braia"],
        startups: [startups.MICHROMA],
        media: media.bioemprendiendo,
        author: "Hector Garza Avelar",
        name: "Emprende para innovar, emprende con ganas con Ricky Cassini y Mauricio Braia de Michroma",
        date: new Date("06/07/2020"),
        link: "https://anchor.fm/bioemprendiendo/episodes/025---Emprende-para-innovar--emprende-con-ganas-con-Ricky-Cassini-y-Mauricio-Braia-de-Michroma-eel192/a-a2ah0pq",
        lang: "spanish"
    },
    {
        id: 2,
        people: ["Ricardo Cassini", "Mauricio Braia"],
        startups: [startups.MICHROMA],
        media: media.innovacion,
        author: "Antonela Losada",
        name: "Michroma | Wow Innovación - Micro 102",
        date: new Date("05/14/2020"),
        link: "https://www.youtube.com/watch?v=dZRQ4CNvgPw",
        isVideo: true,
        lang: "spanish"
    }, {
        id: 3,
        people: ["Ricardo Cassini", "Mauricio Braia"],
        startups: [startups.MICHROMA],
        media: media.salmon,
        author: "Daniella Balin",
        name: "Desarrollan colorante natural que podrá ser incluido en dietas de salmónidos",
        date: new Date("05/05/2020"),
        link: "https://www.salmonexpert.cl/article/desarrollan-colorante-natural-en-base-a-hongos-para-ser-incluido-en-dietas-de-salmnidos/",
        lang: "spanish"
    },
    {
        id: 4,
        people: ["Ricardo Cassini"],
        startups: [startups.MICHROMA],
        media: media.radioAndina,
        author: null,
        name: "Todo por la Tarde - Ricky Cassini - Michroma",
        date: new Date("04/16/2020"),
        link: "https://soundcloud.com/mediosandinosmza/todo-por-la-tarde-ricky-cassini-michroma-16-04-20",
        lang: "spanish"
    },
    {
        id: 5,
        people: ["Ricardo Cassini"],
        startups: [startups.MICHROMA],
        media: media.uniCuyo,
        author: "Leandro Frías",
        name: "Webinar: Impulsan el emprendedurismo y la investigación en la UCCuyo con un encuentro virtual",
        date: new Date("03/31/2020"),
        link: "http://www.uccuyosj.edu.ar/index.php/la-universidad/institucional/noticias/1305-webinar-impulsan-el-emprendedurismo-y-la-investigacion-en-la-uccuyo-con-un-encuentro-virtual",
        lang: "spanish"
    },
    {
        id: 6,
        people: ["Luis Barletta", "Ricardo Cassini", "Gabriela Gutiérrez"],
        startups: [startups.FEEDVAX, startups.MICHROMA, startups.MICROGENESIS],
        media: media.laNacion,
        author: "Jesús Allende",
        name: "Del laboratorio a la empresa: los científicos se ponen el traje de emprendedores",
        date: new Date("02/22/2020"),
        link: "https://www.lanacion.com.ar/economia/del-laboratorio-a-la-empresa-los-cientificos-se-ponen-el-traje-de-emprendedores-nid2335674",
        lang: "spanish"
    },
    {
        id: 7,
        people: ["Gonzalo Segovia", "Ricardo Cassini"],
        startups: [startups.MICHROMA, startups.TOMORROW_FOODS],
        media: media.clarin,
        author: "Hernán Murúa",
        name: "5 startups que 'levantaron' US$ 2 millones antes de facturar un solo centavo",
        date: new Date("02/20/2020"),
        link: "https://www.clarin.com/economia/5-startups-levantaron-us-2-millones-facturar-solo-centavo_0_EsWhJ4or.html",
        lang: "spanish"
    },
    {
        id: 8,
        people: ["Ricardo Cassini"],
        startups: [startups.MICHROMA],
        media: media.medium,
        author: "Po Bronson",
        name: "Michroma: Reinventing Food Colors",
        date: new Date("02/11/2020"),
        link: "https://medium.com/indiebio-sf/michroma-reinventing-food-colors-3cc5ee99f92f",
        lang: "english"
    },
    {
        id: 9,
        people: ["Ricardo Cassini"],
        startups: [startups.MICHROMA],
        media: media.foodNavigator,
        author: "Niamh Michail",
        name: "Argentinian startup develops 'novel compounds' food colors from fungi",
        date: new Date("02/06/2020"),
        link: "https://www.foodnavigator-latam.com/Article/2020/02/06/Novel-and-natural-food-coloring-developed-from-fungi-by-Silicon-Valley-start-up",
        lang: "english"
    },
    {
        id: 10,
        people: null,
        startups: [startups.MICHROMA],
        media: media.synbiobeta,
        author: "Desiree Ho",
        name: "IndieBio’s Class Nine: Archetypes of Engineering Biology",
        date: new Date("02/06/2020"),
        link: "https://synbiobeta.com/indiebios-class-nine-archetypes-of-engineering-biology/",
        lang: "english"
    },
    {
        id: 11,
        people: ["Agustín Belloso", "Ricardo Cassini", "Matías Peire"],
        startups: [startups.MICHROMA, startups.TOMORROW_FOODS, startups.GRIDX],
        media: media.pymes,
        author: "Hernán Murúa",
        name: "Startups de las que se va a hablar en el 2020",
        date: new Date("02/01/2020"),
        link: "https://drive.google.com/open?id=1kG3zGM9alWWLIuqx0GxkRCPdP1xB9qwC",
        lang: "spanish"
    },
    {
        id: 12,
        people: ["Ricardo Cassini"],
        startups: [startups.MICHROMA],
        media: media.theSpoon,
        author: "Catherine Lamb",
        name: "Dye Another Day: Michroma Makes Sustainable Food Coloring through Fungi Fermentation",
        date: new Date("01/23/2020"),
        link: "https://thespoon.tech/dye-another-day-michroma-makes-sustainable-food-coloring-through-funghi-fermentation/",
        lang: "english"
    },
    {
        id: 13,
        people: null,
        startups: [startups.GRIDX, startups.STAMM, startups.BEEFLOW, startups.BITGENIA, startups.ALYTIX, startups.APLIFE, startups.ZEV_BIOTECH, startups.CASPR, startups.ALGAEBIO,
            startups.FEEDVAX, startups.CELL_FARM, startups.MZP, startups.MICHROMA, startups.TOMORROW_FOODS],
        media: media.contxto,
        author: "Mariana López",
        name: "14 biotechs rewriting Argentina’s startup DNA",
        date: new Date("01/15/2020"),
        link: "https://www.contxto.com/en/argentina/14-biotechs-rewriting-argentinas-startup-dna/",
        lang: "english"
    },
    {
        id: 14,
        people: null,
        startups: [startups.GRIDX, startups.STAMM, startups.BEEFLOW, startups.BITGENIA, startups.ALYTIX, startups.APLIFE, startups.ZEV_BIOTECH, startups.CASPR, startups.ALGAEBIO,
            startups.FEEDVAX, startups.CELL_FARM, startups.MZP, startups.MICHROMA, startups.TOMORROW_FOODS],
        media: media.contxto,
        author: "Mariana López",
        name: "14 biotechs rewriting Argentina’s startup DNA",
        date: new Date("01/15/2020"),
        link: "https://www.contxto.com/en/argentina/14-biotechs-rewriting-argentinas-startup-dna/",
        lang: "english"
    },
    {
        id: 15,
        people: null,
        startups: [startups.GRIDX, startups.STAMM, startups.BEEFLOW, startups.BITGENIA, startups.ALYTIX, startups.APLIFE, startups.ZEV_BIOTECH, startups.CASPR, startups.ALGAEBIO,
            startups.FEEDVAX, startups.CELL_FARM, startups.MZP, startups.MICHROMA, startups.TOMORROW_FOODS],
        media: media.contxto,
        author: "Mariana López",
        name: "14 biotechs reescribiendo el ADN de startups argentinas",
        date: new Date("01/15/2020"),
        link: "https://www.contxto.com/es/startups-es/14-biotechs-reescribiendo-adn-startups-argentino/",
        lang: "spanish"
    },
    {
        id: 16,
        people: ["Matías Peire"],
        startups: [startups.GRIDX, startups.MICHROMA, startups.FECUNDIS, startups.SYOCIN],
        media: media.bcr,
        author: null,
        name: "Llega un nuevo Workshop para emprendedores a la Bolsa de Comercio de Rosario",
        date: new Date("10/28/2019"),
        link: "https://bcrnews.com.ar/innovacion/llega-un-nuevo-workshop-para-emprendedores-a-la-bolsa-de-comercio-de-rosario/",
        lang: "spanish"
    },
    {
        id: 17,
        people: ["Arvind Gupta"],
        startups: [startups.GRIDX, startups.STAMM, startups.BEEFLOW, startups.CASPR, startups.MICHROMA],
        media: media.aperturaNegocios,
        author: "Ricardo Quesada",
        name: "El mayor fondo de biotecnología del mundo, a la caza de unicornios argentinos",
        date: new Date("10/07/2019"),
        link: "https://www.cronista.com/apertura-negocio/emprendedores/El-mayor-fondo-de-biotecnologia-del-mundo-a-la-caza-de-unicornios-argentinos-20191007-0007.html",
        lang: "spanish"
    },
    {
        id: 18,
        people: ["Matías Peire"],
        startups: [startups.GRIDX, startups.STAMM, startups.BEEFLOW, startups.BITGENIA, startups.ALYTIX, startups.ZEV_BIOTECH, startups.CASPR, startups.ALGAEBIO, startups.FEEDVAX,
            startups.CELL_FARM, startups.MZP, startups.MICHROMA, startups.TOMORROW_FOODS, startups.HIAMET],
        media: media.agrofy,
        author: "Nicolás Degano",
        name: "Biotecnología: proyectos argentinos que pueden cambiar la forma de producir",
        date: new Date("10/01/2019"),
        link: "https://news.agrofy.com.ar/noticia/183317/biotecnologia-proyectos-argentinos-que-pueden-cambiar-forma-producir",
        lang: "spanish"
    },
    {
        id: 19,
        people: null,
        startups: [startups.GRIDX, startups.MICHROMA, startups.TOMORROW_FOODS, startups.SYOCIN, startups.EINSTED, startups.MICROGENESIS, startups.CRYOSMETICS, startups.FECUNDIS,
            startups.ENTERIA, startups.HIAMET],
        media: media.argentina,
        author: null,
        name: "Proyectos de base biotecnológica de impacto global en el planetario",
        date: new Date("06/14/2019"),
        link: "https://www.argentina.gob.ar/ciencia/reuniones/planetario",
        lang: "spanish"
    },
    {
        id: 20,
        people: null,
        startups: [startups.MICHROMA],
        media: media.argentina,
        author: null,
        name: "Quince nuevos ganadores del Concurso Nacional PROESUS para emprendimientos sustentables",
        date: new Date("06/14/2019"),
        link: "https://www.argentina.gob.ar/noticias/quince-nuevos-ganadores-del-concurso-nacional-proesus-para-emprendimientos-sustentables",
        lang: "spanish"
    }];

export default press;