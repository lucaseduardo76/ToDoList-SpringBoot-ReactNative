-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/07/2024 às 03:35
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `todolist`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_task`
--

CREATE TABLE `tb_task` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONAMENTOS PARA TABELAS `tb_task`:
--   `user_id`
--       `tb_user` -> `id`
--

--
-- Despejando dados para a tabela `tb_task`
--

INSERT INTO `tb_task` (`id`, `description`, `status`, `title`, `user_id`) VALUES
(1, 'Faz qualquer coisa ai', 1, 'Primeira Tarefa', 2),
(9, '', 0, 'Testando ', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_user`
--

CREATE TABLE `tb_user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONAMENTOS PARA TABELAS `tb_user`:
--

--
-- Despejando dados para a tabela `tb_user`
--

INSERT INTO `tb_user` (`id`, `email`, `name`, `password`) VALUES
(1, 'Lucas@gmail.com', 'Lucas Eduardo Souza da Silva', '153143'),
(2, 'ailla@gmail.com', 'Ailla Silva', '$2a$10$jkMvVL0rRZLZ1m2/Z8toSeQTGGGpygS08NoHd18GNDEeXmlhtSkMu'),
(4, 'lesds2001@gmail.com', 'Lucas Eduardo', '$2a$10$rfd/2v/BmEFYhl4nl57emuvOiFxjLohIJ4YGORucBe36lUd/R7QZa');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_task`
--
ALTER TABLE `tb_task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKekk0jr4msqy626yiiiyrikprb` (`user_id`);

--
-- Índices de tabela `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_task`
--
ALTER TABLE `tb_task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_task`
--
ALTER TABLE `tb_task`
  ADD CONSTRAINT `FKekk0jr4msqy626yiiiyrikprb` FOREIGN KEY (`user_id`) REFERENCES `tb_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
