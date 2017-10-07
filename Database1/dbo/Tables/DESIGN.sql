CREATE TABLE [dbo].[DESIGN] (
    [id]        VARCHAR (50)    NOT NULL,
    [name]      VARCHAR (2000)  NULL,
    [type]      VARCHAR (3)     NULL,
    [parent_id] VARCHAR (50)    NULL,
    [data]      VARBINARY (MAX) NULL,
    [png]       VARBINARY (MAX) NULL,
    [def]       BIT             NULL,
    [sync]      BIT             NULL,
    [device_id] VARCHAR (50)    NULL,
    [parent]    VARCHAR (50)    NOT NULL,
    CONSTRAINT [PK_DESIGN] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_fki] FOREIGN KEY ([parent_id]) REFERENCES [dbo].[DESIGN] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_FK_fki]
    ON [dbo].[DESIGN]([parent_id] ASC);

