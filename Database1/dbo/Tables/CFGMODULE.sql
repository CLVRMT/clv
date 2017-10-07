CREATE TABLE [dbo].[CFGMODULE] (
    [id]       INT          IDENTITY (1, 1) NOT NULL,
    [radio_id] INT          NOT NULL,
    [port_num] INT          NOT NULL,
    [color]    VARCHAR (20) NOT NULL,
    [sync]     INT          NOT NULL,
    CONSTRAINT [PK_CFGMODULE] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_CFGMODULE_MODULE1] FOREIGN KEY ([radio_id]) REFERENCES [dbo].[MODULE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_CFGMODULE_MODULE1]
    ON [dbo].[CFGMODULE]([radio_id] ASC);

