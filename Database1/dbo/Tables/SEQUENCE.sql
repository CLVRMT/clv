CREATE TABLE [dbo].[SEQUENCE] (
    [id]                 INT           IDENTITY (1, 1) NOT NULL,
    [type]               VARCHAR (3)   NOT NULL,
    [name]               VARCHAR (100) NOT NULL,
    [steady_sequence_id] INT           NULL,
    CONSTRAINT [PK_SEQUENCE] PRIMARY KEY CLUSTERED ([id] ASC)
);

