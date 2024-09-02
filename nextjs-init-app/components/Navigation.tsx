import { endpoint } from '@utils/endpoint'

import Link from 'next/link'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="Family Guy" width={70} height={50} />
        </Link>
        <Link href={`${endpoint}`}>{'All Characters'}</Link>
      </div>
    </div>
  )
}
