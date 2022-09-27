import 'dotenv/config';
import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import { AsyncRouter, database, errorHandler, logger } from '@astlaure/obsidian-common';
import { adminStatic } from '../admin/admin.static';
import { adminRouter } from '../admin/admin.router';
import { pageRouter } from '../pages/page.router';
import { websiteStatic } from '../websites/website.static';
import { websiteRouter } from '../websites/website.router';

export class Application {
  app = express();
  middlewares: RequestHandler[] = []; // todo use priority queue
  routers: AsyncRouter[] = [];

  configure() {
    // middlewares
    this.app.use(bodyParser.json());

    // custom middleware
    this.middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });

    // administration
    this.app.use(adminStatic.path, adminStatic.handler);
    this.app.use(adminRouter.base, adminRouter.router);

    // api
    this.app.use(pageRouter.base, pageRouter.router);

    //custom router
    this.routers.forEach((router) => {
      this.app.use(router.base, router.router);
    });

    // website
    this.app.use(websiteStatic.path, websiteStatic.handler);
    this.app.use(websiteRouter.base, websiteRouter.router);

    this.app.use(errorHandler);
  }

  async start() {
    this.configure();

    try {
      await database.sync({ force: false, alter: { drop: false } });
      this.app.listen(process.env.APP_PORT, () => logger.info('server started'));
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  }
}
