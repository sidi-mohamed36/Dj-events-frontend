import Layout from '@/components/Layout'

import Link from 'next/link'
export default function AboutPage() {
  return (
    <Layout title='About Dj Events'>
    <div><h1>About</h1>
    <p>this is an app to find the latest Dj and other musical events </p>
    <p>Version: 1.0.0</p>
    <Link href='/'>Home</Link>
    </div>
    </Layout>
  )
}
