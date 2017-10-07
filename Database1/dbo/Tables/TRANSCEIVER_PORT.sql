CREATE TABLE [dbo].[TRANSCEIVER_PORT] (
    [id]        INT         IDENTITY (1, 1) NOT NULL,
    [io]        VARCHAR (5) NOT NULL,
    [port_num]  INT         NOT NULL,
    [port_type] VARCHAR (5) NOT NULL,
    CONSTRAINT [PK_TRANSCEIVER_PORT] PRIMARY KEY CLUSTERED ([id] ASC)
);

