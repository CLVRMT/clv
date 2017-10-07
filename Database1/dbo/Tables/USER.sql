CREATE TABLE [dbo].[USER] (
    [id]         VARCHAR (100) NOT NULL,
    [user1]      VARCHAR (50)  NOT NULL,
    [password]   VARCHAR (255) NOT NULL,
    [email]      VARCHAR (128) NOT NULL,
    [phone]      VARCHAR (128) NOT NULL,
    [type]       VARCHAR (3)   NOT NULL,
    [first_name] VARCHAR (50)  NULL,
    [last_name]  VARCHAR (50)  NULL,
    [sync]       INT           NOT NULL,
    CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED ([id] ASC)
);

