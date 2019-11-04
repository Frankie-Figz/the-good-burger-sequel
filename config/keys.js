var mysqlEnv = {
    user_name: process.env.USER,
    password: process.env.PASSWORD,
    host_name: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
};

module.exports = {
    mysqlEnv: mysqlEnv
};