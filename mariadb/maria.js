const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host : "",
    port : "",
    database : "",
    user : "",
    password : ""
    // connectionLimit : 100000,
    // waitForConnections : true,
    // queueLimist : 0
});

pool.getConnection((err, connection) => {
    if(err){
        switch(err.code){
            case 'PROTOCOL_CONNECTION_LOST' :
                console.log('DB 연결이 끊어짐');
            case 'ER_CON_COUNT_ERROR' :
                console.log('DB 연결이 너무 많음.');
            case 'ECONNREFUSED' :
                console.log('DB 연결이 거절됨.');
        }
    }
    if(connection) connection.end(); //반납

    return;
});


async function insertPOST(model){
    try{
        //id, user(company, age, user UID), post_title, post_content, date, like, dislike, replys
        await pool.query(
            "INSERT INTO POST (userCompany, userAge, userUID, postText, postDate) VALUES (?, ?, ?, ?, ?)",
            [
                model.get('userCompany'),
                model.get('userAge'),
                model.get('userUID'),
                model.get('postText'),
                model.get('postDate')
            ]
        );
    }catch(err){
        console.log('mariadb, maria, maria.js, insertPOST // Exception : ', err)
    }
};

async function deletePOST(where){
    try{
        await pool.query("DELETE FROM POST WHERE id = ?", where);
    }catch(err){
        console.log('mariadb, maria, maria.js, deletePOST // Exception : ', err);
    };
};

async function getPOST(){
    return await pool.query("SELECT * FROM POST");
};

module.exports = {
    async run(query, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection()
                .then(conn => {
                    conn.query(query, params)
                        .then((rows) => {
                            resolve(rows);
                            conn.end(); // (필수) connection 종료
                        })
                        .catch(err => {
                            console.log(err);
                            conn.end(); // (필수) connection 종료
                            reject(err);
                        })

                }).catch(err => {
                    //not connected
                    console.log(`mariadb, maria, module.exports, run // Exception : ${err.message}`);
                    reject(err);
                });
        });
    },
    db : pool,
    addPOST : insertPOST,
    deletePOST : deletePOST,
    getPOST : getPOST
}