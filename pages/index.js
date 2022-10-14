import Grid from '../components/Grid'
import { client } from '../utils/client'
import Layout from '../components/Layout'

export default function Home({ plants }) {
  return (
    <Layout>
      <Grid props={plants} />
    </Layout>
  )
}

export async function getStaticProps() {
  const plants = await client.fetch(`*[_type == "plants"] {
    ...,
    "slug": slug.current,
  }`)

  return {
    props: {
      plants,
    },
  }
}
