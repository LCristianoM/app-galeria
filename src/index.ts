import app from './app';
import { startConnection } from './DB';

async function main (){
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server on PORT -->  --> ', app.get('port'));
}

main();
