import nunjucks from 'nunjucks';
import { AsyncRouter } from '@astlaure/obsidian-common';
import { pageUtil } from '../pages/page.util';

export const websiteRouter = new AsyncRouter();

const webEnv = nunjucks.configure('views', {
  autoescape: true,
  watch: true,
});

websiteRouter.get('*', async (req, res) => {
  const page = await pageUtil.fetchPageByUrl(req.url);

  if (!page) {
    return res.send(webEnv.render('404.njk', res.locals));
  }

  return res.send(webEnv.render(page.template, res.locals));
});
