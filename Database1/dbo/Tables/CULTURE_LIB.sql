CREATE TABLE [dbo].[CULTURE_LIB] (
    [id]           INT           IDENTITY (1, 1) NOT NULL,
    [asscodcul_id] INT           NOT NULL,
    [lib]          VARCHAR (100) NOT NULL,
    CONSTRAINT [PK_CULTURE_LIB] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_CULTURE_LIB_ASS_COD_CUL1] FOREIGN KEY ([asscodcul_id]) REFERENCES [dbo].[ASS_COD_CUL] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_CULTURE_LIB_ASS_COD_CUL1]
    ON [dbo].[CULTURE_LIB]([asscodcul_id] ASC);

