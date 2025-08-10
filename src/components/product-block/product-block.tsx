import Image from "next/image"
import { Button } from "../ui/button"
import logo from '@/app/icon.svg'
import { formatPrice } from "@/lib/utils"

type Product = {
    name: string
    make: string
    price: number
}

export function ProductBlock({ name, make, price }: Product) {
    return (
        <div>
            <Image src={logo} alt="printer" />
            <p className="text-2xl text-center">{name}</p>
            <p className="text-center">{make}</p>
            <p className="text-center text-xl mt-2">{formatPrice(price)}</p>
            <div className="flex justify-center gap-x-2 mt-4">
                <Button variant="outline">Learn More</Button>
                <Button>Inquire Now</Button>
            </div>
        </div>
    )
}