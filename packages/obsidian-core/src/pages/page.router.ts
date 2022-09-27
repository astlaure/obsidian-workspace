import { AsyncRouter } from '@astlaure/obsidian-common';
import { pageUtil } from './page.util';
import { createPageSchema } from './schemas/create-page.schema';

export const pageRouter = new AsyncRouter('/api/v1/pages');

pageRouter.get('/', async (req, res) => {
  const pages = await pageUtil.fetchAll();
  return res.json(pages);
});

pageRouter.post('/', async (req, res) => {
  const createPageDto = await createPageSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  const pages = await pageUtil.createPage(createPageDto);
  return res.json(pages);
});
