import React from 'react'
import scss from "./HeaderMobile.module.scss"
import BurgerMenu from '@/components/ui/burger/BurgerMenu'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../../../public/images/logo/Logo.svg";


const HeaderMobile = () => {
  return (
            <div className={scss.content}>
                <div>
                <BurgerMenu/>
                </div>

                <div className={scss.logo}>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo" 
                        width={700}
                        height={500}
                        quality={70}
                        priority
                    />
                </Link>
                </div>


                <div className={scss.basket}>
                <Image
                src="/images/header_nav/basket.svg"
                alt="basket"
                width={700}
                height={500}
                quality={70}
                priority
                />
                </div>

            </div>
  )
}

export default HeaderMobile