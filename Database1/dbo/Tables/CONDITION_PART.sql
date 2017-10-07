CREATE TABLE [dbo].[CONDITION_PART] (
    [id]              INT IDENTITY (1, 1) NOT NULL,
    [sensor_cond_id]  INT NULL,
    [relay_cond_id]   INT NULL,
    [time_cond_id]    INT NULL,
    [complex_cond_id] INT NULL,
    [security]        BIT NOT NULL,
    CONSTRAINT [PK_CONDITION_PART] PRIMARY KEY CLUSTERED ([id] ASC)
);

