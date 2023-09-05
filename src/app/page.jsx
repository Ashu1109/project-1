import Image from 'next/image'
import img from '../../public/pngwing.com.png'
import Link from 'next/link'
export default function Home() {
  return (<>
    <main id='mainpage' className=" bg-indigo-100 flex flex-col h-[92vh] justify-start  items-center">
      <p className=" mt-12 text-3xl">WELCOME</p>
      <p className="mt-2 text-xl">To</p>
      <p className=" mb-20 mt-2 text-2xl">My First Project</p>
      <Image className=' animate-bounce' src={img} alt="Hi" height="400" width="400" />
      <Link href={'/signup'} className='text-2xl mt-4'>Click To Signup First</Link>
    </main>

    </>
  )
}
