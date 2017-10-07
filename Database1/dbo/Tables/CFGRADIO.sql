CREATE TABLE [dbo].[CFGRADIO] (
    [id]                   INT          IDENTITY (1, 1) NOT NULL,
    [device_id]            INT          NOT NULL,
    [current_digital_mask] VARCHAR (4)  NOT NULL,
    [current_analog_mask]  VARCHAR (2)  NOT NULL,
    [analog_mask]          VARCHAR (2)  NOT NULL,
    [digital_mask]         VARCHAR (2)  NOT NULL,
    [address]              VARCHAR (16) NOT NULL,
    [io]                   VARCHAR (3)  NOT NULL,
    [sync]                 INT          NOT NULL,
    [battery_level]        DECIMAL (18) NOT NULL,
    [is_connected]         BIT          NOT NULL,
    [db]                   INT          NOT NULL,
    CONSTRAINT [PK_CFGRADIO] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [fk_CFGRADIO_MODULE1] FOREIGN KEY ([device_id]) REFERENCES [dbo].[MODULE] ([id])
);


GO
CREATE NONCLUSTERED INDEX [IX_fk_CFGRADIO_MODULE1]
    ON [dbo].[CFGRADIO]([device_id] ASC);

