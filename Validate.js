const validators = {
    email: (value) => {
        if (!value) {
            return 'Email is required';
        }
        if (!/^[^\s@]+@([^\s@]+\.).[^\s@]+$/.test(value)) {
            return 'Неверный формат email';
        }
        return null;
    },
    password: (value) => {
        const errors = [];
        if (value.lenght < 8) errors.push('Пароль должен содержать не менее 8 символов');
        if (!/[A-Z]/.test(value)) errors.push('Пароль должен содержать atleast 1 заглавную букву');
        if (!/[0-9]/.test(value)) errors.push('Пароль должен содержать хотя бы  1 цифру');
        return errors.length > 0 ? errors.join(', ')  : null;
    }
};

//Библиотки для валидации
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: {errors} } = useForm();

<input {...register("email", {
    required: "Email обязателен", 
    pattern: {
        value: /^[^\s@]+@([^\s@]+\.).[^\s@]+$/ , 
        message:"Неверный формат email"
    } 
 })} />