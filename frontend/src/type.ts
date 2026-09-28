export interface User {
    fullName: string;
    avatarURL: string;
    emailAddress: string;
    initial: string;
}

export interface Company {
    id: number;
    slug: string;
    name: string;
    description: string;
    socials?: {
        facebook?: string;
        twitter?: string;
    }
    foundationYear?: number;
    onlineWork: boolean | null;
}

export interface Pagination {
    currentPage: number;
    totalPages: number;
}