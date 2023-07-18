import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"


let menu1 = [
    { to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
    { to: '/', text: 'All', className: '' },
    { to: '/jewelery', text: 'Jewelery', className: '' },
    { to: '/mens-clothing', text: "Men's clothing", className: '' },
    { to: '/electronics', text: 'Electronics', className: '' },
    { to: '/womens-clothing', text: "Women's clothing", className: '' },
]

let menu2 = [
    { to: '/email', text: 'user@gmail.com', className: 'text-black/60' },
    { to: '/my-orders', text: 'My orders', className: '' },
    { to: '/my-account', text: 'My occount', className: '' },
    { to: '/sign-in', text: 'Sign in', className: '' },
    { to: '/shoppcar', text: 'ShoppCar', className: 'flex items-center justify-center' },
]

const NavBar = () => {

    const context = useContext(ShoppingCartContext)
    const textDecoration = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center w-full fixed z-10 top-0 py-5 px-8 text-sm font-light">
            <ul className='flex gap-3 items-center'>
                {menu1.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => {
                            if (isActive && link.text !== "Shopi") { return textDecoration }
                            return undefined;
                        }}
                            onClick={() => {
                                if (link?.text !== "Shopi" && link?.text !== "All") { 
                                    context.setSearchByCategory(link?.text.toLocaleLowerCase())
                                 }else{
                                    context.setSearchByCategory(null)
                                 }
                                return undefined;
                            }}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className='flex gap-3 items-center'>
                {menu2.map(link => (
                    <li key={link.text} className={link.className}>
                        {link?.to === '/shoppcar' ?
                            <div className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                                </svg>
                                {context.cartProducts.length}
                            </div> :
                            <NavLink to={link.to} className={({ isActive }) => isActive ? textDecoration : undefined}>
                                {link?.text}
                            </NavLink>}

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;