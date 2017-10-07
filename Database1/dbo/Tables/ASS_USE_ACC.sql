CREATE TABLE [dbo].[ASS_USE_ACC] (
    [id]         VARCHAR (100) NOT NULL,
    [user_id]    VARCHAR (100) NOT NULL,
    [account_id] VARCHAR (100) NOT NULL,
    [sync]       INT           NOT NULL,
    CONSTRAINT [PK_ASS_USE_ACC] PRIMARY KEY CLUSTERED ([id] ASC)
);

