CREATE TABLE [dbo].[ASS_USE_LOG] (
    [id]         INT NOT NULL,
    [logger_id]  INT NOT NULL,
    [user_id]    INT NOT NULL,
    [log_seen]   BIT NOT NULL,
    [alert_seen] BIT NOT NULL,
    [sms_sent]   BIT NOT NULL,
    [sync]       BIT NOT NULL,
    [log_del]    BIT NOT NULL,
    [alert_del]  BIT NOT NULL,
    CONSTRAINT [PK_ASS_USE_LOG] PRIMARY KEY CLUSTERED ([id] ASC)
);

