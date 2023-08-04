CREATE OR ALTER PROCEDURE InsertNote
    @id NVARCHAR(10),
    @title NVARCHAR(50),
    @content NVARCHAR(MAX),
    @time_stamp DATETIME2
AS
BEGIN
    INSERT INTO notesTable (id, content, title, time_stamp)
    VALUES (@id, @content, @title, @time_stamp);
END