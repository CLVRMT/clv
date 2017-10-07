CREATE TABLE [dbo].[HISTORY] (
    [id]       VARCHAR (100) NOT NULL,
    [cycle_id] VARCHAR (100) NULL,
    [user_id]  VARCHAR (100) NULL,
    [type]     VARCHAR (10)  NULL,
    [start]    DATETIME      NULL,
    [end]      DATETIME      NULL,
    [value]    INT           NULL,
    [ifc]      VARCHAR (45)  NULL,
    CONSTRAINT [PK_HISTORY] PRIMARY KEY CLUSTERED ([id] ASC)
);

