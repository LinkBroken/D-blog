import Form, { Field } from "./Form";

// eslint-disable-next-line react/display-name
export const Add = (Fields: Field[], className: string, action: any) => {
  return <Form className={className} fields={Fields} action={action} />;
};
