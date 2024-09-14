"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="ml-8">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
          Categorias
          <ChevronDownIcon className="size-4 fill-black" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <Link href="/category/1" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-100">
              Perfumaria
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/category/2" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-100">
              Corpo e banho
            </Link>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <Link href="/category/3" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-100">
              Cabelos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/category/4" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-100">
              Rosto
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </nav>
  )
};
