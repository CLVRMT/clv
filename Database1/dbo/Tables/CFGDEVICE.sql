CREATE TABLE [dbo].[CFGDEVICE] (
    [id]         INT          IDENTITY (1, 1) NOT NULL,
    [account_id] INT          NOT NULL,
    [ip_address] VARCHAR (50) NOT NULL,
    [is_local]   BIT          NOT NULL,
    [state]      BIT          NOT NULL,
    [icon]       VARCHAR (10) NOT NULL,
    [serial]     VARCHAR (50) NOT NULL,
    [registred]  BIT          NOT NULL,
    [updated]    BIT          NOT NULL,
    [server_ip]  VARCHAR (50) NOT NULL,
    [sync]       INT          NOT NULL,
    [def]        BIT          NULL,
    CONSTRAINT [PK_CFGDEVICE] PRIMARY KEY CLUSTERED ([id] ASC)
);

