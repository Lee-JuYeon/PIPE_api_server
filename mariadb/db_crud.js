const mariadb = require('./maria');

mariadb.getConnection((conn) => {
    conn.query(
        "insert into testDB (test_name, test_title) values (?, ?)",
        [
            "name11",
            "title 111"
        ]
    );
    conn.release();
    /*
    - 사용 후 꼭 conn.release()를 통해 Pool에 Connection을 반환해야한다.
    - Q, conn.query 안에 또 다시 conn..query를 하게 될 때는 
         release 후 다시 getConnection을 수행해야하는가??    
      A, release를 통해 pool에게 connectino을 반환하기 전 까지 같은 connection을 이용한다.
         따라서 매번 새로운 Connection을 이용해야하는 경우가 아니라면 매범 releasse를 할 푈요가 없다.

    */
})