const mariadb = require('mariadb');

const db_config = {
    host : 'localhost',
    // port : `3304`,
    database : 'testDB',
    user : 'cavss',
    password : `VLWKtkfkdgo!)1928`
    // connectionLimit : 100000,
    // waitForConnections : true,
    // queueLimist : 0
};
let pool = mariadb.createPool(db_config);

const realestate_db_config = {
    host : 'localhost',
    database : 'pipe_realestate_db',
    user : 'cavss',
    password : 'VLWKtkfkdgo!)1928'
};
let realestate_pool = mariadb.createPool(realestate_db_config);

const money_db_config = {
    host : 'localhost',
    database : 'pipe_money_db',
    user : 'cavss',
    password : 'VLWKtkfkdgo!)1928'
};
let money_pool = mariadb.createPool(money_db_config);

const recruit_db_config = {
    host : 'localhost',
    database : 'pipe_recruit_db',
    user : 'cavss',
    password : 'VLWKtkfkdgo!)1928'
};
let recruit_pool = mariadb.createPool(recruit_db_config);

const startup_db_config = {
    host : 'localhost',
    database : 'pipe_startup_db',
    user : 'cavss',
    password : 'VLWKtkfkdgo!)1928'
};
let startup_pool = mariadb.createPool(startup_db_config);

// async function example(){
//     try{
//         let conn = await pool.getConnection();
//         let rows = await conn.query(
//             "insert into testDB (test_name, test_title) values (?, ?)",
//             [
//                 "name11",
//                 "title 111"
//             ]
//         )

//     }catch(err){
//         console.log(`maria.js, example // Error : ${err}`)
//     }
// }
// example();

async function getConnection(callback){
    try{
        await pool.getConnection(function (err, conn){
            if(!err){
                callback(conn);
                // conn.query();
                // conn.release();
                /*
                    conn.release()는 if문 안에 들어가야 '런타임 에러'가 발생하지 않는다.
                    pool.getConnection(function(err, conn) {}); 에서의 callback은 err 혹은 conn 둘중 하나에 값이 담겨오기에 err가 존재하는 경우 conn.release()는 런타임 에러로
                    Cannot read property 'release' of undefined를 발생 시킵니다.
    
                    Connection Pool 모듈화에서 에러 핸들링이 가능하도록
                    callback 함수에 error 혹은 connection을 담아주면 좋을 것 같습니다.
                    예) callback(null, conn)
    
                    conn.createConnection() 
                    -> conn.connect()
                    -> conn.query()
                    -> conn.end()
                */
            }else if(err){
                switch(err.code){
                    case 'PROTOCOL_CONNECTION_LOST' :
                        console.log('DB 연결이 끊어짐');
                    case 'ER_CON_COUNT_ERROR' :
                        console.log('DB 연결이 너무 많음.');
                    case 'ECONNREFUSED' :
                        console.log('DB 연결이 거절됨.');
                }
            }
        });
    }catch(err){

    }
}

// pool.getConnection((err, connection) => {
//     if(err){
//         switch(err.code){
//             case 'PROTOCOL_CONNECTION_LOST' :
//                 console.log('DB 연결이 끊어짐');
//             case 'ER_CON_COUNT_ERROR' :
//                 console.log('DB 연결이 너무 많음.');
//             case 'ECONNREFUSED' :
//                 console.log('DB 연결이 거절됨.');
//         }
//     }
//     if(connection) connection.end(); //반납

//     return;
// });


// async function insertPOST(model){
//     try{
//         //id, user(company, age, user UID), post_title, post_content, date, like, dislike, replys
//         await pool.query(
//             "INSERT INTO POST (userCompany, userAge, userUID, postText, postDate) VALUES (?, ?, ?, ?, ?)",
//             [
//                 model.get('userCompany'),
//                 model.get('userAge'),
//                 model.get('userUID'),
//                 model.get('postText'),
//                 model.get('postDate')
//             ]
//         );
//     }catch(err){
//         console.log('mariadb, maria, maria.js, insertPOST // Exception : ', err)
//     }
// };

// async function deletePOST(where){
//     try{
//         await pool.query("DELETE FROM POST WHERE id = ?", where);
//     }catch(err){
//         console.log('mariadb, maria, maria.js, deletePOST // Exception : ', err);
//     };
// };

// async function getPOST(){
//     return await pool.query("SELECT * FROM POST");
// };

module.exports = {
    // async run(query, params) {
    //     return new Promise((resolve, reject) => {
    //         pool.getConnection()
    //             .then(conn => {
    //                 conn.query(query, params)
    //                     .then((rows) => {
    //                         resolve(rows);
    //                         conn.end(); // (필수) connection 종료
    //                     })
    //                     .catch(err => {
    //                         console.log(err);
    //                         conn.end(); // (필수) connection 종료
    //                         reject(err);
    //                     })

    //             }).catch(err => {
    //                 //not connected
    //                 console.log(`mariadb, maria, module.exports, run // Exception : ${err.message}`);
    //                 reject(err);
    //             });
    //     });
    // },
    // db : pool,
    // addPOST : insertPOST,
    // deletePOST : deletePOST,
    // getPOST : getPOST,
    getConnection : getConnection,
    realestate_pool : realestate_pool,
    money_pool : money_pool,
    recruit_pool : recruit_pool,
    startup_pool : startup_pool
}