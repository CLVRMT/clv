CREATE TABLE [dbo].[CYCLE_PROG_TMP] (
    [id]       VARCHAR (100) NOT NULL,
    [start]    DATETIME      NULL,
    [end]      DATETIME      NULL,
    [user_id]  VARCHAR (100) NULL,
    [ifc]      VARCHAR (45)  NULL,
    [cycle_id] VARCHAR (100) NULL,
    CONSTRAINT [PK_CYCLE_PROG_TMP] PRIMARY KEY CLUSTERED ([id] ASC)
);

