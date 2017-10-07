CREATE TABLE [dbo].[HABILITY] (
    [id]      INT         IDENTITY (1, 1) NOT NULL,
    [type]    VARCHAR (3) NOT NULL,
    [can_see] BIT         NOT NULL,
    [can_upd] BIT         NOT NULL,
    [can_add] BIT         NOT NULL,
    [can_del] BIT         NOT NULL,
    CONSTRAINT [PK_HABILITY] PRIMARY KEY CLUSTERED ([id] ASC)
);

