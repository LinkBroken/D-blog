import { Input } from "@/components/ui/input";

export type label = { text: string; className: string };

export type InputField = {
  className: string;
  type: string;
  name: string;
  required?: true | false;
};
export type Field = {
  label?: label;
  input: InputField;
};
interface FormProp {
  action?: string | ((formData: FormData) => void | Promise<void>);
  fields?: Field[];
  className: string;
}

function Form({ action, fields, className }: FormProp) {
  if (!fields?.length) {
    return null;
  }

  return (
    <>
      <section className={className}>
        <form
          action={action}
          className="flex flex-col mt-10 gap-1 w-1/3 ml-5 items-center bg-teal-900 text-white   rounded-xl "
        >
          {fields?.map((field, index) => {
            const { className, name, type, required } = field.input;
            const { text, ...rest } = { ...field.label };

            return (
              <>
                {text && (
                  <label className={rest.className ?? undefined}>{text}</label>
                )}{" "}
                <Input
                  type={type}
                  name={name}
                  required={required ?? true}
                  className={className}
                />
              </>
            );
          })}
          <button
            type="submit"
            className="p-2 mb-3 w-44 rounded-2xl text-white bg-teal-900 hover:bg-teal-700 shadow-md shadow-black"
          >
            Add Post
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
