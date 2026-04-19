import express from 'express';
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
export { prisma };

app.use(express.json());

////////////////////// Rotas de API



////////////////////// Criar um novo usuário
app.post('/users', async (req, res) => {

   await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            data: req.body.data,
            cep: req.body.cep

        }
   })

    res.send('Usuário criado com sucesso!');
})



/////////////////////// Atualizar um usuário existente
app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            data: req.body.data,
            cep: req.body.cep

        }
    })

    res.send('Usuário atualizado com sucesso!');
})

    
    
///////////////////// Deletar um usuário
app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.send('Usuário deletado com sucesso!');
})




/////////////////////// Listar todos os usuários   
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

app.listen(3000);