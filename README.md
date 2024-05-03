# Passion_Neige





![image](https://github.com/EyJunn/Passion_Neige/assets/154548599/ac21617c-0d53-4138-9d08-d38ebeb29597)




[Uploading passionneige (2).sql…]()-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 03 mai 2024 à 10:11
-- Version du serveur : 8.0.36
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `passionneige`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`category_id`, `name`) VALUES
(1, 'Ski'),
(2, 'Snowboard'),
(3, 'Chaussures de Ski'),
(4, 'Chaussures de Snowboard'),
(5, 'Bâtons de ski'),
(6, 'Casque de protection'),
(7, 'Masque de neige');

-- --------------------------------------------------------

--
-- Structure de la table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int NOT NULL AUTO_INCREMENT,
  `equipment_stock` int DEFAULT NULL,
  `equipment_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `equipment_size` int DEFAULT NULL,
  `image` varchar(1048) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `equipment_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`equipment_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `equipment_stock`, `equipment_name`, `equipment_size`, `image`, `equipment_description`, `category_id`) VALUES
(2, 3, 'Ski', 18, 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaWxkJTIwc2tpJTIwZXF1aXBtZW50fGVufDB8fDB8fHww', ' Ski pour un.e adolescent.e âgé.es 18 ans', NULL),
(3, 3, ' Ski pour enfant', 3, 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaWxkJTIwc2tpJTIwZXF1aXBtZW50fGVufDB8fDB8fHww', 'Skis pour enfants âgé.es de 3 ans ', NULL),
(4, 7, ' Ski pour enfant', 12, 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaWxkJTIwc2tpJTIwZXF1aXBtZW50fGVufDB8fDB8fHww', 'Skis pour enfants âgé.es de 12 ans ', NULL),
(5, 1, 'Bu', 4, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'zeqrgy-teuydvdbcx', NULL),
(7, 2, ' Snowboard', 10, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Planche de snowboard pour enfant âgé.es de 10 ans ', NULL),
(8, 2, ' Snowboard', 10, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Planche de snowboard pour enfant âgé.es de 10 ans ', NULL),
(9, 1, 'zaertsrjyh', 15, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'zeqrgy-teuydvdbcx', NULL),
(10, 2, ' Snowboard', 10, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Planche de snowboard pour enfant âgé.es de 10 ans ', NULL),
(11, 2, ' Snowboard', 10, 'https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Planche de snowboard pour enfant âgé.es de 10 ans ', NULL),
(12, 1, 'Bu', 17, 'https://www.passionsnow.com/img_s1/102148/boutique/kingfisher.jpg', 'sffgtytfvfg', NULL),
(13, 1, 'Bu', 17, 'https://www.passionsnow.com/img_s1/102148/boutique/kingfisher.jpg', 'sffgtytfvfg', NULL),
(14, 1, 'Bu', 20, 'https://www.passionsnow.com/img_s1/102148/boutique/kingfisher.jpg', 'èuyoç\'ruyjg', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `users_id` int DEFAULT NULL,
  `equipment_id` int DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`location_id`),
  KEY `users_id` (`users_id`),
  KEY `equipment_id` (`equipment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `users_id` int NOT NULL AUTO_INCREMENT,
  `last_name` varchar(25) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `first_name` varchar(25) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `gdpr` datetime DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'user',
  PRIMARY KEY (`users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`users_id`, `last_name`, `first_name`, `email`, `password`, `create_at`, `gdpr`, `role`) VALUES
(1, 'l\'affreux', 'jojo', 'jojo@jojo.jojo', '$2b$10$bGzJrd5XtCM6zBWikoWgLOOusUef1px27bXRuP8XWzNCmYVt2d3jW', '2024-04-25 16:03:23', '2024-04-25 16:03:23', 'user'),
(2, 'l\'affreux', 'jojo', 'jojo2@jojo.jojo', '$2b$10$r6JbnOEGlXgb8fnmQ3VEzuVyWTEyjIhTuG8/qHZYMd5MXYOBhS5mW', '2024-04-25 16:06:00', '2024-04-25 16:06:00', 'user'),
(4, 'Lui', 'Moi', 'oki@oki.oki', '$2b$10$sqZNUEqD14vndVRC1xPK6.rXEIBTMyJM91Ga8vJ6VS.GBdabqC4SW', '2024-04-29 10:11:18', '2024-04-29 10:11:18', 'admin'),
(5, 'Lui', 'Moi', 'oki2@oki.oki', '$2b$10$bcoFbB5jdFvFUw8tCg13GezAwRHrtTrKfi2ezoWf8CeJE7PPSaR3G', '2024-04-30 09:45:05', '2024-04-30 09:45:05', 'user'),
(6, 'Delacour', 'Fleur', 'fleurdelacour@gmail.com', '$2b$10$hONKz9CXqitjnVEuqGA4cu4HVMsjwdxUmgKmJZlSS/aveue.Hu3Zq', '2024-04-30 11:08:55', '2024-04-30 11:08:55', 'user'),
(10, 'Marguer', 'Lichel', 'lichelmarguer@gmail.com', '$2b$10$EFFKA9adIDifW4mp1q3BTey1GcHmUgiDvv9Oz0c6nF9R/YIH19e1a', '2024-04-30 11:13:54', '2024-04-30 11:13:54', 'user'),
(11, 'Marguer', 'Lichel', 'lichelmargue2r@gmail.com', '$2b$10$Z9R10V6JbG3T3vym0l4F5OHAmT9FKL1D73mdDjHOEi91DUUNgwfiG', '2024-04-30 11:14:42', '2024-04-30 11:14:42', 'user'),
(12, 'verjnvhbrfbrghfy', 'oehbfroeyibgyor', 'vidbgyuoruf@gmail.com', '$2b$10$IfY5YEM8dhd8vC1OOgHOlOaRVQLigSNsSir2Ofp6dCAkCASolN72K', '2024-04-30 11:14:59', '2024-04-30 11:14:59', 'user'),
(13, 'qefTBIH', 'reR3QZEYIL', 'qfzesrtfihnjokuvhcdfsw@gmail.com', '$2b$10$AUo0SgILQzNmx5ssCNS0A.c6Z17.7zv7qGfup3scJwB5qGX/yUOEO', '2024-04-30 11:15:39', '2024-04-30 11:15:39', 'user');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `equipment`
--
ALTER TABLE `equipment`
  ADD CONSTRAINT `equipment_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Contraintes pour la table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`users_id`),
  ADD CONSTRAINT `location_ibfk_2` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`equipment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

