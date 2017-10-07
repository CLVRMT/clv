CREATE TABLE [dbo].[ACCOUNT] (
    [id]          VARCHAR (100) NOT NULL,
    [name]        VARCHAR (20)  NOT NULL,
    [description] VARCHAR (255) NOT NULL,
    [enabled]     BIT           NULL,
    [sync]        INT           NOT NULL,
    CONSTRAINT [PK_ACCOUNT] PRIMARY KEY CLUSTERED ([id] ASC)
);

