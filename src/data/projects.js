import easybank from '../images/projects/easybank.png'
import socialDashboard from '../images/projects/social-dashboard.png'
import netfilx from '../images/projects/netfilx.png'
import portfolio from '../images/projects/portfolio.png'
import youtube from '../images/projects/youtube.png'
import mytank from '../images/projects/mytank.png'
import coders from '../images/projects/coders.png'

export const projects = [
    {
        image: mytank,
        title: 'Mi tanque',
        description:
            'Esta aplicación  permite conocer el nivel de combustible que tiene un tanque de forma cilíndrica a partir de su diámetro y longitud',
        urlOfSite: 'https://mi-tanque.vercel.app/tanques',
        urlOfCode: 'https://github.com/cgarayaguilar/mi-tanque',
        category: 'react',
        labels: ['indexeddb', 'react', 'javascript'],
    },
    {
        image: coders,
        title: 'Github users',
        description:
            'Esta aplicación permite buscar usuarios registrados en github y mostrar su detalle y lista de repositorios.',
        urlOfSite: 'https://github-users-one.vercel.app/',
        urlOfCode: 'https://github.com/cgarayaguilar/github-users',
        category: 'react',
        labels: ['api rest', 'react', 'javascript'],
    },
    {
        image: portfolio,
        title: 'Galería de imágenes',
        description:
            'Galería de imágenes estilo portafolio con ventanas emergentes, categorías dinámicas y barra de búsqueda. ',
        urlOfSite: 'https://cgarayaguilar.github.io/portafolio-dinamico/',
        urlOfCode: 'https://github.com/cgarayaguilar/portafolio-dinamico',
        category: 'html',
        labels: ['portfolio', 'html', 'javascript'],
    },
    {
        image: easybank,
        title: 'Easybank landing page',
        description:
            'Este proyecto es un reto de la página frontend mentor, esta landing page, fue creada usando React js y styled components.',
        urlOfSite: 'https://easybank-landing-page-opal.vercel.app/',
        urlOfCode: 'https://github.com/cgarayaguilar/easybank-landing-page',
        category: 'react',
        labels: ['landing page', 'react'],
    },
    {
        image: socialDashboard,
        title: 'Social media dashboard',
        description:
            'Dashboard de redes sociales con un interruptor para cambiar el tema a modo nocturno, este proyecto fue creado con React js y styled components.',
        urlOfSite: 'https://social-media-dashboard-alpha-eight.vercel.app/',
        urlOfCode: 'https://github.com/cgarayaguilar/social-media-dashboard',
        category: 'react',
        labels: ['dashboard', 'react', 'social'],
    },
    {
        image: netfilx,
        title: 'Netflix home page',
        description:
            'Pagina web estilo netflix con HTML y CSS usando Flexbox y Responsive Design.',
        urlOfSite: 'https://cgarayaguilar.github.io/netflix-principal/',
        urlOfCode: 'https://github.com/cgarayaguilar/netflix-principal',
        category: 'html',
        labels: ['dashboard', 'html', 'netflix'],
    },
    {
        image: youtube,
        title: 'Youtube home page',
        description:
            'Clon de pagina principal de youtube utilizando HTML, CSS, Flexbox, CSS Grid y Javascript.',
        urlOfSite: 'https://cgarayaguilar.github.io/youtube-principal/',
        urlOfCode: 'https://github.com/cgarayaguilar/youtube-principal',
        category: 'html',
        labels: ['youtube', 'html', 'javascript'],
    },
]
