import {Title} from "@/components";
import Link from "next/link";
import {initialData} from "@/seed/seed";
import Image from "next/image";
import {clsx} from "clsx";
import {IoCartOutline} from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: { id: string };
}

export default function ({params}: Props) {
  const id = params.id;

  // todo verificar

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden número ${id}`}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="flex flex-col mt-5">
            <div className={clsx(
              'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
              {'bg-red-500': false, 'bg-green-700': true}
            )}>
              <IoCartOutline size={30}/>
              {/*<span className={'mx-2'}>Pendiente de pago</span>*/}
              <span className={'mx-2'}>Pagada</span>
            </div>

            {
              productsInCart.map((item, index) => (
                <div key={index} className='flex mb-5'>
                  <Image src={`/products/${item.images[0]}`} width={100} height={100} alt={item.title}
                         className={'mr-5 rounded'}/>
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price} x 3</p>
                    <p className={'font-bold'}>Subtotal: $ {item.price * 3}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between'>
            <div>
              <h2 className={'text-2xl mb-2 font-bold'}>Dirección de entrega</h2>
              <div className={'mb-10'}>
                <p className={'text-xl'}>Fernando Herrera</p>
                <p>asd assdsad sada</p>
                <p>asd assdsad sada</p>
                <p>asd assdsad sada</p>
                <p>asd assdsad sada</p>
                <p>asd assdsad sada</p>
              </div>
              <div className={'w-full h-0.5 rounded bg-gray-200 mb-10'}></div>
            </div>
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
              <div className={clsx(
                'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                {'bg-red-500': false, 'bg-green-700': true}
              )}>
                <IoCartOutline size={30}/>
                {/*<span className={'mx-2'}>Pendiente de pago</span>*/}
                <span className={'mx-2'}>Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}