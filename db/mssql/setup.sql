USE [master]
GO

IF DB_ID('AdoptAHighway') IS NOT NULL
  set noexec on               -- prevent creation when already exists

CREATE DATABASE [AdoptAHighway];
GO