import * as Yup from 'yup';

export const createPageSchema = Yup.object({
  title: Yup.string().defined(),
  url: Yup.string().defined(),
  published: Yup.boolean(),
  language: Yup.string().defined(),
  template: Yup.string().defined(),
});

export interface CreatePageDto extends Yup.InferType<typeof createPageSchema> {}
