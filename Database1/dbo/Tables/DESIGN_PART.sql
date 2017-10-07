CREATE TABLE [dbo].[DESIGN_PART] (
    [id]        VARCHAR (50)   NOT NULL,
    [name]      VARCHAR (2000) NULL,
    [type]      VARCHAR (3)    NULL,
    [design_id] VARCHAR (50)   NULL,
    [detail_id] VARCHAR (50)   NULL,
    [sync]      BIT            NULL,
    [parent]    VARCHAR (50)   NOT NULL,
    CONSTRAINT [PK_DESIGN_PART] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_DESIGN_PART_DESIGN] FOREIGN KEY ([design_id]) REFERENCES [dbo].[DESIGN] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_FK_DESIGN_PART_DESIGN]
    ON [dbo].[DESIGN_PART]([design_id] ASC);

