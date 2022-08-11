import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = (props: { timerMs: number }) => {
  const { timerMs } = props;
    
    const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [router])
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;