CREATE OR ALTER PROCEDURE registerStd(@regNo NVARCHAR(255),
                                                @StdName NVARCHAR(255),
                                                @stream VARCHAR(10),
                                                @feeBal INT(6))
AS
BEGIN
    INSERT INTO students(regNo, StdName, stream, feeBal)
    VALUES (@regNo, @StdName, @stream, @feeBal)
END
