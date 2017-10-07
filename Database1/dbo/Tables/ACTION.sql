CREATE TABLE [dbo].[ACTION] (
    [id]      INT           IDENTITY (1, 1) NOT NULL,
    [type]    VARCHAR (5)   NOT NULL,
    [code]    VARCHAR (MAX) NULL,
    [default] BIT           NULL,
    [sync]    INT           NOT NULL,
    CONSTRAINT [PK_ACTION] PRIMARY KEY CLUSTERED ([id] ASC)
);

