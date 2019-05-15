const QUERIES = {
    USER:{
        LOGIN  :' Select * From chatting_user where username=$1 and password = $2',
        CREATE :' CREATE TABLE IF NOT EXISTS  chatting_user (user_id SERIAL, username varchar not null unique , password varchar not null, token text , first_name varchar , last_name varchar , last_login timestamp  ) ',
        UPDATE_DETAILS :' UPDATE  chatting_user SET first_name  = $1 , last_name =$2 WHERE username = $3 returning * ',
        UPDATE_PASSWORD : 'UPDATE chatting_user set password = $1 WHERE username = $2 returning * ',
        DROP: ' DROP TABLE IF EXISTS  chatting_user ',
        USER_EXISTS :' Select  count(*) from chatting_user where username = $1 ',
        INSERT_USER :' INSERT INTO chatting_user (username, password, first_name, last_name ) values ($1, $2, $3, $4 ) returning * ',
        UPDATE_LAST_LOGIN :' UPDATE chatting_user set last_login = current_timestamp , token = $1 where username = $2  returning * '
    },
    HEALTH_CHECK :{
        GET_DATE : 'Select current_timestamp '
    },
    MAGIC_WORDS :{
        SELECT_ALL_BY_STATUS : ' Select * from  MAGIC_WORDS ',
        CREATE : 'CREATE TABLE IF NOT EXISTS MAGIC_WORDS ( magic_word_id serial , magic_word text not null unique, user_id int  ) ',
        DROP : 'DROP TABLE IF EXISTS MAGIC_WORDS',
        INSERT : 'INSERT INTO MAGIC_WORDS ( magic_word , user_id  ) values ( $1 , $2 ) RETURNING * ',
        DELETE : 'DELETE FROM MAGIC_WORDS WHERE magic_word = $1 returning * ',
        MAGIC_WORD_EXISTS :'Select count(*) from MAGIC_WORDS  where magic_word = $1'
    }
};

module.exports = {QUERIES};