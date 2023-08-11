BEGIN 
TRY
    CREATE TABLE usersTable(
        email VARCHAR(200) UNIQUE NOT NULL
    )
END TRY
BEGIN CATCH
    THROW 50002, 'Table already exists', 1;
END CATCH