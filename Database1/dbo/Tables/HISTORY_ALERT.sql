CREATE TABLE [dbo].[HISTORY_ALERT] (
    [id]           INT           IDENTITY (1, 1) NOT NULL,
    [cfg_alert_id] INT           NOT NULL,
    [user_id]      INT           NULL,
    [value]        VARCHAR (100) NOT NULL,
    [date]         DATETIME      NOT NULL,
    [seen]         BIT           NOT NULL,
    [sms_sent]     BIT           NOT NULL,
    CONSTRAINT [PK_HISTORY_ALERT] PRIMARY KEY CLUSTERED ([id] ASC, [date] ASC)
);

