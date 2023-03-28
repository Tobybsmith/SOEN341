import mysql from 'mysql2/promise';

export const mysqlconn = await mysql.createConnection({ 
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'mypassword',
    database: 'outlined_db'
});

//Port 3306
//Hostname: 127.0.0.1
//Connection Name: outlined_db
