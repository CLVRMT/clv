CREATE TABLE [dbo].[CONDITION_RELAY] (
    [id]        INT         IDENTITY (1, 1) NOT NULL,
    [module_id] INT         NOT NULL,
    [action_id] INT         NOT NULL,
    [operator]  VARCHAR (1) NOT NULL,
    CONSTRAINT [PK_CONDITION_RELAY] PRIMARY KEY CLUSTERED ([id] ASC)
);

