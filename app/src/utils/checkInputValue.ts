export const checkEmail = (email: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const result = regex.test(email);

    return result;
};

export const checkPassword = (password: string) => {
    // 1. 영어 대소문자
    // 2. 숫자
    // 3. 6글자 이상
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

    const result = regex.test(password);

    return result;
};
