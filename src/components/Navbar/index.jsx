import { NavLink } from "react-router-dom"


let menu1 = [
    { to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
    { to: '/', text: 'All', className: '' },
    { to: '/clothes', text: 'Clothes', className: '' },
    { to: '/electronics', text: 'Electronics', className: '' },
    { to: '/furnitures', text: 'Furnitures', className: '' },
    { to: '/toys', text: 'Toys', className: '' },
    { to: '/others', text: 'Others', className: '' },
]

let menu2 = [
    { to: '/email', text: 'user@gmail.com', className: 'text-black/60' },
    { to: '/my-orders', text: 'My orders', className: '' },
    { to: '/my-account', text: 'My occount', className: '' },
    { to: '/sign-in', text: 'Sign in', className: '' },
    { to: '/shoppcar', text: '🛒', className: '' },
]

const NavBar = () => {
    const textDecoration = 'underline underline-offset-4'

    return (
        <nav className="flex items-center justify-between w-full py-5 px-8 text-sm">
            <ul className='flex gap-3 items-center'>
                {menu1.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => isActive ? textDecoration : undefined}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className='flex gap-3 items-center'>
                {menu2.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => isActive ? textDecoration : undefined}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;