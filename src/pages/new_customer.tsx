import { FloppyDiskBack, X } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Input } from "~/components/Input";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({

})

export default function NewCustomer() {
  const formNewCustomer = useForm()

  const { handleSubmit } = formNewCustomer

  async function handleAddNewCustomer() {

  }

  return (
    <div className="flex flex-col items-start justify-start w-screen h-screen">
      <Header title="Novo registro" />


      <main className="flex flex-col items-center justify-start w-full h-[calc(100%_-_4rem)] p-2 mt-4">

        <FormProvider {...formNewCustomer}>
          <form onSubmit={handleSubmit(handleAddNewCustomer)} className="w-full">

            <fieldset className="flex items-center justify-center gap-1">
              <Input
                name="name"
                type="text"
                label="Nome"
              />
              <Input
                name="address"
                type="text"
                label="Endereço"
              />
            </fieldset>

            <fieldset className="grid grid-cols-9 gap-1">
              <div className="col-span-4">
                <Input
                  name="city"
                  type="text"
                  label="Cidade"
                />
              </div>

              <div className="col-span-1">
                <Input
                  name="uf"
                  type="text"
                  label="UF"
                />
              </div>
              <div className="col-span-4">
                <Input
                  name="telephone"
                  type="text"
                  label="Telefone"
                />
              </div>
            </fieldset>

            <div className="flex items-center justify-end gap-1 w-full mt-2">
              <Button><FloppyDiskBack size={22} weight="fill" />Salvar</Button>
              <Button variant="secondary"><X size={22} weight="bold" />Cancelar</Button>
            </div>

          </form>
        </FormProvider>

      </main>

    </div>
  )
}