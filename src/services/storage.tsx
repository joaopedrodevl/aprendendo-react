interface IDioBank {
    login: boolean;
    nome?: string;
    email?: string;
    id?: number;
    balance?: number;
}

const dioBank: IDioBank = {
    login: false,
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank');
}

export const createLocalStorage = (): void => {
    return localStorage.setItem('diobank', JSON.stringify(dioBank));
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    return localStorage.setItem('diobank', JSON.stringify(dioBank));
}