-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2016 at 02:55 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phptestdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `grocery`
--

CREATE TABLE `grocery` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `section` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grocery`
--

INSERT INTO `grocery` (`id`, `name`, `price`, `section`) VALUES
(6, 'food coloring', '1.99', 'Baking'),
(7, 'pereg bread crumbs', '2.99', 'Baking'),
(8, 'osem soup croutons', '1.99', 'Cooking'),
(9, 'kedem ministroni soup', '1.29', 'Cooking'),
(10, 'gefen barley', '0.89', 'Cooking'),
(11, 'applenox apple sauce', '2.99', 'Cooking'),
(12, 'mishpacha elbo pasta', '1.09', 'Cooking'),
(13, 'gefen raspberry jelly', '0.99', 'Cooking'),
(14, 'solid white tuna', '1.49', 'Cooking'),
(15, 'smaking good potato knishes', '7.89', 'Freezer'),
(16, 'pamodora pizza', '7.99', 'Freezer'),
(17, 'bgan french fries', '3.99', 'Freezer'),
(18, 'kliens ice cream', '7.99', 'Freezer'),
(19, 'dr pragers fish sticks', '6.49', 'Freezer'),
(20, 'mehadrin cottage cheese', '3.99', 'Refridgerator'),
(21, 'normans yogurts', '0.49', 'Refridgerator'),
(22, 'pride of the farm milk', '1.99', 'Refridgerator'),
(23, 'sabra chumus', '2.39', 'Refridgerator'),
(24, 'golden flow orange juice', '2.49', 'Refridgerator'),
(25, 'shloimys chick peas', '1.99', 'Refridgerator'),
(26, 'extra large eggs', '0.79', 'Refridgerator'),
(27, 'corn flake crumbs', '2.39', 'Baking'),
(28, 'oatmeal', '3.99', 'Cooking'),
(30, 'cherrios', '3.39', 'Cooking'),
(33, 'domino sugar', '1.99', 'Baking'),
(34, 'kellogs corn flakes', '2.99', 'Cooking'),
(35, 'tanug corn flakes', '3.49', 'Cooking'),
(37, 'sesame seeds', '2.99', 'Baking'),
(39, 'poppy seeds', '1.00', 'Baking'),
(41, 'honey combs', '0.00', 'Baking'),
(43, 'french dressing', '1.75', 'Cooking'),
(44, 'mustard', '3.00', 'Cooking'),
(45, 'mishpacha ketchup', '4.99', 'Cooking'),
(46, '', '0.00', 'produce'),
(47, 'potatoes', '1.99', 'produce'),
(48, 'apples', '0.99', 'produce');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `id` int(11) NOT NULL,
  `user` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`id`, `user`, `password`) VALUES
(1, 'admin', '$2y$10$z5gHYTL1MVJ6fj.LvuCkR.QVlmIUlahHbWIh2YhPRzGvEw2QJbZNO');

-- --------------------------------------------------------

--
-- Table structure for table `shoes`
--

CREATE TABLE `shoes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `section` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shoes`
--

INSERT INTO `shoes` (`id`, `name`, `price`, `section`) VALUES
(1, '', '0.00', 'Mens'),
(3, 'rockport black shoes', '85.00', 'Mens'),
(4, 'echo brown shoe', '149.00', 'Mens'),
(5, 'echo black shoe', '129.00', 'Mens'),
(6, 'echo brown shoe', '149.00', 'Mens'),
(7, 'rebok black sneaker', '89.00', 'Mens'),
(8, 'nike white sneaker', '79.00', 'Mens'),
(9, 'jordans blue sneaker', '59.00', 'Mens'),
(10, 'black shoe', '69.00', 'Womens'),
(11, 'white shoe', '39.00', 'Womens'),
(12, 'blue shoe', '99.00', 'Womens'),
(13, 'navy shoe', '49.00', 'Womens'),
(14, 'gray shoe', '79.00', 'Womens'),
(15, 'black heels', '89.00', 'Womens'),
(16, 'blue heels', '79.00', 'Womens'),
(17, 'geox brown sneaker', '49.00', 'Boys'),
(18, 'rebok black sneaker', '29.00', 'Boys'),
(19, 'nike white sneaker', '79.00', 'Boys'),
(20, 'rockport brown shoe', '149.00', 'Boys'),
(21, 'florsheim black shoe', '129.00', 'Boys'),
(22, 'vaniteeni black shoe', '129.00', 'Boys'),
(28, 'black flat front shoes', '129.00', 'Mens'),
(31, '', '0.00', 'Girls'),
(32, 'black shoes', '45.49', 'Girls'),
(33, 'white shoes', '59.99', 'Girls'),
(34, 'blue shoes', '89.99', 'Girls'),
(35, 'brown sneakers', '59.99', 'Mens'),
(36, 'brown sneakers', '59.99', 'Mens'),
(45, 'green shoes', '12.99', 'Womens'),
(46, 'black wedges', '99.99', 'Womens'),
(47, 'black shoes with stiches', '99.99', 'Mens');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `grocery`
--
ALTER TABLE `grocery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoes`
--
ALTER TABLE `shoes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grocery`
--
ALTER TABLE `grocery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `shoes`
--
ALTER TABLE `shoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
