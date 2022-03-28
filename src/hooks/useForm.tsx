import { ChangeEvent, useState } from "react";


export const useForm = <T extends Object>(initiaState: T) => {
  const [form, setForm] = useState(initiaState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })

  }


  return {
    form,
    handleChange
  }


}

