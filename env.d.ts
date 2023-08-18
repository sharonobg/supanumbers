declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SUPABASE_ANON_KEY:string
            NEXT_PUBLIC_SUPABASE_URL: string
            NEXT_PUBLIC_VERCEL_URL: string
            //PORT?: number
            //NODE_ENV: 'development' | 'production'
        }
    }
}

export {}