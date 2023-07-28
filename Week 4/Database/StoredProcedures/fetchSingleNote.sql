CREATE OR ALTER PROCEDURE getAllNotes
AS
    BEGIN
         SELECT * FROM notesTable WHERE id = @id
    END