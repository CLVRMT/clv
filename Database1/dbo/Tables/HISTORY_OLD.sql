CREATE TABLE [dbo].[HISTORY_OLD] (
    [id]        INT           NOT NULL,
    [user_id]   INT           NULL,
    [element]   VARCHAR (20)  NULL,
    [type]      VARCHAR (4)   NULL,
    [ifc]       VARCHAR (5)   NULL,
    [message]   VARCHAR (512) NULL,
    [parent_id] INT           NULL,
    [start]     DATETIME      NULL,
    [end]       DATETIME      NULL,
    CONSTRAINT [PK_HISTORY_OLD] PRIMARY KEY CLUSTERED ([id] ASC)
);

