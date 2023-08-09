import supabase from '@/app/utils/supabase';

export default async function Categories() {
    
    const { data: categories,error } = await supabase
      .from("categories")
      .select("*");
      if (error){
        throw new Error('categories error');
      }
    console.log('categories data',{categories});
}