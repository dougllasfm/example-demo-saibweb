import { PencilSimple, PlusCircle, TrashSimple } from "@phosphor-icons/react";
import { Key } from "react"
import { CustomerType } from "~/@types/customerType";

interface PropsDataTable {
  data: CustomerType[]
}

export function Table({ data }: PropsDataTable) {
  return (
    <div className="flex flex-col max-h-[80%] w-full">
      <div className="flex-grow overflow-auto">
        <table className="relative w-full text-sm table-auto">
          <thead>
            <tr>
              <th className="sticky top-0 px-4 py-1.5 w-4 text-white text-left bg-primary-400">
                <PlusCircle size={24} weight="fill" alt="Adicionar novo cliente" className="cursor-pointer" />
              </th>
              <th className="sticky top-0 px-4 py-1.5 text-white text-left bg-primary-400">
                Nome
              </th>
              <th className="sticky top-0 px-4 py-1.5 text-white text-left bg-primary-400">
                Endereço
              </th>
              <th className="sticky top-0 px-4 py-1.5 text-white text-left bg-primary-400">
                Cidade
              </th>
              <th className="sticky top-0 px-4 py-1.5 text-white text-left bg-primary-400">
                UF
              </th>
              <th className="sticky top-0 px-4 py-1.5 text-white text-left bg-primary-400">
                Telefone
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5 border-collapse">
            {data.map((item, index) => (
              <tr
                className={
                  index % 2 === 0 ? "bg-white-300" : "bg-white"
                }
                key={item.TECL_ID}
              >
                <td className="px-4 py-1.5 flex items-center justify-center gap-1 w-max">
                <TrashSimple size={22} weight="fill" className="text-red cursor-pointer" alt="Deletar" />
                <PencilSimple size={22} weight="fill" className="text-blue cursor-pointer" alt="Editar" />
                </td>
                <td className="px-4 py-1.5 text-left font-bold border-x border-border-500">
                  {item.TECL_NOME}
                </td>
                <td className="px-4 py-1.5 text-left font-medium border-x border-border-500">
                  {item.TECL_ENDERECO}
                </td>

                <td className="px-4 py-1.5 text-left font-medium border-x border-border-500">
                  {item.TECL_CIDADE}
                </td>
                <td className="px-4 py-1.5 text-left font-medium border-x border-border-500">
                  {item.TECL_UF}
                </td>
                <td className="px-4 py-1.5 text-left font-medium border-x border-border-500">
                  {item.TECL_TELEFONE}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}