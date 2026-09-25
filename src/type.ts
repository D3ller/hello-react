export interface User {
    fullName: string;
    avatarURL: string;
    emailAddress: string;
    initial: string;
}

export interface Pagination {
    currentPage: number;
    totalPages: number;
}