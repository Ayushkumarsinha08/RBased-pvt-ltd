"use client"
import * as React from "react"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [menuState, setMenuState] = React.useState(false);
  const session = useSession();
  const [token, setToken] = React.useState<string | null>(null);
  const pathname = usePathname();
  
  // Close the mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (nav && !nav.contains(event.target as Node) && menuState) {
        setMenuState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuState]);

  // Close mobile menu when changing routes
  React.useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  React.useEffect(() => {
    // Client-side-only code
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  
  return (
    <nav
      data-state={menuState ? 'active' : 'inactive'}
      className="fixed top-0 z-50 w-full border-b border-dashed bg-black backdrop-blur dark:bg-zinc-950/90 transition-all duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo />
              <span className="hidden text-xl font-bold text-gray-100 sm:block md:text-xl">
                RBased Services Pvt. Ltd.
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <ul className="flex space-x-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`text-lg font-medium transition-colors duration-200 ${
                        pathname === item.href 
                          ? 'text-foreground font-semibold' 
                          : 'text-muted-foreground hover:text-accent-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center space-x-3 pl-6 border-l">
                {(token || session.data?.user) ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem("token");
                      }
                      signOut();
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                    >
                      <Link href="/login">
                        Login
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                    >
                      <Link href="/signup">
                        Signup
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <Menu className={`h-6 w-6 transition-all duration-300 ${menuState ? 'opacity-0 rotate-90 scale-0' : 'opacity-100'}`} />
              <X className={`absolute h-6 w-6 transition-all duration-300 ${menuState ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 bg-white dark:bg-zinc-950 z-40 transform transition-transform duration-300 ease-in-out ${
          menuState ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 space-y-6 overflow-y-auto h-full">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block py-2 text-base font-medium transition-colors duration-200 ${
                    pathname === item.href 
                      ? 'text-foreground font-semibold' 
                      : 'text-muted-foreground hover:text-accent-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="pt-4 mt-4 bg-black border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {(token || session.data?.user) ? (
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.removeItem("token");
                    }
                    signOut();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="/login">
                      Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link href="/signup">
                      Signup
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}



