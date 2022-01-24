type User = {
    email: string;
    password: string;
    name: string;
    surname: string;
};

export default User;

export type DbUser = {
    id: number,
    created_at: Date,
    user_id: string,
}