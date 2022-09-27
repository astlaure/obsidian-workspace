import { AsyncRouter } from '@astlaure/obsidian-common';
import nunjucks from 'nunjucks';
import path from 'path';

export const adminRouter = new AsyncRouter('/obsidian-admin');

const base = path.dirname(require.resolve('@astlaure/obsidian-core/package.json'));
const adminEnv = nunjucks.configure(`${base}/views`, {
  autoescape: true,
  watch: true,
});

adminRouter.get('*', (req, res) => {
  res.locals.basename = 'obsidian-admin';
  return res.send(adminEnv.render('admin.njk', res.locals));
});
