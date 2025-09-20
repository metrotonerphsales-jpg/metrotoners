// import { ProductBlock } from '@/components/product-block'
import Image from 'next/image'
import iso9001 from '@/../public/iso9001.png'
import iso14001 from '@/../public/iso14001.png'
import greenPaint1 from '@/../public/green-paint-1.png'
import greenPaint2 from '@/../public/green-paint-2.png'
import greenPaint3 from '@/../public/green-paint-3.png'
import greenPaint4 from '@/../public/green-paint-4.png'
import blueStripes1 from '@/../public/blue-stripe-1.png'
import blueStripes2 from '@/../public/blue-stripes-2.png'
import blueStripes3 from '@/../public/blue-stripes-3.png'
import client from '../../tina/__generated__/client'
import { Images } from './images'
import { ContentSection } from './content-sections'
import styles from './home.module.css'

async function getData() {
	try {
		return await client.queries.HomePage({ relativePath: 'home.md' })
	} catch (err) {
		console.error(err)
	}
}

export type HomePageData = Awaited<ReturnType<typeof client.queries.HomePage>>

export default async function Home() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	return (
		<div className={styles.home}>
			<section className="relative overflow-hidden bg-[#070D39] py-32 text-white">
				<Image
					alt=""
					src={blueStripes1}
					className="absolute top-0 left-0 min-h-full"
				/>
				<Image alt="" src={blueStripes3} className="absolute top-0 right-0" />
				<Image
					alt=""
					src={blueStripes2}
					className="absolute right-0 bottom-0"
				/>
				<div className="relative z-10 container">
					<h1 className="text-center tracking-widest">METROTONERS</h1>
					<p className="mx-auto text-center tracking-wider">
						Ink and Toner Trading
					</p>
					<div className="mt-4 flex justify-center gap-8 max-md:hidden lg:gap-12">
						<Images data={data} />
					</div>
				</div>
			</section>
			<section className="py-8">
				<div className="container grid gap-y-4 sm:gap-y-8 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-32">
					<ContentSection data={data} />
				</div>
			</section>
			<section className="relative bg-[#F4F4EC] py-16">
				<Image
					alt=""
					src={greenPaint1}
					className="absolute top-0 left-0 w-1/3 max-w-[600px] max-md:hidden"
				/>
				<Image
					alt=""
					src={greenPaint2}
					className="absolute bottom-0 left-0 max-w-[600px] max-lg:w-1/4 max-md:hidden"
				/>
				<Image
					alt=""
					src={greenPaint3}
					className="absolute top-0 right-0 w-1/3 max-w-[650px] max-md:hidden"
				/>
				<Image
					alt=""
					src={greenPaint4}
					className="absolute right-0 bottom-0 max-w-[600px] max-lg:w-1/4 max-md:hidden"
				/>
				<div className="relative z-10 container">
					<h2 className="text-center">ISO Certified</h2>
					<p className="text-primary mx-auto mt-2 text-center lg:mt-6">
						MetroToners is ISO certified, reflecting our commitment to quality,
						reliability, and global standards. The certification ensures
						operational excellence, customer trust, and continuous improvement
						in everything we do.
					</p>
					<div className="mt-4 flex items-center justify-center">
						<Image src={iso9001} alt="" height={180} />
						<Image src={iso14001} alt="" height={180} />
					</div>
				</div>
			</section>
		</div>
	)
}
