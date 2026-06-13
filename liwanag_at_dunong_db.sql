-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2025 at 10:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `liwanag_at_dunong_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('super_admin','editor','viewer') NOT NULL DEFAULT 'viewer',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `last_login` datetime DEFAULT NULL,
  `account_status` enum('active','disabled') NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `username`, `password`, `role`, `created_at`, `last_login`, `account_status`) VALUES
(7, 'aron_arboleda', '$2y$10$UNsLDp4DAjEk3cxNZ7352OfNL0i6zXepYQwLUX2Js2i86x8Vc.o56', 'super_admin', '2025-01-20 11:59:20', '2025-02-03 09:16:52', 'active'),
(8, 'kimgeorgia', '$2y$10$WK7AlS.nX.pUf5Y1MBTy4uUjqiE.MLzdlThzcg9BA79Jd66enZiua', 'editor', '2025-01-21 13:27:57', '2025-01-26 11:18:06', 'active'),
(9, 'edu_admin', '$2y$10$ZhfFhK9Y47D4y/LdtPUEj.PtZH7jlqqHb0sfDP//BOA9X198PLZdG', 'viewer', '2025-01-21 13:58:31', '2025-01-26 05:42:40', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `page_views`
--

CREATE TABLE `page_views` (
  `id` int(11) NOT NULL,
  `page_url` varchar(255) DEFAULT NULL,
  `visit_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `ip_address` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `page_views`
--

INSERT INTO `page_views` (`id`, `page_url`, `visit_time`, `ip_address`) VALUES
(4, '/about', '2025-01-25 07:20:58', '::1'),
(5, '/faqs', '2025-01-25 07:25:07', '::1'),
(6, '/faqs', '2025-01-25 07:25:07', '::1'),
(7, '/volunteer', '2025-01-25 07:25:11', '::1'),
(8, '/volunteer', '2025-01-25 07:25:11', '::1'),
(9, '/literacy', '2025-01-25 07:25:54', '::1'),
(10, '/literacy', '2025-01-25 07:25:54', '::1'),
(11, '/literacy', '2025-01-25 07:35:11', '::1'),
(12, '/', '2025-01-25 08:02:18', '::1'),
(13, '/', '2025-01-25 08:02:18', '::1'),
(14, '/', '2025-01-25 08:16:01', '::1'),
(15, '/', '2025-01-25 08:16:08', '::1'),
(16, '/privacy-policy', '2025-01-25 08:27:34', '::1'),
(17, '/privacy-policy', '2025-01-25 08:27:34', '::1'),
(18, '/terms-and-conditions', '2025-01-25 08:27:49', '::1'),
(19, '/terms-and-conditions', '2025-01-25 08:27:49', '::1'),
(20, '/', '2025-01-25 08:32:49', '::1'),
(21, '/', '2025-01-25 08:32:49', '::1'),
(22, '/', '2025-01-26 03:28:09', '::1'),
(23, '/', '2025-01-26 03:28:09', '::1'),
(24, '/about', '2025-01-26 03:28:10', '::1'),
(25, '/about', '2025-01-26 03:28:10', '::1'),
(26, '/', '2025-01-26 03:29:16', '::1'),
(27, '/', '2025-01-26 03:29:16', '::1'),
(28, '/literacy', '2025-01-26 03:29:18', '::1'),
(29, '/literacy', '2025-01-26 03:29:18', '::1'),
(30, '/network', '2025-01-26 03:29:19', '::1'),
(31, '/network', '2025-01-26 03:29:19', '::1'),
(32, '/', '2025-01-26 07:37:16', '::1'),
(33, '/', '2025-01-26 07:37:16', '::1'),
(34, '/', '2025-01-26 07:50:42', '::1'),
(35, '/', '2025-01-26 07:50:42', '::1'),
(36, '/', '2025-01-26 09:18:18', '::1'),
(37, '/', '2025-01-26 09:18:18', '::1'),
(38, '/', '2025-01-26 09:35:51', '::1'),
(39, '/', '2025-01-26 09:35:51', '::1'),
(40, '/volunteer', '2025-01-29 02:18:08', '::1'),
(41, '/volunteer', '2025-01-29 02:18:08', '::1'),
(42, '/volunteer', '2025-01-29 02:21:48', '::1'),
(43, '/volunteer', '2025-01-29 02:22:13', '::1'),
(44, '/volunteer', '2025-01-29 02:24:08', '::1'),
(45, '/volunteer', '2025-01-29 02:25:14', '::1'),
(46, '/volunteer', '2025-01-29 02:25:14', '::1'),
(47, '/volunteer', '2025-01-29 02:25:50', '::1'),
(48, '/volunteer', '2025-01-29 02:25:56', '::1'),
(49, '/volunteer', '2025-01-29 02:26:06', '::1'),
(50, '/volunteer', '2025-01-29 02:26:11', '::1'),
(51, '/volunteer', '2025-01-29 02:26:42', '::1'),
(52, '/volunteer', '2025-01-29 02:36:11', '::1'),
(53, '/volunteer', '2025-01-29 02:41:13', '::1'),
(54, '/volunteer', '2025-01-29 02:41:15', '::1'),
(55, '/volunteer', '2025-01-29 02:41:15', '::1'),
(56, '/volunteer', '2025-01-29 02:44:14', '::1'),
(57, '/volunteer', '2025-01-29 02:44:14', '::1'),
(58, '/volunteer', '2025-01-29 02:47:26', '::1'),
(59, '/volunteer', '2025-01-29 02:47:26', '::1'),
(60, '/volunteer', '2025-01-29 02:50:26', '::1'),
(61, '/volunteer', '2025-01-29 02:51:15', '::1'),
(62, '/volunteer', '2025-01-29 02:51:28', '::1'),
(63, '/volunteer', '2025-01-29 02:51:28', '::1'),
(64, '/volunteer', '2025-01-29 02:53:09', '::1'),
(65, '/volunteer', '2025-01-29 02:54:28', '::1'),
(66, '/volunteer', '2025-01-29 02:57:17', '::1'),
(67, '/volunteer', '2025-01-29 02:57:17', '::1'),
(68, '/volunteer', '2025-01-29 03:00:54', '::1'),
(69, '/volunteer', '2025-01-29 03:00:54', '::1'),
(70, '/volunteer', '2025-01-29 03:09:31', '::1'),
(71, '/volunteer', '2025-01-29 03:09:31', '::1'),
(72, '/volunteer', '2025-01-29 03:09:52', '::1'),
(73, '/volunteer', '2025-01-29 03:09:52', '::1'),
(74, '/volunteer', '2025-01-29 03:13:36', '::1'),
(75, '/volunteer', '2025-01-29 03:13:36', '::1'),
(76, '/volunteer', '2025-01-29 03:13:56', '::1'),
(77, '/volunteer', '2025-01-29 03:13:56', '::1'),
(78, '/volunteer', '2025-01-29 03:14:19', '::1'),
(79, '/volunteer', '2025-01-29 03:14:19', '::1'),
(80, '/volunteer', '2025-01-29 03:14:53', '::1'),
(81, '/volunteer', '2025-01-29 03:14:53', '::1'),
(82, '/volunteer', '2025-01-29 03:15:26', '::1'),
(83, '/volunteer', '2025-01-29 03:15:26', '::1'),
(84, '/volunteer', '2025-01-29 03:15:42', '::1'),
(85, '/volunteer', '2025-01-29 03:15:42', '::1'),
(86, '/volunteer', '2025-01-29 03:15:51', '::1'),
(87, '/volunteer', '2025-01-29 03:15:51', '::1'),
(88, '/volunteer', '2025-01-29 03:16:57', '::1'),
(89, '/volunteer', '2025-01-29 03:16:57', '::1'),
(90, '/volunteer', '2025-01-29 03:17:10', '::1'),
(91, '/volunteer', '2025-01-29 03:17:10', '::1'),
(92, '/volunteer', '2025-01-29 03:17:40', '::1'),
(93, '/volunteer', '2025-01-29 03:17:40', '::1'),
(94, '/volunteer', '2025-01-29 03:19:41', '::1'),
(95, '/volunteer', '2025-01-29 03:19:41', '::1'),
(96, '/volunteer', '2025-01-29 03:21:00', '::1'),
(97, '/volunteer', '2025-01-29 03:21:06', '::1'),
(98, '/volunteer', '2025-01-29 03:23:36', '::1'),
(99, '/volunteer', '2025-01-29 03:25:22', '::1'),
(100, '/volunteer', '2025-01-29 03:25:26', '::1'),
(101, '/volunteer', '2025-01-29 03:29:51', '::1'),
(102, '/volunteer', '2025-01-29 03:30:06', '::1'),
(103, '/volunteer', '2025-01-29 03:31:02', '::1'),
(104, '/volunteer', '2025-01-29 03:33:05', '::1'),
(105, '/volunteer', '2025-01-29 03:33:40', '::1'),
(106, '/volunteer', '2025-01-29 03:33:51', '::1'),
(107, '/volunteer', '2025-01-29 03:39:08', '::1'),
(108, '/volunteer', '2025-01-29 03:39:23', '::1'),
(109, '/volunteer', '2025-01-29 03:46:16', '::1'),
(110, '/volunteer', '2025-01-29 03:46:16', '::1'),
(111, '/volunteer', '2025-01-29 03:56:34', '::1'),
(112, '/volunteer', '2025-01-29 03:56:34', '::1'),
(113, '/volunteer', '2025-01-29 03:57:13', '::1'),
(114, '/volunteer', '2025-01-29 03:57:13', '::1'),
(115, '/volunteer', '2025-01-29 04:03:10', '::1'),
(116, '/volunteer', '2025-01-29 04:03:10', '::1'),
(117, '/volunteer', '2025-01-29 04:04:52', '::1'),
(118, '/volunteer', '2025-01-29 04:04:52', '::1'),
(119, '/volunteer', '2025-01-29 04:06:39', '::1'),
(120, '/volunteer', '2025-01-29 04:19:54', '::1'),
(121, '/volunteer', '2025-01-29 04:19:54', '::1'),
(122, '/volunteer', '2025-01-29 04:20:50', '::1'),
(123, '/volunteer', '2025-01-29 04:20:50', '::1'),
(124, '/volunteer', '2025-01-29 04:33:31', '::1'),
(125, '/volunteer', '2025-01-29 04:33:31', '::1'),
(126, '/volunteer', '2025-01-29 04:33:34', '::1'),
(127, '/volunteer', '2025-01-29 04:33:34', '::1'),
(128, '/volunteer', '2025-01-29 04:34:47', '::1'),
(129, '/volunteer', '2025-01-29 04:34:47', '::1'),
(130, '/volunteer', '2025-01-29 04:35:19', '::1'),
(131, '/volunteer', '2025-01-29 04:35:20', '::1'),
(132, '/volunteer', '2025-01-29 04:36:46', '::1'),
(133, '/volunteer', '2025-01-29 04:36:46', '::1'),
(134, '/volunteer', '2025-01-29 04:36:50', '::1'),
(135, '/volunteer', '2025-01-29 04:36:50', '::1'),
(136, '/volunteer', '2025-01-29 04:37:05', '::1'),
(137, '/volunteer', '2025-01-29 04:37:05', '::1'),
(138, '/volunteer', '2025-01-29 04:37:51', '::1'),
(139, '/volunteer', '2025-01-29 04:37:51', '::1'),
(140, '/volunteer', '2025-01-29 04:38:35', '::1'),
(141, '/volunteer', '2025-01-29 04:38:35', '::1'),
(142, '/volunteer', '2025-01-29 04:39:37', '::1'),
(143, '/volunteer', '2025-01-29 04:39:37', '::1'),
(144, '/volunteer', '2025-01-29 04:53:24', '::1'),
(145, '/volunteer', '2025-01-29 04:53:24', '::1'),
(146, '/volunteer', '2025-01-29 04:53:27', '::1'),
(147, '/volunteer', '2025-01-29 04:53:27', '::1'),
(148, '/volunteer', '2025-01-29 05:19:17', '::1'),
(149, '/volunteer', '2025-01-29 05:19:17', '::1'),
(150, '/volunteer', '2025-01-29 05:21:36', '::1'),
(151, '/volunteer', '2025-01-29 05:21:36', '::1'),
(152, '/volunteer', '2025-01-29 05:21:45', '::1'),
(153, '/volunteer', '2025-01-29 05:21:45', '::1'),
(154, '/volunteer', '2025-01-29 05:36:49', '::1'),
(155, '/volunteer', '2025-01-29 05:36:49', '::1'),
(156, '/volunteer', '2025-01-29 05:38:32', '::1'),
(157, '/volunteer', '2025-01-29 05:38:40', '::1'),
(158, '/volunteer', '2025-01-29 05:38:55', '::1'),
(159, '/volunteer', '2025-01-29 05:39:19', '::1'),
(160, '/volunteer', '2025-01-29 05:39:19', '::1'),
(161, '/volunteer', '2025-01-29 05:39:30', '::1'),
(162, '/volunteer', '2025-01-29 05:39:30', '::1'),
(163, '/volunteer', '2025-01-29 05:51:04', '::1'),
(164, '/volunteer', '2025-01-29 05:52:55', '::1'),
(165, '/volunteer', '2025-01-29 05:54:00', '::1'),
(166, '/volunteer', '2025-01-29 05:55:01', '::1'),
(167, '/volunteer', '2025-01-29 06:14:56', '::1'),
(168, '/volunteer', '2025-01-29 06:14:56', '::1'),
(169, '/volunteer', '2025-01-29 06:15:13', '::1'),
(170, '/volunteer', '2025-01-29 06:15:13', '::1'),
(171, '/volunteer', '2025-01-29 06:15:24', '::1'),
(172, '/volunteer', '2025-01-29 06:15:24', '::1'),
(173, '/volunteer', '2025-01-29 06:16:11', '::1'),
(174, '/volunteer', '2025-01-29 06:16:11', '::1'),
(175, '/volunteer', '2025-01-29 06:16:38', '::1'),
(176, '/volunteer', '2025-01-29 06:16:38', '::1'),
(177, '/volunteer', '2025-01-29 06:16:59', '::1'),
(178, '/volunteer', '2025-01-29 06:16:59', '::1'),
(179, '/volunteer', '2025-01-29 06:21:08', '::1'),
(180, '/volunteer', '2025-01-29 06:21:08', '::1'),
(181, '/volunteer', '2025-01-29 06:21:12', '::1'),
(182, '/volunteer', '2025-01-29 06:21:12', '::1'),
(183, '/volunteer', '2025-01-29 06:21:45', '::1'),
(184, '/volunteer', '2025-01-29 06:21:45', '::1'),
(185, '/volunteer', '2025-01-29 06:23:01', '::1'),
(186, '/volunteer', '2025-01-29 06:23:01', '::1'),
(187, '/volunteer', '2025-01-29 06:29:30', '::1'),
(188, '/volunteer', '2025-01-29 06:29:57', '::1'),
(189, '/volunteer', '2025-01-29 06:33:40', '::1'),
(190, '/volunteer', '2025-01-29 06:40:31', '::1'),
(191, '/volunteer', '2025-01-29 06:40:31', '::1'),
(192, '/volunteer', '2025-01-29 06:44:31', '::1'),
(193, '/volunteer', '2025-01-29 06:44:47', '::1'),
(194, '/volunteer', '2025-01-29 06:45:29', '::1'),
(195, '/volunteer', '2025-01-29 06:46:19', '::1'),
(196, '/volunteer', '2025-01-29 06:46:31', '::1'),
(197, '/volunteer', '2025-01-29 06:46:55', '::1'),
(198, '/volunteer', '2025-01-29 06:48:00', '::1'),
(199, '/volunteer', '2025-01-29 06:48:13', '::1'),
(200, '/volunteer', '2025-01-29 06:48:43', '::1'),
(201, '/volunteer', '2025-01-29 06:48:47', '::1'),
(202, '/volunteer', '2025-01-29 06:48:52', '::1'),
(203, '/volunteer', '2025-01-29 06:49:04', '::1'),
(204, '/volunteer', '2025-01-29 06:49:16', '::1'),
(205, '/volunteer', '2025-01-29 06:49:36', '::1'),
(206, '/volunteer', '2025-01-29 06:50:04', '::1'),
(207, '/volunteer', '2025-01-29 06:50:33', '::1'),
(208, '/volunteer', '2025-01-29 06:51:20', '::1'),
(209, '/volunteer', '2025-01-29 06:56:13', '::1'),
(210, '/volunteer', '2025-01-29 06:58:00', '::1'),
(211, '/volunteer', '2025-01-29 06:58:12', '::1'),
(212, '/volunteer', '2025-01-29 06:58:59', '::1'),
(213, '/volunteer', '2025-01-29 06:59:32', '::1'),
(214, '/volunteer', '2025-01-29 06:59:44', '::1'),
(215, '/volunteer', '2025-01-29 06:59:58', '::1'),
(216, '/volunteer', '2025-01-29 07:01:47', '::1'),
(217, '/volunteer', '2025-01-29 07:01:52', '::1'),
(218, '/volunteer', '2025-01-29 07:01:56', '::1'),
(219, '/volunteer', '2025-01-29 07:02:35', '::1'),
(220, '/volunteer', '2025-01-29 07:02:54', '::1'),
(221, '/volunteer', '2025-01-29 07:03:10', '::1'),
(222, '/volunteer', '2025-01-29 07:03:10', '::1'),
(223, '/volunteer', '2025-01-29 07:05:51', '::1'),
(224, '/volunteer', '2025-01-29 07:06:02', '::1'),
(225, '/volunteer', '2025-01-29 07:06:02', '::1'),
(226, '/volunteer', '2025-01-29 07:06:20', '::1'),
(227, '/volunteer', '2025-01-29 07:06:20', '::1'),
(228, '/volunteer', '2025-01-29 07:10:52', '::1'),
(229, '/volunteer', '2025-01-29 07:11:07', '::1'),
(230, '/volunteer', '2025-01-29 07:11:07', '::1'),
(231, '/volunteer', '2025-01-29 07:12:33', '::1'),
(232, '/volunteer', '2025-01-29 07:12:36', '::1'),
(233, '/volunteer', '2025-01-29 07:12:36', '::1'),
(234, '/volunteer', '2025-01-29 07:14:56', '::1'),
(235, '/volunteer', '2025-01-29 07:14:56', '::1'),
(236, '/volunteer', '2025-01-29 07:20:13', '::1'),
(237, '/volunteer', '2025-01-29 07:20:13', '::1'),
(238, '/volunteer', '2025-01-29 07:21:46', '::1'),
(239, '/volunteer', '2025-01-29 07:21:46', '::1'),
(240, '/volunteer', '2025-01-29 07:22:16', '::1'),
(241, '/volunteer', '2025-01-29 07:22:16', '::1'),
(242, '/volunteer', '2025-01-29 07:26:51', '::1'),
(243, '/volunteer', '2025-01-29 07:26:51', '::1'),
(244, '/volunteer', '2025-01-29 07:28:27', '::1'),
(245, '/volunteer', '2025-01-29 07:28:27', '::1'),
(246, '/volunteer', '2025-01-29 07:28:30', '::1'),
(247, '/volunteer', '2025-01-29 07:28:30', '::1'),
(248, '/volunteer', '2025-01-29 07:37:44', '::1'),
(249, '/volunteer', '2025-01-29 07:37:49', '::1'),
(250, '/volunteer', '2025-01-29 07:38:30', '::1'),
(251, '/volunteer', '2025-01-29 07:42:09', '::1'),
(252, '/volunteer', '2025-01-29 07:48:18', '::1'),
(253, '/volunteer', '2025-01-29 07:48:18', '::1'),
(254, '/volunteer', '2025-01-29 07:48:35', '::1'),
(255, '/volunteer', '2025-01-29 07:48:35', '::1'),
(256, '/volunteer', '2025-01-29 07:48:44', '::1'),
(257, '/volunteer', '2025-01-29 07:48:44', '::1'),
(258, '/volunteer', '2025-01-29 07:49:07', '::1'),
(259, '/volunteer', '2025-01-29 07:49:07', '::1'),
(260, '/volunteer', '2025-01-29 07:54:55', '::1'),
(261, '/volunteer', '2025-01-29 07:54:55', '::1'),
(262, '/volunteer', '2025-01-29 07:59:19', '::1'),
(263, '/volunteer', '2025-01-29 07:59:19', '::1'),
(264, '/volunteer', '2025-01-29 08:00:15', '::1'),
(265, '/volunteer', '2025-01-29 08:00:15', '::1'),
(266, '/volunteer', '2025-01-29 08:02:47', '::1'),
(267, '/volunteer', '2025-01-29 08:02:47', '::1'),
(268, '/volunteer', '2025-01-29 08:03:50', '::1'),
(269, '/volunteer', '2025-01-29 08:03:50', '::1'),
(270, '/volunteer', '2025-01-29 08:05:28', '::1'),
(271, '/volunteer', '2025-01-29 08:06:31', '::1'),
(272, '/volunteer', '2025-01-29 08:06:31', '::1'),
(273, '/volunteer', '2025-01-29 08:07:55', '::1'),
(274, '/volunteer', '2025-01-29 08:07:55', '::1'),
(275, '/volunteer', '2025-01-29 08:10:52', '::1'),
(276, '/volunteer', '2025-01-29 08:10:53', '::1'),
(277, '/volunteer', '2025-01-29 08:12:52', '::1'),
(278, '/volunteer', '2025-01-29 08:12:52', '::1'),
(279, '/volunteer', '2025-01-29 08:16:54', '::1'),
(280, '/volunteer', '2025-01-29 08:16:54', '::1'),
(281, '/volunteer', '2025-01-29 08:17:54', '::1'),
(282, '/volunteer', '2025-01-29 08:17:54', '::1'),
(283, '/volunteer', '2025-01-29 08:31:18', '::1'),
(284, '/volunteer', '2025-01-29 08:31:18', '::1'),
(285, '/volunteer', '2025-01-29 08:32:54', '::1'),
(286, '/volunteer', '2025-01-29 08:32:54', '::1'),
(287, '/volunteer', '2025-01-29 08:34:42', '::1'),
(288, '/volunteer', '2025-01-29 08:34:42', '::1'),
(289, '/volunteer', '2025-01-29 08:38:09', '::1'),
(290, '/volunteer', '2025-01-29 08:38:13', '::1'),
(291, '/', '2025-01-29 08:51:40', '::1'),
(292, '/', '2025-01-29 08:51:40', '::1'),
(293, '/volunteer', '2025-01-29 08:51:46', '::1'),
(294, '/volunteer', '2025-01-29 08:51:46', '::1'),
(295, '/volunteer', '2025-01-29 08:56:59', '::1'),
(296, '/volunteer', '2025-01-29 08:57:01', '::1'),
(297, '/volunteer', '2025-01-29 08:57:01', '::1'),
(298, '/volunteer', '2025-01-29 08:58:00', '::1'),
(299, '/volunteer', '2025-01-29 08:58:08', '::1'),
(300, '/volunteer', '2025-01-29 09:06:40', '::1'),
(301, '/volunteer', '2025-01-29 09:06:55', '::1'),
(302, '/volunteer', '2025-01-29 09:10:07', '::1'),
(303, '/volunteer', '2025-01-29 09:10:30', '::1'),
(304, '/volunteer', '2025-01-29 09:10:37', '::1'),
(305, '/volunteer', '2025-01-29 09:11:16', '::1'),
(306, '/volunteer', '2025-01-29 09:13:56', '::1'),
(307, '/volunteer', '2025-01-29 09:14:42', '::1'),
(308, '/volunteer', '2025-01-29 09:14:42', '::1'),
(309, '/volunteer', '2025-01-29 09:17:56', '::1'),
(310, '/volunteer', '2025-01-29 09:17:56', '::1'),
(311, '/', '2025-01-29 09:44:16', '::1'),
(312, '/', '2025-01-29 09:44:16', '::1'),
(313, '/volunteer', '2025-01-29 09:44:18', '::1'),
(314, '/volunteer', '2025-01-29 09:44:18', '::1'),
(315, '/', '2025-01-29 09:46:54', '::1'),
(316, '/', '2025-01-29 09:46:54', '::1'),
(317, '/volunteer', '2025-01-29 09:46:56', '::1'),
(318, '/volunteer', '2025-01-29 09:46:56', '::1'),
(319, '/', '2025-01-29 09:52:34', '::1'),
(320, '/', '2025-01-29 09:52:34', '::1'),
(321, '/volunteer', '2025-01-29 09:52:40', '::1'),
(322, '/volunteer', '2025-01-29 09:52:40', '::1'),
(323, '/volunteer', '2025-01-29 09:57:43', '::1'),
(324, '/volunteer', '2025-01-29 09:57:45', '::1'),
(325, '/volunteer', '2025-01-29 10:02:52', '::1'),
(326, '/volunteer', '2025-01-29 10:03:38', '::1'),
(327, '/volunteer', '2025-01-29 10:05:58', '::1'),
(328, '/volunteer', '2025-01-29 10:05:58', '::1'),
(329, '/', '2025-01-29 10:29:49', '::1'),
(330, '/', '2025-01-29 10:29:49', '::1'),
(331, '/volunteer', '2025-01-29 10:29:57', '::1'),
(332, '/volunteer', '2025-01-29 10:29:57', '::1'),
(333, '/volunteer', '2025-01-29 10:30:41', '::1'),
(334, '/volunteer', '2025-01-29 10:30:41', '::1'),
(335, '/volunteer', '2025-01-29 10:35:15', '::1'),
(336, '/volunteer', '2025-01-29 10:35:15', '::1'),
(337, '/volunteer', '2025-01-29 10:36:37', '::1'),
(338, '/volunteer', '2025-01-29 10:36:37', '::1'),
(339, '/volunteer', '2025-01-29 10:37:15', '::1'),
(340, '/volunteer', '2025-01-29 10:37:15', '::1'),
(341, '/', '2025-01-29 10:47:43', '::1'),
(342, '/', '2025-01-29 10:47:43', '::1'),
(343, '/volunteer', '2025-01-29 10:47:45', '::1'),
(344, '/volunteer', '2025-01-29 10:47:45', '::1'),
(345, '/', '2025-01-29 10:49:13', '::1'),
(346, '/', '2025-01-29 10:49:13', '::1'),
(347, '/about', '2025-01-29 10:49:17', '::1'),
(348, '/about', '2025-01-29 10:49:17', '::1'),
(349, '/support', '2025-01-29 10:49:35', '::1'),
(350, '/support', '2025-01-29 10:49:35', '::1'),
(351, '/network', '2025-01-29 10:49:37', '::1'),
(352, '/network', '2025-01-29 10:49:37', '::1'),
(353, '/support', '2025-01-29 10:49:38', '::1'),
(354, '/support', '2025-01-29 10:49:38', '::1'),
(355, '/network', '2025-01-29 10:49:39', '::1'),
(356, '/network', '2025-01-29 10:49:39', '::1'),
(357, '/terms-and-conditions', '2025-01-29 10:49:58', '::1'),
(358, '/terms-and-conditions', '2025-01-29 10:49:58', '::1'),
(359, '/network', '2025-01-29 10:50:01', '::1'),
(360, '/network', '2025-01-29 10:50:01', '::1'),
(361, '/literacy', '2025-01-29 10:50:06', '::1'),
(362, '/literacy', '2025-01-29 10:50:06', '::1'),
(363, '/support', '2025-01-29 10:50:10', '::1'),
(364, '/support', '2025-01-29 10:50:10', '::1'),
(365, '/volunteer', '2025-01-29 10:50:11', '::1'),
(366, '/volunteer', '2025-01-29 10:50:11', '::1'),
(367, '/faqs', '2025-01-29 10:50:24', '::1'),
(368, '/faqs', '2025-01-29 10:50:24', '::1'),
(369, '/', '2025-01-30 05:59:10', '::1'),
(370, '/', '2025-01-30 05:59:10', '::1'),
(371, '/', '2025-01-30 06:13:01', '::1'),
(372, '/', '2025-01-30 06:13:01', '::1'),
(373, '/volunteer', '2025-01-30 06:13:06', '::1'),
(374, '/volunteer', '2025-01-30 06:13:06', '::1'),
(375, '/faqs', '2025-01-30 06:13:06', '::1'),
(376, '/faqs', '2025-01-30 06:13:06', '::1'),
(377, '/about', '2025-01-30 06:13:07', '::1'),
(378, '/about', '2025-01-30 06:13:07', '::1'),
(379, '/', '2025-01-30 06:13:08', '::1'),
(380, '/', '2025-01-30 06:13:08', '::1'),
(381, '/', '2025-02-03 08:16:43', '::1'),
(382, '/', '2025-02-03 08:16:43', '::1');

-- --------------------------------------------------------

--
-- Table structure for table `social_platforms`
--

CREATE TABLE `social_platforms` (
  `id` int(11) NOT NULL,
  `platform_name` varchar(50) NOT NULL,
  `followers_count` bigint(20) DEFAULT 0,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_platforms`
--

INSERT INTO `social_platforms` (`id`, `platform_name`, `followers_count`, `last_updated`) VALUES
(1, 'facebook', 6221, '2025-02-03 08:50:24'),
(2, 'instagram', 565, '2025-02-03 08:50:24'),
(3, 'x', 59, '2025-02-03 08:50:24'),
(4, 'tiktok', 386, '2025-02-03 08:50:24'),
(5, 'youtube', 22, '2025-02-03 08:50:24');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `visit_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`id`, `ip_address`, `user_agent`, `visit_time`) VALUES
(1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-01-25 08:02:18'),
(2, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-01-26 03:28:09'),
(3, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-01-29 02:21:48'),
(4, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-01-30 05:59:10'),
(5, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-01-30 05:59:10'),
(6, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-02-03 08:16:43'),
(7, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36 Edg/132.0.0.0', '2025-02-03 08:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer_form_submissions`
--

CREATE TABLE `volunteer_form_submissions` (
  `volunteer_form_submission_id` int(11) NOT NULL,
  `complete_name` varchar(255) NOT NULL,
  `nick_name` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(11) NOT NULL,
  `current_address` varchar(255) NOT NULL,
  `occupation` varchar(200) NOT NULL,
  `affiliations` varchar(150) DEFAULT NULL,
  `facebook_link` varchar(255) NOT NULL,
  `date_available` date NOT NULL,
  `transportation` varchar(50) NOT NULL,
  `manila_pickup_place` varchar(255) DEFAULT NULL,
  `other_pickup_location` varchar(512) DEFAULT NULL,
  `allergies` varchar(512) DEFAULT NULL,
  `medical_conditions` varchar(512) DEFAULT NULL,
  `team` varchar(50) NOT NULL,
  `liwanag_at_dunong_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `goals_and_objectives_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `tasks_activities_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `transportation_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `itinerary_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `no_cancellation_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `transpo_contribution_agreement` tinyint(1) NOT NULL DEFAULT 1,
  `submitted_at` datetime DEFAULT current_timestamp(),
  `is_archived` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `volunteer_form_submissions`
--

INSERT INTO `volunteer_form_submissions` (`volunteer_form_submission_id`, `complete_name`, `nick_name`, `birthdate`, `email`, `contact_number`, `current_address`, `occupation`, `affiliations`, `facebook_link`, `date_available`, `transportation`, `manila_pickup_place`, `other_pickup_location`, `allergies`, `medical_conditions`, `team`, `liwanag_at_dunong_agreement`, `goals_and_objectives_agreement`, `tasks_activities_agreement`, `transportation_agreement`, `itinerary_agreement`, `no_cancellation_agreement`, `transpo_contribution_agreement`, `submitted_at`, `is_archived`) VALUES
(20, 'Angela Jean D. Arboleda', 'Angela', '2004-07-16', 'angelajean@gmail.com', '09143283476', 'Manila', 'Student', '', 'https://www.facebook.com/angela.jean', '2025-02-02', 'manila_van', 'laguna_area', '', '', '', 'team_manila', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 17:21:13', 0),
(21, 'Aron D. Arboleda', 'Aron', '2004-07-16', 'aronrez62@gmail.com', '09294674510', 'Capas, Tarlac', 'Student', '', 'https://www.facebook.com/arboleda.aron', '2025-02-09', 'tarlac_transpo', NULL, NULL, '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 17:45:16', 0),
(23, 'Alskdnalwndlasdn', 'sdawdasd', '2025-01-15', 'test@test.com', '09343423648', 'sdqdsdasdadsdad', 'Student', '', 'https://www.facebook.com/testtest', '2025-02-02', 'manila_van', 'others', 'Mindanao', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:05:18', 0),
(26, 'Hello', 'Hi', '2025-01-08', 'asldnkalwd@gmail.com', '09123456789', 'alsdnlaknwdklaw', 'Student', '', 'https://www.facebook.com/alskdnalsd', '2025-02-02', 'tarlac_transpo', NULL, NULL, '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:21:33', 0),
(27, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'tarlac_transpo', 'lawton', '', '', '', 'team_manila', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:24:02', 1),
(28, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'tarlac_transpo', 'lawton', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:26:17', 1),
(29, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'manila_van', 'others', 'Hello', '', '', 'team_manila', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:30:36', 0),
(30, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'manila_van', 'lawton', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:31:13', 0),
(31, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'manila_van', 'others', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:31:26', 0),
(32, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'manila_van', 'lawton', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:35:30', 0),
(33, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'tarlac_transpo', 'lawton', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:36:02', 0),
(34, 'Juan D. Dela Cruz', 'Juan', '1998-07-26', 'juandelacruz@gmail.com', '09123456789', 'Tarlac City', 'Student (BS Computer Science, 3rd Year, Tarlac University)', 'Tarlac Volunteer Group', 'https://www.facebook.com/juandelacruz', '2025-02-02', 'manila_van', 'laguna_area', '', '', '', 'team_tarlac', 1, 1, 1, 1, 1, 1, 1, '2025-01-29 18:36:22', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `page_views`
--
ALTER TABLE `page_views`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_platforms`
--
ALTER TABLE `social_platforms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volunteer_form_submissions`
--
ALTER TABLE `volunteer_form_submissions`
  ADD PRIMARY KEY (`volunteer_form_submission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `page_views`
--
ALTER TABLE `page_views`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=383;

--
-- AUTO_INCREMENT for table `social_platforms`
--
ALTER TABLE `social_platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `volunteer_form_submissions`
--
ALTER TABLE `volunteer_form_submissions`
  MODIFY `volunteer_form_submission_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
