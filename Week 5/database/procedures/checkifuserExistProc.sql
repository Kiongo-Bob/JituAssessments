CREATE OR ALTER PROCEDURE checkIfUserExistsProc
    @username NVARCHAR(20),
    @email NVARCHAR(20)
AS
BEGIN
    SELECT COUNT(*) AS count
    FROM usersTable
    WHERE username = @username OR email = @email;
END