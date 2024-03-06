const fs = require('fs/promises');

async function generateProject() {
  fs.mkdir('./src/pages').catch(() => console.log('Pages already exists'));
  const pageNames = await Promise.all(new Array(3).fill('').map(() => generatePage()));
  let routerData = await fs.readFile('./templates/router.tsx', 'utf8');
  pageNames.forEach((page, index) => {
    routerData = routerData.replaceAll('PageDETECTID' + index, page);
  });
  await fs.writeFile('./src/pages/router.tsx', routerData, 'utf8');
}
generateProject();

async function generatePage() {
  const pageId = Math.random().toString(16).substring(2, 14);
  const pageName = `Page${pageId}`;
  const pagePath = `./src/pages/${pageName}`;
  await fs.mkdir(pagePath);
  const parentNames = await Promise.all(
    new Array(10).fill('').map(() => generateParentComponent(pagePath)),
  );
  let pageData = await fs.readFile(`./templates/page/Page.tsx`, 'utf8');
  parentNames.forEach((parent, index) => {
    pageData = pageData.replaceAll(`ChildDETECTID${index}`, parent);
  });

  await fs.writeFile(`${pagePath}/index.tsx`, pageData, 'utf8');
  return pageName;
}

async function generateParentComponent(path) {
  const parentId = Math.random().toString(16).substring(2, 14);
  const parentPath = `${path}/Parent${parentId}`;
  const parentName = `Parent${parentId}`;
  await fs.mkdir(parentPath);
  const childNames = await Promise.all(
    new Array(10).fill('').map(() => generateChildComponent(parentPath)),
  );
  let parentData = await fs.readFile(`./templates/parent/Parent.tsx`, 'utf8');
  parentData = parentData.replace('ParentDETECTNAME', parentName);
  childNames.forEach((childName, index) => {
    parentData = parentData.replaceAll(`ChildDETECTID${index}`, childName);
  });

  await fs.writeFile(`${parentPath}/${parentName}.tsx`, parentData, 'utf8');
  return parentName;
}

async function generateChildComponent(path) {
  const nameId = Math.random().toString(16).substring(2, 14);
  const childPath = `${path}/Child${nameId}`;
  await fs.mkdir(childPath);
  const childData = await fs.readFile(`./templates/child/Child.tsx`, 'utf8');
  const newName = `Child${nameId}`;
  const newChild = childData.replace('ChildDETECTNAME', newName);

  const stylesData = await fs.readFile(`./templates/child/styles.module.css`, 'utf8');
  const newStyles = stylesData
  .replace('50', Math.ceil(Math.random() * 100).toString())
  .replace('aaaaaa', Math.random().toString(16).substring(2, 8));

  const providerData = await fs.readFile(`./templates/child/provider.ts`, 'utf8');
  const newProvider = providerData.replace('shit', Math.random().toString(16).substring(2, 14));

  await fs.writeFile(`${childPath}/${newName}.tsx`, newChild, 'utf8');
  await fs.writeFile(`${childPath}/styles.module.css`, newStyles, 'utf8');
  await fs.writeFile(`${childPath}/provider.ts`, newProvider, 'utf8');

  return newName;
}

// 2-5 страниц
// Страница:
// 1 root routing tsx
// 10 Parent components -> 10 Child components
// Children Component -> forms/buttons/handlers/states/hooks
// Component: style/ts logic/
