CREATE TABLE [dbo].[LOGGER] (
    [id]        INT          IDENTITY (1, 1) NOT NULL,
    [user_id]   INT          NOT NULL,
    [radio_id]  INT          NOT NULL,
    [port_num]  INT          NOT NULL,
    [action_id] INT          NULL,
    [value]     INT          NULL,
    [date]      DATETIME     NOT NULL,
    [ifc]       VARCHAR (20) NOT NULL,
    [success]   VARCHAR (10) NOT NULL,
    [done]      VARCHAR (10) NOT NULL,
    [sync]      INT          NOT NULL,
    CONSTRAINT [PK_LOGGER] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_LOGGER_MODULE1] FOREIGN KEY ([radio_id]) REFERENCES [dbo].[MODULE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_LOGGER_MODULE1]
    ON [dbo].[LOGGER]([radio_id] ASC);

