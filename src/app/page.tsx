import supabase from '@/app/utils/supabase';

export default async function Home() {
  return(
    <>
    <h2><a href="/categories">Categories</a></h2>
    <h2><a href="/transactions">Transactions</a></h2>
    </>
  )
  //const { data: categories } = await supabase.from('categories').select()
  //return (
  //<pre>{JSON.stringify(categories, null, 2)}
  //{categories}</pre>
  //)
//let { data: categories, error } = await supabase
//.from('categories')
//.select('*')

}
