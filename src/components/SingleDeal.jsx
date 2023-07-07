import Image from 'next/image';

const SingleDeal = ({ deal }) => {
  const {_id, product_name, product_price, product_type, product_discount, product_img} = deal;
  return (
    <div key={_id} className="p-3 flex-row justify-center items-center">
      <div className="flex justify-center">
        <Image src={product_img} height={235} width={235} alt="Hot-Deal" />
      </div>
      <p className="font-bold">{product_name}</p>
      <p className="flex justify-between mt-3">
        <span>${product_price}</span>
        <span className='text-red-600'>{`-${product_discount}% off`}</span>
      </p>
    </div>
  )
}

export default SingleDeal