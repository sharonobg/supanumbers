"use client"

import supabase from '@/app/utils/supabase';
export interface EmailModel {
  email: string;
}

export async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const email = (event.target as HTMLInputElement).value;
    const password = (event.target as HTMLInputElement).value;
    //await supabase.auth.signIn({email});
    //const email:string = event.target.email as HtmlInputElement.value;

    const { data } = await supabase.auth.signUp({
      email: email,
      password: password
      ,
    })

    async function signInWithEmail() {
        const { data } = await supabase.auth.signInWithOtp({
          email: 'email',
          options: {
            emailRedirectTo: 'http://localhost:3001/login-page?email={email}',
          },
        })
      }
      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
      })
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
      })
    
}


export default async function LoginNext(){
   

        return(
            <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <button type="submit">Log in</button>
            </form>
        </div>
    
        )
        
    }


