CREATE TABLE [dbo].[ASS_MOD_ALE] (
    [id]        INT IDENTITY (1, 1) NOT NULL,
    [module_id] INT NOT NULL,
    [alert_id]  INT NOT NULL,
    [sync]      INT NOT NULL,
    CONSTRAINT [PK_ASS_MOD_ALE] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_ASS_MOD_ALE_MODULE1] FOREIGN KEY ([module_id]) REFERENCES [dbo].[MODULE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_ASS_MOD_ALE_MODULE1]
    ON [dbo].[ASS_MOD_ALE]([module_id] ASC);

