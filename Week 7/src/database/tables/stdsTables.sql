-- SELECT * FROM Students
CREATE TABLE Students (
    regNo UNIQUEIDENTIFIER PRIMARY KEY,
    StdName NVARCHAR(255) NOT NULL,
    stream VARCHAR (10) NOT NULL ,
    feeBal INT NOT NULL 
);

-- SELECT * FROM Students WHERE Name = "js"
SELECT * FROM Students;