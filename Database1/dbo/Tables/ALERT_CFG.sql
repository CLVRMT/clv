CREATE TABLE [dbo].[ALERT_CFG] (
    [id]           INT           NOT NULL,
    [module_id]    INT           NULL,
    [message]      VARCHAR (512) NULL,
    [type]         VARCHAR (4)   NULL,
    [condition_id] INT           NULL,
    [user_id]      INT           NULL,
    [shared]       BIT           NULL,
    [sms]          BIT           NULL,
    [email]        BIT           NULL,
    CONSTRAINT [PK_ALERT_CFG] PRIMARY KEY CLUSTERED ([id] ASC)
);

