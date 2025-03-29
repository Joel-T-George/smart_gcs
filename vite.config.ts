import { defineConfig , loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import electron from "vite-plugin-electron";

// https://vite.dev/config/
export default defineConfig(({mode})=>{


  const env=loadEnv(mode,process.cwd(), "")

  return {

      plugins: [react()
      ],
      build:{
        outDir:"dist-react"
      },
      define:{
        "smartgcs.env":JSON.stringify(env)
    
      },
    
      server:{
        port:5123,
        strictPort:true
      }
    }

  
})


// export default defineConfig({

//   plugins: [react()
//   ],
//   build:{
//     outDir:"dist-react"
//   },
//   define:{
//     "process.env":process.env[""]

//   },

//   server:{
//     port:5123,
//     strictPort:true
//   }
// })
