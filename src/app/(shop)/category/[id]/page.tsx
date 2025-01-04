import {notFound} from "next/navigation";
import {initialData} from "@/seed/seed";
import {ProductGrid, Title} from "@/components";
import {Category} from "@/interfaces";

const seedProducts = initialData.products

// eslint-disable-next-line import/no-anonymous-default-export,react/display-name
export default function ({params}: { params: { id: Category } }) {
  const {id} = params
  // if (id) {
  //   notFound()
  // }
  const products = seedProducts.filter(p => p.gender === id)
  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    unisex: 'para todos'
  }
  return (
    <>
      <Title title={'Artículos ' + labels[id]} subTitle={'Todos los productos'} className={'mb-2'}/>
      <ProductGrid products={products}/>
    </>
  )
}