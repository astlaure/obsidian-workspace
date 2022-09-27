import { NotFoundError } from '@astlaure/obsidian-common';
import { Page } from './page.model';
import { CreatePageDto } from './schemas/create-page.schema';

class PageUtil {
  async fetchAll() {
    return Page.findAll();
  }

  async fetchPageByUrl(url: string) {
    if (url.startsWith('/api')) {
      throw new NotFoundError();
    }

    return Page.findOne({ where: { url } });
  }

  async createPage(createPageDto: CreatePageDto) {
    return Page.create(createPageDto);
  }
}

export const pageUtil = new PageUtil();
