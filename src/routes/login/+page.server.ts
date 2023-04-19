import type { PageServerLoad, Actions } from "./$types";
import { userData } from "$db/userData";
import { redirect } from "@sveltejs/kit";



export const actions: Actions = {

    login: async({ request, cookies }) => {
        const formData = await request.formData();

        // Input data
        const email = formData.get("email") as string;
        const password = formData.get('password') as string;

        // Data validation

        if (email.length == 0) {
            return {
                error: true,
                status: 404,
                errorText: "Please enter your email",
            }
        }
        if (password.length == 0){
            return {
                error: true,
                status: 404,
                errorText: "Please enter your password"
            }

        }
        if (password.length < 6) {
            return {
                error: true,
                status: 404,
                errorText: "Password needs to be more than 6 characters",
                email,
            }

        }
        // Essential Credentials
        const requestData = await userData.find({}).toArray();
        let isLogin: boolean = false;

        for (const data of requestData) {
            if (data.email === email) {
                if (data.password === password) {
                    isLogin = true;

                } else{ 
                    return {
                        error: true,
                        status: 404,
                        errorText: "Password is wrong",
                        email
                    }

                }
            }
        }

        

        if (isLogin) {

            const date = new Date();

            date.setMinutes(date.getMinutes() + 2);
            cookies.set("shortUserLogin", crypto.randomUUID(), {
                path: "/",
                expires: date,
            });
            date.setHours(date.getHours() + 1);
            cookies.set("longUserLogin", crypto.randomUUID(), {
                path: "/",
                expires: date,
            })

            throw redirect(303, "/");
        } else {
            
            return {
                error: true,
                status: 404,
                errorText: "There's no account with this email",
               

            }
        }
        


        
        
       
        

    }
    
}