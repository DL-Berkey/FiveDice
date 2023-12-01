import { useMutation } from "react-query";
import { User, Session } from "@supabase/supabase-js";

import UserSerivce from "@/supabaseConfig/service";

type Register = (
    email: string,
    password: string
) => Promise<
    | {
          signUpStatus: "success";
          result: {
              user: User | null;
              session: Session | null;
          } | null;
      }
    | {
          signUpStatus: "user already exists" | "sending mail failure";
          result: null;
      }
>;

type mutationStatus = "error" | "idle" | "loading" | "success";

const useRegister: () => [mutationStatus, Register] = () => {
    const mutation = useMutation(
        ({ email, password }: { email: string; password: string }) =>
            UserSerivce.signUp(email, password),
        {
            onError: (error) => {
                console.error(error);
            },
        }
    );

    const register: Register = async (email: string, password: string) => {
        try {
            // 이미 가입한 유저인지 확인
            const user = await UserSerivce.getUserByEmail(email);

            if (user) {
                return { signUpStatus: "user already exists", result: null };
            }

            const result = await mutation.mutateAsync({ email, password });

            return { signUpStatus: "success", result };
        } catch (e: unknown) {
            console.error(e);

            return { signUpStatus: "sending mail failure", result: null };
        }
    };
    return [mutation.status, register];
};

export default useRegister;
