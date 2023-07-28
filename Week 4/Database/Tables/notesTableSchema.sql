BEGIN 
TRY
    CREATE TABLE notesTable(
        id VARCHAR(10) IDENTITY PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        content VARCHAR(200) NOT NULL,
        timestamp DATE NOT NULL
    )
END TRY
BEGIN CATCH
    THROW 50002, 'Table already exists', 1;
END CATCH
