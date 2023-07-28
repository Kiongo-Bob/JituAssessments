CREATE OR ALTER PROCEDURE updateNoteProc (@id VARCHAR(10), @title  VARCHAR(50), @content VARCHAR(200), @timestamp DATETIME)
AS
    BEGIN
        UPDATE notesTable SET id= @id, title = @title, content = @content, timestamp = @timestamp WHERE id= @id
    END