import { define } from "../utils.ts";

const SITE_URL = "https://rctoa.dev";
const SITE_NAME = "Roberto Toalongo";
const TITLE = "Roberto Toalongo — Desarrollador de Software";
const DESCRIPTION =
  "Soy Roberto Toalongo, desarrollador de software con 6 años de experiencia. Comparto mis proyectos, notas sobre desarrollo web y formas de contactarme.";

export default define.page((ctx) => {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL + ctx.url.pathname} />
        <meta name="author" content="Roberto Toalongo" />
        <meta name="theme-color" content="#282828" />
        <meta name="view-transition" content="same-origin" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL + ctx.url.pathname} />
        <meta
          property="og:image"
          content={`${SITE_URL}/favicon/android-icon-192x192.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <script
          type="application/ld+json"
          // deno-lint-ignore react-no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Roberto Toalongo",
              url: SITE_URL,
              jobTitle: "Desarrollador de Software",
              sameAs: [
                "https://github.com/rctoa",
                "https://www.linkedin.com/in/roberto-toalongo-galabay-1836471b5",
              ],
            }),
          }}
        />
      </head>
      <body class="bg-gruvbox w-full min-h-screen flex flex-col text-gray-900 antialiased dark:bg-gruvbox-dark dark:text-gray-100">
        <ctx.Component />
      </body>
    </html>
  );
});
