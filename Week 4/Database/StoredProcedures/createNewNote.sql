CREATE OR ALTER PROCEDURE NewNoteProc(@id VARCHAR(10), @title VARCHAR(50), @content VARCHAR(200), @timestamp DATETIME)
AS
BEGIN
    INSERT INTO notesTable(id, title, content, timestamp) VALUES(@id, @title, @content, @timestamp)
END

SELECT * FROM notesTable