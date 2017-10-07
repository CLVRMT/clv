CREATE TABLE [dbo].[SYNC] (
    [id]          INT           IDENTITY (1, 1) NOT NULL,
    [Source]      VARCHAR (100) NOT NULL,
    [Destination] VARCHAR (100) NOT NULL,
    [Object]      VARCHAR (100) NOT NULL,
    [ObjectId]    INT           NOT NULL,
    [Action]      VARCHAR (100) NOT NULL,
    [Query]       VARCHAR (MAX) NOT NULL,
    [Done]        INT           NOT NULL,
    CONSTRAINT [PK_SYNC] PRIMARY KEY CLUSTERED ([id] ASC)
);

