import {QuantitySelector, Title} from "@/components";
import Link from "next/link";
import {initialData} from "@/seed/seed";
import Image from "next/image";
import {redirect} from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function Page() {

  // redirect('/empty')

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className="flex flex-col w-[1000px]">
        <Title title={'Carrito'}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="flex flex-col mt-5">
            <span>Agregar más items</span>
            <Link className={'underline mb-5'} href='/'>
              Continua comprando
            </Link>

            {
              productsInCart.map((item, index) => (
                <div key={index} className='flex mb-5'>
                  <Image src={`/products/${item.images[0]}`} width={100} height={100} alt={item.title}
                         className={'mr-5 rounded'}/>
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <QuantitySelector quantity={3}/>
                    <button className={'underline mt-3'}>Remover</button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between h-fit'>
            <div>
              <h2 className='text-2xl mb-2'>Resumen de orden</h2>
              <div className="grid grid-cols-2">
                <span>No. de Productos</span>
                <span className='text-right'>3 artículos</span>

                <span>Subtotal</span>
                <span className='text-right'>$ 2100</span>

                <span>Impuestos (15%)</span>
                <span className='text-right'>$ 100</span>

                <span className='mt-5 text-2xl'>Total:</span>
                <span className='mt-5 text-2xl text-right'>3 artículos</span>
              </div>
            </div>
            <div className={'mt-5 mb-2 w-full'}>
              <Link className={'flex btn-primary justify-center'} href='/checkout/address'>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}