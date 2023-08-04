CREATE OR ALTER PROCEDURE registerUserProc
    @id NVARCHAR(10),
    @username NVARCHAR(50),
    @email NVARCHAR(20),
    @password NVARCHAR(20)
AS
BEGIN
    INSERT INTO usersTable (id,username, email, password)
    VALUES (@id,@username, @email, @password);
    
END

SELECT * FROM usersTable