import Link from 'next/link'
import classes from './page1.module.css'

export default function Page() {
  return (
    <>
      <h1 className={classes.box}>Page 1</h1>
      <Link href="/css-modules/page2">Page 2</Link>
    </>
  )
}
