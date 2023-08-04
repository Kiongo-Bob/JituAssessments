CREATE OR ALTER PROCEDURE createNote
    @id NVARCHAR(10),
    @title NVARCHAR(50),
    @content NVARCHAR(MAX),
    @time_stamp DATETIME2
AS
BEGIN
    INSERT INTO notes (id,content, title, time_stamp)
    VALUES (@id ,@content, @title, @time_stamp);
END
