// Resource example - Project files
// const PROJECT_DIR = './project';

// server.resource(
//   "project-files",
//   new ResourceTemplate("file:///project/{filename}", {
//     list: async () => {
//       try {
//         await fs.mkdir(PROJECT_DIR, { recursive: true });
//         const files = await fs.readdir(PROJECT_DIR);
//         return files.map(file => ({
//           uri: `file:///project/${file}`,
//           name: file,
//           mimeType: 'text/plain'
//         }));
//       } catch (error) {
//         console.error(`Error listing project files: ${error}`);
//         return [];
//       }
//     }
//   }),
//   async (uri, { filename }) => {
//     const filePath = path.join(PROJECT_DIR, filename);

//     // Security validation
//     if (!filePath.startsWith(PROJECT_DIR) || path.relative(PROJECT_DIR, filePath).startsWith('..')) {
//       throw new Error("Access denied");
//     }

//     try {
//       const fileContents = await fs.readFile(filePath, 'utf-8');
//       return {
//         contents: [{
//           uri: uri.href,
//           mimeType: "text/plain",
//           text: fileContents
//         }]
//       };
//     } catch (error: any) {
//       throw new Error(`Error reading file: ${error.message}`);
//     }
//   }
// );
