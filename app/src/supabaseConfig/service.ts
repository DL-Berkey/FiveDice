import supabase from "./client";

class User {
    async getUserByEmail(email: string) {
        const { data, error } = await supabase
            .from("user")
            .select()
            .eq("email", email)
            .maybeSingle();

        if (error) {
            console.error(error);

            return null;
        }

        return data;
    }

    async getUserBySession() {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            console.error(error);

            return null;
        }

        return data.session?.user;
    }

    async createUser(email: string, nickname: string) {
        const { data, error } = await supabase
            .from("user")
            .insert({ email, nickname });

        if (error) {
            console.error(error);

            return null;
        }

        return data;
    }

    async verifyOTPCode(email: string, token: string) {
        const { data, error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: "email",
        });

        if (error) {
            console.error(error);

            return false;
        }

        return data.user !== null;
    }

    /**
     * this function will send otp code to user's email
     */
    async signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.error(error);

            return null;
        }

        return data;
    }

    async login(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error(error);
            return null;
        }

        return data;
    }

    async logout() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
            return null;
        }
    }
}

export default new User();
