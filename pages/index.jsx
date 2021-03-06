/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Browser from '../src/components/browser'
import dynamic from 'next/dynamic'

// const BrowserComponent = dynamic(() => import('../src/components/browser'), {ssr: false})

const Page = ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
    {/* <BrowserComponent /> */}
  </div> 
)

export default Page

export function getStaticProps() {
  // get data from CMS

  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  }
}