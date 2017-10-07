CREATE TABLE [dbo].[ASS_USE_HAB] (
    [id]          VARCHAR (100) NOT NULL,
    [user_id]     VARCHAR (100) NOT NULL,
    [hability_id] INT           NOT NULL,
    [sync]        INT           NOT NULL,
    CONSTRAINT [PK_ASS_USE_HAB] PRIMARY KEY CLUSTERED ([id] ASC)
);

