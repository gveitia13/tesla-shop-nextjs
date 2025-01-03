import {notFound} from "next/navigation";

export default function ({params}: { params: { id: string } }) {
  const {id} = params
  if (id === 'kids')
    notFound()

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  )
}