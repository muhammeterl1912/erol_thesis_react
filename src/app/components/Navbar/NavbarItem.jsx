'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import {clsx} from "clsx";


function NavbarItem({item}) {
    const router = useRouter();
    const pathname = usePathname()

    const focused = pathname === item.href;
    return (
        <li className={clsx(focused && "bg-neutral-focus text-white rounded-lg")}>
            <button onClick={()=> router.push(item.href)} className={clsx(focused && "hover:text-white")}>
                <item.icon size={20} />
                {item.label}
            </button>
        </li>
    );
}

export default NavbarItem;