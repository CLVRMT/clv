CREATE TABLE [dbo].[CFGFOLDER] (
    [id]        INT          IDENTITY (1, 1) NOT NULL,
    [icon]      VARCHAR (10) NOT NULL,
    [sync]      INT          NOT NULL,
    [device_id] INT          NOT NULL,
    CONSTRAINT [PK_CFGFOLDER] PRIMARY KEY CLUSTERED ([id] ASC)
);

