import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.SANITY_ID,
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})