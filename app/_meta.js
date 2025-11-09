export default {
  '*': {
    theme: {
      copyPage: false
    }
  },

  '-- intro': {
    type: 'separator',
    title: 'Começando'
  },

  index: {
    title: 'Introdução'
  },

  installation: 'Instalação',

  '-- user': {
    type: 'separator',
    title: 'Guia do Usuário'
  },

  using: {
    title: 'Utilizando'
  },

  '-- reseller': {
    type: 'separator',
    title: 'Revendedor & Cliente'
  },
  tools: 'Ferramentas / Utilitários',
  license: 'Chave de Licença',
  troubleshooting: 'Solução de Problemas',

  support: {
    title: 'Suporte',
    type: 'page',
    href: 'https://www.lugsoft.com.br/central/submitticket.php'
  },

  changelog: {
    title: 'Changelog',
    type: 'page',
    theme: {
      layout: 'full',
      toc: false,
      copyPage: false
    }
  }
};
