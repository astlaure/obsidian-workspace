import { StaticMiddleware } from '@astlaure/obsidian-common';
import express from 'express';
import path from 'path';

const base = path.dirname(require.resolve('@astlaure/obsidian-admin/package.json'));

export const adminStatic = new StaticMiddleware(
  '/obsidian-admin/static',
  express.static(`${base}/dist`, { index: false }),
)
