"use client"

import supabase from '@/app/utils/supabase';

//export async function handleSubmit(event:React.FormEvent<HTMLInputElement>){
    //event.preventDefault();
    //const email:string = event.target.email.value;
    //await supabase.auth.signIn({email});
    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password',
        })
      }
    //const { data, error } = await supabase.auth.signUp({
    //    email: 'example@email.com',
    //    password: 'example-password',
    //  })
//}
export default async function LoginUser() {
    return(
        <div>
        <h1>Log In</h1>
        <form onSubmit={signInWithEmail}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Log in</button>
        </form>
    </div>

    )
    
}