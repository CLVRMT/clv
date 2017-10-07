CREATE TABLE [dbo].[DEVICE] (
    [id]         VARCHAR (50) NOT NULL,
    [name]       VARCHAR (45) NULL,
    [account_id] VARCHAR (45) NULL,
    [default]    BIT          NULL,
    [cfg_id]     VARCHAR (45) NULL,
    CONSTRAINT [PK_DEVICE] PRIMARY KEY CLUSTERED ([id] ASC)
);

