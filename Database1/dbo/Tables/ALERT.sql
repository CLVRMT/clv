CREATE TABLE [dbo].[ALERT] (
    [id]       INT          NOT NULL,
    [alert_id] INT          NULL,
    [source]   VARCHAR (5)  NULL,
    [date]     DATETIME     NULL,
    [name]     VARCHAR (45) NULL,
    CONSTRAINT [PK_ALERT] PRIMARY KEY CLUSTERED ([id] ASC)
);

