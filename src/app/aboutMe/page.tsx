import PageClient from './pageClient';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.TITLE_PAGE + 'Sobre mi',
  description: 'Reseña de quien es krashmello',
}

const Page = () => {
  return <PageClient />
}
export default Page
