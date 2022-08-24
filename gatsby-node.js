// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const result = await graphql(`
//     query {
//       themeI18N {
//         defaultLang
//       }
//     }
//   `);

//   createPage({
//     path: `/${result.data.themeI18N.defaultLang}/`,
//     component: require.resolve("./src/templates/index.js"),
//     context: {
//       slug: `/${result.data.themeI18N.defaultLang}/`,
//     },
//   });
// };
