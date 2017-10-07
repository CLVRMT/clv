CREATE TABLE [dbo].[PREFERENCE] (
    [id]            INT           IDENTITY (1, 1) NOT NULL,
    [name]          VARCHAR (100) NOT NULL,
    [enabled]       INT           NULL,
    [culture_id]    INT           NOT NULL,
    [comment]       VARCHAR (255) NULL,
    [themes]        VARCHAR (100) NOT NULL,
    [cfg_save]      BIT           NOT NULL,
    [activity_save] BIT           NOT NULL,
    [activity_log]  BIT           NOT NULL,
    [refresh_auto]  BIT           NOT NULL,
    [n_sms]         BIT           NOT NULL,
    [n_mail]        BIT           NOT NULL,
    [sync]          INT           NOT NULL,
    CONSTRAINT [PK_PREFERENCE] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_PREFERENCE_CULTURE1] FOREIGN KEY ([culture_id]) REFERENCES [dbo].[CULTURE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_PREFERENCE_CULTURE1]
    ON [dbo].[PREFERENCE]([culture_id] ASC);

