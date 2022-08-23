// exports.onCreatePage = ({ page, actions }, themeOptions) => {
//   const { createPage, deletePage } = actions;
//   const { configPath, defaultLang, locales } = withDefaults(themeOptions);
//   // Check if originalPath was already set and bail early as otherwise an infinite loop could occur
//   // as other plugins like gatsby-plugin-mdx could modify this
//   if (page.context.originalPath) {
//     return;
//   }
//   const originalPath = page.path;

//   deletePage(page);

//   const configLocales = require(configPath);

//   const languages = getLanguages(defaultLang, configLocales, locales);

//   languages.forEach((locale) => {
//     const newPage = {
//       ...page,
//       path: localizedPath(defaultLang, locale.code, page.path),
//       matchPath: page.matchPath
//         ? localizedPath(defaultLang, locale.code, page.matchPath)
//         : page.matchPath,
//       context: {
//         ...page.context,
//         locale: locale.code,
//         hrefLang: locale.hrefLang,
//         originalPath,
//         dateFormat: locale.dateFormat,
//       },
//     };

//     // Check if the page is a localized 404
//     if (newPage.path.match(/^\/[a-z]{2}\/404\/$/)) {
//       // Match all paths starting with this code (apart from other valid paths)
//       newPage.matchPath = `/${locale.code}/*`;
//     }

//     createPage(newPage);
//   });
// };

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
