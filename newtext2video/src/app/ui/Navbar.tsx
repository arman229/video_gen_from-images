"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetClose, SheetContent, Sheet } from "@/components/ui/sheet";
import { FaUserCircle } from "react-icons/fa";
import {
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

import {
    menutypes,
    menuItems, navbarlogo

} from "@/app/utils/Navbar";

export default function Navbar(): JSX.Element {
    const [sheetOpen, setSheetOpen] = useState(false);
    const handleClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        console.log('sectionid', sectionId);

        e.preventDefault();
        scrollToSection(sectionId);
        setSheetOpen(false) 
    };


    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });

        }
    };



    const pathname = usePathname()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleSignOut = () => {
        setIsAuthenticated(false);
    };
    return (
        <header className="flex  top-0  bg-white shadow-md z-50 h-16 w-full items-center justify-between px-4 md:px-6 lg:px-8 fixed">
            <Link className="flex items-center gap-2 text-lg font-semibold" href="/">  <img
                className="object-cover w-24 h-10   mr-4 "
                src={navbarlogo}
                alt="Person"
            />

                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex ">
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((menuItem: menutypes, index: number) => (
                            <NavigationMenuLink asChild key={index}>
                                <Button variant="link">
                                    <Link
                                        href={`#${menuItem.href}`} onClick={ handleClick(menuItem.href)}
                                        className={`group inline-flex h-9 w-max items-center justify-center ${pathname === '/menuItem.href' ? 'md:border-b-2 sm:bg-white bg-gray-200 border-black' : ''}`}

                                    > {menuItem.name}</Link>
                                </Button>


                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>

            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="rounded-full border border-gray-200 w-8 h-8  "
                            size="icon"
                            variant="ghost"
                        >
                            <div>
                                <FaUserCircle size={30} color="#555" />
                            </div>
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="b-white">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {isAuthenticated ? (
                            <DropdownMenuItem onClick={handleSignOut}>
                                Logout
                            </DropdownMenuItem>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <DropdownMenuItem>Sign in</DropdownMenuItem>
                                </Link>
                                <Link href="/signup">
                                    <DropdownMenuItem>Sign up</DropdownMenuItem>
                                </Link>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>



                <Sheet open={sheetOpen} onOpenChange={setSheetOpen} >
                    <SheetTrigger asChild>
                        <Button className="md:hidden" size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="b-white p-0" style={{ maxWidth: '250px' }}>
                        <div className="grid gap-2 py-6  mt- 6">
                            {menuItems.map((item: menutypes, index: number) => (

                                <Button key={index} variant="link"  >

                                    <Link className="   flex w-full items-center py-2 text-lg font-semibold"
                                        href={`#${item.href}`} onClick={ handleClick(item.href)}> {item.name}</Link>
                                </Button>

                            ))}
                        </div>

                    </SheetContent>

                </Sheet></div>

        </header>
    );
}


function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
