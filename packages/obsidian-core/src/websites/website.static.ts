import { StaticMiddleware } from '@astlaure/obsidian-common';
import express from 'express';

export const websiteStatic = new StaticMiddleware(
  '/static',
  express.static('public', { index: false }),
);
