import { CaretLeft } from "@phosphor-icons/react";

interface Props {
  title: string
}

export function Header({ title }: Props) {
  return (
    <div className="flex items-center justify-start w-full h-12 bg-secondary">
      <nav className="flex items-center justify-start gap-1 p-2 text-white">
        <CaretLeft size={24} />
        <h1 className="text-base font-bold">{title}</h1>
      </nav>
    </div>
  )
}