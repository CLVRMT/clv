CREATE TABLE [dbo].[CONDITION_TIME] (
    [id]         INT         NOT NULL,
    [start_date] DATETIME    NOT NULL,
    [operator]   VARCHAR (1) NULL,
    CONSTRAINT [PK_CONDITION_TIME] PRIMARY KEY CLUSTERED ([id] ASC)
);

