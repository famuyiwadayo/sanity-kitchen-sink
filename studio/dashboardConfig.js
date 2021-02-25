export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6037b86a2f9aa12d2e2a5343',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1oajgyk5',
                  apiId: 'a65cb358-1340-4be5-8326-dde37a88bb72'
                },
                {
                  buildHookId: '6037b86b1eb3512a73607255',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gbe66oqi',
                  apiId: 'c63a48df-02f8-4655-8b6c-858227810da3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/famuyiwadayo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gbe66oqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
