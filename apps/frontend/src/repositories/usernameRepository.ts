let username = "";

export const usernameRepository = {
    async getUsername(): Promise<string> {
        return username;
    },

    async saveUsername(next: string): Promise<string> {
        username = next;
        return username;
    },
};