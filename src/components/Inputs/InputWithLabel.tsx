import { UseFormRegisterReturn } from "react-hook-form";

interface InputWithLabelPropsTypes {
    label: string;
    type: string;
    register: UseFormRegisterReturn
    id: string;
    placeholder: string;
}
const InputWithLabel = ({ label, type, register, id, placeholder }: InputWithLabelPropsTypes) => {
    return (
        <div className="space-y-2">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                {...register}
                type={type}
                className="flex h-10 w-full rounded-md border focus:ring-2 focus:ring-secondary focus:ring-offset-2 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 outline-none"
                id={id}
                placeholder={`Enter your ${placeholder}`}
            />
        </div>
    );
};

export default InputWithLabel;