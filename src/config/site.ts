// General config

import { Metadata } from 'next'

export type RouteVisibility = 'public' | 'protected'

export type Contributor = {
  user: string
  href: string
}

export const mainContributors = [
  {
    user: 'caieradev',
    href: 'https://github.com/caieradev',
  },
  {
    user: 'lorenzoa7',
    href: 'https://github.com/lorenzoa7',
  },
  {
    user: 'arthuroli29',
    href: 'https://github.com/arthuroli29',
  },
  {
    user: 'GuiAguirres',
    href: 'https://github.com/GuiAguirres',
  },
  {
    user: 'luilencina',
    href: 'https://github.com/luilencina',
  },
  {
    user: 'gbombassaro',
    href: 'https://github.com/gbombassaro',
  },
  {
    user: 'caiocesarbrito',
    href: 'https://github.com/caiocesarbrito',
  },
] satisfies Contributor[]

export const siteMetadata: Metadata = {
  title: 'Abrigos RS',
  description:
    'Aplicativo para ajudar na procura e gerenciamento de abrigos no Rio Grande do Sul.',
  keywords:
    'rio grande do sul, desastre, abrigo, tragedia, resgate, resgaters, abrigors, abrigosrs, abrigos, rs, ajuda, aplicativo, site',
  authors: [
    { name: 'ResgateRS', url: 'https://www.instagram.com/resgaters.app.br' },
    ...mainContributors.map((contributor) => ({
      name: contributor.user,
      url: contributor.href,
    })),
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://abrigosrs.app.br',
    title: 'Abrigos RS',
    description:
      'Aplicativo para ajudar na procura e gerenciamento de abrigos no Rio Grande do Sul.',
    siteName: 'Abrigos RS',
  },
}

export const organizationHref = 'https://github.com/ResgateRS'

export const whatsappHref =
  'https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20solicitar%20um%20cadastro!'

// Site routes

export const prefixSiteRoutes = {
  protected: '/app',
  public: '',
} as const satisfies Record<RouteVisibility, string>

export const siteRoutes = {
  public: {
    landingPage: `${prefixSiteRoutes.public}/`,
    login: `${prefixSiteRoutes.public}/login`,
    donations: `${prefixSiteRoutes.public}/doacoes`,
    volunteers: `${prefixSiteRoutes.public}/voluntarios`,
  },
  protected: {
    families: `${prefixSiteRoutes.protected}/familias`,
    registerFamily: `${prefixSiteRoutes.protected}/registrar-familia`,
    registerNeeds: `${prefixSiteRoutes.protected}/registrar-necessidades`,
  },
} as const satisfies Record<RouteVisibility, Record<string, string>>
