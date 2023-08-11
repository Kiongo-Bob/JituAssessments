CREATE OR ALTER PROCEDURE checkIfUserExistsProc
    @email NVARCHAR(255)
AS
BEGIN
    SELECT COUNT(*) AS count
    FROM usersTable
    WHERE email = @email;
END