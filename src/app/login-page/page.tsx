import supabase from '@/app/utils/supabase';

//export interface EmailModel {
//    email: string;
// }

export async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const email = (event.target as HTMLInputElement).value;
    const password = (event.target as HTMLInputElement).value;
    //await supabase.auth.signIn({email});
    //const email:string = event.target.email as HtmlInputElement.value;
   
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
})
      //supabase.auth.onAuthStateChange((event, session) => {
      //  console.log(event, session)
      //})
      //supabase.auth.onAuthStateChange((event, session) => {
      //  if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
      //})
   // alert('you signed up!')
    
}
export default async function LoginUser() {
      return(
          <div>
          <h1>Log In</h1>
          <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
              <button type="submit">Log in</button>
          </form>
      </div>
  
      )
      
  }


