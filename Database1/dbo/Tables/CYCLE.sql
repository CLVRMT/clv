CREATE TABLE [dbo].[CYCLE] (
    [id]           VARCHAR (100) NOT NULL,
    [name]         VARCHAR (100) NOT NULL,
    [condition_id] INT           NULL,
    [type]         VARCHAR (10)  NULL,
    [value]        INT           NULL,
    [device_id]    VARCHAR (100) NULL,
    CONSTRAINT [PK_CYCLE] PRIMARY KEY CLUSTERED ([id] ASC)
);

