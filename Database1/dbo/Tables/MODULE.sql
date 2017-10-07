CREATE TABLE [dbo].[MODULE] (
    [id]           INT           IDENTITY (1, 1) NOT NULL,
    [name]         VARCHAR (20)  NOT NULL,
    [type_id]      INT           NOT NULL,
    [parent_id]    INT           NULL,
    [cfgradio_id]  INT           NULL,
    [cfgmodule_id] INT           NULL,
    [cfgdevice_id] INT           NULL,
    [cfgfolder_id] INT           NULL,
    [icon]         VARCHAR (100) NULL,
    [comment]      VARCHAR (255) NULL,
    [sync]         INT           NULL,
    CONSTRAINT [PK_MODULE] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_MODULE_CFGDEVICE1] FOREIGN KEY ([cfgdevice_id]) REFERENCES [dbo].[CFGDEVICE] ([id]),
    CONSTRAINT [fk_MODULE_CFGFOLDER1] FOREIGN KEY ([cfgfolder_id]) REFERENCES [dbo].[CFGFOLDER] ([id]),
    CONSTRAINT [fk_MODULE_CFGMODULE1] FOREIGN KEY ([cfgmodule_id]) REFERENCES [dbo].[CFGMODULE] ([id]),
    CONSTRAINT [fk_MODULE_CFGRADIO1] FOREIGN KEY ([cfgradio_id]) REFERENCES [dbo].[CFGRADIO] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_MODULE_CFGRADIO1]
    ON [dbo].[MODULE]([cfgradio_id] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_fk_MODULE_CFGMODULE1]
    ON [dbo].[MODULE]([cfgmodule_id] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_fk_MODULE_CFGFOLDER1]
    ON [dbo].[MODULE]([cfgfolder_id] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_fk_MODULE_CFGDEVICE1]
    ON [dbo].[MODULE]([cfgdevice_id] ASC);

