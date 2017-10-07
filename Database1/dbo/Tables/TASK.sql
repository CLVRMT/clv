CREATE TABLE [dbo].[TASK] (
    [id]           INT IDENTITY (1, 1) NOT NULL,
    [module_id]    INT NOT NULL,
    [action_id]    INT NOT NULL,
    [duration]     INT NULL,
    [condition_id] INT NULL,
    CONSTRAINT [PK_TASK] PRIMARY KEY CLUSTERED ([id] ASC)
);

