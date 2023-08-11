CREATE OR ALTER PROCEDURE registerUserProc
    @email NVARCHAR(100)
AS
BEGIN
    INSERT INTO usersTable (email)
    VALUES (@email);
    
END

SELECT * FROM usersTable