import type { PageServerLoad, Actions } from "./$types";
import { userData } from "$db/userData";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = () => {

}

export const actions: Actions = {
    register: async({ request, cookies} ) => {

        const formData = await request.formData();

        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string; 

        // Code validation
        if (username.length == 0 && password.length == 0 && email.length == 0) {
            return {
                error: true,
                status: 404,
                errorText: "Please enter your info",
            }
        }
        if (username.length == 0) {
            return {
                error: true,
                status: 404,
                errorText: "Please enter your username"
            }
        }

        if (email.length == 0) {
            return {
                error: true,
                status: 404,
                errorText: "Please enter your email",
                username,
            }
        

        }

        if (password.length == 0) {
            return {
                error: true,
                status: 404,
                errorText: "Please enter your password",
                username,
                email,
            }

        }

        if (username.length < 6) {
            return {
                error: true,
                status: 404,
                errorText: "Username needs to be more than 6 characters",
                email,
                password
            }

        }
        if (password.length < 6) {
            return {
                error: true,
                status: 404,
                errorText: "Password needs to be more than 6 characters",
                email,
                username,
            }

        }

        // Check sign in

        let alreadyLogin: boolean = false;
        const requestData = await userData.find({}).toArray();
        

        for (const data of requestData) {
            if (data.email == email) {
                if (data.password == password) {
                    alreadyLogin = true;
                } else {
                    return {
                        error: true,
                        status: 404,
                        errorText: "Password is wrong",
                        email,
                    }
                }
            }
        }

        if (alreadyLogin) {
            throw redirect(303, "/login");
        } else {
            let randomId = Math.floor(Math.random() * 100000);
            let dataSchema = {
                uid: `uid-${randomId}`,
                username: username,
                email: email,
                password: password,
            }

            
            

            await userData.insertOne(dataSchema)

            console.log("Update data to the database successs");

            // Create cookies
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

        }


    }
    
}