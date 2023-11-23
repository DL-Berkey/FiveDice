import supabase from "./client";

class User {
    async getUserByEmail(email: string) {
        const { data, error } = await supabase
            .from("user")
            .select()
            .eq("email", email)
            .maybeSingle();
        if (error) {
            return null;
        }

        return data;
    }

    async getUserBySession() {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            throw new Error(error.name + " " + error.message);
        }

        return data.session?.user;
    }

    async createUser(email: string, nickname: string) {
        const { data, error } = await supabase
            .from("user")
            .insert({ email, nickname });

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async register(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            throw new Error(error.name + " " + error.message);
        }

        return data;
    }

    async login(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw new Error(error.name + " " + error.message);
        }

        return data;

        // const { user } = data;

        // if (user.email) {
        //     const result = await this.getUserByEmail(user.email);

        //     if (!result) {
        //         throw new Error()
        //     }

        //     return { nickname: result.nickname };
        // } else {
        //     return null;
        // }
    }

    async logout() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw new Error(error.name + " " + error.message);
        }
    }
}

export default new User();
