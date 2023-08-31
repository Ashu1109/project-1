import Image from 'next/image'
import img from '../../public/pngwing.com.png'
import Link from 'next/link'
export default function Home() {
  return (<>
    <main className=" bg-indigo-100 flex flex-col min-h-screen justify-start  items-center">
      <p className=" mt-12 text-3xl">WELCOME</p>
      <p className="mt-2 text-lg">To</p>
      <p className=" mb-20 mt-2 text-xl">My First Project</p>
      <Image className=' animate-bounce' src={img} alt="Hi" height="300" width="300" />
      <Link href={'/signup'} className='text-xl'>Click To Signup First</Link>
    </main>

    </>
  )
}
