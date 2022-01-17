import { connect } from 'mongoose';

export async function startConnection(){
    const db = await connect('mongodb://localhost/galeria-db',{
        //useNewUrlParser: true
    });
    console.log('Database is --> OKAY <-- ');
}

