import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Soni Films —  Bringing Stories to Life' },
      { name: 'description', content: 'Soni Films is a premium creative production house based in Delhi, India. Specializing in Music Videos, Short Films, Commercials, Brand Films, Web Series, Fashion Shoots, and Digital Campaigns.' },
      { name: 'keywords', content: 'Soni Films, , Film Production Delhi, Music Video Production, Cinematographer India, DOP Delhi, Brand Films, Web Series Production' },
      { property: 'og:title', content: 'Soni Films —  Bringing Stories to Life' },
      { property: 'og:description', content: 'Premium creative production house based in Delhi, India.' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#0a0a0a' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
