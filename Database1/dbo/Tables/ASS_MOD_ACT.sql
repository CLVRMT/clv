﻿CREATE TABLE [dbo].[ASS_MOD_ACT] (
    [id]        INT IDENTITY (1, 1) NOT NULL,
    [module_id] INT NOT NULL,
    [action_id] INT NOT NULL,
    [sync]      INT NOT NULL,
    CONSTRAINT [PK_ASS_MOD_ACT] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_ASS_MOD_ACT_ACTION1] FOREIGN KEY ([action_id]) REFERENCES [dbo].[ACTION] ([id]),
    CONSTRAINT [fk_ASS_MOD_ACT_MODULE1] FOREIGN KEY ([module_id]) REFERENCES [dbo].[MODULE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_ASS_MOD_ACT_MODULE1]
    ON [dbo].[ASS_MOD_ACT]([module_id] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_fk_ASS_MOD_ACT_ACTION1]
    ON [dbo].[ASS_MOD_ACT]([action_id] ASC);

