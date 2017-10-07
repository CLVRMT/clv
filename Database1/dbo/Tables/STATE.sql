CREATE TABLE [dbo].[STATE] (
    [id]        INT           IDENTITY (1, 1) NOT NULL,
    [module_id] INT           NOT NULL,
    [priority]  INT           NOT NULL,
    [name]      VARCHAR (100) NOT NULL,
    [action_id] INT           NULL,
    [type_cmp]  VARCHAR (5)   NOT NULL,
    [value]     VARCHAR (50)  NULL,
    [prefix]    VARCHAR (255) NULL,
    [suffix]    VARCHAR (255) NULL,
    [inc_val]   BIT           NOT NULL,
    [user_id]   INT           NOT NULL,
    [shared]    BIT           NOT NULL,
    [sync]      INT           NOT NULL,
    CONSTRAINT [PK_STATE] PRIMARY KEY CLUSTERED ([id] ASC)
);

