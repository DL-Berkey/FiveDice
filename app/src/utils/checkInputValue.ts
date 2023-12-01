import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constants";

export const checkEmail = (email: string) => {
    const regex = EMAIL_REGEX;

    const result = regex.test(email);

    return result;
};

export const checkPassword = (password: string) => {
    const regex = PASSWORD_REGEX;

    const result = regex.test(password);

    return result;
};
