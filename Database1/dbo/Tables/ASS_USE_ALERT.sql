CREATE TABLE [dbo].[ASS_USE_ALERT] (
    [id]       INT IDENTITY (1, 1) NOT NULL,
    [alert_id] INT NOT NULL,
    [user_id]  INT NULL,
    [seen]     BIT NOT NULL,
    [deleted]  BIT NOT NULL,
    [sync]     BIT NOT NULL,
    CONSTRAINT [PK_ASS_USE_ALERT] PRIMARY KEY CLUSTERED ([id] ASC)
);

