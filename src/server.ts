import { app } from "./app"
import { env } from "./env"



const PORT = Number(env.PORT)
app.listen({
    port:  3333
}).then(() => {
    console.log('Server running')
})

