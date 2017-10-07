CREATE TABLE [dbo].[CONDITION_SENSOR] (
    [id]        INT         IDENTITY (1, 1) NOT NULL,
    [module_id] INT         NOT NULL,
    [value]     INT         NOT NULL,
    [operator]  VARCHAR (1) NOT NULL,
    CONSTRAINT [PK_CONDITION_SENSOR] PRIMARY KEY CLUSTERED ([id] ASC)
);

