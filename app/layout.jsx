import { Footer, Layout, Navbar, LastUpdated } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import './globals.css';

const config = {
  name: 'RádioBS',
  version: '5.2.3',
  repDocs: 'https://github.com/brenosolutions/radiobs-docs/tree/main'
};

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

  title: {
    template: '%s - ' + config.name
  }
};

const navbar = (
  <Navbar
    logo={
      <span>
        <b>{config.name}</b> - v{config.version}
      </span>
    }
    // ... Your additional navbar options
  />
);

const footer = (
  <Footer>
    <span>
      © Documentação {config.name} | Desenvolvido por{' '}
      <b>
        <a href={`https://www.lugsoft.com.br`} target="_blank" rel="noopener" className="font-bold">
          Lugosft
        </a>
      </b>
    </span>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="pt"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head

      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase={config.repDocs}
          editLink="Editar Página"
          feedback={{ content: null }}
          toc={{ title: 'SEÇÕES DA PÁGINA', backToTop: 'Voltar ao topo' }}
          lastUpdated={<LastUpdated locale="pt-BR">Última atualização em</LastUpdated>}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
