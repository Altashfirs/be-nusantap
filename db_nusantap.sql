-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 23, 2025 at 01:04 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_nusantap`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_articles`
--

CREATE TABLE `blog_articles` (
  `article_id` int NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `content` longtext,
  `cover_image` varchar(255) DEFAULT NULL,
  `category` enum('news','article','blog') DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `author_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog_articles`
--

INSERT INTO `blog_articles` (`article_id`, `title`, `slug`, `content`, `cover_image`, `category`, `publish_date`, `author_id`, `created_at`, `updated_at`) VALUES
(1, 'Kegiatan Buka Bersama 2025 Sukses!', 'buka-bersama-2025', '<p>Kemarin kami berhasil menyalurkan 500 paket takjil...</p>', 'buka-bersama.jpg', 'news', '2025-11-01', 1, NULL, NULL),
(2, 'Tips Menyimpan Makanan Agar Tidak Mubazir', 'tips-makanan-tidak-mubazir', '<p>Berikut 7 tips dari tim Nusantap...</p>', 'tips.jpg', 'article', '2025-10-20', 2, NULL, NULL),
(3, 'Testimoni dari Penerima Donasi', 'testimoni-penerima', '<p>\"Alhamdulillah masih ada yang peduli...\" - Bu Aminah</p>', 'testimoni.jpg', 'blog', '2025-10-15', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `message_id` int NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `message` text,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`message_id`, `name`, `email`, `subject`, `message`, `is_read`, `created_at`) VALUES
(1, 'Doni', 'doni@gmail.com', 'Ingin Menjadi Relawan', 'Saya tertarik menjadi relawan pengantar makanan', 0, '2025-11-20 10:30:00'),
(2, 'PT Maju Jaya', 'hr@majujaya.co.id', 'Kerjasama CSR', 'Kami ingin bekerjasama untuk program donasi rutin', 0, '2025-11-19 14:15:00'),
(3, 'Siti Aisyah', 'siti.aisyah@yahoo.com', 'Laporan Donasi', 'Terima kasih sudah menyalurkan donasi saya kemarin', 1, '2025-11-18 09:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `donation_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `donor_name` varchar(150) DEFAULT NULL,
  `donor_email` varchar(150) DEFAULT NULL,
  `donor_phone` varchar(20) DEFAULT NULL,
  `donate_type` enum('food','funds') NOT NULL,
  `donation_detail` text,
  `delivery_method` enum('drop_off','pick_up','delivery_partner','none') DEFAULT 'none',
  `dedication` varchar(255) DEFAULT NULL,
  `status` enum('pending','processing','completed','failed') DEFAULT 'pending',
  `anonymous` tinyint(1) DEFAULT '0',
  `location_address` text,
  `preferred_time` varchar(100) DEFAULT NULL,
  `notes` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`donation_id`, `user_id`, `donor_name`, `donor_email`, `donor_phone`, `donate_type`, `donation_detail`, `delivery_method`, `dedication`, `status`, `anonymous`, `location_address`, `preferred_time`, `notes`, `created_at`, `updated_at`) VALUES
(1, 3, 'Budi Santoso', 'budi@gmail.com', '081111111111', 'food', 'Nasi kotak ayam goreng 50 pcs + air mineral', 'pick_up', 'Untuk anak yatim', 'completed', 0, 'Jl. Sudirman No.123, Jakarta', '2025-11-22 14:00', 'Sudah dikemas rapi', '2025-11-23 07:39:59', NULL),
(2, 4, 'Siti Nurhaliza', 'siti@yahoo.com', '082222222222', 'funds', NULL, 'none', 'Semoga bermanfaat', 'completed', 0, NULL, NULL, 'Transfer via BCA', '2025-11-23 07:39:59', NULL),
(3, NULL, 'Donatur Anonim', 'anonim@gmail.com', NULL, 'food', 'Kue-kue sisa acara ulang tahun 100 pcs', 'delivery_partner', NULL, 'processing', 1, 'Jl. Thamrin No.45, Jakarta', '2025-11-24 10:00', 'Masih fresh', '2025-11-23 07:39:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `donation_items`
--

CREATE TABLE `donation_items` (
  `item_id` int NOT NULL,
  `donation_id` int NOT NULL,
  `item_name` varchar(150) NOT NULL,
  `quantity` int DEFAULT NULL,
  `unit` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donation_items`
--

INSERT INTO `donation_items` (`item_id`, `donation_id`, `item_name`, `quantity`, `unit`) VALUES
(1, 1, 'Nasi Kotak Ayam Goreng', 50, 'pcs'),
(2, 1, 'Air Mineral', 50, 'botol'),
(3, 3, 'Donat', 60, 'pcs'),
(4, 3, 'Kue Tart Mini', 40, 'pcs');

-- --------------------------------------------------------

--
-- Table structure for table `event_programs`
--

CREATE TABLE `event_programs` (
  `program_id` int NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `event_programs`
--

INSERT INTO `event_programs` (`program_id`, `title`, `description`, `image`, `created_at`) VALUES
(1, 'Ramadhan Berbagi 2025', 'Pengumpulan dan penyaluran 10.000 paket makanan selama Ramadhan', 'ramadhan.jpg', NULL),
(2, 'Gerakan Indonesia Tanpa Kelaparan', 'Program tahunan distribusi makanan ke 12 kota', 'indonesia-tanpa-kelaparan.jpg', NULL),
(3, 'Cooking Class Anti-Mubazir', 'Kelas memasak sisa makanan jadi hidangan lezat', 'cooking-class.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `funds_transactions`
--

CREATE TABLE `funds_transactions` (
  `transaction_id` int NOT NULL,
  `donation_id` int NOT NULL,
  `amount` decimal(12,2) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` enum('pending','paid','failed') DEFAULT 'pending',
  `paid_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `funds_transactions`
--

INSERT INTO `funds_transactions` (`transaction_id`, `donation_id`, `amount`, `payment_method`, `payment_status`, `paid_at`) VALUES
(1, 2, 5000000.00, 'transfer_bca', 'paid', '2025-11-21 15:30:00'),
(2, 2, 2000000.00, 'gopay', 'paid', '2025-11-22 09:15:00');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `page_id` int NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `slug` varchar(200) DEFAULT NULL,
  `content` longtext,
  `banner_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`page_id`, `title`, `slug`, `content`, `banner_image`, `created_at`, `updated_at`) VALUES
(1, 'Tentang Kami', 'tentang-kami', '<p>Nusantap adalah lembaga nirlaba yang fokus pada pendistribusian makanan berlebih...</p>', 'banner-tentang.jpg', '2025-11-23 07:39:59', '2025-11-23 07:39:59'),
(2, 'Cara Berdonasi', 'cara-berdonasi', '<p>Ada 2 cara berdonasi: makanan atau dana...</p>', 'banner-donasi.jpg', '2025-11-23 07:39:59', '2025-11-23 07:39:59'),
(3, 'Hubungi Kami', 'hubungi-kami', '<p>Email: info@nusantap.org | WA: 081234567890</p>', NULL, '2025-11-23 07:39:59', '2025-11-23 07:39:59');

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `stat_id` int NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `value` int DEFAULT '0',
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `stats`
--

INSERT INTO `stats` (`stat_id`, `name`, `value`, `updated_at`) VALUES
(1, 'Total Donasi Makanan', 1240, NULL),
(2, 'Total Dana Terkumpul (Rp)', 48750000, NULL),
(3, 'Penerima Manfaat', 3200, NULL),
(4, 'Relawan Aktif', 87, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `testimonial_id` int NOT NULL,
  `donor_name` varchar(150) DEFAULT NULL,
  `donor_city` varchar(150) DEFAULT NULL,
  `message` text,
  `profile_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`testimonial_id`, `donor_name`, `donor_city`, `message`, `profile_image`, `created_at`) VALUES
(1, 'Ahmad Fauzi', 'Jakarta', 'Senang sekali bisa ikut berbagi lewat Nusantap. Prosesnya mudah dan transparan!', 'ahmad.jpg', NULL),
(2, 'PT. Sejahtera Abadi', 'Bandung', 'Kami rutin menyalurkan makanan karyawan setiap Jumat berkah. Terima kasih Nusantap!', NULL, NULL),
(3, 'Ibu Rina', 'Surabaya', 'Makanan dari donatur selalu sampai tepat waktu. Semoga berkah selalu!', 'rina.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `role` enum('admin','donor','staff') DEFAULT 'donor',
  `created_at` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `full_name`, `email`, `phone`, `password_hash`, `role`, `created_at`, `last_login`) VALUES
(1, 'Admin Nusa', 'admin@nusantap.org', '081234567890', '$2b$10$z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j', 'admin', '2025-11-23 07:39:58', NULL),
(2, 'Staff Andi', 'staff@nusantap.org', '081234567891', '$2b$10$z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j', 'staff', '2025-11-23 07:39:58', NULL),
(3, 'Budi Donor', 'budi@gmail.com', '081111111111', '$2b$10$z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j', 'donor', '2025-11-23 07:39:58', NULL),
(4, 'Siti Donor', 'siti@yahoo.com', '082222222222', '$2b$10$z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j9k9z8Y8j', 'donor', '2025-11-23 07:39:58', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_articles`
--
ALTER TABLE `blog_articles`
  ADD PRIMARY KEY (`article_id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`donation_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `donation_items`
--
ALTER TABLE `donation_items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `donation_id` (`donation_id`);

--
-- Indexes for table `event_programs`
--
ALTER TABLE `event_programs`
  ADD PRIMARY KEY (`program_id`);

--
-- Indexes for table `funds_transactions`
--
ALTER TABLE `funds_transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `donation_id` (`donation_id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`page_id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`);

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`stat_id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`testimonial_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_articles`
--
ALTER TABLE `blog_articles`
  MODIFY `article_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `message_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `donation_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `donation_items`
--
ALTER TABLE `donation_items`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `event_programs`
--
ALTER TABLE `event_programs`
  MODIFY `program_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `funds_transactions`
--
ALTER TABLE `funds_transactions`
  MODIFY `transaction_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `page_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `stat_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `testimonial_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_articles`
--
ALTER TABLE `blog_articles`
  ADD CONSTRAINT `blog_articles_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `donations`
--
ALTER TABLE `donations`
  ADD CONSTRAINT `donations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `donation_items`
--
ALTER TABLE `donation_items`
  ADD CONSTRAINT `donation_items_ibfk_1` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`donation_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `funds_transactions`
--
ALTER TABLE `funds_transactions`
  ADD CONSTRAINT `funds_transactions_ibfk_1` FOREIGN KEY (`donation_id`) REFERENCES `donations` (`donation_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
