CREATE TABLE [dbo].[SEQ_NUMBER] (
    [sequence_name]      VARCHAR (100) NOT NULL,
    [sequence_increment] BIGINT        NOT NULL,
    [sequence_min_value] BIGINT        NOT NULL,
    [sequence_max_value] DECIMAL (18)  NOT NULL,
    [sequence_cur_value] DECIMAL (18)  NULL,
    [sequence_cycle]     BIT           NOT NULL,
    CONSTRAINT [PK_SEQ_NUMBER] PRIMARY KEY CLUSTERED ([sequence_name] ASC)
);

