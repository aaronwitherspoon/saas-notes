/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import notes from '../../src/data/data'

const Page = ({note}) => {
  const router = useRouter()

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default Page;

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)

  if (!response.ok) {

    res.writeHead(302, {
      Location: '/notes'
    })
    res.end()

    return {
      props: {}
    }
  }

  const {data} = await response.json()

  return {
    props: {note: data}
  }

}
