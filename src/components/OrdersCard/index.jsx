const OrdersCard = ({ totalPrice, totalProducts }) => {

    return (
        <div className='flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80'>
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01.02.23</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <div className="flex items-center gap-2">
                    <p className="font-medium text-2xl">${totalPrice}</p>
                    <div className="cursor-pointer" onClick={() => handleDelete(id)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersCard