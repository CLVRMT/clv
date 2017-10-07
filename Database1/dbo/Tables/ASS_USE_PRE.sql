CREATE TABLE [dbo].[ASS_USE_PRE] (
    [id]            VARCHAR (100) NOT NULL,
    [user_id]       VARCHAR (100) NOT NULL,
    [preference_id] INT           NOT NULL,
    [sync]          INT           NOT NULL,
    CONSTRAINT [PK_ASS_USE_PRE] PRIMARY KEY CLUSTERED ([id] ASC)
);

